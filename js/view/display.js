var View = require('./view.js');

var DisplayContainerStage = require('../stages/display-container.js');
var MobileStage = require('../stages/display-mobile.js');

var Display = View.extend(function() {
	var that = this;
	var _lockTick;
	var _containerStage; 

	this.name = 'display';
	this.isInit = false;
	this.active = false;

	// stages
	this.mobileStages = {}; // {pro6: xx, mx6: xx} for cache
	this.currentMobileStage = []; 
	this.stages = [];

	// UI
	var _$domWrap = $('#displayView');
	var _$domManager = $('.display-manager');

	var _$windowWrap = $('#displayWindowWrap');
	var _$windowDoms = $();

	this.constructor = function() {
		_containerStage = new DisplayContainerStage();
		this.stages.push(_containerStage);
		this.super();
	}

	// data : {mobile: [pro5, mx6 ...]}
	this.activate = function(data) { 
		// check self init
		if (!this.isInit) {
			init();
			//_containerStage.init();
		}

		if (data) {
			var mobiles = $.extend(true, [], data.mobiles);
			this.currentMobileStage = [];
			mobiles.forEach(function(name, i) {
				if (!this.mobileStages[name]) {
					var mobileStage = new MobileStage(name);
					this.mobileStages[name] = mobileStage;
					this.currentMobileStage.push(mobileStage);
				}
			}.bind(this));
			if (!isLoad.bind(this)()) return;			
		}


		// all loaded 
		//_containerStage.entry();// containerStage

		var sizePos = calculateSubWindowSize(this.currentMobileStage.length);
		var x = 0;
		var entryCount = 0;

		this.currentMobileStage.forEach(function(mobileStage, i, all) {
			var meshPos = new THREE.Vector3(x + (i - (all.length/2)) * 100, 0, 0);
			mobileStage.entry(meshPos, sizePos[i]).then(function() {
				entryCount++;
				if (entryCount === all.length) {
					// todo entry animate done
				}
			});
		});

		// UI
		_$domWrap.removeClass('none');

		this.active = true;
	}

	this.inActivate = function() {
		Object.keys(this.scene).forEach(function(o) { M3.scene.remove(that.scene[o]);});
		this.removeTick(sphereTick);

		_$domWrap.addClass('none');
		this.activeWindows.forEach(function(activeWindow) {
			setTimeout(function() {activeWindow.inActivate();}, 0);
		});
		this.activeWindows.length = 0;

		_containerStage.leave();
		this.active = false;
	}

	this.resize = function() {
		//resetWindow();
	}

	function init() {
		var $lockBtn = _$domManager.find('.lock-btn');
		var $unlockBtn = _$domManager.find('.unlock-btn');
		var $backBtn = _$domManager.find('.back-btn');

		_$domManager.on('click', '.setting-btn', function() {
			_$domManager.addClass('show');
		});

		_$domManager.on('click', '.lock-btn', function() {
			$lockBtn.addClass('none')
			$unlockBtn.removeClass('none');
			_$domManager.removeClass('show');
			lock();
		});

		_$domManager.on('click', '.unlock-btn', function() {
			$unlockBtn.addClass('none')
			$lockBtn.removeClass('none');
			_$domManager.removeClass('show');
			unlock();
		});

		_$domManager.on('click', '.back-btn', function() {
			that.inActivate();
			that.activateView('product-preview');
			_$domManager.removeClass('show');
		});

		// windows
		_$domWrap.on('click', '.reset-btn', function() {
			var index = $(this).parent('.display-window').index();
			refreshWindow(index);
		});

		_$domWrap.on('click', '.close-btn', function() {
			var index = $(this).parent('.display-window').index();
			closeWindow(index);
		});

		_$domWrap.on('click', '.color', function() {
			var index = $(this).parent('.display-window').index();
			var color = $(this).data('color');
			that.currentMobileStage[index].changeColor(color);
			$(this).addClass('selected').silbings().removeClass('selected');
		});
	}

	function isLoad() {
		var loaded = true;
		var loadingInfos = {};

		function loading() {
			var totalSize = 0;
			var loadedSize = 0;
			var progress;
			var loadingInfo;

			for (var name in loadingInfos) {
				loadingInfo = loadingInfos[name];
				totalSize += loadingInfo.size;
				loadedSize += loadingInfo.progress * loadingInfo.size;
			}

			progress = loadedSize/totalSize;
			showProgress(progress);
			if (progress === 1) {
				// loaded 
				that.activate();
			}
		}

		for (var name in this.mobileStages) {
			// loading
			if (!this.mobileStages[name].isInit) {
				loaded = false;
				loadingInfos[name] = {
					size: this.mobileStages[name].size,
					progress: 0
				};
				(function(_name) { 
					this.mobileStages[_name].init(function(progress) {
						loadingInfos[_name].progress = progress;
						loading();
					}.bind(this)).then(function() {
						loadingInfos[_name].progress = 1;
						loading();
					}.bind(this)).catch(function(e) { console.error(e.stack); });
				}.bind(this))(name);
			}
		}
		return loaded;
	}

	function showProgress(progress) {
		console.log('display.js loading: ' + progress);
	} 

	function createWindowUI() {
		var windowTemplate = 
			'<div class="display-window">' + 
				'<div class="window-control">' + 
					'<i class="btn reset-btn icon ion-ios-reload"></i>' + 
					'<i class="btn close-btn icon ion-ios-close-empty"></i>' + 			
				'</div>' + 
				'<div class="colors-control"></div>' + 
			'</div>';
		var colorTemplate = '<i class="color @color" data-color="@color"></i>';
		var colorHTML = '';


		_$windowWrap.html('');

		this.currentMobileStages.forEach(function(mobileStage, i) {
			if (!_$windowDoms[i]) {
				_$windowDoms = _$windowDoms.add($(windowTemplate));
			}

			_$windowWrap.append(_$windowDoms.eq(i));

			colorHTML = '';
			Object.keys(_config.productData.model.textures).forEach(function(color) {
				colorHTML += colorTemplate.replace(/\@color/g, color);
			});
			_$windowDoms.eq(i).find('.colors-control').empty().html(colorHTML);
		});
	}

	// 模型恢复初始状态
	function resetWindow(index) {
		if (_lockTick) {
			that.currentMobileStage[index].reset();
		} else {
			that.currentMobileStage[0].reset();
		}
	}

	function closeWindow(index) {
		this.currentMobileStages[index].remove();
		this.currentMobileStages.splice(index, 1);

		// ui remove
		_$windowDoms.eq(index).remove();
		resizeWindows();
	}



	function resizeWindows() {
		var sizePos = calculateSubWindowSize(that.currentMobileStages.length);

		// ui resize
		_$windowDoms.each(function(i) { $(this).css(sizePos[i]); });

		// stage resize
		that.currentMobileStages.forEach(function(currentMobileStage, i) {
			currentMobileStage.resizeWindow(sizePos[i]);
		});
	}

	function lock() {
		that.currentMobileStage.forEach(function(mobileStage, i) {
			mobileStage.lock(i === 0);
		});

		_lockTick = that.addTick(function() {
			var sizeInfo = that.currentMobileStage[0].getSize();
			//console.log(sizeInfo);
			that.currentMobileStage.forEach(function(mobileStage, i) {
				if (i > 0) mobileStage.setSize(sizeInfo);
			});
		});
	}

	function unlock() {
		that.currentMobileStage.forEach(function(mobileStage, i) {
			mobileStage.unlock();
		});
		that.removeTick(_lockTick); lockTick = null;
	}


});

module.exports = Display;


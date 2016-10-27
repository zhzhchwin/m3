import Time from 'time.js';
import Stage from './stage.js';
import selectCfg from 'select-conf.js';

class Star extends Time {
	constructor(initCrood) {
		super();
		this.startLines = []; // 以此星星为起点的 Line
		this.endLines = []; // 以此星星为终点的 Line
		this.mesh;
		this.connectStars = []; 
		this.initCrood = initCrood;
		this.autoMoveTween;
	}

	init() {
		this.build();
		this.mesh.position.set(0, 0, 0);
		// this.mesh.scale.set(0, 0, 0);

		this.t = this.addTick(function() {
			// this.mesh.rotation.x += 0.02;
			this.mesh.rotation.y += 0.006;
			// this.mesh.rotation.z += 0.02;
		}.bind(this));

		let that = this;
	}

	build() {
		// create mesh
		var gemo = new THREE.SphereGeometry(10, 10, 10);
		gemo = new THREE.TetrahedronGeometry(15, 0);
		if (Math.random() > 0) {
			gemo = new THREE.BoxGeometry(15, 15, 15);
		}
		var material1 = new THREE.MeshBasicMaterial({color: 0x333333, wireframe: true});
		var material2 = THREE.CustomMaterial.glass.clone();
		// material1.opacity = 0.2
		// var material2 = new THREE.MeshPhongMaterial({color: 0xabcdef, transparent: true, opacity: 0.7});
		var mulMaterial = new THREE.MultiMaterial([/*material1, */material2]);
		var mesh = new THREE.Mesh(gemo, mulMaterial);
		
		var mesh = THREE.SceneUtils.createMultiMaterialObject(gemo, [/*material1, */material2]);


		mesh.rotation.set(Math.random(), Math.random(), Math.random());

		this.mesh = mesh;
	}

	setCrood(crood) {
		this.mesh.position.copy(crood);
		this.startLines.forEach(function(line) { line.setStart(crood); });
		this.endLines.forEach(function(line) { line.setEnd(crood); });
	}


	autoMove() {
		function move() {
			var newCrood = that.initCrood.clone().add(new THREE.Vector3(
				Math.random() * 20,
				Math.random() * 20,
				Math.random() * 20
			));
			that.moveTo(newCrood, move);
		}
		move();
	}

	moveTo(crood, callback) {
		autoMoveTween = this.addTHREEObjTween(this.mesh, {position: crood}, 2000 + Math.random() * 3000|0, {
			onUpdate: function() { 
				this.setCrood(this.mesh.position); 
			}.bind(this),
			onComplete: callback
		}).start();
	}
}

class ProductStar extends Star {
	constructor(crood, svgString) {
		super(crood);
		this.name;
		this.svgString = svgString;
	}

	init() {
		super.init();
		this.removeTick(this.t);
	}

	build() {
		super.build();
		var group = new THREE.Group();
		var svgGemo = new THREE.SVGGemetry(this.svgString, {});
		var material = new THREE.MeshBasicMaterial({color: 0x0cbbef});
		// var material = new THREE.MeshPhongMaterial({color: 0x0a4fdc});
		var mesh = new THREE.Mesh(svgGemo, material);
		mesh.scale.set(0.1, 0.1, 0.1 );
		this.svgMesh = mesh;

		group.add(mesh);
		group.add(this.mesh);
		this.mesh = group;
	}

	lightUp() {

	}
}

class Line extends Time {
	constructor(croodStart, croodEnd) {
		super();
		this.start = croodStart.clone();
		this.end = croodEnd.clone();

		this.init();
		this.setStart(croodStart);
		this.setEnd(croodEnd);
	}

	init() {
		var material = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.0});
		var gemo = new THREE.Geometry();
		gemo.vertices.push(
			this.start,
			this.end
		);
		var line = new THREE.Line(gemo, material);
		this.mesh = line;
		this.mesh.visible = false;
	}

	connect() {
		var random = Math.random()*2|0;
		var movePoint = ['start', 'end'][random];
		var staticPoint = ['start', 'end'][(random+1) % 2];
		var dest = this[movePoint].clone();
		
		this.mesh.visible = true;
		this[movePoint].copy(this[staticPoint]);
		this.addTHREEObjTween(this[movePoint], dest, 2000).start();
		this.addTHREEObjTween(this.mesh.material, {opacity: 0.2}, 2000).start();
	}

	setStart(crood) {
		this.start.copy(crood);
		this.mesh.geometry.verticesNeedUpdate = true;
	}
	setEnd(crood) {
		this.end.copy(crood);
		this.mesh.geometry.verticesNeedUpdate = true;
	}
}

class SelectStars extends Stage {
	constructor() {
		super();

		this.isInit = false;

		this._gridSize = 30;
		this._starCount = 60;
		this._rangeX = 20; // 边长
		this._rangeY = 10; // 边长
		this._rangeZ = 20; // 边长
		
		this._minDistant = this._gridSize * 3; // 两个点之间最小间隔
		this._maxConnectDistant = this._gridSize * 4; // 两个点的距离小于多少被连在一起

		this._stars = [];
		this._products;

	}
	init() {
		this._products = $.extend(true, [], selectCfg.products);
		this._build();
		this.isInit = true;
	}

	_build() {
		let that = this;
		let starCroods = [];
		let starCrood;
		let isValidCrood = false;
		let starGroup = new THREE.Group();
		
		let toBaseVec = new THREE.Vector3(
			-this._gridSize * this._rangeX / 2,
			-this._gridSize * this._rangeY / 2,
			-this._gridSize * this._rangeZ / 2
		);

		while(starCroods.length < this._starCount) {

			starCrood = new THREE.Vector3(
				parseInt(this._rangeX * Math.random()) * this._gridSize, 
				parseInt(this._rangeY * Math.random()) * this._gridSize, 
				parseInt(this._rangeZ * Math.random()) * this._gridSize
			);
			starCrood.add(toBaseVec);

			let hasConnect = false;
			let distantVec = new THREE.Vector3;
			let distant;
			isValidCrood = starCroods.every(function(crood) {
				distant = distantVec.subVectors(starCrood, crood).length();
				hasConnect = (hasConnect || distant < that._maxConnectDistant);
				return distant > that._minDistant;
			}) && hasConnect;

			if (!starCroods.length || isValidCrood) {
				starCroods.push(starCrood);
			}
		}

		// 在生成的 stars 点中，随机选择作为产品 star
		let productIndexes = new Set();
		while(productIndexes.size < this._products.length) {
			productIndexes.add((Math.random() * this._starCount)|0);
		}	
		// console.log(starCroods, productIndexes);
		let productCfgIndex = 0; // selectCfg.products 的 index
		starCroods.forEach(function(starCrood, index) {
			var star;
			if (productIndexes.has(index)) {
				star = new ProductStar(starCrood, that._products[productCfgIndex].svgString);
				star.init();
				star.name = that._products[productCfgIndex].name;
				that._products[productCfgIndex].star = star;
				productCfgIndex++;
			} else {
				star = new Star(starCrood); star.init();
			}
			star.setCrood(starCrood);
			that._stars.push(star);
			starGroup.add(star.mesh);
		});
		this.objects.starGroup = starGroup;

		// line
		let line;
		let lineGroup = new THREE.Group();
		this._stars.forEach(function(iStar, i) {
			that._stars.forEach(function(jStar, j) {
				if (
					i === j || 
					iStar.connectStars.indexOf(jStar) !== -1 && 
					jStar.connectStars.indexOf(iStar) !== -1 ||
					(new THREE.Vector3).subVectors(iStar.mesh.position, jStar.mesh.position).length() > that._maxConnectDistant
				) return;


				line = new Line(iStar.mesh.position, jStar.mesh.position);
				iStar.connectStars.push(jStar);
				jStar.connectStars.push(iStar);
				iStar.startLines.push(line);
				jStar.endLines.push(line);
				lineGroup.add(line.mesh);
			});
		});
		this.objects.lineGroup = lineGroup;
	}

	entry() {
		Object.keys(this.objects).forEach(function(o) { M3.scene.add(this.objects[o]);}.bind(this));
		this.camera.position.set(0, 0, 500);
		this.camera.lookAt(new THREE.Vector3);

		this._controls = new THREE.TrackballControls(this.camera, M3.renderer.domElement);
		this._controls.staticMoving = true;
		this._t = this.addTick(function(delta) {
			this._controls.update(delta);
		});

		// particle rise
	
		// particle explode & stars fly to initCrood

		// line connect

		// control travel

	}
}

export default SelectStars;






import View from './view.js';

class ProgressView extends View {

	constructor() {
		super();

		this._$progressWrap = document.querySelector('#progressView');
		this._$progressVal = document.querySelector('#progressVal');
		this._$water = document.querySelector('.water');
		this._$waterDivs = this._$water.querySelectorAll('div');
		this.setProgress(0);
	}

	activate() { 
		this._$progressWrap.style.display = 'block';
	}

	inactivate() {
		setTimeout(function() {
			this._$progressWrap.style.display = 'none';
		}.bind(this), 1000);
	}

	setProgress(percent) {
		var initColor = [246, 11, 55];
		var finalColor = [16, 121, 125];
		var opacity = 0.3;
		var currentColor;

		currentColor = finalColor.map(function(colorVal, i) {
			return initColor[i] + (colorVal - initColor[i]) * percent|0;
		});

		this._$waterDivs.forEach(function($waterDiv) {
			$waterDiv.style.backgroundColor = 'rgba(' + currentColor.join(',') + ',' + opacity + ')';
		});

		this._$progressVal.innerHTML = (percent*100 | 0) + '%';
		percent *= 0.999;
		this._$water.style.transform = 'scaleY(' + percent.toFixed(2) + ')';
	}
}

export default ProgressView;
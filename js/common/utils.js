// t: current time, b: begInnIng value, c: change In value, d: duration
window.easing= {
	def: 'easeOutQuad',
	swing: function (t, b, c, d) {
		//alert(easing.default);
		return easing[easing.def](x, t, b, c, d);
	},
	easeInQuad: function (t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (t, b, c, d) {
		return c - easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (t, b, c, d) {
		if (t < d/2) return easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
};

window.calculateSubWindowSize = (function() {
	var r13 = 1/3;
	var r23 = 2/3;

	var windowSizes = {
		'strip': [
			[{ left: 0, top: 0, width: 1, height: 1}],

			[{ left: 0, top: 0, width: 1, height: 0.5},
			 { left: 0, top: 0.5, width: 1, height: 0.5}],

			[{ left: 0, top: 0, width: 1, height: r13},
			 { left: 0, top: r13, width: 1, height: r13},
			 { left: 0, top: r23, width: 1, height: r13}],
			
			[{ left: 0, top: 0, width: 1, height: 0.25},
			 { left: 0, top: 0.25, width: 1, height: 0.25},
			 { left: 0, top: 0.5, width: 1, height: 0.25},
			 { left: 0, top: 0.75, width: 1, height: 0.25}],
		], 
		'square': [
			[{ left: 0, top: 0, width: 1, height: 1}],

			[{ left: 0, top: 0, width: 0.5, height: 1},
			 { left: 0.5, top: 0, width: 0.5, height: 1}],

			[{ left: 0, top: 0, width: 0.5, height: 1},
			 { left: 0.5, top: 0,width: 0.5, height: 0.5},
			 { left: 0.5, top: 0.5,width: 0.5, height: 0.5}],
			
			[{ left: 0, top: 0, width: 0.5, height: 0.5},
			 { left: 0.5, top: 0,width: 0.5, height: 0.5},
			 { left: 0, top: 0.5,width: 0.5, height: 0.5},
			 { left: 0.5, top: 0.5,width: 0.5, height: 0.5}]
		],
		'flat': [
			[{ left: 0, top: 0, width: 1, height: 1}],

			[{ left: 0, top: 0, width: 0.5, height: 1},
			 { left: 0.5, top: 0, width: 0.5, height: 1}],

			[{ left: 0, top: 0, width: r13, height: 1},
			 { left: r13, top: 0, width: r13, height: 1},
			 { left: r23, top: 0, width: r13, height: 1}],
			
			[{ left: 0, top: 0, width: 0.25, height: 1},
			 { left: 0.25, top: 0, width: 0.25, height: 1},
			 { left: 0.5, top: 0, width: 0.25, height: 1},
			 { left: 0.75, top: 0, width: 0.25, height: 1}],
		]
	};

	return function (windowNum) {
		var sizes = [];
		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;

		var ratio = winWidth/winHeight;
		var windowType = 'square';

		if ( (windowNum===2&&ratio<1) ||
			 (windowNum===3&&ratio<0.75) ||
			 (windowNum===4&&ratio<0.4)
			) {
			windowType = 'strip';
		} else if ( (windowNum===2&&ratio>1) ||
		 (windowNum===3&&ratio>1.25) ||
		 (windowNum===4&&ratio>1.6)
		) {
			windowType = 'flat';
		}
		
		return windowSizes[windowType][windowNum-1];
	}
})();


THREE.THREEUtil = {

	getLookAt: function (mesh) {
		var lookAt = new THREE.Vector3(0, 0, -1);
		var euler = new THREE.Euler( 0, 0, 0, 'XYZ' )

		euler.copy(mesh.rotation);

		lookAt.applyEuler(euler);
		lookAt.add(mesh.position);
		return lookAt;
	}
}


// custom material

THREE.GlowMaterial = (function() {
	var defaults = {
		c: 0.35,
		p: 5,
		color: new THREE.Color,
		v: new THREE.Vector3,
		transparent: true,
		side: THREE.FrontSide
	};	
	var vertexShaderCode = document.getElementById('glowVertexShader').textContent;
	var fragmentShaderCode = document.getElementById('glowFragmentShader').textContent;

	return function(options) {
		options = $.extend({}, defaults, options);
		return new THREE.ShaderMaterial({
		    uniforms: {
		        "c": { type: "f", value: options.c },
		        "p": { type: "f", value: options.p },
		        glowColor: { type: "c", value: options.color },
		        viewVector: { type: "v3", value: options.v }
		    },
		    vertexShader: vertexShaderCode,
		    fragmentShader: fragmentShaderCode,
		    side: options.side,
		    blending: THREE.AdditiveBlending,
		    transparent: options.transparent
		});
	}


})();






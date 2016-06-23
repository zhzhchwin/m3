var CONFIG = {
	meizulogo: './assets/logo.png',
	products: [
		{
			'name': 'pro6',
			'imgUrl': './assets/pro6/phone-silver.jpg',
			'modelUrl': './assets/pro6/pro6.dae',
			'title': 'PRO 6',
			'desc' : 'PRO 6 was produced in 2016'
		}
	]
};

// test 
var products = ['mx5', 'pro5', 'pro6', 'm2', 'm2note', 'm3', 'm3note', 'm3s', 'router', 'm8', 'm10', 'mx4', 'mx4pro'];
var _products = [];

products.forEach(function(product, i) {
	_products[i] = {
		'name': product,
		'imgUrl': './assets/pro6/phone-silver.jpg',
		'modelUrl': './assets/pro6/pro6.dae',
		'title': 'PRO 6',
		'desc' : 'PRO 6 was produced in 2016'
	}
});
CONFIG.products = _products;


module.exports = CONFIG;
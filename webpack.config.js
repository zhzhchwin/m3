var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 模型 json 文件作为入口，异步加载
function getModelEntrys() {
    var base = 'assets/mobiles/';
    var products = fs.readdirSync(base);
    var entrys = {};

    
    products.forEach(function(product) {
        if (/^[^\.]/.test(product))
        entrys[product] = base + product + '/' + product + '.js';
    });
    return entrys;
}
var entrys = {};
// var entrys = getModelEntrys();
entrys.main = './js/main.js';
entrys.presets = './js/presets.js';


module.exports = {
    entry: entrys,
    output: {
        'filename': '[name].js',
        'path': './build'
    },
    resolve: {
        root: process.cwd(),
        modulesDirectories: ['./', 'node_modules', './js/libs', './js/common', './js/config']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /css\/m3\.scss$/, loader: ExtractTextPlugin.extract(['css', 'sass']) },
            { test: /assets.*?\.(png|jpeg|jpg)$/, loaders: ['file?name=[path][name].[ext]'] },

            { test: /assets.*?\.json$/, loaders: ['json'] },
            { test: /assets.*?\.js$/, loaders: ['file?name=[path][name].[ext]','tojson'] },
            {
                test: /js.*?\.js$/,
                exclude: /node_modules/,
                loader: 'babel', 
                query: { presets: ['es2015'] }
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            // $: "jquery",
            // jQuery: "jquery",
            // "window.$": "jquery",
            CONFIG: 'config',
            Util: 'util'
        }),
        new ExtractTextPlugin("common.css")
    ],

    devServer: {
        'content-base': '/',
        'inline': true,
        'host': '0.0.0.0',
        'port': 9123
    }
}

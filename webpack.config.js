// create by angela on 2017/10/26
'use strict';
var webpack = require('webpack');
//默认把所有入口节点的公共代码提取出来，生成一个common.js
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('comon.js');


# react-to-do-list
一、环境搭建
#####1、需要软件：python、node
#####2、构建项目
    在控制台中输入`npm init`，创建一个package.json文件，这个文件类似于pom.xml,用来描述需要的依赖库
#####3、安装需要的依赖库

>npm install webpack webpack-dev-server babel --save-dev
npm install react react-dom babel-loader less-loader css-loader style-loader url-loader file-loader babel-preset-es2015 babel-preset-react react-hot-loader jquery eslint eslint-plugin-react --save-dev

>--save-dev 会把下载包的相关信息写到package.json的devDependencies里面方便以后发布，其他人使用的时候只需要npm install就可以把相关的依赖下载到当前的项目里面。
在package.json里面包的版本之前的^表示可以安装类似2.x.x版本的组件但是不能安装3.x.x版本的软件
在package.json里面包的版本之前的~表示可以安装2.1.x的软件不能安装2.3.x的软件

4、新建一个webpack.config.js的文件，在文件中添加如下信息
```
/**
 * Created by Diablo on 16/7/16.
 */
'use strict';
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
         './src/js/entry.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        commonsPlugin
    ],

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,

            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        root:'',
        extensions: ['', '.js', '.json', '.less']
    }
};

```
5、



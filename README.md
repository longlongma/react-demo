# react-to-do-list
一、环境搭建
1、需要软件：python、node
2、构建项目
    在控制台中输入`npm init`，创建一个package.json文件，这个文件类似于pom.xml,用来描述需要的依赖库
3、安装需要的依赖库

>npm install webpack webpack-dev-server babel --save-dev
npm install react react-dom babel-loader less-loader css-loader style-loader url-loader file-loader babel-preset-es2015 babel-preset-react react-hot-loader jquery eslint eslint-plugin-react --save-dev

>--save-dev 会把下载包的相关信息写到package.json的devDependencies里面方便以后发布，其他人使用的时候只需要npm install就可以把相关的依赖下载到当前的项目里面。
在package.json里面包的版本之前的^表示可以安装类似2.x.x版本的组件但是不能安装3.x.x版本的软件
在package.json里面包的版本之前的~表示可以安装2.1.x的软件不能安装2.3.x的软件


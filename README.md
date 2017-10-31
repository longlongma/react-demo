# react-to-do-list
一、环境搭建
#####1、需要软件：python、node
#####2、构建项目 package.json文件
    在控制台中输入`npm init`，创建一个package.json文件，这个是文件是一个标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务，这个文件类似于pom.xml。

#####3、安装需要的依赖库
安装webpack

```
//全局安装webpack，优点是打包时可以直接输webpack命令
npm install -g webpack
//在本项目中安装webpack，--save-dev的意思是将依赖写入项目的package.json文件
npm install --save-dev webpack

```
>--save-dev 会把下载包的相关信息写到package.json的devDependencies里面方便以后发布，其他人使用的时候只需要npm install就可以把相关的依赖下载到当前的项目里面。
在package.json里面包的版本之前的^表示可以安装类似2.x.x版本的组件但是不能安装3.x.x版本的软件
在package.json里面包的版本之前的~表示可以安装2.1.x的软件不能安装2.3.x的软件

```
//package.json
{
  "name": "react_demo1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {//默认的test直接删除即可
    "start": "webpack"//配置的地方就是这里，相当于把npm的start命令指向webpack命令；注意：实际代码中这里不能加注释，否则会报错
  },
  "author": "waka",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^1.13.2"
  }
}
```

>注：package.json中的脚本部分已经默认在命令前添加了node_modules/.bin
路径，所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了。






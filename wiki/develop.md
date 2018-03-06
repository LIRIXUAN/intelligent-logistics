# 准备好开始开发了！

## 1、基本概念

* __Ionic__ 是一个轻量的手机UI库，具有速度快，界面现代化、美观等特点。比起原生开发，使用Ionic框架开发的应用可以同时兼容iOS，Android，Windows Phone平台，为开发过程节约了大量的时间。
* __Flask__ 是一个使用 Python 编写的轻量级 Web 应用框架。Flask也被称为 “microframework” ，因为它使用简单的核心，用 extension 增加其他功能，简单易学。
* __MVC模式__（Model-View-Controller）是软件工程中的一种软件架构模式，把软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller）。使用MVC应用程序被分成三个核心部件：模型、视图、控制器。它们各自处理自己的任务。

## 2、前端部分

* 请先了解Node.JS,JavaScript,CSS的基本的使用方法。
* 请了解TypeScript与JavaScript的异同、Sass与CSS的异同。
* 建议了解VSCode编辑器的基本使用方法。
* 学习Git的使用
* 请参阅Ionic的官方文档 [Ionic Doc](https://ionicframework.com/docs/) 学习Ionic框架的组件及API的使用

## 3、后端部分

* 学习Python，建议学习 Python3
* 了解Python2 的 \_\_future\_\_ 库，以及Python2和Python3的区别，以便使程序兼容Python2。(注：大部分的应用引擎，如百度应用引擎BAE，新浪应用引擎SAE，都只支持Python2。可以使用 docker 容器来使其支持Python3，但会增加额外的费用)
* 学习Flask框架，以及RESTful api的搭建和基本介绍
* 学习SQL语言和一种数据库(sqlite 或 mysql)
* 了解Python WSGI 程序的基本原理，和 WSGI 程序在 Apache 或 Nginx 服务器上的部署
* 了解应用引擎 app.conf 的编写

## 4、开始开发

```shell
git clone https://gitee.com/James-Murray/Intelligent-Logistics.git
cd intelligent-logistics
npm install -g ionic cordova
npm install     # 安装 nodejs 依赖

py index.py     # 启动本地服务器
ionic serve --no-open -port 8080 --consolelogs  # 进行实时编译
ionic build -prod                               # 进行优化编译
```

## 5、调试技巧

* 请使用chrome浏览器进行调试，按下 __[F12]__ 打开调试界面，在右上角的菜单中选择 __[more tools]__ ，选择 __[network conditions]__ ，勾选  __[disable cache]__  来关闭浏览器缓存。
* 需要发布项目？ 在index.html中加入提示信息，可以在载入界面时避免长时间的白屏。
* 使用 ionic build -prod 进行优化编译，加快运行速度，简短加载时间
* 如果使用 ionic serve 运行程序，由于存在跨域访问问题，api不能正常工作。可以在chrome中安装跨域访问的插件，也可直接运行 py index.py 启动 flask 的本地调试服务器进行调试。 
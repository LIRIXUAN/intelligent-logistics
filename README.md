# Intelligent Logistics System

This is a traffic command system ,with Ionic as GUI and Flask as the back-end server. The system is mainly used for intelligent logistics in hospitals.

* Github link: <https://github.com/JamesMurrayBIT/intelligent-logistics.git>  
* Live demo : <http://playground.zzthbj.com>

# 智能物流系统

这是一个智能物流控制系统，使用Ionic作为前端框架，Flask作为后端服务器。该系统主要用于医院物流系统自动化。Ionic是一个轻量的手机UI库，具有速度快，界面现代化、美观等特点。比起原生开发，使用Ionic框架开发的应用可以同时兼容iOS，Android，Windows平台，为开发过程节约了大量的时间。

* Github 地址: <https://github.com/JamesMurrayBIT/intelligent-logistics.git>  
* 演示地址 : <http://playground.zzthbj.com>

## 运行截图

## 主要工作

* 通过ionic框架和TypeScript的开发，实现物流系统运行中需要的场景和操作，所有数据都通过AXAJ动态加载。主要功能包括用户登录，session管理，用户权限管理，个人信息修改，设备的状态查询与操作，数据库管理，服务器管理等。
* 界面能适应不同分辨率的屏幕，并优化了在电脑上操作的使用体验。
* 后台使用Python开发，同时能兼容Python3和Python2，不用修改程序即可在BAE或本地运行。
* 使用Sqlite数据库，并对数据库操作进行了封装，易于更换数据库。

## 如何运行

对于Windows用户：安装 Python(2 or 3) , Git(可选TortoiseGit) , VSCode。后在某个空目录点击右键，选择[GIT Bash Here]然后输入下面的指令

> * git clone <https://github.com/JamesMurrayBIT/intelligent-logistics.git>
> * cd intelligent-logistics
> * pip install -r requirements.txt
> * py index.py

浏览器访问 localhost 即可看到效果

## 4.需要学习哪些相关技术？

### 前端部分

* 请先了解Node.JS,JavaScript,CSS的基本的使用方法。
* 请了解TypeScript与JavaScript的异同、Sass与CSS的异同。
* 建议了解VSCode编辑器的基本使用方法。
* 学习Git的使用
* 请参阅Ionic的官方文档<https://ionicframework.com/docs/>学习Ionic框架的组件及API的使用

### 后端部分

* 学习Python，建议学习 Python3
* 了解Python2 的 __future__ 库，已经Python2和Python3的区别，以便使程序兼容Python2
* 注：大部分的应用引擎，如百度应用引擎BAE，新浪应用引擎SAE，都只支持Python2
* 学习Flask框架
* 学习SQL语言和一种数据库(sqlite 或 mysql)
* 了解Python WSGI 程序的大致原理，和 WSGI 程序在 Apache 或 Nginx 服务器上的部署

## 准备好开始开发了！

* ionic 2.0版本以上 依赖 nodejs ，请安装nodejs

> npm install # 安装 nodejs 依赖
> py index.py # 启动本地服务器
> ionic serve --no-open -port 8080 --consolelogs # 进行实时编译
> ionic build -prod #进行优化编译，加快运行速度，简短加载时间

* 调试技巧：
* 请使用chrome浏览器进行调试，按下[F12]打开调试界面，在右上角的菜单中选择[more tools] ，选择[network conditions]，勾选 [disable cache] 来关闭浏览器缓存。
* 需要发布项目？ 在index.html中加入提示信息，可以在载入界面时避免长时间的白屏。
* 如果使用 ionic serve 运行程序，由于存在跨域访问问题，api不能正常工作。可以在chrome中安装跨域访问的插件，也可直接运行 py index.py 启动 flask 的本地调试服务器进行调试。 

## 7.前端功能介绍

### * 登录界面

### * 主菜单

### * 设备管理

### * 物流管理

### * 收发包裹

### * 个人信息管理

### * 数据库管理

### * 服务器信息


## 后台功能介绍

### * Flask RESTful api介绍

### * Flask 错误处理

### * session 管理

### * 数据库封装

---------

## 开发者

* 姜牧云(jmy9605@163.com) at PEMC BIT

# Intelligent Logistics System

This is a traffic command system, which uses Ionic as web interface framework ,Flask as the back-end RESTful api server framework. The system is mainly used for intelligent logistics in hospitals.

* **Github link**: <https://github.com/JamesMurrayBIT/intelligent-logistics.git>  
* **Live demo** : <http://playground.zzthbj.com>

# 智能物流系统

这是一个智能物流控制系统，使用Ionic作为前端web用户界面框架，Flask作为后端RESTful api服务器。该系统主要用于医院物流系统自动化。

* **Github 地址**: <https://github.com/JamesMurrayBIT/intelligent-logistics.git>  
* **演示地址** : <http://playground.zzthbj.com>

## 部分运行截图

更多运行截图在文档最后

![](https://github.com/JamesMurrayBIT/intelligent-logistics/raw/master/img_readme/face.jpg")


## 主要工作

* 通过ionic框架和TypeScript的开发，实现物流系统运行中需要的场景和操作，所有数据都通过AXAJ动态加载。主要功能包括用户登录，session管理，用户权限管理，个人信息修改，设备的状态查询与操作，数据库管理，服务器管理等。
* 界面能适应不同分辨率的屏幕，并优化了在电脑上操作的使用体验。
* 后台使用Python开发了RESTful api接口。程序同时兼容Python3和Python2，自动识别运行环境(BAE或本地)。
* 使用Sqlite数据库，并对数据库操作进行了封装，易于更换数据库。

## 如何运行

对于Windows用户，需要安装下面的软件
* Python(2 or 3) <https://www.python.org/downloads/windows/>
* Git <https://git-scm.com/downloads>
* Tortoise Git  <https://tortoisegit.org/download/> (可选)
* Visual Studio Code <https://code.visualstudio.com/> (可选)
* Node.js  <https://nodejs.org/en/> (可选)

在某个空目录点击右键，选择[GIT Bash Here]然后输入下面的指令

* git clone <https://github.com/JamesMurrayBIT/intelligent-logistics.git>
* cd intelligent-logistics
* pip install -r requirements.txt
* py index.py

浏览器访问 <http://127.0.0.1> 即可看到效果

## 需要学习哪些相关技术？

### 前端部分

* 请先了解Node.JS,JavaScript,CSS的基本的使用方法。
* 请了解TypeScript与JavaScript的异同、Sass与CSS的异同。
* 建议了解VSCode编辑器的基本使用方法。
* 学习Git的使用
* 请参阅Ionic的官方文档<https://ionicframework.com/docs/>学习Ionic框架的组件及API的使用

### 后端部分

* 学习Python，建议学习 Python3
* 了解Python2 的 \_\_future\_\_ 库，以及Python2和Python3的区别，以便使程序兼容Python2。(注：大部分的应用引擎，如百度应用引擎BAE，新浪应用引擎SAE，都只支持Python2。可以使用 docker 容器来使其支持Python3，但会增加额外的费用)
* 学习Flask框架，以及RESTful api的搭建和基本介绍
* 学习SQL语言和一种数据库(sqlite 或 mysql)
* 了解Python WSGI 程序的基本原理，和 WSGI 程序在 Apache 或 Nginx 服务器上的部署
* 了解应用引擎 app.conf 的编写

## 准备好开始开发了！

> **Ionic**是一个轻量的手机UI库，具有速度快，界面现代化、美观等特点。比起原生开发，使用Ionic框架开发的应用可以同时兼容iOS，Android，Windows Phone平台，为开发过程节约了大量的时间。

> **Flask**是一个使用 Python 编写的轻量级 Web 应用框架。Flask也被称为 “microframework” ，因为它使用简单的核心，用 extension 增加其他功能，简单易学。

> **MVC模式**（Model-View-Controller）是软件工程中的一种软件架构模式，把软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller）。使用MVC应用程序被分成三个核心部件：模型、视图、控制器。它们各自处理自己的任务。

* git clone <https://github.com/JamesMurrayBIT/intelligent-logistics.git>
* cd intelligent-logistics
* npm install     # 安装 nodejs 依赖
* py index.py     # 启动本地服务器
* ionic serve --no-open -port 8080 --consolelogs  # 进行实时编译
* ionic build -prod                               # 进行优化编译

* __调试技巧__：
* 请使用chrome浏览器进行调试，按下[F12]打开调试界面，在右上角的菜单中选择__[more tools]__ ，选择**[network conditions]**，勾选 **[disable cache]** 来关闭浏览器缓存。
* 需要发布项目？ 在index.html中加入提示信息，可以在载入界面时避免长时间的白屏。
* 使用 ionic build -prod 进行优化编译，加快运行速度，简短加载时间
* 如果使用 ionic serve 运行程序，由于存在跨域访问问题，api不能正常工作。可以在chrome中安装跨域访问的插件，也可直接运行 py index.py 启动 flask 的本地调试服务器进行调试。 

## 功能介绍

### 登录界面
* **API设计**：/api/login/<username>/<password>
* 注：密码未加密，注意SQL注入问题

* __首次登陆__：用户第一次访问时，Flask会给用户分配一个session，使用cookies加密后储存在用户的电脑中。可以设置一个cookies过期时间，使用户长时间不操作后自动重新登录。
* __请求过程__：用户点击登录按钮后，网页会使用AXAJ调用API发送登录请求，后台会查询数据库确认用户名密码。若密码正确，后台获取用户的真实姓名(REAL_NAME)和用户组(USER_GROUP)储存在session中。请求过程是异步进行的。在等待服务器响应的过程中，网页会显示一个Loading窗口，服务器返回结果后隐藏这个窗口，并根据服务器返回的信息进行窗口跳转或显示信息。
* __数据库设计__：用户信息储存在数据库 USER_INFO 表中。主键为自增的ID；USERNAME：用户名，只允许大小写字母和数字，PASSWORD，未加密的密码；REAL_NAME：用户真实姓名；USER_GROUP：用户组,SAVE_PW：是否保存密码,LOGIN_COUNTER：登录次数计数器,FAIL_COUNTER：密码错误次数计数器。登录界面没有设置验证码，可以通过设置密码错误次数计数器上限来避免暴力破解密码。
* __用户组设计__：系统将用户分成4个用户组，医护人员，管理人员，工程人员，超级用户。不同用户的权限不同，能看到的信息和能修改的信息也不同。
* __数据结构__：服务器返回一个json对象，包括state,data,msg 3个key，state只可为 'FAIL' 'SUCC' 两个值。若操作成功，data为服务器响应的参数，msg为提示信息。若操作失败，data为详细的错误原因，msg为错误原因。
* __SQL注入防范__：接收到username password 后，使用re.sub，进行过滤，只留下A-Z a-z 0-9 之内的字符，防止SQL注入
* __跨域访问__：通过 ionic serve 或者 ionic run 命令使用或 live reload 或者访问过外部 API 结点，会遇到 CORS=Cross origin resource sharing(跨域资源共享) 问题。在这个项目开发中，我们使用Flaks提供的调试服务器来同时提供网页文件和api响应，避免了跨域问题。
* __HTTP请求__：为了高效处理HTTP请求，web端使用TypeScript开发了一个服务器json响应处理类，文件位于/src/network/HttpService.ts，内部使用了 AngularJS 的 http 请求类。
* __未登录跳转__：若用户长时间未操作，或在未登录的情况下手动输入浏览器地址访问页面。由于username不在session中，服务器认为用户为登录，会返回{name:'FAIL',data: 'LOGIN', msg:"未登录"}的寄送数据，浏览器接收到状态为 FAIL 且 data 为 LOGIN 的数据包后，就会自动跳转到登录界面。

### 主菜单
* API设计
* /api/data/main_menu
* 
* 数据库设计
* 响应式设计
* 
权限设计
* 数据绑定
* 循环显示
### 设备管理
* API设计
* 数据库设计
* 页面转换
* 顶层分类器
* 搜索功能
### 物流管理
* API设计
* 数据库设计
### 收发包裹
* API设计
* 扫描识别(暂缓实现)
### 个人信息管理
* API设计
* 数据库设计
### 数据库管理
* API设计
* 表格显示
* 数据库编辑
### 服务器控制
* API设计
* 信息种类
* 服务器控制(暂缓实现)
---------

## 更多截图
<div align=center>
<h3>大屏设备显示效果</h3>
<img src="https://github.com/JamesMurrayBIT/intelligent-logistics/raw/master/img_readme/main_menu_wide.jpg"/>
</div>

<div align=center>
<h3>登录界面</h3>
<img src="https://github.com/JamesMurrayBIT/intelligent-logistics/raw/master/img_readme/login_ios.jpg"/></div>

<div align=center>
<h3>数据库管理</h3>
<img src="https://github.com/JamesMurrayBIT/intelligent-logistics/raw/master/img_readme/db_manage.jpg"/></div>

<div align=center>
<h3>不同设备界面对比</p>
<img style="width:33%" src="https://github.com/JamesMurrayBIT/intelligent-logistics/raw/master/img_readme/change_pw_android.jpg"/>
<img style="width:33%" src="https://github.com/JamesMurrayBIT/intelligent-logistics/raw/master/img_readme/change_pw_ios.jpg"/>
<img style="width:33%" src="https://github.com/JamesMurrayBIT/intelligent-logistics/raw/master/img_readme/change_pw_wp.jpg"/></div>

## 开发者

* 姜牧云(jmy9605@163.com) at PEMC BIT

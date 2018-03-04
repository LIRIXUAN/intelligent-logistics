# Intelligent Logistics System

What you are looking at is a traffic command system, which uses Ionic as web interface framework ,Flask as the back-end RESTful api server framework. The system is mainly used for intelligent logistics in hospitals.

* __Github link__: <https://github.com/JamesMurrayBIT/intelligent-logistics.git>  
* __Live demo__ : <http://playground.zzthbj.com>

# 智能物流系统

这是一个智能物流控制系统，使用Ionic作为前端web用户界面框架，Flask作为后端RESTful api服务器。该系统主要用于医院物流系统自动化。

* __Github 地址__ : <https://github.com/JamesMurrayBIT/intelligent-logistics.git>  
* __演示地址__  : <http://playground.zzthbj.com>

## 主要工作

* 通过ionic框架和TypeScript的开发，实现物流系统运行中需要的场景和操作，所有数据都通过AXAJ动态加载。主要功能包括用户登录，session管理，用户权限管理，个人信息修改，设备的状态查询与操作，数据库管理，服务器管理等。
* 界面能适应不同分辨率的屏幕，并优化了在电脑上操作的使用体验。
* 后台使用Python开发了RESTful api接口。程序同时兼容Python3和Python2，自动识别运行环境(BAE或本地)。
* 使用Sqlite数据库，并对数据库操作进行了封装，易于更换数据库。

## 部分运行截图

更多运行截图在文档最后

<img src="https://github.com/JamesMurrayBIT/intelligent-logistics/raw/master/img_readme/face.jpg"/>


## 更新记录

2018/3/3 - James Murray
* 增加登录页面判断是否已登录
* 增加session过期设置
* 增加api：/api/data/check 

2018/3/4 - James Murray
* 增加了处理SQL注入的操作，任何输入都只能是只包括0-9,a-Z,A-Z,以及-_的字符串

## 如何运行

对于Windows用户，需要安装下面的软件
* Python(2 or 3) <https://www.python.org/downloads/windows/>
* Git <https://git-scm.com/downloads>
* Tortoise Git  <https://tortoisegit.org/download/> (可选)
* Visual Studio Code <https://code.visualstudio.com/> (可选)
* Node.js  <https://nodejs.org/en/> (可选)

在某个空目录点击右键，选择[GIT Bash Here]然后输入下面的指令

```shell
git clone https://github.com/JamesMurrayBIT/intelligent-logistics.git
cd intelligent-logistics
pip install -r requirements.txt
py index.py
```

浏览器访问 <http://127.0.0.1> 即可看到效果


## 准备好开始开发了！

### 基本概念

> __Ionic__ 是一个轻量的手机UI库，具有速度快，界面现代化、美观等特点。比起原生开发，使用Ionic框架开发的应用可以同时兼容iOS，Android，Windows Phone平台，为开发过程节约了大量的时间。

> __Flask__ 是一个使用 Python 编写的轻量级 Web 应用框架。Flask也被称为 “microframework” ，因为它使用简单的核心，用 extension 增加其他功能，简单易学。

> __MVC模式__（Model-View-Controller）是软件工程中的一种软件架构模式，把软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller）。使用MVC应用程序被分成三个核心部件：模型、视图、控制器。它们各自处理自己的任务。

### 前端部分

* 请先了解Node.JS,JavaScript,CSS的基本的使用方法。
* 请了解TypeScript与JavaScript的异同、Sass与CSS的异同。
* 建议了解VSCode编辑器的基本使用方法。
* 学习Git的使用
* 请参阅Ionic的官方文档 [Ionic Doc](https://ionicframework.com/docs/) 学习Ionic框架的组件及API的使用

### 后端部分

* 学习Python，建议学习 Python3
* 了解Python2 的 \_\_future\_\_ 库，以及Python2和Python3的区别，以便使程序兼容Python2。(注：大部分的应用引擎，如百度应用引擎BAE，新浪应用引擎SAE，都只支持Python2。可以使用 docker 容器来使其支持Python3，但会增加额外的费用)
* 学习Flask框架，以及RESTful api的搭建和基本介绍
* 学习SQL语言和一种数据库(sqlite 或 mysql)
* 了解Python WSGI 程序的基本原理，和 WSGI 程序在 Apache 或 Nginx 服务器上的部署
* 了解应用引擎 app.conf 的编写

### 开始开发

```shell
git clone https://github.com/JamesMurrayBIT/intelligent-logistics.git
cd intelligent-logistics
npm install -g ionic cordova
npm install     # 安装 nodejs 依赖

py index.py     # 启动本地服务器
ionic serve --no-open -port 8080 --consolelogs  # 进行实时编译
ionic build -prod                               # 进行优化编译
```

### 调试技巧
* 请使用chrome浏览器进行调试，按下 __[F12]__ 打开调试界面，在右上角的菜单中选择 __[more tools]__ ，选择 __[network conditions]__ ，勾选  __[disable cache]__  来关闭浏览器缓存。
* 需要发布项目？ 在index.html中加入提示信息，可以在载入界面时避免长时间的白屏。
* 使用 ionic build -prod 进行优化编译，加快运行速度，简短加载时间
* 如果使用 ionic serve 运行程序，由于存在跨域访问问题，api不能正常工作。可以在chrome中安装跨域访问的插件，也可直接运行 py index.py 启动 flask 的本地调试服务器进行调试。 

## 功能介绍

### 登录界面

* __API设计__：/api/login/[username]/[password]
* __首次登陆__：用户第一次访问时，Flask会给用户分配一个session，使用cookies加密后储存在用户的电脑中。可以设置一个cookies过期时间，使用户长时间不操作后自动重新登录。
* __请求过程__：用户点击登录按钮后，网页会使用AXAJ调用API发送登录请求，后台会查询数据库确认用户名密码。若密码正确，后台获取用户的真实姓名(REAL_NAME)和用户组(USER_GROUP)储存在session中。请求过程是异步进行的。在等待服务器响应的过程中，网页会显示一个Loading窗口，服务器返回结果后隐藏这个窗口，并根据服务器返回的信息进行窗口跳转或显示信息。
* __数据库设计__：用户信息储存在数据库 USER_INFO 表中。主键为自增的ID；USERNAME：用户名，只允许大小写字母和数字，PASSWORD，未加密的密码；REAL_NAME：用户真实姓名；USER_GROUP：用户组,SAVE_PW：是否保存密码,LOGIN_COUNTER：登录次数计数器,FAIL_COUNTER：密码错误次数计数器。登录界面没有设置验证码，可以通过设置密码错误次数计数器上限来避免暴力破解密码。
* __用户组设计__：系统将用户分成4个用户组，医护人员(DOC)，管理人员(MEN)，工程人员(ENG)，超级用户(SU)。不同用户的权限不同，能看到的信息和能修改的信息也不同。
* __数据结构__：若用户请求的信息无误，服务器会返回一个json对象，包括state,data,msg 3个key、state只可取 'FAIL' 'SUCC' 两个值，代表这次操作的结果。若操作成功，data为服务器响应的参数，msg为提示信息。若操作失败，data为详细的错误原因，msg为错误原因。
* __SQL注入防范__：【密码未加密】由于服务器会接受用户的输入，就必须考虑别有用心着通过构造特殊的输入来改变SQL语句的功能，造成破坏。因此，目前的做法师，在服务器接收到username,password，以及其他输入后，使用Python正则表达式re库中sub命令：re.sub('[^a-zA-Z0-9-_]','',kind)，进行过滤，留下只包括A-Z a-z 0-9 _-的字符字符串，防止SQL注入。
* __跨域访问__：通过 ionic serve 或者 ionic run 命令使用或 live reload 或者访问过外部 API 结点，会遇到 CORS=Cross origin resource sharing(跨域资源共享) 问题。在这个项目开发中，我们使用Flaks提供的调试服务器来同时提供网页文件和api响应，避免了跨域问题。
* __HTTP请求__：为了高效处理HTTP请求，web端使用TypeScript开发了一个服务器json响应处理类，文件位于/src/network/HttpService.ts，内部使用了 AngularJS 的 http 请求类。
* __未登录跳转__：若用户长时间未操作，或在未登录的情况下手动输入浏览器地址访问页面。这种情况可能是用户关闭了浏览器，下次打开时，某些浏览器会尝试刷新页面。由于cookies已经过期，username不在session中，服务器认为用户没有登录，会返回 {name:'FAIL',data: 'LOGIN', msg:"未登录"} 的json数据。浏览器接收到 state 为 'FAIL' 且 data 为 'LOGIN' 的数据包后，就会自动跳转到登录界面。

### 主菜单

* __API设计__：/api/data/main_menu
* __数据库设计__：主菜单的数据储存在数据库 MAIN_MENU_INFO 表中。ID：自增的主键为；TITLE：菜单名称；TARGET：点击菜单调整的页面；SUBTITLE：子菜单名字；COLOR：菜单显示的颜色；ICON：菜单图标；AUTHORITY：这一个菜单项对于的用户组
* __响应式设计__：由于希望使用一个APP来兼容所有设备，Ionic框架对移动设备兼容较好，但是对大屏幕的计算机兼容性不太好。所有主菜单使用响应式网格进行设计，菜单大小疏密会根据屏幕大小自适应，使得使用计算机的操作人员也能获得相对较好的使用体验
* __权限设计__：不同用户组的用户，登录系统后看到的主菜单是不同的。即使用户手动输入地址进入不属于自己权限的菜单，也不能使用相应的功能。【暂缓实现】
* __循环显示__：由于首页数据是通过AXAJ动态加载的，数量和重量都不固定，因为不能将首页内容预先设计好。在前端开发中，使用AngularJS中的 ngFor 循环来实现视图的显示。通过，*ngFor="let item of MAIN_MENU" 进行循环，通过{{ item.XXX }}的方法来获得参数值。
* __CSS颜色__：由于ionic提供的颜色不能满足要求，我们自定义了一些全局颜色，储存在\src\theme\variables.scss：$colors 变量中，可以根据需要使用或增减颜色。
* __CSS元素定位__：由于主菜单使用的是block样式的button，因此文字，图标的定位需要手动实现。因此在CSS中将 button-title和，button-subtitle类的定位设置为绝对定位，将文字居中，通过top属性的不同来实现文本的定位。
* __CSS字体大小__：由于字体大小由于屏幕大小的不同，不能设定成以px为单位的绝对大小。使用 em 和 rem 单位可以让我们的设计更加灵活，能够控制元素整体放大缩小，而不是固定大小。 当使用 rem 单位，他们转化为像素大小取决于页根元素的字体大小，即 html 元素的字体大小。 根元素字体大小乘以你 rem 值。著作权

### 设备管理
                                    
* __API设计__：/api/data/sensor
* __数据库设计__：主菜单的数据储存在数据库 SENSOR_INFO 表中。ID：自增的主键为；STATUS：为传感器的状态，有可以使正常，故障、离线；CAUSE：如果传感器故障，这个值就代表故障原因；DETAIL：传感器的详细信息，如安装位置，接线编号等；COLOR：状态显示的颜色；IMG_SRC：传感器缩略图的路径。
* __页面设计__：点击列表中传感器信息时，会打开传感器的详细信息。传感器的详细信息界面，没有再使用AXAJ请求获取数据，而是通过页面的push方法，同时传输了传感器详细信息的数据。页面顶端存在一个分类器，可以选择显示所有的信息和只显示故障的信息。故障信息的列表是在网页端通过遍历所有传感器列表得到的。如果选择所有传感器页面，页面顶端会有一个搜索条。可以对传感器的名字进行匹配，这个搜索条的实现也是通过JavaScript在浏览器中实现的。

### 物流管理

* __API设计__：/api/data/transport
* __数据库设计__：主菜单的数据储存在数据库 SENSOR_INFO 表中。ID：自增的主键为；STATUS：为传感器的状态，有可以使正常，故障、离线；CAUSE：如果传感器故障，这个值就代表故障原因；DETAIL：传感器的详细信息，如安装位置，接线编号等；COLOR：状态显示的颜色；IMG_SRC：传感器缩略图的路径。

### 收发包裹

* __API设计__：/api/data/transmit
* 扫描识别【暂缓实现】

### 个人信息管理

* __API设计__：/api/data/user
* __信息显示__：直接读取储存在session中的用户信息来实现

### 数据库管理

* __API设计__：/api/data/db-[selected]  比如/api/data/db-user
* __表格显示__：ionic中的表格不能简单时候用HTML中的table，而需要使用ionic的响应式网格系统。ion-grid 通过ion-row ion-col来显示行列，通过col-* , col-*-*的形式来适应不同的屏幕大小。由于网格默认是不带边框和背景颜色的的，所以需要修改CSS文件来使得ionic网格具有边框，使表格的首行具有一个背景。
* __数据库编辑__：【暂缓实现】

### 服务器信息与控制

* __API设计__：/api/data/server
* __信息种类__：通过这个接口，可以获取服务器的硬件和部分软件信息。如服务器的CPU，操作系统情况，和使用的Python版本等信息。
* 服务器控制【暂缓实现】
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

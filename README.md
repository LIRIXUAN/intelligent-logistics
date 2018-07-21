# 概览

这是一个智能物流控制系统，使用Ionic作为前端web用户界面框架，Flask作为后端RESTful api服务器。本系统主要用于医院物流系统自动化。

- 根据实验室规定，源代码已经从这个仓库中移除。
- 如果您需要项目的源代码，请联系<jmy9605@163.com>。

## 主要工作

* 前端使用ionic开发，实现物流系统运行中需要的场景和操作，所有数据都通过AXAJ动态加载。主要功能包括用户登录，session管理，用户权限管理，个人信息修改，设备的状态查询与操作，数据库管理，服务器管理等。
* 后台使用flask开发了RESTful api接口
* 使用flask_sqlalchemy对数据库进行ORM封装操作
* 使用flask_admin实现了后台管理系统
* 使用flask_login实现了用户登录和用户权限管理

## 项目地址

* __Github__ : <https://github.com/JamesMY/intelligent-logistics.git> 
* __Gitee-Private__ ：<https://gitee.com/James-Murray/PEMC_Private>

# Intelligent Logistics System

This project is a traffic command system, which uses Ionic as web interface framework ,Flask as the back-end RESTful api server framework. The system is mainly used for intelligent logistics in hospitals.

- Source code is removed from this repository due to Lab Regulations.
- If you need the code, please contect <jmy9605@163.com> .

# Get started

### Software Requirements

- Python
- Git
- node.js

### Build and Run

* Clone this repository

```shell
git clone https://gitee.com/James-Murray/Intelligent-Logistics.git
cd intelligent-logistics
```
* Install dependencies for python and node.js

```shell
pip install -r requirements.txt
npm install -g ionic # install cordova if you want to test on real devices   
npm i  # install node_modules 
```
* Build ionic

```shell
ionic serve --no-open -port 8080 --consolelogs  # live build
ionic build -prod                               # production build
```
* Start a new server at localhost

```shell
python index.py --host 0.0.0.0 --port 80 --debug
```
* Visit <http://127.0.0.1> to see the demo

# Documents

System releted
* [Screen Shots](https://gitee.com/James-Murray/Intelligent-Logistics/blob/master/wiki/screenshots.md)
* [System Detail](https://gitee.com/James-Murray/Intelligent-Logistics/blob/master/wiki/detail.md)
* [API Document](https://gitee.com/James-Murray/Intelligent-Logistics/blob/master/wiki/api.md)

Development releted
* [Develop Guide](https://gitee.com/James-Murray/Intelligent-Logistics/blob/master/wiki/develop.md)
* [Development Plan](https://gitee.com/James-Murray/Intelligent-Logistics/blob/master/wiki/plan.md)
* [Update Log](https://gitee.com/James-Murray/Intelligent-Logistics/blob/master/wiki/update.md)

# Developers

* 姜牧云(jmy9605@163.com) at PEMC BIT
* 郝颖 at PEMC BIT
* 怀娜娜 at PEMC BIT
* 杨鑫 at PEMC BIT
* 江倩 at PEMC BIT
* 曹晓东 at PEMC BIT


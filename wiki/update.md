# Update Log

2018/3/6 - James Murray
* 为了加快访问速度，将GIT仓库移动到了码云
* 开始学习flask-admin插件，为系统增加后台管理功能

2018/3/5 - James Murray
* 增加了数据库处理中的Insert操作，并规范了数据库操作的返回值。

2018/3/4 - James Murray
* 增加了处理SQL注入的操作，任何输入都只能是只包括0-9,a-Z,A-Z,以及-_的字符串。

2018/3/3 - James Murray
* 增加登录页面判断是否已登录
* 增加session过期设置
* 增加api：/api/data/check 
from flask import Flask
from flask_admin import Admin, BaseView, expose
from flask_admin.contrib.fileadmin import FileAdmin


class MyView(BaseView):
    @expose('/')
    def index(self):
        return self.render('index.html')


app = Flask(__name__)

admin = Admin(app,name='管理后台')
admin.add_view(MyView(name='Hello 1', endpoint='test1', category='Test'))
admin.add_view(MyView(name='Hello 2', endpoint='test2', category='Test'))
admin.add_view(MyView(name='Hello 3', endpoint='test3', category='Test'))


admin.add_view(FileAdmin('..', '/static/', name='Server Files'))

app.run(host='0.0.0.0', port=80, threaded=True, debug=True)

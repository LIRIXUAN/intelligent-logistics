#-*- coding:utf-8 -*-
import server.Server
import os
import sys

app = server.Server.Get_App()
if(os.getcwd().startswith("/home/bae")):
    from bae.core.wsgi import WSGIApplication
    application = WSGIApplication(app)
else:
    app.run(host='0.0.0.0', port=80, threaded=True, debug=True)

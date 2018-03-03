#-*- coding:utf-8 -*-
from __future__ import print_function
import Get_App
import os
import platform
import sys

print("python_version: {0}".format(platform.python_version()))
app=server.Server.Get_App()
if(os.getcwd().startswith("/home/bae")):
    from bae.core.wsgi import WSGIApplication
    application=WSGIApplication(app)
else:
    app.run(host='0.0.0.0', port=80, threaded=True, debug=True)
    

#-*- coding:utf-8 -*-
from __future__ import print_function
import time
import os
import sys
import traceback
import sqlite3
import re
from collections import OrderedDict

class DB_Sqlite:
    def __init__(self, DB_Name):
        self.DataBase_Name = DB_Name

    def run_cmd(self, SQL):
        try:
            conn = sqlite3.connect(self.DataBase_Name)
            result = conn.execute(SQL).fetchall()
            conn.commit()
            conn.close()
            return True, result
        except:
            return False, traceback.format_exc()

    def Select(self, Table_Name, Selected_Keys,Extra_Sql=''):
        cols = ""
        for x in Selected_Keys:
            cols += x + ","
        cols = cols[:-1]
        sql = "SELECT {0} FROM {1} {2}".format(cols, Table_Name,Extra_Sql)
        #print(sql)
        state, raw = self.run_cmd(sql)

        if(state == False):
            return state,raw

        result = []
        for row in raw:
            row_dict = {}
            for index in range(0, len(row)):
                row_dict[Selected_Keys[index]] = row[index]
            result.append(row_dict)
        return True,result

    def Create_Table(self, Table_Name, Key_Data):
        sql = "SELECT COUNT(*) FROM sqlite_master where type='table' and name='{0}'".format(
            Table_Name)
        state, result = self.run_cmd(sql)
        if(state == False):
            print(result)
            return result

        if(result[0][0] != 0):
            print('[{0}] Table Exists'.format(Table_Name))
            sql = "DROP TABLE {0}".format(Table_Name)
            state, result = self.run_cmd(sql)

            if(state):
                print('[{0}] DROP TABLE Success'.format(Table_Name))
            else:
                print('[{0}] DROP TABLE Fail'.format(Table_Name))
                print(result)
                return result
        else:
            print('[{0}] Table not exists'.format(Table_Name))

        Table_Data = ""
        for x in Key_Data:
            Table_Data += "   {0},\n".format(x)
        Table_Data = Table_Data[:-2]  # remove , and \n from end of the str

        sql = "CREATE TABLE {0}( \n{1});".format(Table_Name, Table_Data)
        state, result = self.run_cmd(sql)
        if(state):
            print('[{0}] Create Table Sucess'.format(Table_Name))
        else:
            print('{0} Create Table Fail', Table_Name)
            print(sql)
            print(result)

    def Insert(self, Table_Name, Key_Data):
        Part1 = ""
        Part2 = ""
        for x in Key_Data:
            Part1 += "{0},".format(x)
            if(isinstance(Key_Data[x], str)):
                Part2 += '"{0}",'.format(Key_Data[x])
            elif(isinstance(Key_Data[x], int)):
                Part2 += '{0},'.format(Key_Data[x])
            else:
                print("[{0} {1}] unknown type".format(x, Key_Data[x]))
        Part1 = Part1[:-1]
        Part2 = Part2[:-1]
        sql = "INSERT INTO {0} ({1}) VALUES ({2});".format(
            Table_Name, Part1, Part2)
        state, result = self.run_cmd(sql)
        if(state):
            print("[{0}] Insert Done".format(Table_Name))
        else:
            print("[{0}] Insert Error".format(Table_Name))
            print(result)


if __name__ == '__main__':
    db = DB_Sqlite('SYSTEM.DB')

    db.Create_Table('USER_INFO', ['ID INTEGER PRIMARY KEY AUTOINCREMENT',
                                  'USERNAME TEXT NOT NULL',
                                  'PASSWORD TEXT NOT NULL',
                                  'REAL_NAME TEXT NOT NULL',
                                  'USER_GROUP TEXT NOT NULL',
                                  'SAVE_PW INT NOT NULL',
                                  'LOGIN_COUNTER INT NOT NULL',
                                  'FAIL_COUNTER INT NOT NULL'])

    db.Create_Table('MAIN_MENU_INFO', ['ID INTEGER PRIMARY KEY AUTOINCREMENT',
                                       'TITLE TEXT NOT NULL',
                                       'TARGET TEXT NOT NULL',
                                       'SUBTITLE TEXT NOT NULL',
                                       'COLOR TEXT NOT NULL',
                                       'ICON TEXT NOT NULL',
                                       'AUTHORITY TEXT NOT NULL'])

    db.Create_Table('SENSOR_INFO', ['ID INTEGER PRIMARY KEY AUTOINCREMENT',
                                    'NAME TEXT NOT NULL',
                                    'STATUS TEXT NOT NULL',
                                    'CAUSE TEXT NOT NULL',
                                    'DETAIL TEXT NOT NULL',
                                    'IMG_SRC TEXT NOT NULL',
                                    'COLOR TEXT NOT NULL'])

    db.Create_Table('TRANSPORT_INFO', ['ID INTEGER PRIMARY KEY AUTOINCREMENT',
                                       'NAME TEXT NOT NULL',
                                       'STATUS TEXT NOT NULL',
                                       'CAUSE TEXT NOT NULL',
                                       'DETAIL TEXT NOT NULL',
                                       'IMG_SRC TEXT NOT NULL',
                                       'COLOR TEXT NOT NULL'])

    db.Insert('USER_INFO', {'USERNAME': "user1", 'PASSWORD': "test",
                            'REAL_NAME': "张欣阳", 'USER_GROUP': "DOC", 'SAVE_PW': 1, 'LOGIN_COUNTER': 2, 'FAIL_COUNTER': 3})
    db.Insert('USER_INFO', {'USERNAME': "user2", 'PASSWORD': "test",
                            'REAL_NAME': "高晨浩", 'USER_GROUP': "MEN", 'SAVE_PW': 1, 'LOGIN_COUNTER': 2, 'FAIL_COUNTER': 3})
    db.Insert('USER_INFO', {'USERNAME': "user3", 'PASSWORD': "test",
                            'REAL_NAME': "谢慧妍", 'USER_GROUP': "ENG", 'SAVE_PW': 1, 'LOGIN_COUNTER': 2, 'FAIL_COUNTER': 3})
    db.Insert('USER_INFO', {'USERNAME': "su", 'PASSWORD': "test",
                            'REAL_NAME': "超级用户", 'USER_GROUP': "SU", 'SAVE_PW': 1, 'LOGIN_COUNTER': 2, 'FAIL_COUNTER': 3})

    db.Insert('MAIN_MENU_INFO', {'TARGET': 'StatusPage', 'TITLE': '设备状态',
                                 'SUBTITLE': "AGV及传感器状态", 'COLOR': "mycolor1", 'ICON': "medkit", 'AUTHORITY': 'ALL'})
    db.Insert('MAIN_MENU_INFO', {'TARGET': 'TansportPage', 'TITLE': '物流状态',
                                 'SUBTITLE': "物流传输状态", 'COLOR': "mycolor2", 'ICON': "stats", 'AUTHORITY': 'ALL'})
    db.Insert('MAIN_MENU_INFO', {'TARGET': 'TansmitPage', 'TITLE': '收发物品',
                                 'SUBTITLE': "确认接收或发送物品", 'COLOR': "mycolor3", 'ICON': "medical", 'AUTHORITY': 'ALL'})
    db.Insert('MAIN_MENU_INFO', {'TARGET': 'ControlPage', 'TITLE': '系统控制',
                                 'SUBTITLE': "AGV及物流控制", 'COLOR': "mycolor4", 'ICON': "construct", 'AUTHORITY': 'ALL'})
    db.Insert('MAIN_MENU_INFO', {'TARGET': 'UserPage', 'TITLE': '我',
                                 'SUBTITLE': "用户信息管理", 'COLOR': "mycolor5", 'ICON': "person", 'AUTHORITY': 'ALL'})
    db.Insert('MAIN_MENU_INFO', {'TARGET': 'SettingsPage', 'TITLE': '设置',
                                 'SUBTITLE': "系统设置", 'COLOR': "mycolor6", 'ICON': "hammer", 'AUTHORITY': 'ALL'})
    db.Insert('MAIN_MENU_INFO', {'TARGET': 'DocumentPage', 'TITLE': '文档&帮助',
                                 'SUBTITLE': "系统介绍，操作指南", 'COLOR': "mycolor1", 'ICON': "document", 'AUTHORITY': 'ALL'})
    db.Insert('MAIN_MENU_INFO',
              {'TARGET': 'DbManagerPage', 'TITLE': '数据库管理', 'SUBTITLE': "仅限工程人员使用。", 'COLOR': "mycolor2", 'ICON': "analytics", 'AUTHORITY': 'ALL'})
    db.Insert('MAIN_MENU_INFO',
              {'TARGET': 'ServerManagerPage', 'TITLE': '服务器管理', 'SUBTITLE': "仅限工程人员使用", 'COLOR': "mycolor3", 'ICON': "outlet", 'AUTHORITY': 'ALL'})

    db.Insert('SENSOR_INFO', {'NAME': 'AGV1', 'IMG_SRC': "/assets/imgs/agv.png",
                              'STATUS': '故障', 'COLOR': "danger", 'CAUSE': "右轮堵转，已切断动力电源", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'AGV2', 'IMG_SRC': "/assets/imgs/agv.png",
                              'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'AGV3', 'IMG_SRC': "/assets/imgs/agv.png",
                              'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'AGV4', 'IMG_SRC': "/assets/imgs/agv.png",
                              'STATUS': '离线', 'COLOR': "dark", 'CAUSE': "通讯错误，根据规则停止", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'AGV5', 'IMG_SRC': "/assets/imgs/agv.png",
                              'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})

    db.Insert('SENSOR_INFO', {'NAME': 'RFID1', 'IMG_SRC': "/assets/imgs/rfid.png",
                              'STATUS': '故障', 'COLOR': "danger", 'CAUSE': "数据错误", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'RFID2', 'IMG_SRC': "/assets/imgs/rfid.png",
                              'STATUS': '离线', 'COLOR': "dark", 'CAUSE': "通讯错误，根据规则停止", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'RFID3', 'IMG_SRC': "/assets/imgs/rfid.png",
                              'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'RFID4', 'IMG_SRC': "/assets/imgs/rfid.png",
                              'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'RFID5', 'IMG_SRC': "/assets/imgs/rfid.png",
                              'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'RFID6', 'IMG_SRC': "/assets/imgs/rfid.png",
                              'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})

    db.Insert('SENSOR_INFO', {'NAME': 'BarCode1', 'IMG_SRC': "/assets/imgs/barcode.png",
                              'STATUS': '故障', 'COLOR': "danger", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'BarCode2', 'IMG_SRC': "/assets/imgs/barcode.png",
                              'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'BarCode3', 'IMG_SRC': "/assets/imgs/barcode.png",
                              'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})
    db.Insert('SENSOR_INFO', {'NAME': 'BarCode3', 'IMG_SRC': "/assets/imgs/barcode.png",
                              'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX"})

    db.Insert('TRANSPORT_INFO', {'NAME': 'Pack1', 'IMG_SRC': "/assets/imgs/Package_add.png",
                                 'STATUS': '故障', 'COLOR': "primary", 'CAUSE': "右轮堵转，已切断动力电源", 'DETAIL': "这个节点位于XXXX，安装线路编号XX，型号：XX"})
    db.Insert('TRANSPORT_INFO', {'NAME': 'Pack2', 'IMG_SRC': "/assets/imgs/Package_delete.png",
                                 'STATUS': '正常', 'COLOR': "danger", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX，安装线路编号XX，型号：XX"})
    db.Insert('TRANSPORT_INFO', {'NAME': 'Pack3', 'IMG_SRC': "/assets/imgs/Package_download.png",
                                 'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX，安装线路编号XX，型号：XX"})
    db.Insert('TRANSPORT_INFO', {'NAME': 'Pack4', 'IMG_SRC': "/assets/imgs/Package_upload.png",
                                 'STATUS': '离线', 'COLOR': "dark", 'CAUSE': "通讯错误，根据规则停止", 'DETAIL': "这个节点位于XXXX，安装线路编号XX，型号：XX"})
    db.Insert('TRANSPORT_INFO', {'NAME': 'Pack5', 'IMG_SRC': "/assets/imgs/Package_warning.png",
                                 'STATUS': '正常', 'COLOR': "secondary", 'CAUSE': "", 'DETAIL': "这个节点位于XXXX，安装线路编号XX，型号：XX"})

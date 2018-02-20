import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, ActionSheetController, ToastController, LoadingController, AlertController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { StatusPage } from '../status/status';
import { ControlPage } from '../control/control';
import { UserPage } from '../user/user';
import { TansportPage } from '../tansport/tansport';
import { TansmitPage } from '../tansmit/tansmit';
import { DbManagerPage } from '../db-manager/db-manager';
import { ServerManagerPage } from '../server-manager/server-manager';
import { DocumentPage } from '../document/document';
import { HttpService } from '../../network/HttpService';

@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public http: HttpService,
    public actionsheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }
  MAIN_MENU = [{}];

  Update() {
    var api_url = "/api/data/main_menu"
    let loader = this.loadingCtrl.create({ content: "获取数据中，请稍后...", });
    loader.present();

    this.http.get(api_url).subscribe(result => {
      loader.dismiss();
      if (result.state == 'SUCC') {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
        this.MAIN_MENU = result.data
      } else {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
        if (result.data == 'LOGIN') { this.navCtrl.setRoot('LoginPage') }
      }
      console.log(result.msg);

    }, error => {
      loader.dismiss();
      this.toastCtrl.create({ message: "网络错误，联系管理员解决", position: 'top', duration: 2000, }).present();
    });
  }

  ionViewDidLoad() {
    this.Update();
  }

  Open_View(item: any) {
    console.log(item.TARGET)
    this.navCtrl.push(item.TARGET);
  }

  Pop_Alert() {
    let confirm = this.alertCtrl.create({
      title: '确认退出',
      message: '您确实要退出系统吗?',
      buttons: [{
        text: '否',
        handler: () => { console.log('Disagree clicked'); }
      },
      {
        text: '是的',
        handler: () => { this.Logout() }
      }
      ]
    });
    confirm.present();
  }

  Logout() {
    var api_url = "/api/data/logout"
    let loader = this.loadingCtrl.create({ content: "正在登出，请稍后...", });
    loader.present();

    this.http.get(api_url).subscribe(result => {
      loader.dismiss();
      if (result.state == 'SUCC') {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
        this.navCtrl.setRoot('LoginPage')
      } else {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
      }
      console.log(result.msg);

    }, error => {
      loader.dismiss();
      this.toastCtrl.create({ message: "网络错误，登出失败...", position: 'top', duration: 2000, }).present();
    });

  }
  Open_Menu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: '其他操作',
      cssClass: 'action-sheets-basic-page',
      buttons: [{
        text: '退出登录',
        icon: !this.platform.is('ios') ? 'trash' : null,
        handler: () => {
          this.Pop_Alert()
        }
      }]
    });
    actionSheet.present();
  }

  Open_Guide() {
    let alert = this.alertCtrl.create({
      title: '帮助',
      subTitle: "这是系统管理得首页。首页内容会根据用户组的权限不同，展示不同的内容。",
      buttons: ['OK']
    });
    alert.present();
  }
}


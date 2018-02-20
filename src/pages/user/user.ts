import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { HttpService } from '../../network/HttpService';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: HttpService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, ) {
  }

  user_info = { USERNAME: 'USER', REAL_NAME: 'Place Holder', USER_GROUP: 'Place Holder' };
  Update() {
    var api_url = "/api/data/user"

    let loader = this.loadingCtrl.create({ content: "获取数据中，请稍后...", });
    loader.present();

    this.http.get(api_url).subscribe(result => {
      loader.dismiss();
      if (result.state == 'SUCC') {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
        this.user_info = result.data
      }
      else {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
        if (result.data == 'LOGIN') { this.navCtrl.setRoot('LoginPage') }
      }
      console.log(result.msg)
    }, error => {
      loader.dismiss();
      this.toastCtrl.create({ message: "网络错误，联系管理员解决", position: 'top', duration: 3000, }).present();
    });
  }

  ionViewDidLoad() {
    this.Update()
    console.log('UserPage');
  }
  change_password() {
    let prompt = this.alertCtrl.create({
      title: '更改密码',
      message: "请输入旧密码，新密码，确认新密码",
      inputs: [
        {
          name: 'old_pw',
          placeholder: '旧密码'
        },
        {
          name: 'new_pw',
          placeholder: '新密码'
        },
        {
          name: 'new_pw2',
          placeholder: '确认密码'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确认',
          handler: data => {
            console.log('Saved clicked');
            this.toastCtrl.create({ message: '假装密码修改成功', position: 'top', duration: 2000, }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}

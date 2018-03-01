import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { HttpService } from "../../network/HttpService";
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  account: { username: string, password: string, save: Boolean, role: string } = {
    username: 'user1',
    password: 'test',
    save: true,
    role: "DOC"
  };

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private http: HttpService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  Open_Guide() {
    let alert = this.alertCtrl.create({
      title: '帮助',
      subTitle: "<p>联系系统管理员来获取您的用户名和密码。</p><p>若忘记密码或登录出现错误，请联系管理员。</p><p>电话：<b>13901234567</b></p>",
      buttons: ['OK']
    });
    alert.present();
  }

  doLogin() {
    var api_url = "/api/login/" + this.account.username + "/" + this.account.password

    let loader = this.loadingCtrl.create({
      content: "登录中，请稍后...",
    });
    loader.present();

    this.http.get(api_url).subscribe(result => {
      loader.dismiss();
      console.log(result.msg);
      if (result.state == "SUCC") {
        this.toastCtrl.create({
          message: result.msg, position: 'top',
          duration: 2000,
        }).present();
        this.navCtrl.setRoot('MainMenuPage');
      } else {
        this.toastCtrl.create({
          message: result.msg, position: 'top',
          duration: 2000,
        }).present();
      }

    }, error => {
      loader.dismiss();
      console.log('Login Fail caused by network.')
      this.toastCtrl.create({
        message: "登录失败，网络错误...", position: 'top',
        duration: 3000,
      }).present();
    });


  }
}

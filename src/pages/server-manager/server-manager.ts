import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { HttpService } from '../../network/HttpService';

@IonicPage()
@Component({
  selector: 'page-server-manager',
  templateUrl: 'server-manager.html',
})
export class ServerManagerPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,    
     public http: HttpService,
     public actionsheetCtrl: ActionSheetController,
     public loadingCtrl: LoadingController,
     public alertCtrl: AlertController,
     public toastCtrl: ToastController) {
  }
  server_status=[["name",'value']]
  Update() {
    var api_url = "/api/data/server"
    let loader = this.loadingCtrl.create({ content: "正在获取信息...", });
    loader.present();

    this.http.get(api_url).subscribe(result => {
      loader.dismiss();
      if (result.state == 'SUCC') {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
        this.server_status=result.data;
      } else {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
      }
      console.log(result.msg);

    }, error => {
      loader.dismiss();
      this.toastCtrl.create({ message: "网络错误，登出失败...", position: 'top', duration: 2000, }).present();
    });

  }

  ionViewDidLoad() {
    console.log('ServerManagerPage');
    this.Update()
  }

}

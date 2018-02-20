import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { HttpService } from '../../network/HttpService';


@IonicPage()
@Component({
  selector: 'page-tansport',
  templateUrl: 'tansport.html',
})
export class TansportPage {
  Packges = [{}];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController, ) {
  }
  Update() {
    var api_url = "/api/data/transport"

    let loader = this.loadingCtrl.create({ content: "获取数据中，请稍后...", });
    loader.present();

    this.http.get(api_url).subscribe(result => {
      loader.dismiss();
      if (result.state == 'SUCC') {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
        this.Packges = result.data
      }
      else {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
      }
      console.log(result.msg)
    }, error => {
      loader.dismiss();
      this.toastCtrl.create({ message: "出现错误，联系管理员解决", position: 'top', duration: 2000, }).present();
    });
  }

  ionViewDidLoad() {
    this.Update();
  }

  Open_Pack_Detail(item) {
    this.toastCtrl.create({ message: item.NAME + " " + item.DETAIL, position: 'bottom', duration: 2000, }).present();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HttpService } from "../../network/HttpService";
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { StatusDetailPage } from '../status-detail/status-detail';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  top_segment: string = "Sensor_All";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public http: HttpService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController, ) {
  }
  Sensors = [{ STATUS: '', NAME: '' }];
  Sensors_Json=[{ STATUS: '', NAME: '' }];
  Sensors_Err = [{}];

  Update() {
    var api_url = "/api/data/sensor"

    let loader = this.loadingCtrl.create({ content: "获取数据中，请稍后...", });
    loader.present();

    this.http.get(api_url).subscribe(result => {
      loader.dismiss();
      if (result.state == 'SUCC') {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
        this.Sensors = result.data
        this.Sensors_Json = result.data
        this.Sensors_Err = []
        for (var i in this.Sensors_Json) {
          if (this.Sensors_Json[i].STATUS != '正常') {
            this.Sensors_Err.push(this.Sensors_Json[i]);
          }
        }
      }
      else {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
        if (result.data == 'LOGIN') { this.navCtrl.setRoot('LoginPage') }
      }
      console.log(result.msg)
    }, error => {
      loader.dismiss();
      this.toastCtrl.create({ message: "网络错误，联系管理员解决", position: 'top', duration: 3000, }).present();
      console.log('Status page load fail caused by network');
    });
  }

  Search_Bar(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.Sensors = this.Sensors_Json;
      this.Sensors = this.Sensors.filter((item) => {
        return (item.NAME.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else
    {
      this.Sensors = this.Sensors_Json;
    }
  }

  ionViewDidLoad() {
    this.Update();
  }
  Open_Detail(item) {
    this.navCtrl.push('StatusDetailPage', { selected_item: item });
  }
  Go_Back() {
    this.navCtrl.pop();
  }

}

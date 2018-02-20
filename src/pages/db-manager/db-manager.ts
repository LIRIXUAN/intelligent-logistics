import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { HttpService } from '../../network/HttpService';

@IonicPage()
@Component({
  selector: 'page-db-manager',
  templateUrl: 'db-manager.html',
})
export class DbManagerPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,     
    public http: HttpService,
    public actionsheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }
  db_data= [{USERNAME: "AiA",REAL_NAME: "AI101",USER_GROUP: 25000},{USERNAME: "AiA",REAL_NAME: "AI101",USER_GROUP: 25000}]
  Update() {
    var api_url = "/api/data/db-user"
    let loader = this.loadingCtrl.create({ content: "正在获取信息...", });
    loader.present();

    this.http.get(api_url).subscribe(result => {
      loader.dismiss();
      if (result.state == 'SUCC') {
        this.toastCtrl.create({ message: result.msg, position: 'bottom', duration: 2000, }).present();
        this.db_data=result.data;
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
    this.Update()
    console.log('DbManagerPage');
  }

}

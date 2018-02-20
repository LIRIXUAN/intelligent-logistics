import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-status-detail',
  templateUrl: 'status-detail.html',
})
export class StatusDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selected_item = { name: 'XXX', img_src: "SS", status: 'XX', color_i: "XX" };

  ionViewDidLoad() {
    this.selected_item = this.navParams.get("selected_item");
  }
  dismiss() {
    this.navCtrl.pop()
  }
}

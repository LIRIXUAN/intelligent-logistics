import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object

  constructor(public navCtrl: NavController,public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
  }

  ngOnChanges() {
  }
}

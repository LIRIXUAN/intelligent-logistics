import { Component,/*ViewChild*/ } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
//import { Tabs } from 'ionic-angular/navigation/nav-interfaces';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tab1Root: any = 'StatusPage';
  tab2Root: any = 'ControlPage';
  tab3Root: any = 'SettingsPage';
  tab4Root: any = 'UserPage';
  
  tab1Title = "状态";
  tab2Title = "控制";
  tab3Title = "设置";
  tab4Title = "我";
  
  constructor(public navCtrl: NavController) {
  }
}

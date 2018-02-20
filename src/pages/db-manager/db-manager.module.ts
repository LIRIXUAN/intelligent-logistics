import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DbManagerPage } from './db-manager';

@NgModule({
  declarations: [
    DbManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(DbManagerPage),
  ],
})
export class DbManagerPageModule {}

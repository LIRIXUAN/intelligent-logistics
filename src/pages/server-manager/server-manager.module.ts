import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServerManagerPage } from './server-manager';

@NgModule({
  declarations: [
    ServerManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(ServerManagerPage),
  ],
})
export class ServerManagerPageModule {}

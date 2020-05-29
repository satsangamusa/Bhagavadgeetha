import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LordKrishnaPageRoutingModule } from './lord-krishna-routing.module';

import { LordKrishnaPage } from './lord-krishna.page';
import { KrishnaPipe } from 'src/app/lord-krishna/krishna-pipe';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';
import { SettingsModalPageModule } from 'src/app/settings-modal/settings-modal.module';

@NgModule({
  entryComponents:[SettingsModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsModalPageModule,
    LordKrishnaPageRoutingModule
  ],
  declarations: [LordKrishnaPage,KrishnaPipe]
})
export class LordKrishnaPageModule {}

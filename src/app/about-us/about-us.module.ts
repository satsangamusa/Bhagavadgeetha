import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUsPageRoutingModule } from './about-us-routing.module';

import { AboutUsPage } from './about-us.page';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';
import { SettingsModalPageModule } from 'src/app/settings-modal/settings-modal.module';

@NgModule({
  entryComponents:[SettingsModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsModalPageModule,
    AboutUsPageRoutingModule
  ],
  declarations: [AboutUsPage]
})
export class AboutUsPageModule {}

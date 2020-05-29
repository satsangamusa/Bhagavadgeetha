import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentPageRoutingModule } from './content-routing.module';

import { ContentPage } from './content.page';
import { ContentPipe } from 'src/app/content/content-pipe';
import { SettingsModalPageModule } from 'src/app/settings-modal/settings-modal.module';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';
@NgModule({
  entryComponents:[SettingsModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsModalPageModule,
    ContentPageRoutingModule
  ],
  declarations: [ContentPage,ContentPipe]
})
export class ContentPageModule {}

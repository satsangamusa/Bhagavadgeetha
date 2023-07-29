import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThraithaSiddhanthamuPageRoutingModule } from './thraitha-siddhanthamu-routing.module';

import { ThraithaSiddhanthamuPage } from './thraitha-siddhanthamu.page';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';
import { SettingsModalPageModule } from 'src/app/settings-modal/settings-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsModalPageModule,
    ThraithaSiddhanthamuPageRoutingModule
  ],
  declarations: [ThraithaSiddhanthamuPage]
})
export class ThraithaSiddhanthamuPageModule {}

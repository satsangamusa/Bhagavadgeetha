import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-thraitha-siddhanthamu',
  templateUrl: './thraitha-siddhanthamu.page.html',
  styleUrls: ['./thraitha-siddhanthamu.page.scss'],
})
export class ThraithaSiddhanthamuPage implements OnInit {

  constructor(public global:GlobalService,public pop:PopoverController) { }

  ngOnInit() {
  }
  async openSettings(){
    
  const popover = await this.pop.create({
    component: SettingsModalPage,
    cssClass: 'custom-popover',
    translucent: true
  });
  return await popover.present();
}

}

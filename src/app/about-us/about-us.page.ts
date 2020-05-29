import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

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

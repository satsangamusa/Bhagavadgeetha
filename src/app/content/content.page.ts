import { Component, OnInit} from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { PopoverController } from '@ionic/angular';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
  constructor(public global: GlobalService,public pop:PopoverController) {

  }

  ngOnInit() {
  }
  ionViewDidEnter() {
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

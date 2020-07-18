import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { PopoverController, IonContent } from '@ionic/angular';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';
import { Content } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  constructor(public global: GlobalService,public pop:PopoverController) {

  }

  ngOnInit() {
  }
  
  goToTop() {
    this.content.scrollToTop(0);
    this.global.currentPage=this.global.currentPage+1;
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

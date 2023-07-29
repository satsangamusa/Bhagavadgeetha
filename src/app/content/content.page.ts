import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { PopoverController, IonContent } from '@ionic/angular';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';
import {Browser} from '@capacitor/browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit{
  @ViewChild(IonContent)
  content!: IonContent;

  
  player:any;
  stopped:boolean=true;
  constructor(public global: GlobalService,public pop:PopoverController) {

  }
  
  ngOnInit() {
  }
  nextVideo(){
  }
  ionViewDidEnter(){
  }
   
  playVideo(id:string){
    let link ='https://www.youtube.com/watch?v='+id
     Browser.open({url:link});
  }
  stop(){
    if(!this.stopped){
      this.player.stopVideo().then(()=>{
        this.stopped=true;
      });
    }
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

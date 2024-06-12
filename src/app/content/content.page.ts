import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRow, IonSearchbar, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/global.service';
import { ContentPipe } from '../content-pipe';
import { NetworkService } from '../network.service';
import { SettingsModalPage } from '../settings-modal/settings-modal.page';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
  standalone: true,
  providers:[ModalController],
  imports:[ContentPipe, SettingsModalPage, IonCard, CommonModule,IonCol,IonIcon,IonHeader,IonMenuButton,IonMenu,IonMenuToggle,IonToolbar,IonTitle,IonButton,IonButtons,IonContent,IonRow,IonGrid,IonSearchbar,IonList,IonItem,IonLabel],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentPage implements OnInit{
  @ViewChild(IonContent)
  content!: IonContent;
  player:any;
  stopped:boolean=true;

  constructor(public global: GlobalService,public modalController:ModalController,public nw:NetworkService) {

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

  async openSettings() {
    const modal:HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalPage
    });

    await modal.present();
  }


}

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/global.service';
import Swiper from 'swiper';
import { SettingsModalPage } from '../settings-modal/settings-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [SettingsModalPage,IonCard, CommonModule,IonCol,IonIcon,IonHeader,IonMenuButton,IonMenu,IonMenuToggle,IonToolbar,IonTitle,IonButton,IonButtons,IonContent,IonRow,IonGrid,IonSearchbar,IonList,IonItem,IonLabel],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  public swiper!: Swiper;
  images:any=[];
  constructor(public global:GlobalService) {

   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    for(let i=1;i<=48;i++)
    this.images.push(i);
  }


}

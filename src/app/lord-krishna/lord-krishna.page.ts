import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRow, IonSearchbar, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/global.service';
import { ContentPipe } from '../content-pipe';
import { NetworkService } from '../network.service';
import { SettingsModalPage } from '../settings-modal/settings-modal.page';

@Component({
  selector: 'app-lord-krishna',
  templateUrl: './lord-krishna.page.html',
  styleUrls: ['./lord-krishna.page.scss'],
  standalone: true,
  providers:[ModalController],
  imports:[ContentPipe,SettingsModalPage,IonCard, CommonModule,IonCol,IonIcon,IonHeader,IonMenuButton,IonMenu,IonMenuToggle,IonToolbar,IonTitle,IonButton,IonButtons,IonContent,IonRow,IonGrid,IonSearchbar,IonList,IonItem,IonLabel],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LordKrishnaPage implements OnInit {

  constructor(public global:GlobalService,public modalController:ModalController,public nw:NetworkService) { }

  ngOnInit() {
  }

  playVideo(id:string){
    let link ='https://www.youtube.com/watch?v='+id
     Browser.open({url:link});
  }


  async openSettings() {
    const modal:HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalPage
    });

    await modal.present();
  }
  videos:any=[
    {
      'title':'శ్రీ కృష్ణుడు ధరించిన నెమలి పించము వెనుక రహస్యము తెలుసుకొనుటకు ఈ క్రింది వీడియోను చూడగలరు',
      'id':'EUZNaFyAXf0'
    },
    {
      'title':'శ్రీ కృష్ణుడు ఒక్క పాదముపై  నిల్చోని ఉండటం వెనుక ఉండే  రహస్యాన్ని తెలుసుకొనుటకు ఈ క్రింది వీడియోను చూడగలరు',
      'id':'nEfkH5S50dg'
    },
    {
      'title':'కృష్ణాష్టమి పండుగ రహస్యాన్ని తెలుసుకొనుటకు ఈ క్రింది వీడియోను చూడగలరు',
      'id':'M2vA3qzrMzI'
    },
    {
      'title':'శ్రీ కృష్ణుని మురళి వెనుక రహస్యాన్ని తెలుసుకొనుటకు ఈ క్రింది వీడియోను చూడగలరు',
      'id':'oCGMbxVYpPM'
    },
    {
      'title':'శ్రీ కృష్ణ భగవానుని గురించి మరిన్ని విషయములు తెలుసుకొనుటకు ఈ క్రింది వీడియోలను చూడగలరు',
      'id':'tuzObqzTH4o'
    },
    {
      'title':'',
      'id':'T5oNgIuUbWg'
    },
    {
      'title':'',
      'id':'AIpTImWE6wY'
    },
    {
      'title':'',
      'id':'ra8g0jffYUg'
    }
  ];

}

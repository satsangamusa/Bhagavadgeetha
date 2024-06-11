import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { Platform } from '@ionic/angular';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRow, IonSearchbar, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalService } from 'src/app/global.service';
import { SettingsModalPage } from '../settings-modal/settings-modal.page';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
  standalone: true,
  imports: [SettingsModalPage,IonCard, CommonModule,IonCol,IonIcon,IonHeader,IonMenuButton,IonMenu,IonMenuToggle,IonToolbar,IonTitle,IonButton,IonButtons,IonContent,IonRow,IonGrid,IonSearchbar,IonList,IonItem,IonLabel],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class VideosPage implements OnInit {

  private audioPointer!: BehaviorSubject<any>;

  public getAudioPointer(): Observable<any> {
    return this.audioPointer.asObservable();
  }
  async presentModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalPage,
    });

    await modal.present();
  }

  public setAudioPointer(newValue: any): void {
    this.audioPointer.next(newValue);
  }
  public getGvvSearchText(): Observable<any> {
    return this.globaldata.gvvSearchText.asObservable();
  }
  public setGvvSearchText(newValue: any): void {
    this.globaldata.gvvSearchText.next(newValue);
  }
  constructor(
    public modalController: ModalController,
    public globaldata: GlobalService,
    private router: Router,
    private platform: Platform
  ) {
    this.width = this.platform.width();
    this.height = this.platform.height();

    for (let audio of this.audios) {
      if (audio.id) {
        audio.id =
          ' https://ia800407.us.archive.org/10/items/prabodhananda_videos/' +
          audio.id;
      }
    }
  }
  gotoYouTube(ytUrl: any) {
    Browser.open({ url: ytUrl });
  }

  async ionViewDidEnter() {
    this.platform.resize.subscribe(async () => {
      this.width = this.platform.width();
      this.height = this.platform.height();
      var sound: any = document.getElementById('videoId');
      if (this.width && sound) {
        sound.width = this.width * (95 / 100);
      }
    });
    if (!this.globaldata.clickedSongDetails) {
      this.currentAudio = await this.getSelectedAudio();
      if (!this.currentAudio) {
        this.currentAudio =
          this.audios[Math.floor(Math.random() * this.audios.length)];
      }
      this.audioPointer = new BehaviorSubject<any>(this.currentAudio);
      this.getAudioPointer().subscribe((value) => {
        this.currentAudio = value;
        let elm: any = document.getElementById('videoId');
        while (elm?.firstChild) {
          elm.removeChild(elm.lastChild);
        }
        var sound: any = document.createElement('video');
        sound.id = 'video-player';
        sound.controls = 'controls';
        sound.autoplay = 'autoplay';
        sound.width = this.width * (95 / 100);
        sound.src = `${this.currentAudio?.id}`;
        sound.type = 'video/mp4';

        elm.appendChild(sound);
        sound?.addEventListener('ended', (e: any) => {
          this.shuffle();
        });
      });
    }
  }
  ionViewDidLeave() {
    /* if (!this.clickedSongDetails) {
      let elm: any = document.getElementById("videoId");
      while (elm?.firstChild) {
        elm.removeChild(elm.lastChild);
      }
    }*/
  }
  currentAudio: any;

  ihtml: any;
  width: any;
  height: any;
  async ngOnInit() {
    this.globaldata.clickedSongDetails = false;
    this.getSelectedAudio();
    /*
      const response: HttpResponse = await CapacitorHttp.get(this.doGet());
      let resultArray = response.data?.result;
      let cntr=0;
      let sa =[];
      for(let r of resultArray){
        if(r.name?.indexOf('.mp3')>0){
          //https://ia601306.us.archive.org/35/items/prabodha_shatakamu/100దానమిచ్చు%20దాత.mp3
          sa.push({name:r.name, url:"https://ia601306.us.archive.org/35/items/prabodha_shatakamu/"+r.name});
        }
      }
      sa.sort((a, b) => {
        const numberA = parseInt(a.name.match(/^\d+/)[0]);
        const numberB = parseInt(b.name.match(/^\d+/)[0]);
        return numberA - numberB;
      });
      console.log(sa);*/
  }
  /*doGet() {
    return {
      url: 'https://archive.org/metadata/prabodha_shatakamu/files',
    };
  }*/
  filteredAudios: any = [];
  gvvSearchText: string = '';
  async handleChange(event: any) {
    let st = event.target.value;
      if (st) {
        this.filteredAudios = this.audios.filter(
          (element: any) =>
            element.title?.includes(st) ||
            element.eng?.toUpperCase()?.includes(st?.toUpperCase())
        );
        this.currentAudio = this.filteredAudios[0];
      }
  }
  async getSelectedAudio() {
    let st = '';
    await this.getGvvSearchText().subscribe((data) => {
      st = data;
      if (st) {
        this.filteredAudios = this.audios.filter(
          (element: any) =>
            element.title?.includes(st) ||
            element.eng?.toUpperCase()?.includes(st?.toUpperCase())
        );
        this.currentAudio = this.filteredAudios[0];
      } else {
        this.currentAudio =
          this.audios[Math.floor(Math.random() * this.audios.length)];
      }
    });
  }
  selectedAudio(audio: any) {
    this.globaldata.gvvSearchText.next('');
    this.filteredAudios = null;
    this.currentAudio = audio;
    this.setAudioPointer(audio);
    const sound = document.querySelector('video');
    sound?.addEventListener('ended', (e: any) => {
      this.first(audio);
    });
  }

  songDetails(st: any) {
    this.globaldata.songText = st;
    this.router.navigate(['song-details']);
  }
  first(nxtAudio: any) {
    if (nxtAudio) {
      let indx = this.audios.indexOf(nxtAudio);
      let len = this.audios.length;
      indx++;
      if (!(indx === len) && !(indx === len)) {
        this.currentAudio = this.audios[indx];
        this.setAudioPointer(this.audios[indx]);
      }
      const sound = document.querySelector('video');
      sound?.addEventListener('ended', (e: any) => {
        this.first(this.audios[indx]);
      });
    }
  }
  last(lstAudio: any) {
    if (lstAudio) {
      let indx = this.audios.indexOf(lstAudio);
      let len = this.audios.length;
      indx--;
      if (indx > 0 && indx < len - 1) {
        this.setAudioPointer(this.audios[indx]);
        this.currentAudio = this.audios[indx];
      }
      const sound = document.querySelector('video');
      sound?.addEventListener('ended', (e: any) => {
        this.last(this.audios[indx]);
        /* let len = this.audios.length;
         if (indx == 0) {
           indx = len - 1;
           this.setAudioPointer(this.audios[indx])
           indx--;
         }
         if (indx < len) {
           this.setAudioPointer(this.audios[indx])
           indx--;
         }*/
      });
    }
  }
  ascendingFlag = true;
  veryFirst() {
    let len = this.audios.length;
    if (len > 0) {
      this.currentAudio = this.audios[0];
      this.setAudioPointer(this.audios[0]);
    }
    const sound = document.querySelector('video');
    sound?.addEventListener('ended', (e: any) => {
      if (len > 1) this.first(this.audios[0]);
    });
  }
  veryLast() {
    let len = this.audios.length;
    if (len >= 1) {
      this.currentAudio = this.audios[len - 1];
      this.setAudioPointer(this.audios[len - 1]);
    }
    const sound = document.querySelector('video');
    sound?.addEventListener('ended', (e: any) => {
      if (len > 2) this.last(this.audios[len - 1]);
    });
  }
  shuffle() {
    if (this.audios?.length > 1) {
      let audio = this.audios[Math.floor(Math.random() * this.audios.length)];
      this.currentAudio = audio;
      this.setAudioPointer(audio);
      const sound = document.querySelector('video');
      sound?.addEventListener('ended', (e: any) => {
        this.shuffle();
      });
    }
  }

  audios: any = [
    {
      title: "బ్రహ్మ విద్య",
      eng: "Brahma Vidya",
      imageUrl: "http://img.youtube.com/vi/UjfnU8TbExM/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=UjfnU8TbExM`,
      id: "BrahmaVidya_03-12-2017.mp4"
    },
    {
      title: "త్రైత శకము",
      eng: "Thraitha Shakam",
      imageUrl: "http://img.youtube.com/vi/j2QWdQxFMnQ/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=j2QWdQxFMnQ`,
      id: "ThraithaShakam.mp4"
    },
    {
      title: "త్రైత సిద్ధాంత చరిత్ర",
      eng: "Thraitha Siddhantha Charitra",
      imageUrl: "http://img.youtube.com/vi/GHLCcAhUm44/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=GHLCcAhUm44`,
      id: "ThraithaSiddhanthaCharitra.mp4"
    },
    {
      title: "తల్లి - తండ్రి",
      eng: "Thalli Thandri",
      imageUrl: "http://img.youtube.com/vi/0SQd_LJHBTc/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=0SQd_LJHBTc`,
      id: "ThalliThandri.mp4"
    },
    {
      title: "ప్రపంచ శ్రద్ధ - పరమాత్మ శ్రద్ధ",
      eng: "Prapacha Shradda-Paramthma Shradda",
      imageUrl: "http://img.youtube.com/vi/tW9xFst3xOc/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=tW9xFst3xOc`,
      id: "PrapachaShraddaParamthmaShradda.mp4"
    },
    {
      title: "తోలేవాడు",
      eng: "Tholevadu",
      imageUrl: "http://img.youtube.com/vi/vLzkMmsjiK4/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=vLzkMmsjiK4`,
      id: "Tholevadu.mp4"
    },
    {
      title: "మాయకుడు - అమాయకుడు",
      eng: "Mayakudu Amayakudu",
      imageUrl: "http://img.youtube.com/vi/cZqwHaQ92Vc/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=cZqwHaQ92Vc`,
      id: "MayakuduAmayakudu.mp4"
    },
    {
      title: "నీ వెనుకవాడు",
      eng: "Nee Venuka Vadu",
      imageUrl: "http://img.youtube.com/vi/9Z5mN3-orEo/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=9Z5mN3-orEo`,
      id: "NeeVenukaVaadu.mp4"
    },
    {
      title: "ఆట - దోబూచులాట",
      eng: "Ata Dhoboochulata",
      imageUrl: "http://img.youtube.com/vi/MBuR3OMXJzY/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=MBuR3OMXJzY`,
      id: "AtaDhoboochulata.mp4"
    },
    {
      title: "బయటి సమాజము - లోపలి సమాజము",
      eng: "Bayati Samajam Lopali Samajam",
      imageUrl: "http://img.youtube.com/vi/fXiXOWEUGAI/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=fXiXOWEUGAI`,
      id: "VisibleSocietyInvisibleSociety.mp4"
    },
    {
      title: "పుట్టుట - గిట్టుట",
      eng: "Puttuta Gittuta",
      imageUrl: "http://img.youtube.com/vi/0-i4hkCYVJY/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=0-i4hkCYVJY`,
      id: "PuttutaGittuta.mp4"
    },
    {
      title: "భయం",
      eng: "Bhayam",
      imageUrl: "http://img.youtube.com/vi/HdtdGhVICk8/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=HdtdGhVICk8`,
      id: "Bhayam.mp4"
    },
    {
      title: "జ్ఞానము దగ్గర జాగ్రత్త",
      eng: "Gnanam Daggara Jagrattha",
      imageUrl: "http://img.youtube.com/vi/bt8dG9Sqe0I/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=bt8dG9Sqe0I`,
      id: "GnanamDaggaraJagrattha.mp4"
    },
    {
      title: "గ్రాహిత శక్తి",
      eng: "Grahitha Shakti",
      imageUrl: "http://img.youtube.com/vi/VeqoOM7pNEg/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=VeqoOM7pNEg`,
      id: "GrahithaShakti.mp4"
    },
    {
      title: "కర్మ మర్మము",
      eng: "Karma Marmamu",
      imageUrl: "http://img.youtube.com/vi/XFHZ6sV4RHk/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=XFHZ6sV4RHk`,
      id: "KarmaMarmamu.mp4"
    },
    {
      title: "శక్తి",
      eng: "Shakti",
      imageUrl: "http://img.youtube.com/vi/9-fbu5uwbHQ/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=9-fbu5uwbHQ`,
      id: "Shakti.mp4"
    },
    {
      title: "జ్ఞాన శక్తి",
      eng: "Gnana Shakti",
      imageUrl: "http://img.youtube.com/vi/xKhR5zzEA5o/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=xKhR5zzEA5o`,
      id: "GnanaShakti.mp4"
    },
    {
      title: "పురుషోత్తమ",
      eng: "Purushotthama",
      imageUrl: "http://img.youtube.com/vi/BmmS-Moszaw/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=BmmS-Moszaw`,
      id: "Purushotthama.mp4"
    },
    {
      title: "దేవుడు ఇద్దరా! ఒక్కరా!",
      eng: "Devudu Okkara! iddhara",
      imageUrl: "http://img.youtube.com/vi/baDwtOYsrIA/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=baDwtOYsrIA`,
      id: "DevuduOkkaraIddhara.mp4"
    },
    {
      title: "శవము - శివము",
      eng: "Shavamu Shivamu",
      imageUrl: "http://img.youtube.com/vi/iCx5tlUICOw/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=iCx5tlUICOw`,
      id: "ShavamuShivamu.mp4"
    },
    {
      title: "మోక్షము - మోసము",
      eng: "Shavamu Shivamu",
      imageUrl: "http://img.youtube.com/vi/8kkaNvEs5V8/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=8kkaNvEs5V8`,
      id: "MokshamuMosamu.mp4"
    },
    {
      title: "ఈశ్వర - పరమేశ్వర",
      eng: "Eshwara Parameshwara",
      imageUrl: "http://img.youtube.com/vi/iLwoWbtvV5o/hqdefault.jpg",
      ytUrl:`https://www.youtube.com/watch?v=iLwoWbtvV5o`,
      id: "EshwaraPrameshwara.mp4"
    },
    ];
}

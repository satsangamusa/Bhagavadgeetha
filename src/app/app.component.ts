import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, UrlTree } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterLink, IonRouterOutlet, IonSplitPane } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, archiveOutline, archiveSharp, book, bookmarkOutline, bookmarkSharp, caretBack, caretBackCircleOutline, caretForward, caretForwardCircleOutline, close, closeCircle, closeCircleSharp, closeOutline, documentSharp, documentText, heartOutline, heartSharp, home, information, list, mailOutline, mailSharp, menu, mic, paperPlaneOutline, paperPlaneSharp, removeCircleOutline, search, settings, settingsOutline, shareSharp, shuffle, trashOutline, trashSharp, videocam, videocamSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { NetworkService } from 'src/app/network.service';
import { register } from 'swiper/element/bundle';
import { GlobalService } from './global.service';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  providers:[GlobalService],
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {

  constructor(
    public global:GlobalService,
    public router:Router,
    private networkService: NetworkService,) {
      addIcons({ mailOutline,search,book,home,settingsOutline,documentText,videocamSharp,shareSharp,information,caretBack,documentSharp,close,closeCircle,closeCircleSharp,closeOutline,removeCircleOutline,addCircleOutline,shuffle,settings,caretBackCircleOutline,caretForwardCircleOutline,caretForward,mic,videocam,menu, list,mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
      this.initializeApp();
  }

  menuItems:any=[];
  sh:any=0;
  sm:any=0;


 async initializeApp() {
      this.networkService.initializeNetworkEvents();
      document.body.setAttribute('data-theme', 'light');
      document.body.classList.toggle('dark', false);
      if(Capacitor.getPlatform()==='android' || Capacitor.getPlatform()==='ios'){
        await SplashScreen.show({
          showDuration: 1000,
        });
        SplashScreen.hide();
        StatusBar.setStyle({
          style: Style.Default
        });

      }

  }

  ngOnInit() {

    register();
    this.menuItems[0]={
      title:'శ్లోకాలు వెతకండి',
      url: 'quick-search',
      icon:'search',
      subs:null
    };
    this.menuItems[1]={
      title:'భగవద్గీత గ్రంథము',
      url: 'quick-search',
      icon:'book',
      subs:this.global.chapters
    };
    this.menuItems[2]=
    {
      title:'ఆకరము',
      url: 'home',
      icon:'home',
      subs:null
    };
    this.menuItems[3]=
    {
      title:'మా గురించి',
      url: 'about-us',
      icon:'information',
      subs:null
    };
    this.menuItems[4]=
    {
      title:'త్రైత సిద్ధాంతము',
      url: 'thraitha-siddhanthamu',
      icon:'information',
      subs:null
    };
    this.menuItems[5]=
    {
      title:'శ్రీ కృష్ణ భగవాన్',
      url: 'lord-krishna',
      icon:'information',
      subs:null
    };
    this.menuItems[6]=
    {
      title:'వీడియోలు',
      url: 'videos',
      icon:'videocam',
      subs:null
    };
    this.menuItems[7]=
    {
      title:'పంచండి',
      url: 'share',
      icon:'share-sharp',
      subs:null
    };

  }
  goToChapter(page: { subs: null; component: number; url: string | UrlTree; }){

    if(page.subs!=null){
      console.log('do nothing');
    }else if(page.subs==null){
      this.global.currentPage=page.component;
      this.router.navigateByUrl(page.url);
    }
  }
}

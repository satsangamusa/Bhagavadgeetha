import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { GlobalService } from 'src/app/global.service';
import { Router, UrlTree } from '@angular/router';
import { NetworkService } from 'src/app/network.service';
import { register } from 'swiper/element/bundle';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  menuItems:any=[];
  sh:any=0;
  sm:any=0;
  constructor(
    private platform: Platform,
    public global:GlobalService,
    public router:Router,
    private networkService: NetworkService,
  ) {
    this.initializeApp();
  }

  initializeApp() { 
    this.platform.ready().then(async () => {
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
  
    });
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
      icon:'share',
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

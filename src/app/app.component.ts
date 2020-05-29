import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from 'src/app/global.service';
import { Router } from '@angular/router';
import { NetworkService,ConnectionStatus } from 'src/app/network.service';

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
    private splashScreen: SplashScreen,
    public global:GlobalService,
    public router:Router,
    private networkService: NetworkService,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
       this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
        if (status == ConnectionStatus.Online) {
          this.global.networkStatus="ONLINE";
          //this.offlineManager.checkForEvents().subscribe();
          //this.offlineManager.checkForEvents();
        }else{
          this.global.networkStatus="OFFLINE";
        }
      });
       
    });
  }
 
  ngOnInit() {
    

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
      title:'నిలయము',
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
  goToChapter(page){

    if(page.subs!=null){
      console.log('do nothing');
    }else if(page.subs==null){
      this.global.currentPage=page.component;
      this.router.navigateByUrl(page.url);
    }
    

  }
}

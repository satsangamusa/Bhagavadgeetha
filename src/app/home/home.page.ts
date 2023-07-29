import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import Swiper from 'swiper';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiper')
  swiperRef!: ElementRef;
  swiper?: Swiper;
  images:any=[];
  swiperModules = [IonicSlides];
  constructor(public global:GlobalService) {
   
   }

  ngOnInit() {
  }
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
 
  ionViewDidEnter(){
    for(let i=1;i<=48;i++)
    this.images.push(i);
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);

   
  }

}

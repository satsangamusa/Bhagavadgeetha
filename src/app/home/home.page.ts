import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { NavParams, ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  images:any=[];
  sliderConfig = {
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    spaceBetween: 20
  };
  @ViewChild('mySlider',{}) slider: IonSlides;
  constructor(public global:GlobalService) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    console.log('entered into home page');
    for(let i=1;i<=65;i++)
    this.images.push(i);
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

}

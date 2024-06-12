import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRange, IonRow, IonSearchbar, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/global.service';


@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.page.html',
  styleUrls: ['./settings-modal.page.scss'],
  standalone: true,
  imports: [SettingsModalPage,IonCard, CommonModule,IonRange, IonCol,IonIcon,IonHeader,IonMenuButton,IonMenu,IonMenuToggle,IonToolbar,IonTitle,IonButton,IonButtons,IonContent,IonRow,IonGrid,IonSearchbar,IonList,IonItem,IonLabel],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsModalPage implements OnInit {

 constructor(public gb:GlobalService,private modalController: ModalController) {

 }
ngOnInit() {
}
ionViewDidEnter(){
  const fontSize = document.getElementsByTagName("ion-range")[0];
  fontSize.value=this.gb.fontSize;
  const red = document.getElementsByTagName("ion-range")[1];
  red.value= this.gb.red;
  const green = document.getElementsByTagName("ion-range")[2];
  green.value= this.gb.green ;
  const blue = document.getElementsByTagName("ion-range")[3];
  blue.value= this.gb.blue;
  console.log(this.gb.red, this.gb.green,this.gb.blue)
  const fontRed = document.getElementsByTagName("ion-range")[4];
  fontRed.value= this.gb.fontRed;
  const fontGreen = document.getElementsByTagName("ion-range")[5];
  fontGreen.value= this.gb.fontGreen;
  const fontBlue = document.getElementsByTagName("ion-range")[6];
  fontBlue.value=this.gb.fontBlue;
  console.log(this.gb.fontRed, this.gb.fontGreen, this.gb.fontBlue)
}

increaseFont(){
  this.gb.fontSize=this.gb.fontSize+1;
}
async closeModal() {
  const modal = await this.modalController.getTop();
  modal?.dismiss();
}
reduceFont(){
  this.gb.fontSize=this.gb.fontSize-1;
}
setGlobalText (event:any) {
 this.gb.fontSize = event.target.value;
};

setColor(){
  this.gb.bgColor = this.fullColorHex(this.gb.red, this.gb.green, this.gb.blue);
  this.gb.bgColor = '#' + this.gb.bgColor;
}

setFontColor(){
  this.gb.fontColor = this.fullColorHex(this.gb.fontRed, this.gb.fontGreen, this.gb.fontBlue);
  this.gb.fontColor = '#' + this.gb.fontColor;
}
resetColor(){
  const fontSize = document.getElementsByTagName("ion-range")[0];
  fontSize.value=15;
  this.gb.fontSize=fontSize.value;
  const red = document.getElementsByTagName("ion-range")[1];
  red.value=255;
  this.gb.red=red.value;
  const green = document.getElementsByTagName("ion-range")[2];
  green.value=255;
  this.gb.green=green.value;
  const blue = document.getElementsByTagName("ion-range")[3];
  blue.value=255;
  this.gb.blue=blue.value;
  const fontRed = document.getElementsByTagName("ion-range")[4];
  fontRed.value=0;
  this.gb.fontRed=fontRed.value;
  const fontGreen = document.getElementsByTagName("ion-range")[5];
  fontGreen.value=0;
  this.gb.fontGreen=fontGreen.value;
  const fontBlue = document.getElementsByTagName("ion-range")[6];
  fontBlue.value=0;
  this.gb.fontBlue=fontBlue.value;
  this.setColor();
  this.setFontColor();
}

applyColors (colorType:any,event:any) {
  switch(colorType){
    case 'red':
      this.gb.bgColor = this.fullColorHex(event.target.value, this.gb.green, this.gb.blue);
      this.gb.red=event.target.value;
      break;
    case 'green':
      this.gb.bgColor = this.fullColorHex(this.gb.red, event.target.value, this.gb.blue);
      this.gb.green=event.target.value;
      break;
    case 'blue':
      this.gb.bgColor = this.fullColorHex(this.gb.red, this.gb.green, event.target.value);
      this.gb.blue=event.target.value;
      break;
    case 'fontRed':
      this.gb.fontColor = this.fullColorHex(event.target.value, this.gb.fontGreen, this.gb.fontBlue);
      this.gb.fontRed=event.target.value;
      break;
    case 'fontBlue':
      this.gb.fontColor = this.fullColorHex(this.gb.fontRed, this.gb.fontGreen, event.target.value);
      this.gb.fontBlue=event.target.value;
      break;
    case 'fontGreen':
      this.gb.fontColor = this.fullColorHex(this.gb.fontRed,event.target.value, this.gb.fontBlue);
      this.gb.fontGreen=event.target.value;
      break;

  }

 this.gb.bgColor = '#' + this.gb.bgColor;
 this.gb.fontColor = '#' + this.gb.fontColor;
};

fullColorHex (r:any, g:any, b:any) {
 var red = this.rgbToHex(r);
 var green = this.rgbToHex(g);
 var blue = this.rgbToHex(b);
 return red + green + blue;
};

rgbToHex (rgb:any) {
 var hex = Number(rgb).toString(16);
 if (hex.length < 2) {
     hex = "0" + hex;
 }
 return hex;
};

}

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
  red:number = 255;
  green:number = 255;
  blue:number = 255;
  fontRed:number = 0;
  fontGreen:number = 0;
  fontBlue:number = 0;
  bgColor = '#ffffff';
  fontColor = '#000000';
 constructor(public globaldata:GlobalService,private modalController: ModalController) {

 }


ngOnInit() {
}

increaseFont(){
  this.globaldata.fontSize=this.globaldata.fontSize+1;
}
async closeModal() {
  const modal = await this.modalController.getTop();
  modal?.dismiss();
}
reduceFont(){
  this.globaldata.fontSize=this.globaldata.fontSize-1;
}
setGlobalText (event:any) {
 this.globaldata.fontSize = event.target.value;
};

setColor(){
  console.log(this.red, this.green, this.blue)
  this.bgColor = this.fullColorHex(this.red, this.green, this.blue);
  console.log(this.bgColor)
  this.globaldata.bgColor = '#' + this.bgColor;
}

setFontColor(){
  this.fontColor = this.fullColorHex(this.fontRed, this.fontGreen, this.fontBlue);
  this.globaldata.fontColor = '#' + this.fontColor;
}
resetColor(){
  const fontSize = document.getElementsByTagName("ion-range")[0];
  fontSize.value=15;
  this.globaldata.fontSize=fontSize.value;
  const red = document.getElementsByTagName("ion-range")[1];
  red.value=255;
  this.red=red.value;
  const green = document.getElementsByTagName("ion-range")[2];
  green.value=255;
  this.green=green.value;
  const blue = document.getElementsByTagName("ion-range")[3];
  blue.value=255;
  this.blue=blue.value;
  const fontRed = document.getElementsByTagName("ion-range")[4];
  fontRed.value=0;
  this.fontRed=fontRed.value;
  const fontGreen = document.getElementsByTagName("ion-range")[5];
  fontGreen.value=0;
  this.fontGreen=fontGreen.value;

  const fontBlue = document.getElementsByTagName("ion-range")[6];
  fontBlue.value=0;
  this.fontBlue=fontBlue.value;
  this.setColor();
  this.setFontColor();
}

applyColors (colorType:any,event:any) {
  console.log(colorType,event.target.value);
  switch(colorType){
    case 'red':
      this.bgColor = this.fullColorHex(event.target.value, this.green, this.blue);
      break;
    case 'blue':
      this.bgColor = this.fullColorHex(this.red, this.green, event.target.value);
      break;
    case 'green':
      this.bgColor = this.fullColorHex(this.red, event.target.value, this.blue);
      break;
    case 'fontRed':
      this.fontColor = this.fullColorHex(event.target.value, this.fontGreen, this.fontBlue);
      break;
    case 'fontBlue':
      this.fontColor = this.fullColorHex(this.fontRed, this.fontGreen, event.target.value);
      break;
    case 'fontGreen':
      this.fontColor = this.fullColorHex(this.fontRed,event.target.value, this.fontBlue);
      break;

  }

 this.globaldata.bgColor = '#' + this.bgColor;
 this.globaldata.fontColor = '#' + this.fontColor;
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

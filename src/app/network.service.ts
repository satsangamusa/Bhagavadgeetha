import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

import { Platform, ToastController } from '@ionic/angular';
import { GlobalService } from './global.service';



@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  public connectionStatus:any=false;
  constructor(
    private toastController: ToastController, private plt: Platform, public global:GlobalService) {
      this.plt.ready().then(() => {
        this.initializeNetworkEvents();
      });
  }

  public initializeNetworkEvents() {
    if(Network){

      Network.getStatus().then(status=>{
        console.log(status)
        this.connectionStatus = status.connected;
        this.updateNetworkStatus(status.connected);
      });
    }

    Network.addListener("networkStatusChange", st=>{
      this.connectionStatus=st.connected;
      console.log(' when status changed :: ',  this.connectionStatus)
      this.updateNetworkStatus(this.connectionStatus)

    })
  }


  private async updateNetworkStatus(status: boolean) {
    if(status===true){
      this.global.networkStatus="ONLINE";
    }else{
      this.global.networkStatus="OFFLINE";
    }
    let connection = status===true ?  'Online' :'Offline';
    let toast = this.toastController.create({
      message: `You are now ${connection}`,
      duration: 3000,
      position: 'bottom'
    });
    toast.then(toast => toast.present());
  }

}

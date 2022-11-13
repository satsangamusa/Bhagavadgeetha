import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';


@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.page.html',
  styleUrls: ['./settings-modal.page.scss'],
})
export class SettingsModalPage implements OnInit {

  constructor(public navParams: NavParams,
    public global:GlobalService) { }
   
  ngOnInit() {
  }

}

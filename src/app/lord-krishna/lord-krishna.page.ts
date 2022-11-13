import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-lord-krishna',
  templateUrl: './lord-krishna.page.html',
  styleUrls: ['./lord-krishna.page.scss'],
})
export class LordKrishnaPage implements OnInit {

  constructor(public global:GlobalService,public pop:PopoverController) { }

  ngOnInit() {
  }
  async openSettings(){
    
  const popover = await this.pop.create({
    component: SettingsModalPage,
    cssClass: 'custom-popover',
    translucent: true
  });
  return await popover.present();
}
  videos:any=[
    {
      'title':'శ్రీ కృష్ణుడు ధరించిన నెమలి పించము వెనుక రహస్యము తెలుసుకొనుటకు ఈ క్రింది వీడియోను చూడగలరు',
      'id':'EUZNaFyAXf0'
    },
    {
      'title':'శ్రీ కృష్ణుడు ఒక్క పాదముపై  నిల్చోని ఉండటం వెనుక ఉండే  రహస్యాన్ని తెలుసుకొనుటకు ఈ క్రింది వీడియోను చూడగలరు',
      'id':'nEfkH5S50dg'
    },
    {
      'title':'కృష్ణాష్టమి పండుగ రహస్యాన్ని తెలుసుకొనుటకు ఈ క్రింది వీడియోను చూడగలరు',
      'id':'M2vA3qzrMzI'
    },
    {
      'title':'శ్రీ కృష్ణుని మురళి వెనుక రహస్యాన్ని తెలుసుకొనుటకు ఈ క్రింది వీడియోను చూడగలరు',
      'id':'oCGMbxVYpPM'
    },
    {
      'title':'శ్రీ కృష్ణ భగవానుని గురించి మరిన్ని విషయములు తెలుసుకొనుటకు ఈ క్రింది వీడియోలను చూడగలరు',
      'id':'tuzObqzTH4o'
    },
    {
      'title':'',
      'id':'T5oNgIuUbWg'
    },
    {
      'title':'',
      'id':'AIpTImWE6wY'
    },
    {
      'title':'',
      'id':'ra8g0jffYUg'
    } 
  ];

}

import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(public global:GlobalService) { }

  ngOnInit() {
  }
  playVideo(id:string){
    let link ='https://www.youtube.com/watch?v='+id
     Browser.open({url:link});
  }
  videos: any = [
    {
      title: "బ్రహ్మ విద్య",
      imageUrl:"assets/images/videoimages/superscience.jpg",
      id: "UjfnU8TbExM"
    },
    {
      title: "త్రైత శకము",
      imageUrl:"assets/images/videoimages/thraithashakam.jpg",
      id: "j2QWdQxFMnQ"
    },
    {
      title: "త్రైత సిద్ధాంత చరిత్ర",
      imageUrl:"assets/images/videoimages/thraithasiddhanthacharitra.jpg",
      id: "GHLCcAhUm44"
    },
    {
      title: "తల్లి - తండ్రి",
      imageUrl:"assets/images/videoimages/tallitandri.jpg",
      id: "0SQd_LJHBTc"
    },
    {
      title: "మాయ మర్మము - ఆత్మ ధర్మము",
      imageUrl:"assets/images/videoimages/secretofmayaatmadharmas.jpg",
      id: "8lbFWSNDQXE"
    },
    
    {
      title: "ప్రపంచ శ్రద్ధ - పరమాత్మ శ్రద్ధ",
      imageUrl:"assets/images/videoimages/interestonworldinterestonparamatma.jpg",
      id: "tW9xFst3xOc"
    },
    {
      title: "తోలేవాడుr",
      imageUrl:"assets/images/videoimages/operator.jpg",
      id: "vLzkMmsjiK4"
    },
    {
      title: "మాయకుడు - అమాయకుడు",
      imageUrl:"assets/images/videoimages/innocentnoninnocent.jpg",
      id: "cZqwHaQ92Vc"
    },
    {
      title: "ఆస్తి - దోస్తి",
      imageUrl:"assets/images/videoimages/assetfriend.jpg",
      id: "BcR-UnfhFZo"
    },
    {
      title: "నీ వెనుకవాడు",
      imageUrl:"assets/images/videoimages/personbehindyou.jpg",
      id: "9Z5mN3-orEo"
    },
    {
      title: "ఆట - దోబూచులాట",
      imageUrl:"assets/images/videoimages/hideandseekgame.jpg",
      id: "MBuR3OMXJzY"
    },
    {
      title: "ఏడు ఆకాశములు",
      imageUrl:"assets/images/videoimages/sevenskies.jpg",
      id: "d09IePI5dUk"
    },
      
    {
      title: "బయటి సమాజము - లోపలి సమాజము",
      imageUrl:"assets/images/videoimages/visiblesocietyinvisiblesociety.jpg",
      id: "fXiXOWEUGAI"
    },
    {
      title: "పుట్టుట - గిట్టుట",
      imageUrl:"assets/images/videoimages/birthanddeath.jpg",
      id: "0-i4hkCYVJY"
    },
    {
      title: "భయం",
      imageUrl:"assets/images/videoimages/fear.jpg",
      id: "HdtdGhVICk8"
    },
    {
      title: "కర్మ మర్మము",
      imageUrl:"assets/images/videoimages/hiddenkarma.jpg",
      id: "XFHZ6sV4RHk"
    },
    {
      title: "శక్తి",
      imageUrl:"assets/images/videoimages/power.jpg",
      id: "9-fbu5uwbHQ"
    },
    {
      title: "జ్ఞాన శక్తి",
      imageUrl:"assets/images/videoimages/powerofknowledge.jpg",
      id: "xKhR5zzEA5o"
    },
    {
      title: "గ్రాహిత శక్తి",
      imageUrl:"assets/images/videoimages/assimilatingpower.jpg",
      id: "VeqoOM7pNEg"
    },
    {
      title: "జ్ఞానము దగ్గర జాగ్రత్త",
      imageUrl:"assets/images/videoimages/cautiousatknowledge.jpg",
      id: "bt8dG9Sqe0I"
    },
    {
      title: "పురుషోత్తమ",
      imageUrl:"assets/images/videoimages/paramatma.jpg",
      id: "BmmS-Moszaw"
    },
     {
      title: "దేవుడు ఇద్దరా! ఒక్కరా!",
      imageUrl:"assets/images/videoimages/twogodsoronegod.jpg",
      id: "baDwtOYsrIA"
    },
    {
      title: "శవము - శివము",
      imageUrl:"assets/images/videoimages/shavamshivam.jpg",
      id: "iCx5tlUICOw"
    },
    {
      title: "మోక్షము - మోసము",
      imageUrl:"assets/images/videoimages/mokshamumosamu.jpg",
      id: "8kkaNvEs5V8"
    },
    {
      title: "ఈశ్వర - పరమేశ్వర",
      imageUrl:"assets/images/videoimages/eswaraparameswara.jpg",
      id: "iLwoWbtvV5o"
    },
    {
      title: "పురుషోత్తమ - శ్రీరామ",
      imageUrl:"assets/images/videoimages/purushottamasrirama.jpg",
      id: "IfrcHDzJnXk"
    },
    {
      title: "దేవునికి ఒక్కడే కుమారుడు - దేవునికి అనేకమంది కుమారులు",
      imageUrl:"assets/images/videoimages/devunikiokkadeanekamandhikumarulu.jpg",
      id: "gFUsrM5237c"
    },
    {
      title: "అధికారి",
      imageUrl:"assets/images/videoimages/adhikari.jpg",
      id: "c538CXbVNCE"
    },
    {
      title: "దేవుడు ద్వితీయుడా? అద్వితీయుడా?",
      imageUrl:"assets/images/videoimages/godexistsastwoorone.jpg",
      id: "7VMU0qfLVm0"
    }];
}

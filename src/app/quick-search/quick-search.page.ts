import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.page.html',
  styleUrls: ['./quick-search.page.scss'],
})
export class QuickSearchPage implements OnInit {

  constructor(public global:GlobalService,
  public router:Router) { }

 
  ngOnInit() {
  }
 counter:any=0;
 newItem:any=null;
 searchedVerses:any=[];
 searchMessage:any=null;
 searchTerm:any=null;
 versesCount:any=0;
 verses:any=[];
 organized:any = [];
 emptyOrganized:any = [
  { chapterName: "రచయిత ముందుమాట", chapterNumber: "0", pages: [] },
  { chapterName: "1. సాంఖ్య యోగము", chapterNumber: "1", pages: [] },
  { chapterName: "2. కర్మ యోగము", chapterNumber: "2", pages: [] },
  { chapterName: "3. జ్ఞాన యోగము", chapterNumber: "3", pages: [] },
  { chapterName: "4. కర్మ సన్యాస యోగము", chapterNumber: "4", pages: [] },
  { chapterName: "5. ఆత్మ సంయమ యోగము", chapterNumber: "5", pages: [] },
  { chapterName: "6. విజ్ఞాన యోగము", chapterNumber: "6", pages: [] },
  { chapterName: "7. అక్షర పరబ్రహ్మ యోగము", chapterNumber: "7", pages: [] },
  { chapterName: "8. రాజవిద్య రాజగుహ్య యోగము", chapterNumber: "8", pages: [] },
  { chapterName: "9. విభూతి యోగము", chapterNumber: "9", pages: [] },
  { chapterName: "10. విశ్వరూప సందర్శన యోగము", chapterNumber: "10", pages: [] },
  { chapterName: "11. భక్తి యోగము", chapterNumber: "11", pages: [] },
  { chapterName: "12. క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగము", chapterNumber: "12", pages: [] },
  { chapterName: "13. గుణత్రయ విభాగ యోగము", chapterNumber: "13", pages: [] },
  { chapterName: "14. పురుషోత్తమ ప్రాప్తి యోగము", chapterNumber: "14", pages: [] },
  { chapterName: "15. దైవాసుర సంపద్విభాగ యోగము", chapterNumber: "15", pages: [] },
  { chapterName: "16. శ్రద్ధాత్రయ విభాగ యోగము", chapterNumber: "16", pages: [] },
  { chapterName: "17. మోక్ష సన్యాస యోగము", chapterNumber: "17", pages: [] }
];

 goToChapter(counter:any){
   this.counter=counter;
   this.newItem=this.global.geetha[counter]; 
 }
  
 openSearchShlokaContent(page: string | number){
   this.counter=page;
   this.newItem=this.global.geetha[page]; 
 }
 emptyVerses() {
  if (this.organized.length > 0) {
      for (var i = 0; i < this.organized.length; i++) {
          this.organized[i].pages = [];
      }
  }
}
goToContentPage(cc: { pageNumber: number; }) {
  console.log(cc);
  this.global.navigationFrom="quick-search";
  this.global.currentPage=cc.pageNumber;
  this.router.navigateByUrl('content');
}
 public searchWord() {
  this.emptyVerses();
  this.organized = this.emptyOrganized;
  this.versesCount = 0;
  this.searchedVerses = [];
  this.searchMessage = null;
  if (this.searchTerm.length < 2 || this.searchTerm == '') {
      this.searchMessage = 'కనీసం రెండక్షరములు ఇవ్వండి';
  }
  if (this.searchTerm != null && this.searchTerm.trim() && this.searchTerm.length >= 2) {
      for (var i = 31; i < this.global.geetha.length; i++) {
          if (this.global.geetha[i].verse != null &&
              this.global.geetha[i].verse.indexOf(this.searchTerm) > 0) {
              this.searchedVerses.push(this.global.geetha[i]);
              console.log(this.global.geetha[i].chapterName);
              console.log(this.global.geetha[i].chapterNumber);
              this.organized[this.global.geetha[i].chapterNumber].pages.push(this.global.geetha[i]);
          }
      }
      console.log(this.searchedVerses); 
      console.log('organized');
      console.log(this.organized[1]);
      if (this.searchedVerses.length == 0) {
          this.searchMessage = "ఈ పదానికి శ్లోకములు లభించలేదు. ";
      }
      if(this.searchedVerses.length >0){
        this.versesCount = this.searchedVerses.length;
        this.searchMessage = "'"+this.searchTerm+"' అనే పదమును వెతుకగా లభించిన శ్లోకములు  ";
      }
      
  }
   
};
}


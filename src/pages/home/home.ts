import { Component,ViewChild } from '@angular/core';
import { NavController ,Slides } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import {ProhomepageProvider} from '../../providers/prohomepage/prohomepage';
import { SpecificlanuagePage } from '../specificlanuage/specificlanuage';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import {  MenuController } from 'ionic-angular/index';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ProhomepageProvider]   
})
export class HomePage {
@ViewChild('pageSlider') pageSlider: Slides; 
tabs: any = '0';
items :any;
videoLocalData :any;      
errorLocalData :any;
toggled: boolean;
searchTerm: String = '';
videoUrl: SafeResourceUrl;
  constructor(private menu: MenuController,private domSanitizer: DomSanitizer,private  personservice:ProhomepageProvider,private statusBar: StatusBar,public navCtrl: NavController) {
this.notesData(); 
this.videoData();
this.errorData();
statusBar.show();
//this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/DuwXCFyo4-w')
  }
ionViewDidEnter() {
    this.statusBar.show();
this.menu.enable(true, 'menu1');
  }



callLangWisePage(value){
	  this.navCtrl.push(SpecificlanuagePage,{
		  "param1":value   
	  });
}

toggleSearch() {     
this.toggled = this.toggled ? false : true;
}
  
setFilteredItems() {
 this.items= this.personservice.filterItems(this.searchTerm);
    }

    

notesData(){
this.personservice.getNotesAllData().then(data=>{
this.items=data;
});
}

videoData(){
this.personservice.getVideoAllData().then(data=>{
this.videoLocalData=data;
});
}

errorData(){
this.personservice.getErrorAllData().then(data=>{
this.errorLocalData=data;
});
}

selectTab(index) {     
this.pageSlider.slideTo(index);
}
changeWillSlide($event) {
this.tabs = $event._snapIndex.toString();
}


}

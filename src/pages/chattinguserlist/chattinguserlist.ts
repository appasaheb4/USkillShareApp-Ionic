import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { ChattinguserlistProvider } from '../../providers/chattinguserlist/chattinguserlist';
import { ChattinguserroomPage } from '../chattinguserroom/chattinguserroom';


//@IonicPage()
@Component({   
  selector: 'page-chattinguserlist',
  templateUrl: 'chattinguserlist.html',  
providers:[ChattinguserlistProvider] 
})
export class ChattinguserlistPage {
    getAllUserList:any;
    data ={userId:""};
  constructor(public storage:Storage,private  personservice:ChattinguserlistProvider,public navCtrl: NavController, public navParams: NavParams) {
this.storage.get('userId').then((val) => {
this.data.userId=val;
this.getAllUserChattingList(val);
});
  }

getAllUserChattingList(val){
this.personservice.getChattiigUserList(val).then(data=>{   
this.getAllUserList=data; 
});
}

  

chattingRoom(val){   
 this.navCtrl.push(ChattinguserroomPage,{
		  "param1":val   
	  });
}

}

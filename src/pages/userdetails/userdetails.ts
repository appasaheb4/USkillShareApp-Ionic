import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import {Storage} from '@ionic/storage';  

import { UserdetailsproProvider } from '../../providers/userdetailspro/userdetailspro';
import { ChattinguserroomPage } from '../chattinguserroom/chattinguserroom';
//@IonicPage()  
@Component({       
  selector: 'page-userdetails',
  templateUrl: 'userdetails.html',  
  providers:[UserdetailsproProvider]    
})  
export class UserdetailsPage {
    data = {loginUserId:"",userId:"",fullName:"",mobileNo:"",email:"",birtDate:"",skill:"",mobileStatus:"",emailStatus:"",serverUserId:""};        
    getSingleUserInfo:any;
  constructor(public storage:Storage,private sms: SMS,private callNumber: CallNumber,private  personservice:UserdetailsproProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.data.userId = navParams.get('param1');  
    this.getUserInfomation(this.data.userId);

    this.storage.get('userId').then((val) => {
this.data.loginUserId=val;
});
  }   

getUserInfomation(userId){
this.personservice.getSingleUserInfo(userId).then(data=>{   
this.getSingleUserInfo=data;   
this.data.fullName=this.getSingleUserInfo[0].fullName;
this.data.mobileNo=this.getSingleUserInfo[0].mobileno;
this.data.email=this.getSingleUserInfo[0].email;
this.data.birtDate=this.getSingleUserInfo[0].birtDate;
this.data.skill=this.getSingleUserInfo[0].skill;
this.data.mobileStatus=this.getSingleUserInfo[0].mobileStatus;
this.data.emailStatus=this.getSingleUserInfo[0].emailStatus;
this.data.serverUserId=this.getSingleUserInfo[0].userIdServer; 
});
} 
    

calling(){
this.callNumber.callNumber(this.data.mobileNo, true)
.then(() => console.log('Launched dialer!'))
.catch(() => console.log('Error launching dialer'));
}  



smsShare(){
var options={
replaceLineBreaks: false, // true to replace \n by a new line, false by default
android: {
intent: 'INTENT'  // Opens Default sms app
//intent: '' // Sends sms without opening default sms app
}
}
this.sms.send(this.data.mobileNo,'',options)
.then(()=>{
console.log('sent');     
},()=>{
console.log('not sent');
});
}

chattingRoom(){
 this.navCtrl.push(ChattinguserroomPage,{
		  "param1":this.data.userId   
	  });
}


}

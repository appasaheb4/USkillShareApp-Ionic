import { Component,ViewChild} from '@angular/core';
import { NavController, NavParams,Content,AlertController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Validators,FormBuilder } from '@angular/forms';
import { ChattinguserroomproProvider } from '../../providers/chattinguserroompro/chattinguserroompro';
import { Push, PushObject, PushOptions} from '@ionic-native/push';
//@IonicPage()
@Component({
  selector: 'page-chattinguserroom',
  templateUrl: 'chattinguserroom.html',
providers:[ChattinguserroomproProvider]  
})   
export class ChattinguserroomPage {
    @ViewChild('content') content:any; 
    chattingroomform:any;
    getAllChattingMessage:any;
  data = {userId:"",resiverId:"",message:"",type:"",imagePath:""};
  constructor(public alertCtrl:AlertController,public push: Push,private  personservice:ChattinguserroomproProvider,public _form:FormBuilder,public http: HttpClient,public loading: LoadingController,public toastCtrl: ToastController,public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
this.chattingroomform=this._form.group({  
'data.message' : [null]
});    
this.storage.get('userId').then((val) => {      
this.data.userId=val;
this.getChattingMessageMethod(this.data.userId,this.data.resiverId);
});
this.data.resiverId = navParams.get('param1');
this.data.message ='';
this.pushsetup();
}    
         
 ionViewDidLoad() {
    this.content.scrollToBottom(300);//300ms animation speed
  }


getChattingMessageMethod(userId,resiverId){
this.personservice.getChattingMessage(userId,resiverId).then(data=>{   
this.getAllChattingMessage=data; 
});
}



pushsetup() {
 const options: PushOptions = {
     android: {
         senderID: '253840953533',
                sound: "true",
                vibrate: "true",
                forceShow: "true"
     },
     ios:{
         alert: 'true',
         badge: true,  
         sound: 'false'  
     },
     windows: {}
  };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => {
alert('hi');
this.content.scrollToBottom(300);//300ms animation speed
this.getChattingMessageMethod(this.data.userId,this.data.resiverId);  
  });
    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
}


    

sendMessage(){
let loader = this.loading.create({
content: 'Wating.........',
});
loader.present().then(() => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {   
message: this.data.message,
userId: this.data.userId,
resiverId:this.data.resiverId, 
type: 'message' ,
}                   
this.http.post('http://skillshare.web44.net/ChattingUserRoom/sentMessage', JSON.stringify(data), {
    headers: headersNew
  })
  .subscribe(res =>  {
if(res.toString()=="yes")             
{
loader.dismiss();     
let toast = this.toastCtrl.create({
message: 'Sent',
duration: 2000    
});
toast.present();
this.data.message ='';
this.getChattingMessageMethod(this.data.userId,this.data.resiverId);
this.content.scrollToBottom(300);//300ms animation speed
}
}, (err) => {
loader.dismiss();
let toast = this.toastCtrl.create({
message: 'Not sent.',
duration: 2000
});
toast.present();
});
});
}
}

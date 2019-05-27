import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
import { AlertController } from 'ionic-angular';

interface SpePro {
  specificLangData: string;
}

//@IonicPage()
@Component({
  selector: 'page-specificlanuage',
  templateUrl: 'specificlanuage.html',
})
export class SpecificlanuagePage {

public langWiseData:any;
public langIdLocal:any;
public commentData:any;
public commname:any;
public commemail:any;
public commcomment:any;
public userId:any;
public currentMobileNo:any;
public currrentDisc:any;
public currentHeading:any;
public currentImagePath:any;
public currentFullName:any;
public currentEmail:any;
public currentUserId:any;

  constructor(private navCtrl: NavController, private navParams: NavParams,private http: HttpClient,private loading: LoadingController,private toastCtrl: ToastController,private socialSharing: SocialSharing,private sms: SMS,private callNumber: CallNumber,private alertCtrl: AlertController) {
this.langIdLocal = navParams.get('param1');   
this.getlangWiseData();
  }

 

back(){
this.navCtrl.pop();    
}

getlangWiseData(){   
let loader = this.loading.create({
content: 'Wating.........',
});           
loader.present().then(() => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {
langId: this.langIdLocal,    
}
this.http.post<SpePro>('http://skillshare.web44.net/SpecificLangNews/getMobileLangeData', JSON.stringify(data), {
    headers: headersNew  
  })
.subscribe(res => { 
this.langWiseData=res.specificLangData;
this.currentMobileNo=this.langWiseData[0].mobileNo; 
 this.currrentDisc=this.langWiseData[0].discription;    
   this.currentHeading=this.langWiseData[0].heading;
     this.currentImagePath=this.langWiseData[0].imagePath;
      this.currentFullName=this.langWiseData[0].fullName;
       this.currentEmail=this.langWiseData[0].emailid;
        this.currentUserId=this.langWiseData[0].userId;   
loader.dismiss();
}, (err) => {
loader.dismiss();
let toast = this.toastCtrl.create({
message: 'Data not found.',       
duration: 2000
});
toast.present();
});
});
}
 
 

regularShare(){
// share(message, subject, file, url)
var path="http://skillshare.web44.net/SpecificLangNews?id="+this.langIdLocal+"&userId="+this.currentUserId;
this.socialSharing.share(this.currentHeading+'\n     ______________________________      \n\n'+ this.currrentDisc+'\n'+' by:'+this.currentFullName+'('+this.currentEmail+')',"http://skillshare.web44.net",this.currentImagePath, '\n\n'+path+'\n'); 
}    
whatsappShare(){  
var path="http://skillshare.web44.net/SpecificLangNews?id="+this.langIdLocal+"&userId="+this.currentUserId;     
this.socialSharing.shareViaWhatsApp(this.currentHeading+'\n     ______________________________      \n\n'+ this.currrentDisc+'\n'+' by:'+this.currentFullName+'('+this.currentEmail+')',this.currentImagePath, '\n\n'+path+'\n');           
}         
  
  
smsShare(){
   
const alert = this.alertCtrl.create({
title: 'Sent sms',
inputs: [
{
name: 'mobileNo',
placeholder: 'Mobile Number'
}
],
buttons: [
{
text: 'Cancel',
role: 'cancel',
handler: data => {
console.log('Cancel clicked');
}
},
{
text: 'Sent',
handler: data => {
var options={
replaceLineBreaks: false, // true to replace \n by a new line, false by default
android: {
intent: 'INTENT'  // Opens Default sms app
//intent: '' // Sends sms without opening default sms app
}
}
this.sms.send(data.mobileNo,this.currrentDisc,options)
.then(()=>{
console.log('sent');     
},()=>{
console.log('not sent');
});
}
}
]
});
alert.present();
}
    
calling(){
this.callNumber.callNumber(this.currentMobileNo, true)
.then(() => console.log('Launched dialer!'))
.catch(() => console.log('Error launching dialer'));
}    

}

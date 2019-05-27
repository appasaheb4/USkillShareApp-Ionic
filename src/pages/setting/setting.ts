import { Component } from '@angular/core';
import { ActionSheetController,NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { SettingproProvider } from '../../providers/settingpro/settingpro';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';


//@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
providers:[SettingproProvider]  
})
export class SettingPage {
  data = {userId:""};   
    getAllStatusData:any;
    public mobileStatusL: boolean;  
    public emailStatusL: boolean; 
    mobileLocalStatus : string; 
  constructor(public http: HttpClient,public loading: LoadingController,public toastCtrl: ToastController,public storage:Storage,private  personservice:SettingproProvider,public navCtrl: NavController, public navParams: NavParams) {

this.storage.get('userId').then((val) => {
this.data.userId=val;
this.getSettingUser(val);
});   

  }

 getSettingUser(val){
this.getAllStatusData=null;    
this.personservice.getMobileAndEmailStatus(val).then(data=>{   
this.getAllStatusData=data;   

if(this.getAllStatusData[0].mobileStatus=="On"){
this.mobileStatusL=true;
}
 if(this.getAllStatusData[0].mobileStatus=="Off"){
this.mobileStatusL=false;
}
 if(this.getAllStatusData[0].emailStatus=="On"){
this.emailStatusL=true;
}
 if(this.getAllStatusData[0].emailStatus=="Off"){
this.emailStatusL=false;
}
});
}




updateItem() {
if(this.mobileStatusL==false){
this.mobileLocalStatus="Off";
this.mobileStatusL=false;
}
else{  
this.mobileLocalStatus="On";
this.mobileStatusL=true;  
}
let loader = this.loading.create({
content: 'Wating.........',
});
loader.present().then(() => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {   
mobileStatus: this.mobileLocalStatus,
userId:this.data.userId,
}                 
this.http.post('http://skillshare.web44.net/Setting/mobileStatusUpdate', JSON.stringify(data), {
    headers: headersNew
  })
  .subscribe(res =>  {
if(res.toString()=="yes")                
{
loader.dismiss();     
}
}, (err) => {
loader.dismiss();
});
});
  }




emailStatusChange() {
if(this.emailStatusL==false){
this.mobileLocalStatus="Off";
this.emailStatusL=false;
}
else{  
this.mobileLocalStatus="On";
this.emailStatusL=true;  
}
let loader = this.loading.create({
content: 'Wating.........',
});
loader.present().then(() => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {      
emailStatus: this.mobileLocalStatus,
userId:this.data.userId,
}                 
this.http.post('http://skillshare.web44.net/Setting/emailStatusUpdate', JSON.stringify(data), {
    headers: headersNew
  })
  .subscribe(res =>  {
if(res.toString()=="yes")                
{
loader.dismiss();     
}
}, (err) => {
loader.dismiss();
});
});
  }




}

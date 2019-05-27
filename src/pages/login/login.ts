import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Push, PushObject, PushOptions} from '@ionic-native/push';
import {  MenuController } from 'ionic-angular/index';
     

import { HomePage } from '../home/home';
import { RegistationPage } from '../registation/registation';
   


//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
private loginForm:any;
data = {email:"",password:"",tokenNo:""};
  constructor(public push: Push,private statusBar: StatusBar,private alertCtrl:AlertController,private storage:Storage,private menu: MenuController,private navCtrl: NavController,private _form:FormBuilder,private http: HttpClient,private loading: LoadingController,private toastCtrl: ToastController) {
        
  this.loginForm=this._form.group({
     'data.email' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50),Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
      'data.password': [null,Validators.required]
    });

this.storage.get('tokenNo').then((val) => {
console.log(val);
if(val==null)
{
this.pushsetup();
}
else{
this.data.tokenNo = val;
this.saveNotLoginUser();
}
});  


  }


ionViewDidEnter() {
   this.statusBar.show();
this.menu.enable(false, 'menu1');
  }  



pushsetup() {
 const options: PushOptions = {
     android: {
         senderID: '253840953533',
                sound: "true",
                vibrate: "true",
                forceShow: "true"
     },
 browser: {
                pushServiceURL: 'http://skillshare.web44.net'
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
    if (notification.additionalData.foreground) {
      let youralert = this.alertCtrl.create({
        title: 'USkillShare',
        message: notification.message
      });
      youralert.present();
    }
  });
    pushObject.on('registration').subscribe((registration: any) => {
    this.data.tokenNo=registration.registrationId;
    
  });
    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
this.saveNotLoginUser();
}


saveNotLoginUser(){   
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
  let data = {
  tokenNo: this.data.tokenNo,  
}  
this.http.post('http://skillshare.web44.net/Registation/saveNotLoginData', JSON.stringify(data), {
    headers: headersNew  
  })
.subscribe(res => {
}); 
}
 

 goRegiationPage(){
  	this.navCtrl.push(RegistationPage);
  }
  
  login(){
    let loader = this.loading.create({
    content: 'Wating.........',
  });
loader.present().then(() => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {
  email: this.data.email,   
  password: this.data.password, 
  tokenNo:  this.data.tokenNo,   
}
this.http.post('http://skillshare.web44.net/HomePage/loginMobile', JSON.stringify(data), {
    headers: headersNew  
  })
.subscribe(res => {  
var newArry= res.toString();
var array =  newArry.split('='); 
if(array[0]=="yes")
{
  loader.dismiss();
  this.storage.set('email',this.data.email);
  this.storage.set('password',this.data.password);
  this.storage.set('userId', array[1]);
  this.storage.set('userType', array[2]);
    this.navCtrl.setRoot(HomePage);
    }
  else{
    loader.dismiss();
    let toast = this.toastCtrl.create({
    message: 'Please enter correct email  and password.',
    duration: 2000
  });
  toast.present();
  }
}, (err) => {
	 loader.dismiss();
	    let toast = this.toastCtrl.create({
	    message: 'Please enter correct email  and password.',
	    duration: 2000
	  });
	  toast.present();
});
 });

  }
  
emailSent() {      
	  let alert = this.alertCtrl.create({
	    title: 'Forgot Password',
	    inputs: [
	      {
	        name: 'email',
                type:'email',
	        placeholder: 'Email'
	      },
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	      },
	      {
	        text: 'Sent',
	        handler: data12 => {
	        let loader = this.loading.create({
	        	    content: 'Wating.........',
	        	  });
	        	loader.present().then(() => {
	        	let headersNew = new HttpHeaders();
                        headersNew.append('Content-Type', 'application/json');
	        	  let data = {
	        	  email: data12.email   
	        	}
                        this.http.post('http://skillshare.web44.net/HomePage/forgotPasswordMobile', JSON.stringify(data), {
                             headers: headersNew  
                            })
                        .subscribe(res => { 
	        	  if(res.toString()=="yes")
	        	  {   
	        	    loader.dismiss();
	        	    let toast = this.toastCtrl.create({
	        	    message: 'Email sent thanks.',
	        	    duration: 2000
	        	  });
	        	  toast.present();
	        	  }
	        	  else{
	        	    loader.dismiss();
	        	    let toast = this.toastCtrl.create({
	        	    message: 'Correct insert email Address.',
	        	    duration: 2000
	        	  });
	        	  toast.present();

	        	  }
	        	}, (err) => {
	        		 loader.dismiss();
	        		    let toast = this.toastCtrl.create({
	        		    message: 'Password not sent.',
	        		    duration: 2000
	        		  });
	        		  toast.present();
	        	});
	        	 });

	          
	          
	          
	        }
	      }
	    ]
	  });
	  alert.present();
	}
  
  
  
  requestAdmin(){
	  let alert = this.alertCtrl.create({
	    title: 'Admin Request',
	    inputs: [
	      {
	        name: 'email',
                type:'email',
	        placeholder: 'Email'
	      },
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	      },
	      {
	        text: 'Sent',
	        handler: data12 => {
	        let loader = this.loading.create({
	        	    content: 'Wating.........',
	        	  });   
	        	loader.present().then(() => {
	        	let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
	        	  let data = {
	        	  email: data12.email   
	        	}
this.http.post('http://skillshare.web44.net/HomePage/adminRequsentSentMobile', JSON.stringify(data), {
    headers: headersNew
  })
  .subscribe(res =>  {
  if(res.toString()=="yes")
	        	  {   
	        	    loader.dismiss();
	        	    let toast = this.toastCtrl.create({
	        	    message: 'Admin sent request successfully.',
	        	    duration: 2000
	        	  });
	        	  toast.present();
	        	  }
	        	  else{
	        	    loader.dismiss();
	        	    let toast = this.toastCtrl.create({
	        	    message: 'Request not sent.',
	        	    duration: 2000
	        	  });
	        	  toast.present();

	        	  }
	        	}, (err) => {
	        		 loader.dismiss();
	        		    let toast = this.toastCtrl.create({
	        		    message: 'Request not sent.',
	        		    duration: 2000
	        		  });
	        		  toast.present();
	        	});
	        	 });
}
	      }
	    ]
	  });
	  alert.present(); 
  }  

}

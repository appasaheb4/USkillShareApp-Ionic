import { Component,ViewChild } from '@angular/core';
import { Nav,Platform,AlertController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';
import { Push, PushObject, PushOptions} from '@ionic-native/push';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserlistPage } from '../pages/userlist/userlist';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { ChattinguserlistPage } from '../pages/chattinguserlist/chattinguserlist';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SharingPage } from '../pages/sharing/sharing';  
import { SettingPage } from '../pages/setting/setting';
import { AboutPage } from '../pages/about/about';

@Component({
 selector: 'app-page',  
templateUrl: 'app.html' 
})        
export class MyApp {   
@ViewChild(Nav) nav: Nav;    
  private rootPage:any;   
  pages: Array<{title: string, component: any,icon: any}>;
  constructor(public push: Push,public alertCtrl:AlertController,private storage:Storage,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
       this.pushsetup();
        this.showPage();
        splashScreen.hide();
    });

     
this.pages = [       
{ title: 'Home', component: HomePage,icon:'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/slideMenuHome.png' },
{ title: 'User List', component: UserlistPage,icon:'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderUserList.png' },
{ title: 'Chat', component: ChattinguserlistPage,icon:'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderChatting.png' },
{ title: 'My Profile', component: MyprofilePage,icon:'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderMyProfile.png' },
{ title: 'Feedback', component: FeedbackPage,icon:'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderFeedback.png' },
{ title: 'About', component: AboutPage,icon:'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderAbout.png' },
{ title: 'Setting', component: SettingPage,icon:'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/slideSetting.png' },
{ title: 'Share', component: SharingPage,icon:'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderShare.png' },
{ title: 'Logout', component: LoginPage,icon:'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderLogout.png' },
   
];
  }    
public showPage(){
this.storage.get('userId').then((val) => {
this.storage.get('email').then((val2) => {
if(val!=null && val2!=null)     
{
this.rootPage=HomePage;
}
else{
this.rootPage=LoginPage;
}
});
});
}

openPage(page) {
if(page.component==HomePage)
{
this.nav.setRoot(page.component);
}else if(page.component==LoginPage)
{
let confirm = this.alertCtrl.create({
      title: '',
      message: 'Are you sure you want to Sign out?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
         this.storage.remove('userId');
this.storage.remove('email');
this.storage.remove('password');
this.storage.remove('userType'); 
this.nav.setRoot(LoginPage);   

          }
        }
      ]
    });
    confirm.present();
}
else{
this.nav.push(page.component);
}
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
    this.storage.set('tokenNo',registration.registrationId);
  });
    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
}



}

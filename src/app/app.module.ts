import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { Push} from '@ionic-native/push';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
import { StatusBar } from '@ionic-native/status-bar';    
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistationPage } from '../pages/registation/registation';
import { SpecificlanuagePage } from '../pages/specificlanuage/specificlanuage';
import { UserlistPage } from '../pages/userlist/userlist';   
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { ChnagepasswordPage } from '../pages/chnagepassword/chnagepassword';
import { GlobalchattingPage } from '../pages/globalchatting/globalchatting';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SharingPage } from '../pages/sharing/sharing';
import { UserdetailsPage } from '../pages/userdetails/userdetails';
import { SettingPage } from '../pages/setting/setting';
import { AboutPage } from '../pages/about/about';4
import { ChattinguserlistPage } from '../pages/chattinguserlist/chattinguserlist';
import { ChattinguserroomPage } from '../pages/chattinguserroom/chattinguserroom';

import { ProhomepageProvider } from '../providers/prohomepage/prohomepage';
import { UserlistproProvider } from '../providers/userlistpro/userlistpro';
import { UserdetailsproProvider } from '../providers/userdetailspro/userdetailspro';
import { SettingproProvider } from '../providers/settingpro/settingpro';
import { ChattinguserroomproProvider } from '../providers/chattinguserroompro/chattinguserroompro';
import { ChattinguserlistProvider } from '../providers/chattinguserlist/chattinguserlist';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,RegistationPage,SpecificlanuagePage,UserlistPage,MyprofilePage,ChnagepasswordPage,GlobalchattingPage,
    FeedbackPage,SharingPage,UserdetailsPage,SettingPage,AboutPage,ChattinguserlistPage,ChattinguserroomPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom',tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,RegistationPage,SpecificlanuagePage,UserlistPage,MyprofilePage,ChnagepasswordPage,GlobalchattingPage,
    FeedbackPage,SharingPage,UserdetailsPage,SettingPage,AboutPage,ChattinguserlistPage,ChattinguserroomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
SocialSharing,
 File,
    Transfer,
    Camera,
    FilePath,
SMS,   
CallNumber,
Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProhomepageProvider,
    UserlistproProvider,
    UserlistproProvider,
    UserdetailsproProvider,
    SettingproProvider,
    ChattinguserroomproProvider,
    ChattinguserlistProvider
  ]
})
export class AppModule {}

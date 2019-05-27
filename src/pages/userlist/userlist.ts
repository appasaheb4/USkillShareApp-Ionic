import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { UserlistproProvider } from '../../providers/userlistpro/userlistpro';
import { UserdetailsPage } from '../userdetails/userdetails';
//@IonicPage()
@Component({
  selector: 'page-userlist',
  templateUrl: 'userlist.html',
    providers:[UserlistproProvider]  
})
export class UserlistPage {
    getAllDataShow:any;
  constructor(private callNumber: CallNumber,private  personservice:UserlistproProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.getData();
  }

 getData(){
this.personservice.getUserListMethod().then(data=>{
this.getAllDataShow=data;
});
}

calling(n:string){
this.callNumber.callNumber(n, true)
.then(() => console.log('Launched dialer!'))
.catch(() => console.log('Error launching dialer'));
} 

userDetailsOpen(userId){
  this.navCtrl.push(UserdetailsPage,{
		  "param1":userId   
	  });
}



}

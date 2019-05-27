import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-globalchatting',
  templateUrl: 'globalchatting.html',
})
export class GlobalchattingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlobalchattingPage');
  }

}

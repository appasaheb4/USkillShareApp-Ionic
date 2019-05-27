import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-sharing',
  templateUrl: 'sharing.html',
})
export class SharingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharingPage');
  }

}

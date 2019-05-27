import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {  Validators,ValidatorFn,AbstractControl,FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

//@IonicPage()
@Component({
  selector: 'page-registation',
  templateUrl: 'registation.html',
})
export class RegistationPage {
private registationForm:any;
data = {firstName:"",lastName:"",mobileno:"",birtDate:"",email:"",skill:"",pass1:"",pass2:"",tokenNo:""};
  constructor(private storage:Storage,private navCtrl: NavController,private _form:FormBuilder,private http: HttpClient,private loading: LoadingController,private toastCtrl: ToastController) {
this.registationForm=this._form.group({
       'data.firstName': [null,  Validators.required],
       'data.lastName': [null, Validators.required],
       'data.mobileno': [null ,Validators.required],
       'data.birtDate': [null,Validators.required],
      'data.email': [null, Validators.required],
    'data.skill': [null, Validators.required],
       'data.pass1': ['',  Validators.required],
       'data.pass2': ['', [Validators.required,this.equalto('data.pass1')]],
    });
    this.data.birtDate=new Date().toISOString();
this.storage.get('tokenNo').then((val) => {
this.data.tokenNo=val;
}); 
}

   

  
equalto(field_name): ValidatorFn {
return (control: AbstractControl): {[key: string]: any} => {
let input = control.value;
let isValid=control.root.value[field_name]==input
if(!isValid){
return { 'equalTo': {isValid} }
}
else{
return null;
}
}       
}
  
back(){
    this.navCtrl.pop();
  }     

saveData(){
    let loader = this.loading.create({
    content: 'Wating.........',
  });
loader.present().then(() => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
  let data = {
  firstName: this.data.firstName,
  lastName: this.data.lastName,
  email: this.data.email, 
  skill: this.data.skill,
  password: this.data.pass2,
  mobileNo:this.data.mobileno,
  birtDate:this.data.birtDate,
  tokenNo: this.data.tokenNo,   
}  
this.http.post('http://skillshare.web44.net/HomePage/registationMobile', JSON.stringify(data), {
    headers: headersNew  
  })
.subscribe(res => { 
  if(res.toString()=="yes")
  {
    loader.dismiss();
    let toast = this.toastCtrl.create({  
    message: 'Registration Successful',
    duration: 2000
  });
  toast.present();
  this.navCtrl.pop();
  }
}, (err) => {
	loader.dismiss();
	  let toast = this.toastCtrl.create({
		    message: 'Not Registration.',
		    duration: 2000
		  });
		  toast.present();
});
 });

 }


}

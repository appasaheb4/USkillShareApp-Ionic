import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface HomePro {
  getSingleUserInfo: string;
}

@Injectable()
export class UserdetailsproProvider {
    data: any;
  constructor(public http: HttpClient) {
   this.data=null;
  }
  

//User Details
getSingleUserInfo(val){
if (this.data) {
return Promise.resolve(this.data);
}
return new Promise(resolve => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {
  userId: val,  
}
this.http.post<HomePro>('http://skillshare.web44.net/UserDetails/getSingleUserDetails', JSON.stringify(data), {
    headers: headersNew     
  })
.subscribe(res => {    
this.data = res.getSingleUserInfo;
resolve(this.data);
});
});
}


}

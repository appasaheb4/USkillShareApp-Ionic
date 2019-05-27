import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface HomePro {
  getAllUserList: string;
}

@Injectable()
export class UserlistproProvider {
data: any;
  constructor(public http: HttpClient) {
     this.data = null;
  }



//User List
getUserListMethod(){
if (this.data) {
return Promise.resolve(this.data);
}
return new Promise(resolve => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {
  email: '',  
}
this.http.post<HomePro>('http://skillshare.web44.net/UserList/getAllUser', JSON.stringify(data), {
    headers: headersNew  
  })
.subscribe(res => { 
this.data = res.getAllUserList;
resolve(this.data);
});
});
}

}

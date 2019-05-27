import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface Chatting {
  getChattingUserComm: string;
}


@Injectable()
export class ChattinguserlistProvider {
    data : any;
  constructor(public http: HttpClient) {
    this.data=null;
  }


//Chattig User List
getChattiigUserList(userId){
this.data = null;
if (this.data) {  
return Promise.resolve(this.data);
}
return new Promise(resolve => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {
  userId: userId,     
}
this.http.post<Chatting>('http://skillshare.web44.net/ChattingUserList/getChatUserList', JSON.stringify(data), {
    headers: headersNew     
  })   
.subscribe(res => {    
this.data = res.getChattingUserComm;
resolve(this.data);
});
});
}

}

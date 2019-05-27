import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface Chatting {
  getAllChatMessage: string;
}


    
@Injectable()
export class ChattinguserroomproProvider {
    data: any;
  constructor(public http: HttpClient) {
   this.data = null;
  }


//User Details
getChattingMessage(userId,senderId){
this.data = null;
if (this.data) {  
return Promise.resolve(this.data);
}
return new Promise(resolve => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {
  userId: userId,  
  senderId: senderId,    
}
this.http.post<Chatting>('http://skillshare.web44.net/ChattingUserRoom/getChattingMessage', JSON.stringify(data), {
    headers: headersNew     
  })   
.subscribe(res => {    
this.data = res.getAllChatMessage;
resolve(this.data);
});
});
}

}

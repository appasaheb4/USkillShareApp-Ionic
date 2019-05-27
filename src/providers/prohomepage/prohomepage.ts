import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface HomePro {
  slider: string;
  langNews: string;
  getAllLang: string;
}

@Injectable()
export class ProhomepageProvider {
data: any;
langData: any;
items : any;
  constructor(public http: HttpClient) {
   this.data = null;
   this.langData =null;
  }
 filterItems(searchTerm){
       return this.items.filter((item) => {             
            return (item.langName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.heading.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 );
        });    
    }
    
//Home Page -Language News
getNotesAllData(){
if (this.data) {
return Promise.resolve(this.data);
}
return new Promise(resolve => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {
  email: '',  
}
this.http.post<HomePro>('http://skillshare.web44.net/Welcome/getNotesAllData', JSON.stringify(data), {
    headers: headersNew  
  })
.subscribe(res => { 
this.data = res.langNews;
this.items= res.langNews;
resolve(this.data);
});
});
}

getVideoAllData(){
if (this.data) {
return Promise.resolve(this.data);
}
return new Promise(resolve => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {
  email: '',  
}
this.http.post<HomePro>('http://skillshare.web44.net/Welcome/getVideoAllDataMobile', JSON.stringify(data), {
    headers: headersNew  
  })
.subscribe(res => { 
this.data = res.langNews;
this.items= res.langNews;
resolve(this.data);
});
});
}

getErrorAllData(){
if (this.data) {
return Promise.resolve(this.data);
}
return new Promise(resolve => {
let headersNew = new HttpHeaders();
headersNew.append('Content-Type', 'application/json');
let data = {
  email: '',  
}  
this.http.post<HomePro>('http://skillshare.web44.net/Welcome/getErrorAllDataMobile', JSON.stringify(data), {
    headers: headersNew  
  })
.subscribe(res => { 
this.data = res.langNews;
this.items= res.langNews;
resolve(this.data);
});
});
}




}

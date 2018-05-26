import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonFacService {
  private userName:string;
  constructor(private http:Http) {  }
  alertService = (txt) => {
    alert(txt);
  }
  getCommonData = () =>{
    if(!this.userName){
      this.userName = localStorage.getItem("userName");
    }
    return this.userName?this.userName:'';
  }
  setCommonData = (data) =>{
    this.userName = data;
    localStorage.setItem("userName",data);
  }
  makeCall = (url,data) =>{
        return this.http.get(url)
        .map((res:any) => res.json())
        .catch((error:any) => {return error;});
  }
}

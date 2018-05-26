import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonFacService } from '../services/common-fac.service'
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: []
})
export class LoginPageComponent implements OnInit {
  private usrName:any;
  private pwd:any;
  formClick:boolean=false;
  invalidData:boolean=false;
  constructor(
    public route:Router,
    private service:CommonFacService
  ) { }

  loginFormSubmit(data) {
    this.formClick = true;
    this.invalidData = false;
    if(data.invalid){
      return;
    }
    this.service.makeCall('./assets/data/login.json','').subscribe((res) => {
      let response = res;
      if(response.loginStatus == "true" && response.usr == data.value.name && response.pwd == data.value.pwd){
        this.service.setCommonData(data.value.name);
        this.route.navigate(['/home']);
      }
      else{
        this.invalidData = true;
      }
    },() =>{

    });
  }
  ngOnInit() {
    this.service.setCommonData('');
  }

}

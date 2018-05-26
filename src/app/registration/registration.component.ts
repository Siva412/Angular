import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm : FormGroup;
  fb: FormBuilder;
  firstName : FormControl;
  lastName : FormControl;
  mobile : FormControl;
  email : FormControl;
  constructor(public route: Router) { }
  createFormControls = () => {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.mobile = new FormControl('', [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]);
    this.email = new FormControl('', Validators.required);
  }
  createFormgroup = () => {
    this.myForm = new FormGroup({
      firstName : this.firstName,
      lastName : this.lastName,
      mobile : this.mobile,
      email : this.email
    })
  }
  regSubmit = (data) => {
    //console.log(data);
    if(data.valid){
      this.route.navigate(['home']);
    }
  }
  ngOnInit() {
    this.createFormControls();
    this.createFormgroup();
  }

}

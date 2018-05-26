import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonFacService } from '../services/common-fac.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {
  public userName:string;
  hideLogout:boolean=true;
  constructor(public route:Router, private service:CommonFacService) {
    
   }
  logout = () => {
    this.service.setCommonData('');
    localStorage.removeItem("userName");
    this.route.navigate(['']);
  }

  getRoute = () => this.route.events.subscribe((res) => { 
    if(this.service.getCommonData()){
      this.hideLogout = false;
    }
    else{
      this.hideLogout = true;
    }
  });

  ngOnInit() { 
    this.getRoute();
  }

}

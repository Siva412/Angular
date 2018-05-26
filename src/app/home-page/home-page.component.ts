import { Component, OnInit } from '@angular/core';
import { CommonFacService } from '../services/common-fac.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  prodList:any;
  addedProdList:Object[]=[];
  constructor(private service:CommonFacService) { }
  prodAdded(data){
    this.addedProdList.push(data);
  }
  ngOnInit() {
    this.service.makeCall('./assets/data/products.json','').subscribe(((res) => {
      if(res && res.productList.length > 0){
        this.prodList = res.productList;
      }
    }));
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input() product:Object;
  @Output() prodEvent = new EventEmitter<Object>();
  ngOnInit() {
  }
  addItem(data){
    this.prodEvent.emit(data);
  }
}

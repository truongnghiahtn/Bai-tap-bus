import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  @Input() ghe;
  @Output() eventchonghe = new EventEmitter();
 
  trangthaichon:boolean=false;

  constructor() { }

  ngOnInit() {
  }
chonghe(){
  
  this.trangthaichon=!this.trangthaichon;
  this.eventchonghe.emit(this.trangthaichon);
  
  
}


}

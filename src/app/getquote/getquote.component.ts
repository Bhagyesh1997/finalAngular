import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-getquote',
  templateUrl: './getquote.component.html',
  styleUrls: ['./getquote.component.css']
})
export class GetquoteComponent implements OnInit {
  val1 : string;
  val2 : string;
  menu1 : any;
  menu2 : any;
  data : any;
  constructor(private service : DataService) { }

  ngOnInit() {
    let observableResult1 = this.service.getVehicleNames();
    observableResult1.subscribe((result)=>{
      this.menu1 = result;
    });
  }

  checkItem1(event)
  {
    this.val1 = event.target.value;
    console.log(this.val1);
    let observableResult = this.service.getColor(this.val1);
    observableResult.subscribe((result)=>{
      this.menu2 = result;
      console.log(this.menu2);
    });
  }
  checkItem2(event)
  {
    this.val2 = event.target.value;
    console.log(this.val2);
    let observableResult = this.service.getDetails(this.val1,this.val2);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.data = result;
    })
  }
}

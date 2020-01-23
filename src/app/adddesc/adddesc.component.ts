import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddesc',
  templateUrl: './adddesc.component.html',
  styleUrls: ['./adddesc.component.css']
})
export class AdddescComponent implements OnInit {
  menu : any;
  detail = {
    "model":"",
    "engine":"",
    "price":"",
    "color":""
  };
  colors : any;
  vehicle : string;
  constructor(private service : DataService, private router : Router) { }

  ngOnInit() {
    let obsRes1 =  this.service.getVehicleNames();
    obsRes1.subscribe((res)=>{
      this.menu = res;
    });
    this.service.getColors().subscribe((res)=>{
      this.colors = res;
    });
  }

  check1(event)
  {
    this.vehicle = event.target.value;
  }
  check2(event)
  {
    this.detail.color = event.target.value;
  }
  submit()
  {
    let res = this.service.addVehicleModel(this.vehicle,this.detail);
    res.subscribe((res)=>{
      console.log("hj");
    })
  }
  cancel()
  {
    this.router.navigate(["/admin/stock"]);
  }
}

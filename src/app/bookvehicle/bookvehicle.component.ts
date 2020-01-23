import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookvehicle',
  templateUrl: './bookvehicle.component.html',
  styleUrls: ['./bookvehicle.component.css']
})
export class BookvehicleComponent implements OnInit {
  address = {
    "flatNo": 0,
    "buildingNme" : "",
    "streetName" : "",
    "area" : "",
    "city" : ""
  };
  userId ;
  constructor(private service : DataService,private router : Router) { }

  ngOnInit() {
    this.userId = parseInt(sessionStorage.getItem("userId"));
  }

  addadd()
  {
    let obsRes = this.service.addaddress(this.userId,this.address);
    obsRes.subscribe((res)=>{
      this.router.navigate(['/user/bookpayment']);
    })
  }

}

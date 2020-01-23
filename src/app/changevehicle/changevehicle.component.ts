import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changevehicle',
  templateUrl: './changevehicle.component.html',
  styleUrls: ['./changevehicle.component.css']
})
export class ChangevehicleComponent implements OnInit {
  val1 : string;
  val2 : string;
  menu1 : any;
  menu2 : any;
  model : any;
  data : any;
  constructor(private service : DataService, private router : Router) { }

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
    });
  }
  checkItem2(event)
  {
    this.val2 = event.target.value;
    console.log(this.val2);
    let observableResult = this.service.getDetails(this.val1,this.val2);
    observableResult.subscribe((result)=>{
      this.model = result;
    })
  }
  change()
  {
    let obsRes1 = this.service.getDetails(this.val1,this.val2);
    obsRes1.subscribe((res)=>{
        this.data = res['detailsId'];
        this.changeVehicle();
    }); 
  }
  changeVehicle()
  {
    let prev = parseInt(sessionStorage.getItem("prevModel"));
    console.log(prev);
    let user = parseInt(sessionStorage.getItem("userId"));
    console.log(user);
    console.log(this.data);
    let obsRes2 = this.service.changeVehicle(user,prev,this.data);
    obsRes2.subscribe((res)=>{
      this.router.navigate(['/user/booksummary']);
    });
  }
}

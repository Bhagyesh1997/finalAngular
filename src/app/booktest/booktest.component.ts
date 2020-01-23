import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booktest',
  templateUrl: './booktest.component.html',
  styleUrls: ['./booktest.component.css']
})
export class BooktestComponent implements OnInit {
  book = {
    "name" : "",
    "email" : "",
    "phone" : ""
  };
  data : any;
  menu : any;
  constructor(private service : DataService) { }

  ngOnInit() {
  let obsRes = this.service.getVehicleNames();
  obsRes.subscribe((res)=>{
    this.menu = res; 
  })
  }

  getDate()
  {
    var today = new Date();
    console.log(today);
    //document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
  }

  test()
  {

  }
}

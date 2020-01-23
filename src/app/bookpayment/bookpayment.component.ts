import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookpayment',
  templateUrl: './bookpayment.component.html',
  styleUrls: ['./bookpayment.component.css']
})
export class BookpaymentComponent implements OnInit {
  vehicle : any;
  constructor(private service :DataService, private router : Router) { }

  ngOnInit() {
      let no = parseInt(sessionStorage.getItem("modelId"));
      console.log(no);
      let obsRes = this.service.vehicleDetails(no);
      obsRes.subscribe((res)=>{
        this.vehicle = res;
      })
  }
  bookVehicle()
  {
    let userId = parseInt(sessionStorage.getItem("userId"));
    let modelId = parseInt(sessionStorage.getItem("modelId"));
    let obsRes = this.service.bookVehicle(userId,modelId);
    obsRes.subscribe((res)=>{
      this.router.navigate(['/user/booksummary']);
    })
  }
}

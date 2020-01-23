import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.css']
})
export class BookingsummaryComponent implements OnInit {
  vehicle: any;
  constructor(private service:DataService, private router : Router) { }

  ngOnInit() {
    let userId=parseInt(sessionStorage.getItem("userId"));
    console.log(userId);
    let obsRes=this.service.bookingSummary(userId);
    obsRes.subscribe((res)=>{
      this.vehicle=res;
      console.log(res);
    });
  }
  view(no)
  {
    sessionStorage.setItem("prevModel",JSON.stringify(no));
    this.router.navigate(['/user/change']);
  }
  cancel(no)
  {
    let userId = parseInt(sessionStorage.getItem("userId"));
    console.log(no);
    console.log(userId);
    let obsRes = this.service.cancelVehicle(userId,no);
    obsRes.subscribe((res)=>{
      console.log(res);
    });
    this.router.navigateByUrl('/',{skipLocationChange: true}).then(()=>{
      this.router.navigate(['/user/booksummary']);
    });
  }
  pay(no)
  {
    console.log(no);
    this.router.navigate(["/user/makepayment/"+no]);
  }
}

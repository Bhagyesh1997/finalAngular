import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  data : any;
  constructor(private service : DataService) { }

  ngOnInit() {
    let userId = parseInt(sessionStorage.getItem("userId"));
    let obsRes = this.service.getOrders(userId);
    obsRes.subscribe((res)=>{
      this.data = res;
      console.log(this.data);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.css']
})
export class MakepaymentComponent implements OnInit {
  modelId : number;
  model : any;
  finalAmt : number;
  constructor(private route : ActivatedRoute, private service : DataService, private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((parameter)=>{
      this.modelId = parseInt(parameter.get("Id"));
    });
    let obsRes = this.service.findVehicleDetails(this.modelId);
    obsRes.subscribe((res)=>{
      this.model = res;
      console.log(this.model.detailsId);
      this.finalAmt = this.model.price + (this.model.price * 0.18);
    });
  }
  paid()
  {
    let userId = parseInt(sessionStorage.getItem("userId"));
    let obsRes = this.service.purchaseVehicle(userId, this.model.vehicleId.vehicleId);
    obsRes.subscribe((res)=>{
        this.f1();
    });
  }
  f1()
  {
    this.router.navigate(['/user/payments']);
  }
}

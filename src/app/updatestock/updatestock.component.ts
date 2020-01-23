import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updatestock',
  templateUrl: './updatestock.component.html',
  styleUrls: ['./updatestock.component.css']
})
export class UpdatestockComponent implements OnInit {
  id : any;
  data : any;
  constructor(private route : ActivatedRoute,private service : DataService, private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((res)=>{
      this.id = res.get("Id");
    });
    let obsRes = this.service.findVehicleDetails(this.id);
    obsRes.subscribe((res)=>{
      this.data = res;
    })
  }

  update()
  {
    let obsRes = this.service.updateCountNPrice(this.data);
    obsRes.subscribe((res)=>{
        this.router.navigate(['/admin/stock']);
    })
  }
}

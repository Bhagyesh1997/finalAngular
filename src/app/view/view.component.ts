import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id : any;
  details : any;
  constructor(private route : ActivatedRoute, private service : DataService, private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((res)=>{
      this.id = res.get('Id');
    })
    let obsRes = this.service.vehicleDetails(this.id);
    obsRes.subscribe((res)=>{
      this.details = res;
      console.log(this.details);
    }); 
  }
  f1()
  {
    sessionStorage.setItem("modelId",this.id);
    this.router.navigate(['/user/bookvehicle']);
  }
}

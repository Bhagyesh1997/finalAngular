import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  vehicle : any;
  constructor(private service :DataService,private router : Router) { }

  ngOnInit() {
    let obsRes = this.service.fetchStock();
    obsRes.subscribe((res)=>{
      this.vehicle = res;
      console.log(this.vehicle);
    })
  }
  view(no)
  {
    this.router.navigate(['/user/explore/'+no]);
  }
}

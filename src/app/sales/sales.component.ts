import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  data : any;
  constructor(private service : DataService) { }

  ngOnInit() {
    let obsRes = this.service.getSalesReport();
    obsRes.subscribe((res)=>{
      this.data = res;
      console.log(this.data);
    });
  }

}

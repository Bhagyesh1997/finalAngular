import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  data : any;
  constructor(private service:DataService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit() {
    let observableResult = this.service.fetchStock();
    observableResult.subscribe((result)=>{
      this.data = result;
    });
  }

  update(no)
  {
    this.router.navigate(['/admin/updatestock/'+no]);
  }
  delete(no)
  {
    let obsRes = this.service.delete(no);
    obsRes.subscribe((res)=>{
      if(res)
      {
        this.router.navigateByUrl('/',{skipLocationChange: true}).then(()=>{
          this.router.navigate(['/admin/stock']);
        });
      }
    })
  }
}

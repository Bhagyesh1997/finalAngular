import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = { "email":"","password":""};
  constructor(private route:ActivatedRoute,
              private router:Router,
              private service:DataService) { }

  ngOnInit() {
  }

  validate()
  {
    console.log(this.user);
    let observableResult = this.service.validateUser(this.user);
    observableResult.subscribe((result)=>{
      if(result["role"]==='ADMIN')
      {
          sessionStorage.setItem("is_logged","1");
          sessionStorage.setItem("adminId",result['userId']);
          this.router.navigate(['/admin/stock']); 
      }
      if(result["role"]==='USER')
      {
          sessionStorage.setItem("is_logged","1");
          sessionStorage.setItem("userId",result['userId']);
          this.router.navigate(['/user/home']); 
      }
    });
  }

}

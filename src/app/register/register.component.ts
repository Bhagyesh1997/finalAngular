import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    "name":"",
    "email": "",
    "contactNo":"",
    "password":""
  };
  constructor(private service : DataService, private router : Router) { }

  ngOnInit() {
  }

  register()
  {
    let obsRes = this.service.registerUser(this.user);
    obsRes.subscribe((res)=>{
      this.f1();
    })
  }
  f1()
  {
    this.router.navigate(['']);
  }
  cancel()
  {
    this.router.navigate(['/cust/home']);
  }
}

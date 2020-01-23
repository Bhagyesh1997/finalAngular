import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  password = "";
  newpassword = "";
  constructor(private service : DataService, private router : Router) { }

  ngOnInit() {
  }
  change()
  {
    if(this.password == this.newpassword)
    {
      let userId = parseInt(sessionStorage.getItem("userId"));
      let obsRes = this.service.changePassword(userId,this.password);
      obsRes.subscribe((res)=>{
        this.redirect();
      });
    }
    else
    {
      this.password = "";
      this.newpassword = "";
      alert("Password didn't matched");
    }
  }
  redirect()
  {
    alert("Password changed..");
    this.router.navigate(['/user/home']);
  } 
  cancel()
  {
    this.router.navigate(['/user/home']);
  }
}

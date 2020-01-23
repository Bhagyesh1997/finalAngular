import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  canActivate()
  {
    if(this.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/cust/login']);
      return false;
    }
  }
  isLoggedIn()
  {
    if(window.sessionStorage.getItem("is_logged") != null
    &&
    window.sessionStorage.getItem("is_logged")=="1")
    {
      return true;
    }
    else
    {
    return false;
    }
  }
}

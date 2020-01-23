import { Component, ɵɵresolveBody } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  constructor(){}
  ngOnInit()
  {
    document.body.classList.add("image");
  }
}

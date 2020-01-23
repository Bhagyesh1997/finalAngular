import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {
  name : string;
  filename : any;
  imageUrl : any;
  userFile : any = File;
  constructor(private service : DataService) { }

  ngOnInit() {
  }

  onSelectThumbnail(event)
  {
    this.filename = event.target.files[0];
    console.log(this.filename);
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.imageUrl = reader.result;
    // };
    // reader.readAsDataURL(this.filename);
    this.userFile = this.filename;
  }

  onAdd()
  {   
    const formData = new FormData;
    formData.append('name',this.name);
    formData.append('image',this.userFile);
    let observableResult = this.service.addVehicle(formData);
    observableResult.subscribe((result)=>{
      console.log(result);
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://192.168.1.223:8080/finalProject/";
  constructor(private http : HttpClient) { }
  validateUser(user)
  {
    return this.http.post("http://192.168.1.223:8080/finalProject/admin/login",user);
  }

  fetchStock()
  {
    return this.http.get("http://192.168.1.223:8080/finalProject/admin/viewstock");
  }
  findVehicleDetails(no)
  {
    return this.http.get(this.url+"vehicle/details/"+no);
  }
  addVehicle(formData)
  {
    return this.http.post("http://192.168.1.223:8080/finalProject/vehicle/add",formData);
  }
  getVehicleNames()
  {
    return this.http.get("http://192.168.1.223:8080/finalProject/vehicle/byname");
  }
  getColor(name)
  {
    return this.http.get("http://192.168.1.223:8080/finalProject/vehicle/color/"+name);
  }
  getDetails(val1,val2)
  {
    return this.http.get("http://192.168.1.223:8080/finalProject/vehicle/"+val1+"/"+val2);
  }
  getColors()
  {
    return this.http.get("http://192.168.1.223:8080/finalProject/vehicle/color");
  }
  addVehicleModel(name,details)
  {
    return this.http.put("http://192.168.1.223:8080/finalProject/vehicle/insertvehicle/"+name,details);
  }
  vehicleDetails(no)
  {
    return this.http.get(this.url+"vehicle/details/"+no);
  }
  addaddress(no,address)
  {
    return this.http.put(this.url+"user/address/"+no,address);
  }
  bookVehicle(userId,detailsId)
  {
    return this.http.get(this.url+"vehicle/booking/"+userId+"/"+detailsId);
  }
  bookingSummary(userId)
  {
    return this.http.get(this.url+"user/orderdetails/"+userId);
  }
  changeVehicle(user,prev,newModel)
  {
    return this.http.get(this.url+"user/changevehicle/"+user+"/"+prev+"/"+newModel);
  }
  cancelVehicle(user,vehicle)
  {
    return this.http.get(this.url+"vehicle/cancel/"+user+"/"+vehicle);
  }
  getSalesReport()
  {
    return this.http.get(this.url+"admin/salereport");
  }
  updateCountNPrice(data)
  {
    return this.http.post(this.url+"admin/update",data);
  }
  delete(no)
  {
    return this.http.delete(this.url+"admin/delete/"+no);
  }
  purchaseVehicle(userId,detailsId)
  {
    return this.http.get(this.url+"vehicle/purchase/"+userId+"/"+detailsId);
  }
}

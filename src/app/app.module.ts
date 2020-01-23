import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import {NgModel , NgForm, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StockComponent } from './stock/stock.component';
import { UpdatestockComponent } from './updatestock/updatestock.component';
import { UserComponent } from './user/user.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SalesComponent } from './sales/sales.component';
import { BooktestComponent } from './booktest/booktest.component';
import { GetquoteComponent } from './getquote/getquote.component';
import { ExploreComponent } from './explore/explore.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { AdddescComponent } from './adddesc/adddesc.component';
import { ViewComponent } from './view/view.component';
import { BookvehicleComponent } from './bookvehicle/bookvehicle.component';
import { AuthService} from './auth.service';
import { BookpaymentComponent } from './bookpayment/bookpayment.component';
import { LogoutComponent } from './logout/logout.component';
import { BookingsummaryComponent } from './bookingsummary/bookingsummary.component';
import { ChangevehicleComponent } from './changevehicle/changevehicle.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StockComponent,
    UpdatestockComponent,
    UserComponent,
    AddvehicleComponent,
    HomeComponent,
    RegisterComponent,
    AboutusComponent,
    ContactusComponent,
    SalesComponent,
    BooktestComponent,
    GetquoteComponent,
    ExploreComponent,
    AdminComponent,
    CustomerComponent,
    AdddescComponent,
    ViewComponent,
    BookvehicleComponent,
    BookpaymentComponent,
    LogoutComponent,
    BookingsummaryComponent,
    ChangevehicleComponent,
    MakepaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path  : "", component : LoginComponent},
      { path : "cust", component : CustomerComponent, children:[
        { path : "home", component : HomeComponent},
        { path : "explore", component : ExploreComponent},
        { path : "booktest", component : BooktestComponent},
        { path : "getquote", component : GetquoteComponent},
        { path : "contactus", component : ContactusComponent},
        { path : "aboutus", component : AboutusComponent},
        { path : "login", component : LoginComponent},
        { path : "register", component : RegisterComponent}
      ]},
      { path : "user", component : UserComponent, children:[
        { path : "home", component : HomeComponent},
        { path : "explore", component : ExploreComponent},
        { path : "booktest", component : BooktestComponent},
        { path : "getquote", component : GetquoteComponent},
        { path : "explore/:Id", component : ViewComponent},
        { path : "bookvehicle", component : BookvehicleComponent, canActivate:[AuthService]},
        { path : "bookpayment", component : BookpaymentComponent,canActivate:[AuthService]},
        { path : "logout", component :LogoutComponent , canActivate:[AuthService]},
        { path : "booksummary", component :BookingsummaryComponent , canActivate:[AuthService]},
        { path : "change", component: ChangevehicleComponent, canActivate:[AuthService]},
        { path : "makepayment", component: MakepaymentComponent, canActivate:[AuthService]}
      ]},
      {path : "admin",component : AdminComponent, children:[
        { path : "stock", component : StockComponent, canActivate:[AuthService]},
        { path : "sales", component : SalesComponent, canActivate:[AuthService]},
        { path: "addvehicle", component : AddvehicleComponent, canActivate:[AuthService]},
        { path : "updatestock/:Id", component : UpdatestockComponent, canActivate:[AuthService]},
        { path : "adddesc", component : AdddescComponent, canActivate:[AuthService]},
        { path : "logout", component :LogoutComponent , canActivate:[AuthService]}
      ]},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

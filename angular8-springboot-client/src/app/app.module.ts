import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateProdQueryComponent } from './create-customerprodquery/create-prodQuery.component'
import { CustomerProdQueryDetailsComponent } from './customerprodquery-details/customerprodquery-details.component';
import { CustomerProdQueryListComponent } from './customerprodquery-list/customerprodquery-list.component';
import { UpdateCustomerProdQueryComponent } from './update-customerProdQuery/update-customerProdQuery.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CustomerProdQueryDetailsComponent,
    CreateProdQueryComponent,
    CustomerProdQueryListComponent,
    UpdateCustomerProdQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CustomerProdQueryListComponent } from './customerprodquery-list/customerprodquery-list.component';
import { CreateProdQueryComponent } from './create-customerprodquery/create-prodQuery.component';
import { UpdateCustomerProdQueryComponent } from './update-customerProdQuery/update-customerProdQuery.component';
import { CustomerProdQueryDetailsComponent } from './customerprodquery-details/customerprodquery-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },

  { path: 'prodQuery', component: CustomerProdQueryListComponent },
  { path: 'addProdQuery', component: CreateProdQueryComponent },
  { path: 'updateProdQuery/:id', component: UpdateCustomerProdQueryComponent },
  { path: 'customerProdQueryDetails/:id', component: CustomerProdQueryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

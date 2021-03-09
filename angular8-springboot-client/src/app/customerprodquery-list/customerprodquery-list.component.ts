import {CustomerProdQueryDetailsComponent } from '../customerprodquery-details/customerprodquery-details.component';
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { CustomerProdQueryService } from '../customerProdQuery.service';
import { CustomerProductQueryEntity } from '../customerProductQueryEntity';

@Component({
  selector: "app-customerprodquery-list",
  templateUrl: "./customerprodquery-list.component.html",
  styleUrls: ["./customerprodquery-list.component.css"]
})
export class CustomerProdQueryListComponent implements OnInit {
  prodQuery: Observable<CustomerProductQueryEntity[]>;

  constructor(private customerProdQueryService: CustomerProdQueryService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.prodQuery = this.customerProdQueryService.getCustomerProdQueryList();
  }

  deleteCustomerProductQuery(id: number) {
    this.customerProdQueryService.deleteCustomerProductQuery(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  customerProdQueryDetails(id: number){
    this.router.navigate(['customerProdQueryDetails', id]);
  }

  updateCustomerProdQueryStatus(id: number){
    this.router.navigate(['updateProdQuery', id]);
  }
}

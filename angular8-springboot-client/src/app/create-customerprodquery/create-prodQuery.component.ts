import { CustomerProdQueryService } from '../customerProdQuery.service';
import { CustomerProductQueryEntity } from '../customerProductQueryEntity';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customerprodquery',
  templateUrl: './create-prodQuery.component.html',
  styleUrls: ['./create-prodQuery.component.css']
})
export class CreateProdQueryComponent implements OnInit {

  prodQuery: CustomerProductQueryEntity = new CustomerProductQueryEntity();
  submitted = false;

  constructor(private customerProdQueryService: CustomerProdQueryService,
    private router: Router) { }

  ngOnInit() {
  }

  newProdQuery(): void {
    this.submitted = false;
    this.prodQuery = new CustomerProductQueryEntity();
  }

  save() {
    this.customerProdQueryService.createCustomerProductQuery(this.prodQuery)
      .subscribe(data => console.log(data), error => console.log(error));
    this.prodQuery = new CustomerProductQueryEntity();
    this.getList();
  }

  onSubmitProdQuery() {
    this.submitted = true;
    this.save();    
  }

  getList() {
    this.router.navigate(['/prodQuery']);
  }
}

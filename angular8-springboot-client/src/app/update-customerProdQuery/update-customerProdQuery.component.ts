import { Component, OnInit } from '@angular/core';
import { CustomerProductQueryEntity } from '../customerProductQueryEntity';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerProdQueryService } from '../customerProdQuery.service';

@Component({
  selector: 'app-update-customerProdQuery',
  templateUrl: './update-customerProdQuery.component.html',
  styleUrls: ['./update-customerProdQuery.component.css']
})
export class UpdateCustomerProdQueryComponent implements OnInit {

  id: number;
  prodQuery: CustomerProductQueryEntity;

  constructor(private route: ActivatedRoute,private router: Router,
    private customerProdQueryService: CustomerProdQueryService) { }

  ngOnInit() {
    this.prodQuery = new CustomerProductQueryEntity();

    this.id = this.route.snapshot.params['id'];
    
    this.customerProdQueryService.getCustomerProdQueryById(this.id)
      .subscribe(data => {
        console.log(data)
        this.prodQuery = data;
      }, error => console.log(error));
  }

  updateCustomerProdQueryStatus() {
    this.customerProdQueryService.updateCustomerProdQueryStatus(this.id, this.prodQuery)
      .subscribe(data => console.log(data), error => console.log(error));
    this.prodQuery = new CustomerProductQueryEntity();
    this.gotoList();
  }

  onSubmitProdQuery() {
    this.updateCustomerProdQueryStatus();    
  }

  gotoList() {
    this.router.navigate(['/prodQuery']);
  }
}

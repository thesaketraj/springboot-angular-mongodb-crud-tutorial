import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerProductQueryEntity } from '../customerProductQueryEntity.ts';
import { CustomerProdQueryService } from '../customerProdQuery.service';



@Component({
  selector: 'app-create-prodQuery',
  templateUrl: './customerprodquery-details.component.html',
  styleUrls: ['./customerprodquery-details.component.css']
})
export class CustomerProdQueryDetailsComponent implements OnInit {

  id: number;
  prodQuery: CustomerProductQueryEntity;

  constructor(private route: ActivatedRoute, private router: Router,
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

  queryList() {
    this.router.navigate(['prodQuery']);
  }
}

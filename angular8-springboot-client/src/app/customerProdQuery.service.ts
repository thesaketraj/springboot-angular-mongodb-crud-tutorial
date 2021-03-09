import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerProdQueryService {

  private baseUrl = 'http://localhost:8080/api/v2/prodQuery';

  constructor(private http: HttpClient) { }

  getCustomerProdQueryById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomerProductQuery(prodQuery: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, prodQuery);
  }

  updateCustomerProdQueryStatus(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomerProductQuery(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomerProdQueryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

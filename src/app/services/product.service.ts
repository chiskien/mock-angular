import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = "http://localhost:3000/hpiAdmins/";


  constructor(private http: HttpClient) {
  }

  getProduct(_page: number = 10, _limit: number = 10): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, {
      params: {
        _page: _page,
        _limit: _limit
      }
    });
  }

  getProductbyId(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + id, {})
      .pipe();
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  updateProduct(product: Product) {
    return this.http.put(this.url + product.id, product, this.httpOptions)
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.url + id, this.httpOptions);
  }

}

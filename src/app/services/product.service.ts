import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = "http://localhost:3000/hpiAdmins/";


  constructor(private http: HttpClient) {
  }

  getProduct(_page: number = 1, _limit: number = 10): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, {
      params: {
        _page: _page,
        _limit: _limit
      }
    });
  }

  getProductbyId(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + id, {})
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  updateProduct(product: Product): Observable<any> {

    return this.http.put(this.url + `${product.id}`, product, this.httpOptions)
      .pipe(tap(_ => console.log(`Update Product with ${product.id} successfully`)));
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.url + id, this.httpOptions);
  }

}

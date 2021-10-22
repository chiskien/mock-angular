import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = "http://localhost:3000/hpiAdmins";
  log: string;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

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
    return this.http.get<Product>(this.url + `/${id}`)
  }

  updateProduct(product: Product) {
    return this.http.put(this.url, product, this.httpOptions)
  }


}

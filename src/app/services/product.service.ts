import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = "http://localhost:3000/hpiAdmins";

  constructor(private http: HttpClient) {
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}

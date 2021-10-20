import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public product: Product;
  columns: string[] = ["Date", "Region Name", "Area", "Average Price"];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((response) => {
        this.product = response[0];
      }
    );
  }

}

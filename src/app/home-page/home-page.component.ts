import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public product$: Product[];
  columns: string[] = ["Date", "Region Name", "Area", "Average Price", "Index", "Sales Volume",
    "Detached Price", "Detached Index"];
  index: string[] = ["Date", "RegionName", "Area", "AreaCode", "AveragePrice", "Index",
    "SalesVolume", "DetachedPrice", "DetachedIndex"];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((response) => {
        console.log(response[0]);
        this.product$ = response;
      }
    );
  }

}

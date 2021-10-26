import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Product} from "../models/product";
import {Location} from "@angular/common";
import {map, switchMap} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public _product: Product;
  id: number;
  title: string = "Edit Product";
  message: string = '';
  regionNameOptions: string[] = ["Greater Manchester", "Merseyside", "South Yorkshire",
    "Tyne and Wear", "West Midlands", "West Yorkshire"];
  formGroup: FormGroup;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
    this.createForm();
    console.table(this.formGroup);
  }

  ngOnInit(): void {
    this.getProduct();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      id: [this.id, Validators.required],
      date: [this._product?.Date, [Validators.required]],
      regionName: [this._product?.RegionName, Validators.required],
      area: [this._product?.Area, Validators.required],
      areaCode: [this._product?.AreaCode, Validators.required],
      averagePrice: [this._product?.AveragePrice, [Validators.required]],
      index: [this._product?.Index, [Validators.required]],
      detachedPrice: [this._product?.DetachedPrice, [Validators.required]],
      detachedIndex: [this._product?.DetachedIndex, [Validators.required]],
      semiDetachedIndex: [this._product?.SemiDetachedIndex, [Validators.required]],
      semiDetachedPrice: [this._product?.SemiDetachedPrice, [Validators.required]],
      terracedPrice: [this._product?.TerracedPrice, [Validators.required]],
      terracedIndex: [this._product?.TerracedIndex, [Validators.required]],
      flatIndex: [this._product?.FlatIndex, [Validators.required]],
      flatPrice: [this._product?.FlatPrice, [Validators.required]],
    })
  }

  getProduct(): void {
    this.route.paramMap.pipe(
      switchMap((param: ParamMap) => {
        this.id = +param.get("id");
        return this.productService.getProductbyId(this.id);
      }), map((product) => this._product = product)
    ).subscribe();
  }

  save(product: Product): void {
    if (this._product) {
      this.productService.updateProduct(product)
        .subscribe(() => this.goBack())
    }
  }

  reset() {
    console.log("reset this madafaka");
    this.formGroup.reset();
  }

  goBack(): void {
    this.location.back();
  }

  onChange(regionName: string) {
    switch (regionName) {
      case "Greater Manchester":
        this._product.RegionName = regionName;
        this._product.Area = "Northwest";
        this._product.AreaCode = "E11000001";
        break;
      case "Merseyside":
        this._product.RegionName = regionName;
        this._product.Area = "Northwest";
        this._product.AreaCode = "E11000002";
        break;
      case "South Yorkshire":
        this._product.RegionName = regionName;
        this._product.Area = "North";
        this._product.AreaCode = "E11000003";
        break;
      case "Tyne and Wear":
        this._product.RegionName = regionName;
        this._product.Area = "North";
        this._product.AreaCode = "E11000007";
        break;
      case "West Midlands":
        this._product.RegionName = regionName;
        this._product.Area = "Midlands";
        this._product.AreaCode = "E11000005";
        break;
      case "West Yorkshire":
        this._product.RegionName = regionName;
        this._product.Area = "North";
        this._product.AreaCode = "E11000006";
        break;

    }
  }
}

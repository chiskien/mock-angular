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
  Id: number;
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
  }

  ngOnInit(): void {
    this.getProduct();
    console.table(this.formGroup);
  }

  createForm(): void {

    this.formGroup = this.formBuilder.group({
      id: [this._product?.id, Validators.required],
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
        this.Id = +param.get("id");
        return this.productService.getProductbyId(this.Id);
      }), map((product) => this._product = product)
    ).subscribe();
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

  get id() {
    return this.formGroup.get("id");
  }

  get regionName() {
    return this.formGroup.get("regionName");
  }

  get area() {
    return this.formGroup.get("area");
  }

  get areaCode() {
    return this.formGroup.get("areaCode");
  }

  get date() {
    return this.formGroup.get("date");
  }

  get averagePrice() {
    return this.formGroup.get("averagePrice");
  }

  get index() {
    return this.formGroup.get("index");
  }

  get detachedPrice() {
    return this.formGroup.get("detachedPrice");
  }

  get detachedIndex() {
    return this.formGroup.get("detachedIndex");
  }

  get semiDetachedPrice() {
    return this.formGroup.get("semiDetachedPrice");
  }

  get semiDetachedIndex() {
    return this.formGroup.get("semiDetachedIndex");
  }

  get flatPrice() {
    return this.formGroup.get("semiDetachedIndex");
  }

  get flatIndex() {
    return this.formGroup.get("semiDetachedIndex");
  }

  get terracedPrice() {
    return this.formGroup.get("semiDetachedIndex");
  }

  get terracedIndex() {
    return this.formGroup.get("semiDetachedIndex");
  }
}

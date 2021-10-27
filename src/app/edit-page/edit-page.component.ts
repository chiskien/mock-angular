import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Product} from "../models/product";
import {Location} from "@angular/common";
import {catchError, map, switchMap} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {of, Subscription} from "rxjs";
import {OpenModalService} from "../services/open-modal.service";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {
  public _product: Product;
  Id: number;
  title: string = "Edit Product";
  available: boolean = true;
  param: Subscription;
  message: string = '';
  regionNameOptions: string[] = ["Greater Manchester", "Merseyside", "South Yorkshire",
    "Tyne and Wear", "West Midlands", "West Yorkshire"];
  formGroup: FormGroup;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder,
              public openModalService: OpenModalService) {
    this.createForm(this._product);
  }

  ngOnInit(): void {
    this.getProduct();
  }

  openPopUpwithObject(form: FormGroup, title: string, text: string, action: string) {
    this.openModalService.openPopUpwithForm(form, this._product, title, text, action);

  }

  createForm(_product: Product): void {
    this.formGroup = this.formBuilder.group({
      id: [_product?.id, Validators.required],
      Date: [_product?.Date],
      RegionName: [_product?.RegionName, Validators.required],
      Area: [_product?.Area, Validators.required],
      AreaCode: [_product?.AreaCode, Validators.required],
      AveragePrice: [_product?.AveragePrice, [Validators.required]],
      Index: [_product?.Index, [Validators.required]],
      IndexSA: [_product?.IndexSA],
      "1m%Change": [_product?.["1m%Change"]],
      "12m%Change": [_product?.["12m%Change"]],
      AveragePriceSA: [_product?.AveragePriceSA],
      SalesVolume: [_product?.SalesVolume],
      DetachedPrice: [_product?.DetachedPrice, [Validators.required]],
      DetachedIndex: [_product?.DetachedIndex, [Validators.required]],
      "Detached1m%Change": [_product?.["Detached1m%Change"]],
      "Detached12m%Change": [_product?.["Detached12m%Change"]],
      SemiDetachedPrice: [_product?.SemiDetachedPrice, [Validators.required]],
      SemiDetachedIndex: [_product?.SemiDetachedIndex, [Validators.required]],
      "SemiDetached1m%Change": [_product?.["SemiDetached1m%Change"]],
      "SemiDetached12m%Change": [_product?.["SemiDetached12m%Change"]],
      TerracedPrice: [_product?.TerracedPrice, [Validators.required]],
      TerracedIndex: [_product?.TerracedIndex, [Validators.required]],
      "Terraced1m%Change": [_product?.["Terraced1m%Change"]],
      "Terraced12m%Change": [_product?.["Terraced12m%Change"]],
      FlatPrice: [_product?.FlatPrice, [Validators.required]],
      FlatIndex: [_product?.FlatIndex, [Validators.required]],
      "Flat1m%Change": [_product?.["Flat1m%Change"]],
      "Flat12m%Change": [_product?.["Flat12m%Change"]],
    })
  }

  getProduct(): void {
    this.param = this.route.paramMap.pipe(
      switchMap((param: ParamMap) => {
          this.Id = +param.get("id");
          return this.productService.getProductbyId(this.Id);
        }
      ), map((product: Product) => this._product = product),
      catchError(() => {
        this.title = `Not found product with id: ${this.Id}`
        this.available = false;
        return of(null)
      })
    ).subscribe((product: Product) => {
      this.createForm(product);
      this.onChange(product?.RegionName);
    });
  }

  onChange(regionName) {
    switch (regionName) {
      case "Greater Manchester":
        this.formGroup.patchValue({
          regionName: regionName,
          area: "Northwest",
          areaCode: "E11000001"
        });
        break;
      case "Merseyside":
        this.formGroup.patchValue({
          regionName: regionName,
          area: "Northwest",
          areaCode: "E11000002"
        });
        break;
      case "South Yorkshire":
        this.formGroup.patchValue({
          regionName: regionName,
          area: "North",
          areaCode: "E11000003"
        });
        break;
      case "Tyne and Wear":
        this.formGroup.patchValue({
          regionName: regionName,
          area: "North",
          areaCode: "E11000007"
        });
        break;
      case "West Midlands":
        this.formGroup.patchValue({
          regionName: regionName,
          area: "Midlands",
          areaCode: "E11000005"
        });
        break;
      case "West Yorkshire":
        this.formGroup.patchValue({
          regionName: regionName,
          area: "North",
          areaCode: "E11000006"
        });
        break;
    }

  }

  reset() {
    console.log("reset this madafaka");
    this.formGroup.reset();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy() {
    this.param.unsubscribe();
  }

  get id() {
    return this.formGroup.get("id");
  }

  get RegionName() {
    return this.formGroup.get("RegionName");
  }

  get Area() {
    return this.formGroup.get("Area");
  }

  get AreaCode() {
    return this.formGroup.get("AreaCode");
  }

  get Date() {
    return this.formGroup.get("Date");
  }

  get AveragePrice() {
    return this.formGroup.get("AveragePrice");
  }

  get Index() {
    return this.formGroup.get("Index");
  }

  get IndexSA() {
    return this.formGroup.get("IndexSA");
  }

  get DetachedPrice() {
    return this.formGroup.get("DetachedPrice");
  }

  get DetachedIndex() {
    return this.formGroup.get("DetachedIndex");
  }

  get SemiDetachedPrice() {
    return this.formGroup.get("SemiDetachedPrice");
  }

  get SemiDetachedIndex() {
    return this.formGroup.get("SemiDetachedIndex");
  }

  get FlatPrice() {
    return this.formGroup.get("FlatPrice");
  }

  get FlatIndex() {
    return this.formGroup.get("FlatIndex");
  }

  get TerracedPrice() {
    return this.formGroup.get("TerracedPrice");
  }

  get TerracedIndex() {
    return this.formGroup.get("TerracedIndex");
  }

  get SalesVolume() {
    return this.formGroup.get("SalesVolume");
  }
}

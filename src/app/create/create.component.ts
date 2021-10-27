import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OpenModalService} from "../services/open-modal.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  title: string = "Create a Product";
  public formGroup: FormGroup;
  public product: Product;
  regionNameOptions: string[] = ["Greater Manchester", "Merseyside", "South Yorkshire",
    "Tyne and Wear", "West Midlands", "West Yorkshire"];

  constructor(private router: Router, private location: Location,
              private formBuilder: FormBuilder,
              private openModalService: OpenModalService) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      Date: ["", Validators.required],
      RegionName: ["", Validators.required],
      Area: ["", Validators.required],
      AreaCode: ["", Validators.required],
      AveragePrice: ["", [Validators.required]],
      Index: ["", [Validators.required]],
      IndexSA: [""],
      "1m%Change": [""],
      "12m%Change": [""],
      AveragePriceSA: [""],
      SalesVolume: [0, [Validators.required, Validators.min(0)]],
      DetachedPrice: [0, [Validators.required]],
      DetachedIndex: [0, [Validators.required]],
      "Detached1m%Change": [""],
      "Detached12m%Change": [""],
      SemiDetachedPrice: [0, [Validators.required]],
      SemiDetachedIndex: [0, [Validators.required]],
      "SemiDetached1m%Change": [""],
      "SemiDetached12m%Change": [""],
      TerracedPrice: [0, [Validators.required]],
      TerracedIndex: [0, [Validators.required]],
      "Terraced1m%Change": [""],
      "Terraced12m%Change": [""],
      FlatPrice: [0, [Validators.required]],
      FlatIndex: [0, [Validators.required]],
      "Flat1m%Change": [""],
      "Flat12m%Change": [""],
    })
  }

  ngOnInit(): void {

  }

  openPopUpwithObject(formGroup: FormGroup,
                      title: string, text: string, action: string) {
    this.openModalService.openPopUpwithForm(formGroup, this.product, title, text, action);

  }

  backTotheHomePage() {
    this.location.back();
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

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  title: string = "Create a Product";
  public productForm: FormGroup;

  constructor(private router: Router, private location: Location,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      id: [Validators.required],
      Date: [],
      RegionName: [Validators.required],
      Area: [Validators.required],
      AreaCode: [Validators.required],
      AveragePrice: [[Validators.required]],
      Index: [[Validators.required]],
      IndexSA: [],
      "1m%Change": [],
      "12m%Change": [],
      AveragePriceSA: [],
      SalesVolume: [],
      DetachedPrice: [[Validators.required]],
      DetachedIndex: [[Validators.required]],
      SemiDetachedIndex: [[Validators.required]],
      SemiDetachedPrice: [[Validators.required]],
      TerracedPrice: [[Validators.required]],
      TerracedIndex: [[Validators.required]],
      FlatIndex: [[Validators.required]],
      FlatPrice: [[Validators.required]],
      "Detached1m%Change": [],
      "Detached12m%Change": [],
      "SemiDetached12m%Change": [],
      "SemiDetached1m%Change": [],
      "Terraced1m%Change": [],
      "Terraced12m%Change": [],
      "Flat12m%Change": [],
      "Flat1m%Change": [],
    })
  }

  ngOnInit(): void {

  }

  backTotheHomePage() {
    this.location.back();
  }
}

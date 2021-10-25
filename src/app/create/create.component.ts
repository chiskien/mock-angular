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
      id: [],
      Date: ["", Validators.required],
      RegionName: [],
      Area: [],
      AreaCode: [],
      AveragePrice: [],
      Index: [],
      IndexSA: [],
      SalesVolume: [],
      DetachedPrice: [],
      DetachedIndex: [],
      SemiDetachedPrice: [],
      SemiDetachedIndex: [],
      TerracedIndex: [],
      TerracedPrice: [],
      FlatIndex: [],
      FlatPrice: []
    })
  }

  ngOnInit(): void {
  }

  backTotheHomePage() {
    this.location.back();
  }
}

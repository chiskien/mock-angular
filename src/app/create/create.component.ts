import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  title: string = "Create a Product";

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit(): void {
  }

  backTotheHomePage() {
    this.location.back();
  }
}

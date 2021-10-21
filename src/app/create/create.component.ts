import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  title: string = "Fuck the Doctor";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  backTotheHomePage() {
    this.router.navigateByUrl("/home");
  }
}

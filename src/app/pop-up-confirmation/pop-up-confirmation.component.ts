import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pop-up-confirmation',
  templateUrl: './pop-up-confirmation.component.html',
  styleUrls: ['./pop-up-confirmation.component.scss']
})
export class PopUpConfirmationComponent implements OnInit {
  title: string = "Are you sure about that?";
  

  constructor() {
  }

  ngOnInit(): void {

  }
}


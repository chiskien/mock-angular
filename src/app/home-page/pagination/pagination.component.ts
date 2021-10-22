import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  title: string = "Pagination works";
  numberOfPages = 10;
  options: number[] = [10, 25, 30];

  constructor() {
  }

  ngOnInit(): void {
  }

}

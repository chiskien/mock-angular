import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  title: string = "Pagination works";
  @Input() numberOfPages: number = 0;
  options: number[] = [10, 20, 50, 100];

  constructor() {
  }

  ngOnInit(): void {
  }

}

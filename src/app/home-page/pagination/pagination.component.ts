import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  title: string = "Pagination works";
  @Output() selectItemPerPage = new EventEmitter<number>();
  @Output() nextPage = new EventEmitter();
  @Output() prevPage = new EventEmitter();
  currentPage: number;
  options: number[] = [10, 20, 50, 100];
  rowPerPage: number = 10;

  constructor() {
  }

  ngOnInit(): void {
  }

  /* eslint-disable indent */
  updateItemPerPage(value: number) {
    this.rowPerPage = value;
    this.selectItemPerPage.emit(value);
  }
}

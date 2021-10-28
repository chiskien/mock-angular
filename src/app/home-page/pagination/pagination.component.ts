import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  options: number[] = [10, 20, 50, 100, 200];
  @Input() rowPerPage: number = 10;
  @Input() currentPage: number = 10;

  constructor() {
  }

  ngOnInit(): void {
  }

  /* eslint-disable indent */
  updateItemPerPage(value: number) {
    this.rowPerPage = Number(value);
    this.selectItemPerPage.emit(this.rowPerPage);
  }

  onNextPage() {
    this.nextPage.emit();
  }

  onPrevPage() {
    this.prevPage.emit();
  }
}

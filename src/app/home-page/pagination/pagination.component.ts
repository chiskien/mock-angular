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
  
  paginate = ({rows, entries, activePage}) => {
    const firstVisibleEntry = activePage * entries;
    return rows.slice(firstVisibleEntry, firstVisibleEntry + entries);
  };

  constructor() {
  }


  ngOnInit(): void {
  }

  /* eslint-disable indent */
}

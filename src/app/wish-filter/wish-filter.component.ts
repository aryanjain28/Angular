import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
})
export class WishFilterComponent {
  // Two-way binding
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateFilter('0');
  }

  updateFilter(value: String) {
    this.filter = filters[Number(value)];
    this.filterChange.emit(this.filter);
  }
}

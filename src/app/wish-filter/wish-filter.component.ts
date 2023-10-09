import { Component, Output, EventEmitter } from '@angular/core';
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
  @Output()
  filter = new EventEmitter<any>();

  filterBy: string = '0';

  ngOnInit(): void {
    this.changeFilter('0');
  }

  changeFilter(value: String) {
    this.filter.emit(filters[Number(value)]);
  }
}

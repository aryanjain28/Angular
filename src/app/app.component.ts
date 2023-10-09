import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import events from 'src/shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('To get coffee', true),
    new WishItem('To someondfg'),
  ];

  constructor() {
    events.listen('removeWish', (wish: WishItem) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  mfilter: any;
}

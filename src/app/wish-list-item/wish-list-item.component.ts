import { Component, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  events: EventService | null = null;

  constructor(private e: EventService) {
    this.events = e;
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  removeWish() {
    this.events?.emit('removeWish', this.wish);
  }

  getCssClasses() {
    return {
      strikeout: this.wish.isComplete,
      'text-muted': this.wish.isComplete,
    };
  }
}

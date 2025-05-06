import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating: number;
  @Output() ratingChange = new EventEmitter<number>();

  stars: boolean[] = Array(5).fill(false);

  ngOnChanges() {
    this.updateStars();
  }

  updateStars() {
    this.stars = this.stars.map((_, i) => i < this.rating);
  }

  onStarClick(index: number) {
    this.rating = index + 1;
    this.ratingChange.emit(this.rating);
    this.updateStars();
  }
}

import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() rating!: number;
  @Input() iconName: string = 'heroStarSolid';
}

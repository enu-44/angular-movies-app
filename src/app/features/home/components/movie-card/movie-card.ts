import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [NgIcon, DecimalPipe],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {
  constructor(private _router: Router) { }
  
  imageUrl = input<string>();
  title = input<string>();
  rating = input<number>();
  id = input.required<string>();

   onDetail() {
    this._router.navigate([
      '/movie-detail',
      this.id()
    ]);
  }
}

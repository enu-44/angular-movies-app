import { Component, input } from '@angular/core';
import { CarruselComponent } from "../../../../core/components/organisms/carrusel/carrusel";
import { MovieCard } from "../movie-card/movie-card";

export interface Movie {
  imageUrl: string;
  title: string;
  rating: number;
}

@Component({
  selector: 'app-movie-section',
  imports: [CarruselComponent, MovieCard],
  templateUrl: './movie-section.html',
  styleUrl: './movie-section.scss'
})
export class MovieSection {
  items = input<Movie[]>([]);
}
import { Component } from '@angular/core';
import { MovieCard } from '../components/movie-card/movie-card';
import { CarruselComponent } from "../../../core/components/organisms/carrusel/carrusel";
import { TabsComponent } from "../../../core/components/molecules/tab/tabs";
import { Movie, MovieSection } from "../components/movie-section/movie-section";

@Component({
  selector: 'app-home',
  imports: [MovieCard, CarruselComponent, TabsComponent, MovieSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  movies: Movie[] = [
    {
      imageUrl: "https://image.tmdb.org/t/p/w500//sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
      rating: 8.5,
      title:"Dune: Part Two – The Rise of the Sandworm and the Fall of House Corrino"
    }
  ]

  series: Movie[] = [
    {
      imageUrl: "https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg",
      rating: 4.3,
      title:"Dune: Part Two – The Rise of the Sandworm and the Fall of House Corrino"
    }
  ]

  premieres: Movie[] = [
    {
      imageUrl: "https://image.tmdb.org/t/p/w500//sUsVimPdA1l162FvdBIlmKBlWHx.jpg",
      rating: 7.3,
      title:"Dune: Part Two – The Rise of the Sandworm and the Fall of House Corrino"
    }
  ]
  constructor(){}
}

import { Component, input } from '@angular/core';
import { NgIcon } from "@ng-icons/core";

@Component({
  selector: 'app-movie-detail',
  imports: [NgIcon],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss'
})
export class MovieDetail {

  type = 'Moview';
  year = 2010;
  duration = '2h 28min';
  score = 8.8;
  voteCount = 1234;

  imageUrl = 'https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg';
  title = 'The Lord of the Rings: The Two Towers';
  nominationName = 'Best Picture';
  genres = ['Adventure', 'Drama', 'Fantasy'];
  description = 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.';
  director = 'Peter Jackson';
  screenplay = 'Peter Jackson, Fran Walsh';
  countries = 'New Zealand, United States';
  releaseDate = 'December 5, 2002';

}

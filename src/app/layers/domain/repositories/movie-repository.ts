import { Movie } from "..";
import { Failure, Result } from "../../../core";

export abstract class MovieRepository {
  abstract getMoviesOfDay(): Promise<Result<Movie[], Failure>>;
  abstract getUpcomingMovies(): Promise<Result<Movie[], Failure>>;
}
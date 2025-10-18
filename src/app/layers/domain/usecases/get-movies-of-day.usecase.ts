import { Failure, NoParams, Result, UseCase } from "../../../core";
import { Movie } from "../entities/movie";
import { MovieRepository } from "../repositories/movie-repository";

export class GetMoviesOfDayUseCase implements UseCase<NoParams, Promise<Result<Movie[], Failure>>> {
    constructor(private _movieRepository: MovieRepository) { }
    execute = (_:NoParams): Promise<Result<Movie[], Failure>> => this._movieRepository.getMoviesOfDay();
}
import { Movie, MovieRepository } from '../../domain';
import { Failure, Result, TmdbApiService, toResult } from '../../../core';
import { firstValueFrom, map } from 'rxjs';
import { MovieDto, MovieMapper } from '..';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../../../core/api/base-api';


@Injectable()
export class MovieRepositoryImpl implements MovieRepository {
  constructor(private readonly api: TmdbApiService) {}
  getMoviesOfDay(): Promise<Result<Movie[], Failure>> {
    const request$ = this.api.get<BaseResponse<MovieDto>>('trending/movie/day').pipe(
      map((res) => (res.results ?? []).map(MovieMapper.toEntity))
    );
    return firstValueFrom(toResult(request$, 'Failed to fetch trending movies'));
  }

  getUpcomingMovies(): Promise<Result<Movie[], Failure>> {
    const request$ = this.api.get<BaseResponse<MovieDto>>('movie/upcoming').pipe(
      map((res) => (res.results ?? []).map(MovieMapper.toEntity))
    );
    return firstValueFrom(toResult(request$, 'Failed to fetch upcoming movies'));
  }
}

import { firstValueFrom, map } from 'rxjs';
import { BaseResponse, Failure, Result, TmdbApiService, toResult } from '../../../core';
import { Serie, SerieRepository } from '../../domain';
import { SerieDto, SerieMapper } from '..';
import { Injectable } from '@angular/core';

@Injectable()
export class SerieRepositoryImpl implements SerieRepository {
  constructor(private readonly api: TmdbApiService) {}
  getSeriesOfDay(): Promise<Result<Serie[], Failure>> {
    const request$ = this.api.get<BaseResponse<SerieDto>>('trending/tv/day').pipe(
      map((res) => (res.results ?? []).map(SerieMapper.toEntity))
    );
    return firstValueFrom(toResult(request$, 'Failed to fetch trending series'));
  }
}
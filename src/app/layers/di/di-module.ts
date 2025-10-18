import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetMoviesOfDayUseCase, GetPremieresAndAnnouncementsUseCase, GetSeriesOfDayUseCase, MovieRepository, SerieRepository } from '../domain';
import { MovieRepositoryImpl, SerieRepositoryImpl } from '../infraestructure';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    //Repositories
    { provide: MovieRepository, useClass: MovieRepositoryImpl },
    { provide: SerieRepository, useClass: SerieRepositoryImpl },

    //Use Cases
    {
      provide: GetMoviesOfDayUseCase,
      useFactory: (repo: MovieRepository) => new GetMoviesOfDayUseCase(repo),
      deps: [MovieRepository],
    },
    {
      provide: GetSeriesOfDayUseCase,
      useFactory: (repo: SerieRepository) => new GetSeriesOfDayUseCase(repo),
      deps: [SerieRepository],
    },
    {
      provide: GetPremieresAndAnnouncementsUseCase,
      useFactory: (repo: MovieRepository) => new GetPremieresAndAnnouncementsUseCase(repo),
      deps: [MovieRepository],
    }
  ]
})
export class DiModule { }

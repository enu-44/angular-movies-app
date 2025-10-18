import { Component, signal, WritableSignal } from '@angular/core';
import { TabsComponent } from '../../../core/components/molecules/tab/tabs';
import { MovieSection } from '../components/movie-section/movie-section';
import { DiModule, GetMoviesOfDayUseCase, GetPremieresAndAnnouncementsUseCase, GetSeriesOfDayUseCase, Movie, Serie } from '../../../layers';
import { NoParams } from '../../../core';

@Component({
  selector: 'app-home',
  imports: [TabsComponent, MovieSection, DiModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(
    private readonly _getMoviesOfDayUseCase: GetMoviesOfDayUseCase,
    private readonly _getSeriesOfDayUseCase: GetSeriesOfDayUseCase,
    private readonly _getPremieresAndAnnouncementsUseCase: GetPremieresAndAnnouncementsUseCase
  ) { }

  movies: WritableSignal<Movie[]> = signal<Movie[]>([]);
  series: WritableSignal<Serie[]> = signal<Serie[]>([]);
  premieres: WritableSignal<Movie[]> = signal<Movie[]>([]);

  ngOnInit(): void {
    this._loadMoviesOfDay();
    this._loadSeriesOfDay();
    this._loadPremieresAndAnnouncements();
  }

  private async _loadPremieresAndAnnouncements(): Promise<void> {
    const result = await this._getPremieresAndAnnouncementsUseCase.execute(NoParams);
    result.fold(
      (movies) => this.premieres.set(movies),
      (error) => console.error('Error cargando estrenos y anuncios:', error.message)
    );
  }
  
  private async _loadMoviesOfDay(): Promise<void> {
    const result = await this._getMoviesOfDayUseCase.execute(NoParams);
    result.fold(
      (movies) => this.movies.set(movies),
      (error) => console.error('Error cargando películas:', error.message)
    );
  }

  private async _loadSeriesOfDay(): Promise<void> {
    const result = await this._getSeriesOfDayUseCase.execute(NoParams);
    result.fold(
      (series) => this.series.set(series),
      (error) => console.error('Error cargando series:', error.message)
    );
  }
}

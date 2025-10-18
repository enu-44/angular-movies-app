// core/infrastructure/api/tmdb-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TmdbApiService {
  private readonly baseUrl = environment.apiUrl;
  private readonly apiKey = environment.tmdbApiKey;

  constructor(private http: HttpClient) {}
  /**
   * Hace una petición GET genérica a TMDB agregando la API Key automáticamente.
   */
  get<T>(endpoint: string, params?: Record<string, string | number>): Observable<T> {
    let httpParams = new HttpParams().set('api_key', this.apiKey);
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        httpParams = httpParams.set(key, value);
      }
    }
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<T>(url, { params: httpParams }).pipe(
      catchError((error) => {
        console.error(`Error TMDB [${endpoint}]:`, error);
        return throwError(() => new Error('Error al comunicarse con TMDB'));
      })
    );
  }
}

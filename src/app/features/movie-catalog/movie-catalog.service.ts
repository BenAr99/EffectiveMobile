import { Injectable} from '@angular/core';
import {catchError, EMPTY, map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NotifyService} from '../../core/services/notify.service';
import {Movie} from './movie-catalog.contracts';

@Injectable({
  providedIn: 'root',
})

export class MovieCatalogService {
  constructor(private http: HttpClient, private notifyService: NotifyService) {
  }

  getAllMovies(search: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`/movies`).pipe(
      map((movie) => {
        return movie.filter(value => {
          return value.name.toLowerCase().includes(search.trim().toLowerCase())
        })
      }),
      catchError(() => {
          this.notifyService.error.next('Не удалось загрузить данные о фильмах')

          return EMPTY
        }
      )
    )
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`/movies/${id}`).pipe(
      catchError(() => {
          this.notifyService.error.next('Не удалось загрузить данные фильма')

          return EMPTY
        }
      )
    )
  }
}

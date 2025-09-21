import {Injectable} from '@angular/core';
import {catchError, EMPTY, map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NotifyService} from './notify.service';

export interface Movie {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
  year: number;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})

export class DataMovieService {

  constructor(private http: HttpClient, private notifyService: NotifyService) {
  }

  getAllMovies(search: string): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movies').pipe(
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
    return this.http.get<Movie>(`http://localhost:3000/movies/${id}`).pipe(
      catchError(() => {
          this.notifyService.error.next('Не удалось загрузить данные фильма')

          return EMPTY
        }
      )
    )
  }
}

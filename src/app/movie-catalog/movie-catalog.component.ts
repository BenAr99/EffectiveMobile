import {ChangeDetectionStrategy, Component, DestroyRef, OnInit} from '@angular/core';
import {DataMovieService, Movie} from '../services/data-movie.service';
import {debounceTime, filter, Observable, of, startWith, switchMap} from 'rxjs';
import {MovieCardComponent} from '../movie-item/movie-card.component';
import {AsyncPipe} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MovieDialogComponent} from '../movie-item-info/movie-dialog.component';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movie-catalog',
  standalone: true,
  imports: [
    MovieCardComponent,
    AsyncPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './movie-catalog.component.html',
  styleUrl: './movie-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MovieCatalogComponent implements OnInit {
  movies: Observable<Movie[]> = of([])
  search = new FormControl<string>('', [Validators.required])

  constructor(private dataMovieService: DataMovieService, private dialog: MatDialog, private destroy: DestroyRef) {
  }

  ngOnInit() {
    this.movies = this.search.valueChanges.pipe(
      debounceTime(200),
      startWith(''),
      filter(value => value !== null),
      switchMap(search => {
        return this.dataMovieService.getAllMovies(search)
      }))
  }

  openDialogMovieInfo(id: string) {
    this.dataMovieService.getMovie(id).pipe(
      takeUntilDestroyed(this.destroy),
    ).subscribe(value => {
      this.dialog.open(MovieDialogComponent, {
        panelClass: 'movie-dialog',
        data: value,
        autoFocus: false,
        backdropClass: 'no-backdrop',
      })
    })
  }
}

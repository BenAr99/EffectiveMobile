import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Movie} from '../services/data-movie.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RatingColorDirective} from '../directives/rating-color.directive';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-movie-dialog',
  standalone: true,
  imports: [
    MatIconModule,
    RatingColorDirective
  ],
  templateUrl: './movie-dialog.component.html',
  styleUrl: './movie-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    private dialogRef: MatDialogRef<MovieDialogComponent>
  ) {
  }

  close() {
    this.dialogRef.close();
  }
}

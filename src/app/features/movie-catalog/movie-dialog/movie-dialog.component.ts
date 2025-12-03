import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RatingColorDirective} from '../../../shared/directives/rating-color.directive';
import {MatIconModule} from '@angular/material/icon';
import {Movie} from '../movie-catalog.contracts';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-movie-dialog',
  standalone: true,
  imports: [
    MatIconModule,
    RatingColorDirective,
    NgOptimizedImage
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

  close(): void {
    this.dialogRef.close();
  }
}

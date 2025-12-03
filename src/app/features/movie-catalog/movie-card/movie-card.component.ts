import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Movie} from '../movie-catalog.contracts';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  @Input() movie?: Movie;
}

import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Movie} from '../services/data-movie.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  @Input() movie?: Movie;
}

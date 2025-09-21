import {Routes} from '@angular/router';
import {MovieCatalogComponent} from './movie-catalog/movie-catalog.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'catalog', pathMatch: 'full'
  },
  {
    path: 'catalog', component: MovieCatalogComponent
  }
];

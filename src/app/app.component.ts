import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NotifyService} from './services/notify.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private notifyService: NotifyService,
    private snackBar: MatSnackBar,
  ) {
    this.notifyService.error.subscribe((error)=> {
      this.snackBar.open(error, 'Закрыть', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: 'snackbar__error'
      })
    })
  }
}

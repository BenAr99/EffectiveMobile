import {Component, DestroyRef} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NotifyService} from './core/services/notify.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private notifyService: NotifyService,
    private snackBar: MatSnackBar,
    private destroy: DestroyRef
  ) {
    this.notifyService.error.pipe(
      takeUntilDestroyed(this.destroy),
    ).subscribe((error)=> {
      this.snackBar.open(error, 'Закрыть', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: 'snackbar__error'
      })
    })
  }
}

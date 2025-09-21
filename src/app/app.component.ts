import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NotifyService} from './services/notify.service';
import {MatDialog} from '@angular/material/dialog';
import {NotifyComponent} from './notify/notify.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EffectiveMobile';

  constructor(
    private notifyService: NotifyService,
    private dialog: MatDialog,
  ) {
    this.notifyService.error.subscribe((error)=> {
      this.dialog.open(NotifyComponent, {
        data: error
      })
    })
  }
}

// spinner
// отобразить ошибку компонент

import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-notify',
  standalone: true,
  imports: [],
  templateUrl: './notify.component.html',
  styleUrl: './notify.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifyComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public error: string) {
  }
}

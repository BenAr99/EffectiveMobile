import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  error = new Subject<string>()

  constructor() {
  }
}

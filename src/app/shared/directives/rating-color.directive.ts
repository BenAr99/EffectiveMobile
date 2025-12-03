import {Directive, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appRatingColor]',
  standalone: true
})
export class RatingColorDirective implements OnChanges {
  @Input() appRatingColor?: number;
  @HostBinding('style.background') backgroundColor?: string;

  ngOnChanges() {
    if (this.appRatingColor) {
      if (this.appRatingColor >=  8 ) {
        this.backgroundColor = 'gold'
      }

      if (this.appRatingColor > 6 && this.appRatingColor < 8) {
        this.backgroundColor = '#72c172'
      }

      if (this.appRatingColor > 5 && this.appRatingColor <= 6) {
        this.backgroundColor = '#cfc7c7'
      }

      if (this.appRatingColor <= 5) {
        this.backgroundColor = 'red'
      }
    }
  }

}

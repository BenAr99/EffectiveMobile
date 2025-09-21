import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {map, throwError} from 'rxjs';

interface CanError {
  isError?: boolean;
}

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map(event => {
      if (event instanceof HttpResponse) {
        const body = event.body
        if (isMovie(body) && body.isError ) {
          throw new Error('Не найден фильм');
        }
      }
      return event;
    })
  )
};
// commit напомнить
function isMovie(value: unknown | Record<string, unknown>): value is CanError {
  return typeof value === "object" && value !== null && 'isError' in value
}

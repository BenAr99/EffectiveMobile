  import { HttpInterceptorFn } from '@angular/common/http';
  import {inject} from '@angular/core';
  import {BASE_URL} from '../tokens/base-url.token';

  export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
    const baseUrl: string = inject(BASE_URL);

    const modifiedReq = req.clone({
      url: baseUrl + req.url,
    })

    return next(modifiedReq);
  };

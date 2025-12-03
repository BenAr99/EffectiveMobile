import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {errorInterceptor} from './core/Interceptors/error.Interceptor';
import {BASE_URL} from './core/tokens/base-url.token';
import {baseUrlInterceptor} from './core/Interceptors/base-url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideHttpClient(withInterceptors([baseUrlInterceptor, errorInterceptor])), {provide: BASE_URL, useValue: 'http://localhost:3000'}]
};

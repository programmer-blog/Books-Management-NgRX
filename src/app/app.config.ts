import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { BookEffects } from './books/book.effect'; 

import { routes } from './app.routes';
import { BookReducer } from './books/book.reducer';
import { AppState } from './app.state';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideStore<AppState>({ book: BookReducer }),
    provideEffects([BookEffects]),
  ]
};

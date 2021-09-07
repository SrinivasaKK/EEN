import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { StorageService } from './storage.service';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { NavigatorService } from './navigator.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private navigatorService: NavigatorService,
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    const token = this.storageService.getAccessToken();
    const refreshToken = this.storageService.getRefreshToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json',
        },
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService
            .refreshToken({ refresh_token: refreshToken })
            .subscribe(() => {
              location.reload();
            });
        } else {
          this.navigatorService.navigateToLogin();
        }
        return throwError(error);
      })
    );
  }
}

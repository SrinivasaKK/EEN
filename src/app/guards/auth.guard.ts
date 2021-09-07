import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { NavigatorService } from '../services/navigator.service';
import { AuthService } from './../services/auth.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private navigatorService: NavigatorService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state?.url;

    return this.isUserAuthenticated(url);
  }

  isUserAuthenticated(url: string): boolean {
    if (this.storageService.getRefreshToken()) {
      return true;
    }

    this.authService.redirectUrl = url;

    this.navigatorService.navigateToLogin();
  }
}

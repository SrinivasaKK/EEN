import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from './../constant';
@Injectable({
  providedIn: 'root',
})
export class NavigatorService {
  constructor(private router: Router) {}

  navigateToLogin(): void {
    this.router.navigate([APP_ROUTES.LOGIN]);
  }

  navigateToCameras(): void {
    this.router.navigate([APP_ROUTES.CAMERAS]);
  }

  navigateToCameraDetails(cameraId: Number): void {
    this.router.navigate([APP_ROUTES.CAMERAS, `${cameraId}`]);
  }
}

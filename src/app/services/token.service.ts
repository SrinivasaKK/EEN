import { Injectable } from '@angular/core';
import {
  ACCESS_TOKEN_KEY,
  LOGGED_IN_KEY,
  REFRESH_TOKEN_KEY,
  CAMERA_DETAILS_KEY,
  CAMERA_STATUS_KEY,
  CAMERA_LIST_KEY,
} from './../constant';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getAccessToken(): string {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  saveAccessToken(token): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

  saveRefreshToken(refreshToken): void {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }

  removeAccessToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }

  setLoggedIn(value): void {
    localStorage.setItem(LOGGED_IN_KEY, value);
  }

  isUserLoggedIn() {
    return localStorage.getItem(LOGGED_IN_KEY);
  }

  setCameraDetails(cameraID, value): void {
    localStorage.setItem(`${CAMERA_DETAILS_KEY}_${cameraID}`, value);
  }

  getCameraDetails(cameraID): string {
    return localStorage.getItem(`${CAMERA_DETAILS_KEY}_${cameraID}`);
  }

  setCameraStatus(cameraID, value): void {
    localStorage.setItem(`${CAMERA_STATUS_KEY}_${cameraID}`, value);
  }

  getCameraStatus(cameraID): string {
    return localStorage.getItem(`${CAMERA_STATUS_KEY}_${cameraID}`);
  }

  setCameraList(value): void {
    localStorage.setItem(CAMERA_LIST_KEY, value);
  }

  getCameraList(): string {
    return localStorage.getItem(CAMERA_LIST_KEY);
  }
}

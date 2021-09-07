import { Injectable } from '@angular/core';
import {
  ACCESS_TOKEN_KEY,
  LOGGED_IN_KEY,
  REFRESH_TOKEN_KEY,
  CAMERA_DETAILS_KEY,
  CAMERA_STATUS_KEY,
  CAMERA_LIST_KEY,
  CAMERA_LOCATION_KEY,
} from '../constant';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getAccessToken(): string {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string {
    return sessionStorage.getItem(REFRESH_TOKEN_KEY);
  }

  saveAccessToken(token: string): void {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

  saveRefreshToken(refreshToken: string): void {
    sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }

  removeAccessToken(): void {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  removeRefreshToken(): void {
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
  }

  setLoggedIn(value: string): void {
    sessionStorage.setItem(LOGGED_IN_KEY, value);
  }

  isUserLoggedIn(): string {
    return sessionStorage.getItem(LOGGED_IN_KEY);
  }

  setCameraDetails(cameraID: Number, value: string): void {
    sessionStorage.setItem(`${CAMERA_DETAILS_KEY}_${cameraID}`, value);
  }

  getCameraDetails(cameraID: Number): string {
    return sessionStorage.getItem(`${CAMERA_DETAILS_KEY}_${cameraID}`);
  }

  setCameraStatus(cameraID: Number, value: string): void {
    sessionStorage.setItem(`${CAMERA_STATUS_KEY}_${cameraID}`, value);
  }

  getCameraStatus(cameraID: Number): string {
    return sessionStorage.getItem(`${CAMERA_STATUS_KEY}_${cameraID}`);
  }

  getCameraLocation(cameraID: Number): string {
    return sessionStorage.getItem(`${CAMERA_LOCATION_KEY}_${cameraID}`);
  }

  setCameraLocation(cameraID, value): void {
    sessionStorage.setItem(`${CAMERA_LOCATION_KEY}_${cameraID}`, value);
  }

  setCameraList(value): void {
    sessionStorage.setItem(
      `${this.getAccessToken()}_${CAMERA_LIST_KEY}`,
      value
    );
  }

  getCameraList(): string {
    return sessionStorage.getItem(
      `${this.getAccessToken()}_${CAMERA_LIST_KEY}`
    );
  }

  clear(): void {
    sessionStorage.clear();
  }
}

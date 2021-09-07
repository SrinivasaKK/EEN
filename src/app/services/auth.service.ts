import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import {
  BASE_API_URL,
  OAUTH_END_PONT,
  STATIC_TEXTS,
  LOGOUT_END_POINT,
} from './../constant';

import { PostResponseModel } from '../models/response.model';
import { environment } from './../../environments/environment';
import { LoginModel } from '../models/login.model';

const OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:
      'Basic ' + btoa(environment.API_KEY + ':' + environment.CLIENT_SECRET),
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLoggedInValue = false;

  get isUserLoggedIn(): boolean {
    return this.isUserLoggedInValue;
  }

  set isUserLoggedIn(value: boolean) {
    this.isUserLoggedInValue = value;
  }

  private handleError(error: HttpErrorResponse): any {
    console.error(
      `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`
    );

    return throwError(error);
  }

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  redirectUrl = '';
  login(loginData: LoginModel): Observable<PostResponseModel> {
    this.storageService.removeAccessToken();
    this.storageService.removeRefreshToken();
    const body = new HttpParams()
      .set(STATIC_TEXTS.USER_NAME, loginData.username)
      .set(STATIC_TEXTS.PASSWORD, loginData.password)
      .set(STATIC_TEXTS.GRANT_TYPE, STATIC_TEXTS.PASSWORD);

    const loginEndPoint = `${OAUTH_END_PONT}?${STATIC_TEXTS.GRANT_TYPE}=${STATIC_TEXTS.PASSWORD}&${STATIC_TEXTS.SCOPE}=write&${STATIC_TEXTS.USER_NAME}=${loginData.username}&${STATIC_TEXTS.PASSWORD}=${loginData.password}`;
    return this.post(loginEndPoint, body, OPTIONS);
  }

  refreshToken(data: any): Observable<any> {
    this.storageService.removeAccessToken();
    const body = new HttpParams()
      .set(`${STATIC_TEXTS.REFRESH_TOKEN}`, data.refresh_token)
      .set(`${STATIC_TEXTS.GRANT_TYPE}`, `${STATIC_TEXTS.REFRESH_TOKEN}`);
    const refreshTokenEndPoint = `${OAUTH_END_PONT}?${
      STATIC_TEXTS.GRANT_TYPE
    }=${STATIC_TEXTS.REFRESH_TOKEN}&${STATIC_TEXTS.SCOPE}=write&${
      STATIC_TEXTS.REFRESH_TOKEN
    }=${this.storageService.getRefreshToken()}`;
    return this.post(refreshTokenEndPoint, body);
  }

  logout(): void {
    this.delete(LOGOUT_END_POINT).subscribe(
      (response) => {
        this.storageService.clear();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get(url: string): Observable<any> {
    return this.http
      .get<any>(`${BASE_API_URL}${url}`)
      .pipe(catchError(this.handleError));
  }

  post(url: string, body = {}, OPTIONS = {}): Observable<PostResponseModel> {
    return this.http
      .post<any>(url, body, OPTIONS)
      .pipe(catchError(this.handleError));
  }

  delete(url: string): Observable<any> {
    return this.http.delete<any>(url).pipe(catchError(this.handleError));
  }
}

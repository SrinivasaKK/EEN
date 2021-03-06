import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import {
  CameraResponseModel,
  PostResponseModel,
} from '../models/response.model';
import {
  BASE_API_URL,
  CAMERA_END_POINT,
  OAUTH_END_PONT,
  STATIC_TEXTS,
} from './../constant';
import { HttpClientModule } from '@angular/common/http';
describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should return an Observable<PostResponseModel>', () => {
      const passValue = {
        username: 'onlinedemo@cameramanager.com',
        password: 'demo1234',
      };

      service.login(passValue).subscribe((response: PostResponseModel) => {
        expect(response.access_token).toString();
      });

      const req = httpMock.expectOne(
        `${OAUTH_END_PONT}?${STATIC_TEXTS.GRANT_TYPE}=${STATIC_TEXTS.PASSWORD}&${STATIC_TEXTS.SCOPE}=write&${STATIC_TEXTS.USER_NAME}=${passValue.username}&${STATIC_TEXTS.PASSWORD}=${passValue.password}`
      );
      expect(req.request.url).toBe(
        `${OAUTH_END_PONT}?${STATIC_TEXTS.GRANT_TYPE}=${STATIC_TEXTS.PASSWORD}&${STATIC_TEXTS.SCOPE}=write&${STATIC_TEXTS.USER_NAME}=${passValue.username}&${STATIC_TEXTS.PASSWORD}=${passValue.password}`
      );
      req.flush(passValue);
    });
  });

  describe('get list of cameras for the account', () => {
    it('should be an array of CameraResponseModel', () => {
      service.get(CAMERA_END_POINT).subscribe((response) => {
        expect(response.isArray()).toBeTruthy();
      });

      const req = httpMock.expectOne(`${BASE_API_URL}${CAMERA_END_POINT}`);
      expect(req.request.url).toBe(`${BASE_API_URL}${CAMERA_END_POINT}`);
    });
  });

  describe('get details of for particular cameraID', () => {
    it('should be an object of CameraStatusResponseModel', () => {
      let cameraId = 1729057;
      service
        .get(`${CAMERA_END_POINT}/${cameraId}/status`)
        .subscribe((response) => {
          expect(
            typeof response === 'object' && response !== null
          ).toBeTruthy();
        });

      const req = httpMock.expectOne(
        `${BASE_API_URL}${CAMERA_END_POINT}/${cameraId}/status`
      );
      expect(req.request.url).toBe(
        `${BASE_API_URL}${CAMERA_END_POINT}/${cameraId}/status`
      );
      req.flush(cameraId);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});

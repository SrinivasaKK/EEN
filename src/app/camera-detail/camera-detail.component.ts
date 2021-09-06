import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  CameraAccessErrorModel,
  CameraResponseModel,
  CameraStatusResponseModel,
  ErrorResponseModel,
} from '../models/response.model';
import { CAMERA_END_POINT, STATIC_TEXTS } from '../constant';
import { ActivatedRoute } from '@angular/router';
import { NavigatorService } from '../services/navigator.service';
import { StorageService } from '../services/token.service';
@Component({
  selector: 'app-camera-detail',
  templateUrl: './camera-detail.component.html',
  styleUrls: ['./camera-detail.component.scss'],
})
export class CameraDetailComponent implements OnInit {
  showLoader = false;
  TEXTS = STATIC_TEXTS;
  cameraId = null;
  cameraStatus = null;
  cameraDetail: CameraResponseModel = null;
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private navigatorService: NavigatorService,
    private storageService: StorageService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.cameraId = params['id'];
      this.getCameraDetails(this.cameraId);
    });
  }

  ngOnInit(): void {}

  getCameraDetails(cameraId: Number): void {
    this.showLoader = true;
    if (cameraId) {
      //check if the details is already present for given camera ID

      const details = this.storageService.getCameraDetails(cameraId);
      if (details) {
        this.cameraDetail = JSON.parse(details) as any;
        this.showLoader = false;
        return;
      }

      this.authService.get(`${CAMERA_END_POINT}/${cameraId}`).subscribe(
        (response: CameraResponseModel) => {
          this.cameraDetail = response;

          //save to local storage
          this.storageService.setCameraDetails(
            cameraId,
            JSON.stringify(response)
          );
          this.showLoader = false;
        },
        (error: CameraAccessErrorModel) => {
          alert(error.error.title);
          this.showLoader = false;
        }
      );
    } else {
      console.log('No Camera ID');
    }
  }

  getStatus(cameraId: Number) {
    this.showLoader = true;
    if (cameraId) {
      const details = this.storageService.getCameraStatus(cameraId);
      if (details) {
        this.cameraStatus = JSON.parse(details) as any;
        this.showLoader = false;
        return;
      }
      this.authService.get(`${CAMERA_END_POINT}/${cameraId}/status`).subscribe(
        (response: CameraStatusResponseModel) => {
          //save to local storage
          this.storageService.setCameraStatus(
            cameraId,
            JSON.stringify(response)
          );
          this.cameraStatus = response;
          this.showLoader = false;
        },
        (error: CameraAccessErrorModel) => {
          alert(error.error.title);
          this.showLoader = false;
        }
      );
    } else {
      console.log('No camera ID');
    }
  }

  GoBackToCameras() {
    this.navigatorService.navigateToCameras();
  }
}

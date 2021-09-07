import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  CameraAccessErrorModel,
  CameraLocationModel,
  CameraStatusResponseModel,
} from '../models/response.model';
import { CAMERA_END_POINT, STATIC_TEXTS } from '../constant';
import { ActivatedRoute } from '@angular/router';
import { NavigatorService } from '../services/navigator.service';
import { StorageService } from '../services/storage.service';
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
  cameraLocation: CameraLocationModel;
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private navigatorService: NavigatorService,
    private storageService: StorageService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.cameraId = params['id'];
      this.getStatus(this.cameraId);
    });
  }

  ngOnInit(): void {}

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
      alert(this.TEXTS.NO_CAMERA_ID_ERROR);
    }
  }

  getCameraLocation(cameraId) {
    this.showLoader = true;
    if (cameraId) {
      const details = this.storageService.getCameraLocation(cameraId);
      if (details) {
        this.cameraLocation = JSON.parse(details) as any;
        this.showLoader = false;
        return;
      }
      this.authService
        .get(`${CAMERA_END_POINT}/${cameraId}/location`)
        .subscribe(
          (response: CameraLocationModel) => {
            //save to local storage
            this.storageService.setCameraLocation(
              cameraId,
              JSON.stringify(response)
            );
            this.cameraLocation = response;
            this.showLoader = false;
          },
          (error: CameraAccessErrorModel) => {
            alert(error.error.title);
            this.showLoader = false;
          }
        );
    } else {
      alert(this.TEXTS.NO_CAMERA_ID_ERROR);
    }
  }

  GoBackToCameras() {
    this.navigatorService.navigateToCameras();
  }
}

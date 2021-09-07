import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CameraResponseModel } from '../models/response.model';
import { CAMERA_END_POINT, STATIC_TEXTS } from '../constant';
import { NavigatorService } from '../services/navigator.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss'],
})
export class CamerasComponent implements OnInit {
  showLoader = false;
  cameraList: CameraResponseModel[] = [];
  TEXTS = STATIC_TEXTS;
  constructor(
    private authService: AuthService,
    private navigatorService: NavigatorService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.showLoader = true;

    const details = this.storageService.getCameraList();
    if (details) {
      this.cameraList = JSON.parse(details) as any;
      this.showLoader = false;
      return;
    }

    this.authService.get(CAMERA_END_POINT).subscribe(
      (response: CameraResponseModel[]) => {
        this.storageService.setCameraList(JSON.stringify(response));
        this.cameraList = response;
        this.showLoader = false;
      },
      (error) => {
        console.log(error);
        this.showLoader = false;
      }
    );
  }

  getCameraDetails(cameraId: Number) {
    if (cameraId) {
      this.navigatorService.navigateToCameraDetails(cameraId);
    } else {
      console.log(this.TEXTS.NO_CAMERA_ID_ERROR);
    }
  }
}

export interface PostResponseModel {
  access_token: string;
  expires_in: Number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface CameraResponseModel {
  accountId: Number;
  cameraId: Number;
  deviceTypeId: Number;
  ethMacAddress: string;
  name: string;
  zoneId: Number;
}

export interface ErrorResponseModel {
  error: ErrorModel;
  headers: ErrorHeaderModel;
  message: string;
  name: string;
  ok: boolean;
  status: Number;
  statusText: string;
  url: string;
}

export interface ErrorModel {
  error: string;
  error_description: string;
}

export interface ErrorHeaderModel {
  lazyInit: () => {};
  lazyUpdate: null;
  normalizedNames: () => {};
}

export interface CameraStatusResponseModel {
  audioEnabled: boolean;
  cameraId: Number;
  connectionType: string;
  firmwareStatus: string;
  lastConnectionResult: string;
  online: Boolean;
  passwordKnown: Boolean;
  passwordStatus: string;
  recordingOnCloud: Boolean;
  recordingOnSd: Boolean;
}

export interface CameraAccessErrorModel {
  error: AccessErrorModel;
  headers: ErrorHeaderModel;
  message: string;
  name: string;
  ok: boolean;
  status: Number;
  statusText: string;
  url: string;
}

export interface AccessErrorModel {
  code: number;
  title: string;
  detail: string;
}

export interface CameraLocationModel {
  cameraId: Number;
  latitude: string;
  longitude: string;
  timeZone: string;
}

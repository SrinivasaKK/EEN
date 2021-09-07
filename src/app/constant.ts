export const ACCESS_TOKEN_KEY = 'access_token';

export const REFRESH_TOKEN_KEY = 'refresh_token';

export const LOGGED_IN_KEY = 'isLoggedIn';

export const CAMERA_LIST_KEY = 'camera_list';
export const CAMERA_DETAILS_KEY = 'camera_details';

export const CAMERA_STATUS_KEY = 'camera_status';
export const CAMERA_LOCATION_KEY = 'camera_location';

export const BASE_API_URL = 'https://rest.cameramanager.com/';

export const OAUTH_END_PONT = `${BASE_API_URL}oauth/token`;

export const LOGOUT_END_POINT = `${BASE_API_URL}/rest/v2.0/users/self/tokens/current`;

export const CAMERA_END_POINT = `rest/v2.4/cameras`;

export const STATIC_TEXTS = {
  REFRESH_TOKEN: 'refresh_token',
  GRANT_TYPE: 'grant_type',
  USER_NAME: 'username',
  PASSWORD: 'password',
  SCOPE: 'scope',
  LOGIN_TEXT: 'Log in to Access Your Cameras',
  USERNAME_LABEL: 'Username',
  PASSWORD_LABEL: 'Password',
  USERNAME_ERROR: 'Please enter your user name',
  PASSWORD_ERROR: 'Please enter your password',
  HEADER_TEXT: 'Eagle Eye Networks',
  LOGOUT_TEXT: 'Logout',
  LOGIN_BUTTON_TEXT: 'Login',
  NO_CAMERA_ID_ERROR: 'No camera Id present',
  BACK_BUTTON_LABEL: 'Go Back',
  SHOW_DETAILS: 'See More',
  ONLINE: 'Online',
  RECORDING_ON_CLOUD: 'Recording On Cloud',
  AUDIO_ENABLED: 'Audio Enabled',
  FIRMWARE_STATUS: 'Firmware Status',
  ID: 'Id',
  RECORDING_ON_SD: 'Recording On SD',
  BUTTON_CAMERA_LOCATION: 'Get Camera Location',
  CAMERA_LOCATED: 'Your camera is located at',
};

export const APP_ROUTES = {
  LOGIN: 'login',
  CAMERAS: 'cameras',
};
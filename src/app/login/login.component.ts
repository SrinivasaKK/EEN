import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import {
  ErrorResponseModel,
  PostResponseModel,
} from '../models/response.model';
import { StorageService } from '../services/storage.service';
import { STATIC_TEXTS, FIELDS } from './../constant';
import { NavigatorService } from '../services/navigator.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.scss'],
})
export class LoginComponent implements OnInit {
  TEXTS = STATIC_TEXTS;
  loginForm: FormGroup;
  FIELDS = FIELDS;
  username = '';
  password = '';
  showLoader = false;
  matcher = new MyErrorStateMatcher();
  constructor(
    private authService: AuthService,
    private navigatorService: NavigatorService,
    private formBuilder: FormBuilder,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    const loginFormControls = {};
    loginFormControls[this.FIELDS.USER_NAME] = [
      null,
      [Validators.required, Validators.maxLength(50)],
    ];
    loginFormControls[this.FIELDS.PASSWORD] = [
      null,
      [Validators.required, Validators.minLength(8), Validators.maxLength(50)],
    ];
    this.loginForm = this.formBuilder.group(loginFormControls);
  }

  onFormSubmit(): void {
    this.showLoader = true;
    this.login();
  }

  login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      (response: PostResponseModel) => {
        console.log(response);
        this.showLoader = false;
        this.storageService.saveAccessToken(response.access_token);
        this.storageService.saveRefreshToken(response.refresh_token);
        this.storageService.setLoggedIn('true');
        this.navigatorService.navigateToCameras();
      },
      (error: ErrorResponseModel) => {
        this.authService.isUserLoggedIn = false;
        alert(error.error.error_description);
        this.loginForm.reset();
        this.showLoader = false;
      }
    );
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FIELDS } from './../constant';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatButtonModule,
      ],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test Number of Form elements', () => {
    const formElement: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputs = formElement.querySelectorAll('input');
    expect(inputs.length).toBe(2);
  });

  it('Initial form values to be null', () => {
    const form = component.loginForm;
    const formValues = {
      username: null,
      password: null,
    };

    expect(form.value).toEqual(formValues);
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('Form field validity when form is empty', () => {
    const userName = component.loginForm.controls[FIELDS.USER_NAME];
    expect(userName.valid).toBeFalsy();
  });

  it('Username field validity ', () => {
    const userName = component.loginForm.controls[FIELDS.USER_NAME];
    userName.setValue('');
    expect(userName.hasError('required')).toBeTruthy();
  });

  it('Username field max length validity ', () => {
    const userName = component.loginForm.controls[FIELDS.USER_NAME];
    const value =
      'jsjsjjjsjsjsjsjsjsjsjsjsjsjsjsjsjsjsjjsjjjsjjjjsjjjjjjjjjjsjsjsjsjjjsjjsjjjjjsjjsjjjsjjsjjjsdjsdsdj';
    userName.setValue(value);
    expect(userName.hasError('maxlength')).toBeTruthy();
  });

  it('Password field validity ', () => {
    const password = component.loginForm.controls[FIELDS.PASSWORD];
    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();
  });

  it('Password field min length validity ', () => {
    const password = component.loginForm.controls[FIELDS.PASSWORD];
    password.setValue('demo123');
    expect(password.hasError('minlength')).toBeTruthy();
  });

  it('Password field min length validity ', () => {
    const password = component.loginForm.controls[FIELDS.PASSWORD];
    password.setValue('demo1234');
    expect(password.hasError('minlength')).toBeFalsy();
  });

  it('Password field max length validity ', () => {
    const password = component.loginForm.controls[FIELDS.PASSWORD];
    const value =
      'jsjsjjjsjsjsjsjsjsjsjsjsjsjsjsjsjsjsjjsjjjsjjjjsjjjjjjjjjjsjsjsjsjjjsjjsjjjjjsjjsjjjsjjsjjjsdjsdsdj';
    password.setValue(value);
    expect(password.hasError('maxlength')).toBeTruthy();
  });

  it('check validity of complete form', () => {
    const loginElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm')
      .querySelectorAll('input')[0];
    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm')
      .querySelectorAll('input')[1];

    loginElement.value = 'online';
    passwordElement.value = 'abcd';
    loginElement.dispatchEvent(new Event('input'));
    passwordElement.dispatchEvent(new Event('input'));

    const isFormValid = component.loginForm.valid;
    fixture.whenStable().then(() => {
      expect(isFormValid).toBeFalsy();
    });
  });

  it('check validity of complete form', () => {
    const loginElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm')
      .querySelectorAll('input')[0];
    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm')
      .querySelectorAll('input')[1];

    loginElement.value = 'online';
    passwordElement.value = 'ddddddddd';
    loginElement.dispatchEvent(new Event('input'));
    passwordElement.dispatchEvent(new Event('input'));

    const isFormValid = component.loginForm.valid;
    fixture.whenStable().then(() => {
      expect(isFormValid).toBeTruthy();
    });
  });
});

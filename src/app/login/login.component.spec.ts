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

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('Form field validity when form is empty', () => {
    const userName = component.loginForm.controls.username;
    expect(userName.valid).toBeFalsy();
  });

  it('Username field validity ', () => {
    const userName = component.loginForm.controls.username;
    userName.setValue('');
    expect(userName.hasError('required')).toBeTruthy();
  });

  it('Password field validity ', () => {
    const password = component.loginForm.controls.password;
    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();
  });
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';
import { CamerasComponent } from './cameras/cameras.component';
import { CameraDetailComponent } from './camera-detail/camera-detail.component';
import { environment } from 'src/environments/environment';

// disable logs if app is in production
if (environment.production) {
  console.log = () => {};
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CamerasComponent,
    CameraDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamerasComponent } from './cameras/cameras.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CameraDetailComponent } from './camera-detail/camera-detail.component';
import { APP_ROUTES } from './constant';
const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.CAMERAS, pathMatch: 'full' },
  {
    path: APP_ROUTES.CAMERAS,
    canActivate: [AuthGuard],
    component: CamerasComponent,
  },
  {
    path: `${APP_ROUTES.CAMERAS}/:id`,
    canActivate: [AuthGuard],
    component: CameraDetailComponent,
  },
  { path: APP_ROUTES.LOGIN, component: LoginComponent },

  { path: '**', redirectTo: APP_ROUTES.CAMERAS },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

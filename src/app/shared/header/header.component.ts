import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { StorageService } from 'src/app/services/storage.service';
import { STATIC_TEXTS } from './../../constant';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  TEXTS = STATIC_TEXTS;
  constructor(
    public authService: AuthService,
    private navigatorService: NavigatorService,
    public storageService: StorageService
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
    this.navigatorService.navigateToLogin();
  }
}

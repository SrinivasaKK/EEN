import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatIconModule, HttpClientModule],
  exports: [HeaderComponent],
})
export class SharedModule {}

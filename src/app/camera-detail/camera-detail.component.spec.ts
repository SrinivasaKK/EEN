import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CameraDetailComponent } from './camera-detail.component';

describe('CameraDetailComponent', () => {
  let component: CameraDetailComponent;
  let fixture: ComponentFixture<CameraDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CameraDetailComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatProgressSpinnerModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

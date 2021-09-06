import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CamerasComponent } from './cameras.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
describe('CamerasComponent', () => {
  let component: CamerasComponent;
  let fixture: ComponentFixture<CamerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamerasComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        MatProgressSpinnerModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

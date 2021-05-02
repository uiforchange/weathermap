import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureWeatherDetailsComponent } from './future-weather-details.component';

describe('FutureWeatherDetailsComponent', () => {
  let component: FutureWeatherDetailsComponent;
  let fixture: ComponentFixture<FutureWeatherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureWeatherDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureWeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

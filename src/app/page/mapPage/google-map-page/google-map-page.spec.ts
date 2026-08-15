import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapPage } from './google-map-page';

describe('GoogleMapPage', () => {
  let component: GoogleMapPage;
  let fixture: ComponentFixture<GoogleMapPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleMapPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleMapPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

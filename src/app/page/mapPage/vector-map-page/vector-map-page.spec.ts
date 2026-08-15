import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorMapPage } from './vector-map-page';

describe('VectorMapPage', () => {
  let component: VectorMapPage;
  let fixture: ComponentFixture<VectorMapPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VectorMapPage],
    }).compileComponents();

    fixture = TestBed.createComponent(VectorMapPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

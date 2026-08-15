import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartJsPage } from './chart-js-page';

describe('ChartJsPage', () => {
  let component: ChartJsPage;
  let fixture: ComponentFixture<ChartJsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartJsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartJsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

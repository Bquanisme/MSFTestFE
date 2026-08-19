import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartPage } from './dashboard-chart-page';

describe('DashboardChartPage', () => {
  let component: DashboardChartPage;
  let fixture: ComponentFixture<DashboardChartPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardChartPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardChartPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

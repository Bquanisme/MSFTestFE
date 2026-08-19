import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentactivitiesPage } from './recentactivities-page';

describe('RecentactivitiesPage', () => {
  let component: RecentactivitiesPage;
  let fixture: ComponentFixture<RecentactivitiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentactivitiesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentactivitiesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

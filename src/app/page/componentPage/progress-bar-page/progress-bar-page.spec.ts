import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarPage } from './progress-bar-page';

describe('ProgressBarPage', () => {
  let component: ProgressBarPage;
  let fixture: ComponentFixture<ProgressBarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

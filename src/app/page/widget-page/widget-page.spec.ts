import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPage } from './widget-page';

describe('WidgetPage', () => {
  let component: WidgetPage;
  let fixture: ComponentFixture<WidgetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

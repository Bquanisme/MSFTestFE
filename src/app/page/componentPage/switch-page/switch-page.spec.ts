import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPage } from './switch-page';

describe('SwitchPage', () => {
  let component: SwitchPage;
  let fixture: ComponentFixture<SwitchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

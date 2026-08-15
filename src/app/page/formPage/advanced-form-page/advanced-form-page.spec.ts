import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFormPage } from './advanced-form-page';

describe('AdvancedFormPage', () => {
  let component: AdvancedFormPage;
  let fixture: ComponentFixture<AdvancedFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFormPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedFormPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

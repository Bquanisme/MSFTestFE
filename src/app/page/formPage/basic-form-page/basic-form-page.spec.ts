import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormPage } from './basic-form-page';

describe('BasicFormPage', () => {
  let component: BasicFormPage;
  let fixture: ComponentFixture<BasicFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicFormPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicFormPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetAlert2Page } from './sweet-alert2-page';

describe('SweetAlert2Page', () => {
  let component: SweetAlert2Page;
  let fixture: ComponentFixture<SweetAlert2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetAlert2Page],
    }).compileComponents();

    fixture = TestBed.createComponent(SweetAlert2Page);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

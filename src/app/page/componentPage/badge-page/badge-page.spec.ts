import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePage } from './badge-page';

describe('BadgePage', () => {
  let component: BadgePage;
  let fixture: ComponentFixture<BadgePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgePage],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomePage } from './font-awesome-page';

describe('FontAwesomePage', () => {
  let component: FontAwesomePage;
  let fixture: ComponentFixture<FontAwesomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(FontAwesomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyPage } from './typography-page';

describe('TypographyPage', () => {
  let component: TypographyPage;
  let fixture: ComponentFixture<TypographyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypographyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TypographyPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

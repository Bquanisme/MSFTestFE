import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernIconPage } from './modern-icon-page';

describe('ModernIconPage', () => {
  let component: ModernIconPage;
  let fixture: ComponentFixture<ModernIconPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernIconPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ModernIconPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

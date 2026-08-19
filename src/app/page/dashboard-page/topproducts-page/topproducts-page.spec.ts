import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopproductsPage } from './topproducts-page';

describe('TopproductsPage', () => {
  let component: TopproductsPage;
  let fixture: ComponentFixture<TopproductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopproductsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TopproductsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

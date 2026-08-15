import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTablePage } from './basic-table-page';

describe('BasicTablePage', () => {
  let component: BasicTablePage;
  let fixture: ComponentFixture<BasicTablePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTablePage],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicTablePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

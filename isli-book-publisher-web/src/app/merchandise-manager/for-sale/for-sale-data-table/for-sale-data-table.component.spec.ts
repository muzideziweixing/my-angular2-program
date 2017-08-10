import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSaleDataTableComponent } from './for-sale-data-table.component';

describe('ForSaleDataTableComponent', () => {
  let component: ForSaleDataTableComponent;
  let fixture: ComponentFixture<ForSaleDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForSaleDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSaleDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

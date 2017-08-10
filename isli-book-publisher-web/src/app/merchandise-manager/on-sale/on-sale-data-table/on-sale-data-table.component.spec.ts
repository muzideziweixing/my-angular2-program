import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSaleDataTableComponent } from './on-sale-data-table.component';

describe('OnSaleDataTableComponent', () => {
  let component: OnSaleDataTableComponent;
  let fixture: ComponentFixture<OnSaleDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnSaleDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnSaleDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

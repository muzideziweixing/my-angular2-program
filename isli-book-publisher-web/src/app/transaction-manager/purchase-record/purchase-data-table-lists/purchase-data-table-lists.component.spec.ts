import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDataTableListsComponent } from './purchase-data-table-lists.component';

describe('PurchaseDataTableListsComponent', () => {
  let component: PurchaseDataTableListsComponent;
  let fixture: ComponentFixture<PurchaseDataTableListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseDataTableListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDataTableListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

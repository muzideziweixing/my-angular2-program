import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDataTableTabsComponent } from './purchase-data-table-tabs.component';

describe('PurchaseDataTableTabsComponent', () => {
  let component: PurchaseDataTableTabsComponent;
  let fixture: ComponentFixture<PurchaseDataTableTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseDataTableTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDataTableTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

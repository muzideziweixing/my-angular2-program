import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDataTableImageTextComponent } from './purchase-data-table-image-text.component';

describe('PurchaseDataTableImageTextComponent', () => {
  let component: PurchaseDataTableImageTextComponent;
  let fixture: ComponentFixture<PurchaseDataTableImageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseDataTableImageTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDataTableImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseQueryFormComponent } from './purchase-query-form.component';

describe('PurchaseQueryFormComponent', () => {
  let component: PurchaseQueryFormComponent;
  let fixture: ComponentFixture<PurchaseQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

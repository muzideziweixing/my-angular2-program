import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementQueryFormComponent } from './settlement-query-form.component';

describe('SettlementQueryFormComponent', () => {
  let component: SettlementQueryFormComponent;
  let fixture: ComponentFixture<SettlementQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

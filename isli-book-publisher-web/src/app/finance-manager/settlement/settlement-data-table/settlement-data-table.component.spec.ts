import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementDataTableComponent } from './settlement-data-table.component';

describe('SettlementDataTableComponent', () => {
  let component: SettlementDataTableComponent;
  let fixture: ComponentFixture<SettlementDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

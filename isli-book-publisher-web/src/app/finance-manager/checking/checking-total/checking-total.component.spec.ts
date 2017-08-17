import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingTotalComponent } from './checking-total.component';

describe('CheckingTotalComponent', () => {
  let component: CheckingTotalComponent;
  let fixture: ComponentFixture<CheckingTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckingTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

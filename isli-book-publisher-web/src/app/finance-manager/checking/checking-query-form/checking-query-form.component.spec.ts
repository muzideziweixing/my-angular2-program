import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingQueryFormComponent } from './checking-query-form.component';

describe('CheckingQueryFormComponent', () => {
  let component: CheckingQueryFormComponent;
  let fixture: ComponentFixture<CheckingQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckingQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

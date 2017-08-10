import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprDetailsComponent } from './opr-details.component';

describe('OprDetailsComponent', () => {
  let component: OprDetailsComponent;
  let fixture: ComponentFixture<OprDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

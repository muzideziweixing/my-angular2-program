import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprImgDetailsQueryComponent } from './opr-img-details-query.component';

describe('OprImgDetailsQueryComponent', () => {
  let component: OprImgDetailsQueryComponent;
  let fixture: ComponentFixture<OprImgDetailsQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprImgDetailsQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprImgDetailsQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

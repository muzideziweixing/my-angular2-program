import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprImgDetailsTotalComponent } from './opr-img-details-total.component';

describe('OprImgDetailsTotalComponent', () => {
  let component: OprImgDetailsTotalComponent;
  let fixture: ComponentFixture<OprImgDetailsTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprImgDetailsTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprImgDetailsTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

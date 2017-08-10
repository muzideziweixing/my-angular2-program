import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprImgDetailsTableComponent } from './opr-img-details-table.component';

describe('OprImgDetailsTableComponent', () => {
  let component: OprImgDetailsTableComponent;
  let fixture: ComponentFixture<OprImgDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprImgDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprImgDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProofComponent } from './details-proof.component';

describe('DetailsProofComponent', () => {
  let component: DetailsProofComponent;
  let fixture: ComponentFixture<DetailsProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

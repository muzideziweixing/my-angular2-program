import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiNavComponent } from './li-nav.component';

describe('LiNavComponent', () => {
  let component: LiNavComponent;
  let fixture: ComponentFixture<LiNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

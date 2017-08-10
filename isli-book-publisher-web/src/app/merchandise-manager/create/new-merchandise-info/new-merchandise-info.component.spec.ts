import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMerchandiseInfoComponent } from './new-merchandise-info.component';

describe('NewMerchandiseInfoComponent', () => {
  let component: NewMerchandiseInfoComponent;
  let fixture: ComponentFixture<NewMerchandiseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMerchandiseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMerchandiseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

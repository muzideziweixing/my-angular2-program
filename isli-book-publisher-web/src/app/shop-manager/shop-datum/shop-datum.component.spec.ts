import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDatumComponent } from './shop-datum.component';

describe('ShopDatumComponent', () => {
  let component: ShopDatumComponent;
  let fixture: ComponentFixture<ShopDatumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDatumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

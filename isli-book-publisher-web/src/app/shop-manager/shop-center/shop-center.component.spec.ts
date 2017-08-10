import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCenterComponent } from './shop-center.component';

describe('ShopCenterComponent', () => {
  let component: ShopCenterComponent;
  let fixture: ComponentFixture<ShopCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

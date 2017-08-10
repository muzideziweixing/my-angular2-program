import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPrivilegesComponent } from './account-privileges.component';

describe('AccountPrivilegesComponent', () => {
  let component: AccountPrivilegesComponent;
  let fixture: ComponentFixture<AccountPrivilegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPrivilegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

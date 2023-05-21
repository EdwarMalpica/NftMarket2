import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScanComponent } from './user-scan.component';

describe('UserScanComponent', () => {
  let component: UserScanComponent;
  let fixture: ComponentFixture<UserScanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserScanComponent]
    });
    fixture = TestBed.createComponent(UserScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

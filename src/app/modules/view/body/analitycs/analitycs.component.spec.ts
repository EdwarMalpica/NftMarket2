import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalitycsComponent } from './analitycs.component';

describe('AnalitycsComponent', () => {
  let component: AnalitycsComponent;
  let fixture: ComponentFixture<AnalitycsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalitycsComponent]
    });
    fixture = TestBed.createComponent(AnalitycsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

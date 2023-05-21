import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNftComponent } from './info-nft.component';

describe('InfoNftComponent', () => {
  let component: InfoNftComponent;
  let fixture: ComponentFixture<InfoNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoNftComponent]
    });
    fixture = TestBed.createComponent(InfoNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

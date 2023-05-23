import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintNftComponent } from './mint-nft.component';

describe('MintNftComponent', () => {
  let component: MintNftComponent;
  let fixture: ComponentFixture<MintNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MintNftComponent]
    });
    fixture = TestBed.createComponent(MintNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

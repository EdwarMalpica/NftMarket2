import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftIndividualComponent } from './nft-individual.component';

describe('NftIndividualComponent', () => {
  let component: NftIndividualComponent;
  let fixture: ComponentFixture<NftIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftIndividualComponent]
    });
    fixture = TestBed.createComponent(NftIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

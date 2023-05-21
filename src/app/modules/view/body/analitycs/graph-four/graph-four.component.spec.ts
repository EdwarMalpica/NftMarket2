import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphFourComponent } from './graph-four.component';

describe('GraphFourComponent', () => {
  let component: GraphFourComponent;
  let fixture: ComponentFixture<GraphFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphFourComponent]
    });
    fixture = TestBed.createComponent(GraphFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

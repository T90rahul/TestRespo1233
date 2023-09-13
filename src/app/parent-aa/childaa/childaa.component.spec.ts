import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildaaComponent } from './childaa.component';

describe('ChildaaComponent', () => {
  let component: ChildaaComponent;
  let fixture: ComponentFixture<ChildaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildaaComponent]
    });
    fixture = TestBed.createComponent(ChildaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbaComponent } from './childba.component';

describe('ChildbaComponent', () => {
  let component: ChildbaComponent;
  let fixture: ComponentFixture<ChildbaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildbaComponent]
    });
    fixture = TestBed.createComponent(ChildbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

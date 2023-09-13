import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbbComponent } from './childbb.component';

describe('ChildbbComponent', () => {
  let component: ChildbbComponent;
  let fixture: ComponentFixture<ChildbbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildbbComponent]
    });
    fixture = TestBed.createComponent(ChildbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

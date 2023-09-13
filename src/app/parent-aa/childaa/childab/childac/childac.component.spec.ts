import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildacComponent } from './childac.component';

describe('ChildacComponent', () => {
  let component: ChildacComponent;
  let fixture: ComponentFixture<ChildacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildacComponent]
    });
    fixture = TestBed.createComponent(ChildacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

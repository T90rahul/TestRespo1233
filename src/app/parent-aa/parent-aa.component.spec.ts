import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAAComponent } from './parent-aa.component';

describe('ParentAAComponent', () => {
  let component: ParentAAComponent;
  let fixture: ComponentFixture<ParentAAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentAAComponent]
    });
    fixture = TestBed.createComponent(ParentAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

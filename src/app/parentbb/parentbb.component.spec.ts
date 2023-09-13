import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbbComponent } from './parentbb.component';

describe('ParentbbComponent', () => {
  let component: ParentbbComponent;
  let fixture: ComponentFixture<ParentbbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentbbComponent]
    });
    fixture = TestBed.createComponent(ParentbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

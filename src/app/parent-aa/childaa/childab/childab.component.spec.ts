import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildabComponent } from './childab.component';

describe('ChildabComponent', () => {
  let component: ChildabComponent;
  let fixture: ComponentFixture<ChildabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildabComponent]
    });
    fixture = TestBed.createComponent(ChildabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

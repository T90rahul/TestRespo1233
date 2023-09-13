import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbcComponent } from './childbc.component';

describe('ChildbcComponent', () => {
  let component: ChildbcComponent;
  let fixture: ComponentFixture<ChildbcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildbcComponent]
    });
    fixture = TestBed.createComponent(ChildbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M1CompComponent } from './m1-comp.component';

describe('M1CompComponent', () => {
  let component: M1CompComponent;
  let fixture: ComponentFixture<M1CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M1CompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

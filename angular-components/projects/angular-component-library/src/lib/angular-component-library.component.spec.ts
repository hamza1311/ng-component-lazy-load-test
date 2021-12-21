import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentLibraryComponent } from './angular-component-library.component';

describe('AngularComponentLibraryComponent', () => {
  let component: AngularComponentLibraryComponent;
  let fixture: ComponentFixture<AngularComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularComponentLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

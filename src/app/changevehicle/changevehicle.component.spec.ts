import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangevehicleComponent } from './changevehicle.component';

describe('ChangevehicleComponent', () => {
  let component: ChangevehicleComponent;
  let fixture: ComponentFixture<ChangevehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangevehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

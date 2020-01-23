import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddescComponent } from './adddesc.component';

describe('AdddescComponent', () => {
  let component: AdddescComponent;
  let fixture: ComponentFixture<AdddescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

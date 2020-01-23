import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpaymentComponent } from './bookpayment.component';

describe('BookpaymentComponent', () => {
  let component: BookpaymentComponent;
  let fixture: ComponentFixture<BookpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

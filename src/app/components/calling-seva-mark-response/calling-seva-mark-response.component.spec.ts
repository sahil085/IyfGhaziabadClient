import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingSevaMarkResponseComponent } from './calling-seva-mark-response.component';

describe('CallingSevaMarkResponseComponent', () => {
  let component: CallingSevaMarkResponseComponent;
  let fixture: ComponentFixture<CallingSevaMarkResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingSevaMarkResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingSevaMarkResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

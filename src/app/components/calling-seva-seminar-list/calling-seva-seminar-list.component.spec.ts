import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingSevaSeminarListComponent } from './calling-seva-seminar-list.component';

describe('CallingSevaSeminarListComponent', () => {
  let component: CallingSevaSeminarListComponent;
  let fixture: ComponentFixture<CallingSevaSeminarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingSevaSeminarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingSevaSeminarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

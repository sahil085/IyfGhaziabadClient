import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSeminarDetailComponent } from './upcoming-seminar-detail.component';

describe('UpcomingSeminarDetailComponent', () => {
  let component: UpcomingSeminarDetailComponent;
  let fixture: ComponentFixture<UpcomingSeminarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingSeminarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSeminarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

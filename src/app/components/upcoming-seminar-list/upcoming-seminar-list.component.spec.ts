import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSeminarListComponent } from './upcoming-seminar-list.component';

describe('UpcomingSeminarListComponent', () => {
  let component: UpcomingSeminarListComponent;
  let fixture: ComponentFixture<UpcomingSeminarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingSeminarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSeminarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

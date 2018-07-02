import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSeminarListComponent } from './recent-seminar-list.component';

describe('RecentSeminarListComponent', () => {
  let component: RecentSeminarListComponent;
  let fixture: ComponentFixture<RecentSeminarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentSeminarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSeminarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

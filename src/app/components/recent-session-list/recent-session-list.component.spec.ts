import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSessionListComponent } from './recent-session-list.component';

describe('RecentSessionListComponent', () => {
  let component: RecentSessionListComponent;
  let fixture: ComponentFixture<RecentSessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentSessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

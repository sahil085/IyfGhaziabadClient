import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeminarComponent } from './view-seminar.component';

describe('ViewSeminarComponent', () => {
  let component: ViewSeminarComponent;
  let fixture: ComponentFixture<ViewSeminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSeminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeminarComponent } from './update-seminar.component';

describe('UpdateSeminarComponent', () => {
  let component: UpdateSeminarComponent;
  let fixture: ComponentFixture<UpdateSeminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSeminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

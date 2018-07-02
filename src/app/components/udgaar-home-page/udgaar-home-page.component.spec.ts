import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdgaarHomePageComponent } from './udgaar-home-page.component';

describe('UdgaarHomePageComponent', () => {
  let component: UdgaarHomePageComponent;
  let fixture: ComponentFixture<UdgaarHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdgaarHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdgaarHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

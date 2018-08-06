import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H21ProfileUserCardComponent } from './h21-profile-user-card.component';

describe('H21ProfileUserCardComponent', () => {
  let component: H21ProfileUserCardComponent;
  let fixture: ComponentFixture<H21ProfileUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H21ProfileUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H21ProfileUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

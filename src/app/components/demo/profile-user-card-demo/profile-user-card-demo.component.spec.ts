import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserCardDemoComponent } from './profile-user-card-demo.component';

describe('ProfileUserCardDemoComponent', () => {
  let component: ProfileUserCardDemoComponent;
  let fixture: ComponentFixture<ProfileUserCardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUserCardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

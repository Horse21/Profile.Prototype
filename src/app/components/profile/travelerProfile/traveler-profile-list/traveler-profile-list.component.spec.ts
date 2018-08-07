import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerProfileListComponent } from './traveler-profile-list.component';

describe('TravelerProfileListComponent', () => {
  let component: TravelerProfileListComponent;
  let fixture: ComponentFixture<TravelerProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelerProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

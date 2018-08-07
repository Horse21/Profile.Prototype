import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentProfileListComponent } from './agent-profile-list.component';

describe('AgentProfileListComponent', () => {
  let component: AgentProfileListComponent;
  let fixture: ComponentFixture<AgentProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

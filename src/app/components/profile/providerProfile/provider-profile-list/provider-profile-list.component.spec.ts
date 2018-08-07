import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderProfileListComponent } from './provider-profile-list.component';

describe('ProviderProfileListComponent', () => {
  let component: ProviderProfileListComponent;
  let fixture: ComponentFixture<ProviderProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

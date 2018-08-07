import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyProfileListComponent } from './agency-profile-list.component';

describe('AgencyProfileListComponent', () => {
	let component: AgencyProfileListComponent;
	let fixture: ComponentFixture<AgencyProfileListComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AgencyProfileListComponent]
		})
		.compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(AgencyProfileListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

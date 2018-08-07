import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-provider-profile-list',
	templateUrl: './provider-profile-list.component.html',
	styleUrls: ['./provider-profile-list.component.scss']
})
export class ProviderProfileListComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	displayedColumns: string[] = ['name', 'type', 'createdby', 'change', 'status', 'action'];
	dataSource = ELEMENT_DATA;
}

export interface TableProviders {
	id: number,
	name: string;
	type: string;
	createdby: string;
	change: string;
	status: string;
}

const ELEMENT_DATA: TableProviders[] = [
	{id: 1, name: 'Travelport', type: 'GDS', createdby: 'John Doe', change: '07.25.18', status: 'Active'},
	{id: 2, name: 'Travelport Profiles', type: 'Profiles', createdby: 'Jane Doe', change: '07.25.18', status: 'Active'},
	{id: 3, name: 'Holiday Taxis', type: 'Transfer', createdby: 'James Doe', change: '08.25.18', status: 'Active'},
];

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProfileVocabularyService} from "../../../../services/profile-vocabulary.service";

@Component({
	selector: 'app-provider-profile-list',
	templateUrl: './provider-profile-list.component.html',
	styleUrls: ['./provider-profile-list.component.scss']
})
export class ProviderProfileListComponent implements OnInit {

	constructor(private _router: Router,
				protected vocabulary: ProfileVocabularyService) {
	}

	ngOnInit() {
	}

	openCard(id: string): void {
		this._router.navigateByUrl(`/providerProfile/${id}`);
	}

	displayedColumns: string[] = ['name', 'typeId', 'createdby', 'change', 'stateId', 'action'];
	dataSource = ELEMENT_DATA;

	createProvider(){
		this._router.navigate(['/providerProfile', 0]);
	}
}

export interface TableProviders {
	id: number,
	name: string;
	typeId: number;
	createdby: string;
	change: string;
	stateId: number;
}

const ELEMENT_DATA: TableProviders[] = [
	{id: 1, name: 'Travelport', typeId: 1, createdby: 'John Doe', change: '06.15.18 16:30', stateId: 1},
	{id: 2, name: 'Travelport Profiles', typeId: 9, createdby: 'Jane Doe', change: '04.03.18 17:30', stateId: 2},
	{id: 3, name: 'Holiday Taxis', typeId: 2, createdby: 'James Doe', change: '07.10.18 03:04', stateId: 3},
];

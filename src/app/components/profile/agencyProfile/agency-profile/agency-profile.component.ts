import { Component, Input, OnInit } from '@angular/core';
import { IUserProfileDto } from 'app/dto/profile/i-user-profile-dto';
import { H21Validator } from 'h21-be-ui-kit';
import { IHistory } from 'app/dto/i-history';
import { History } from 'app/components/profile/h21-profile-user-card/h21-profile-user-card.component';
import { FakeHttpClientService } from 'app/services/fake-http-client.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileVocabularyService } from 'app/services/profile-vocabulary.service';
import {IAgencyProfileDto} from "../../../../dto/profile/i-agency-profile-dto";

@Component({
	selector: 'app-agency-profile',
	templateUrl: './agency-profile.component.html',
	styleUrls: ['./agency-profile.component.css']
})
export class AgencyProfileComponent implements OnInit {



	branchesData = [
		{id: 1, name: 'VCK travel', code: 'VCK Travel (H)', status: 'Active'},
		{id: 2, name: 'VCK travel', code: 'VCK Travel (H)', status: 'Active'}
	];
	branchesDisplayedColumns = ['name', 'code', 'status', 'actions'];

	agentsData = [
		{id: 1, name: 'Wilkins Clay', agency: 'Uxmox', create: 'Tonya Barrett', change: '08/02/2018', status: 'Active'},
		{id: 1, name: 'Wilkins Clay', agency: 'Uxmox', create: 'Tonya Barrett', change: '08/02/2018', status: 'Active'},
		{id: 1, name: 'Wilkins Clay', agency: 'Uxmox', create: 'Tonya Barrett', change: '08/02/2018', status: 'Active'},
		{id: 1, name: 'Wilkins Clay', agency: 'Uxmox', create: 'Tonya Barrett', change: '08/02/2018', status: 'Active'},
		{id: 1, name: 'Wilkins Clay', agency: 'Uxmox', create: 'Tonya Barrett', change: '08/02/2018', status: 'Active'}
	];
	agentsDisplayedColumns = ['name', 'agency', 'create', 'change', 'status', 'ellipsis'];

	providersData = [
		{id: 1, name: 'Travelport', type: 'GDS', create: 'John Doe', change: '07/25/2018', status: 'Active'},
		{id: 2, name: 'Travelport', type: 'GDS', create: 'John Doe', change: '07/25/2018', status: 'Active'},
	];
	providersDisplayedColumns = ['name', 'type', 'create', 'change', 'status', 'ellipsis'];


	/** The user's entity */
	@Input() entity: IAgencyProfileDto = {};

	/** Editable mode option */
	@Input() editable: boolean = true;

	entityId: number;

	actionInProgress = false;

	validator = new H21Validator();

	historyDisplayedColumns: string[] = ['expand', 'date', 'action', 'user'];

	historyExpandDisplayedColumns: string[] = ['blank', 'field', 'oldValue', 'newValue'];

	historyData: IHistory[];

	countriesData: any[];

	citiesData: any[] = [];

	currencies: any[];

	/** Expanded row element */
	historyExpandedElement: History;

	constructor(protected httpClient: FakeHttpClientService,
				protected activatedRoute: ActivatedRoute,
				protected vocabulary: ProfileVocabularyService) {

		this.setValidator();

		this.setReferences();
	}

	setValidator() {
		this.validator.register(
			'entity.email',
			() => {
				return !!this.entity && !!this.entity.email;
			},
			'Email cannot be empty'
		);
	}

	setReferences() {
		this.historyData = this.httpClient.getHistory();

		this.vocabulary.getCountries().subscribe(e => {
			this.countriesData = e.sort((n1, n2) => n1.name > n2.name ? 1 : -1);
		});

		this.vocabulary.getCurrencies().subscribe(e => {
			this.currencies = e;
		});
	}

	/**
	 * Returns a description of the generated FormControl validation error
	 * @param FormControl element
	 * @returns {string} Error message text
	 */
	getErrorMessage(control: any): string {
		return control.hasError('required') ? 'You must enter a value' :
			control.hasError('email') ? 'Not a valid email' : '';
	}

	cancel() {

	}

	save() {

	}

	removeFolderRow(id: number): void {

	}

	addNewFolderRow() {

	}

	viewLink(id: number): void {

	}

	editLink(id: number): void {

	}

	ngAfterContentChecked(): void {
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			this.entityId = +params['id'];
			this.actionInProgress = true;
			this.httpClient.getAgencyProfile(this.entityId)
			.subscribe(entity => {
					this.entity = entity;
					this.countrySelected();
				},
				error => {
					console.log(error);
				});
		});
	}

	countrySelected(): void {
		if (!this.entity.countryCode) {
			this.entity.cityCode = undefined;
			this.citiesData = [];
		}
		else {
			this.vocabulary
			.getCities(this.entity.countryCode)
			.subscribe(e => {
				this.citiesData = e.sort((n1, n2) => n1.name > n2.name ? 1 : -1);
			});
		}
	}
}

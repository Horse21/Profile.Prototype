import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {History, ProfileCardView} from "../../h21-profile-user-card/h21-profile-user-card.component";
import {IUserProfileDto} from "../../../../dto/profile/i-user-profile-dto";
import {H21Validator} from "h21-be-ui-kit";
import {FakeHttpClientService} from "../../../../services/fake-http-client.service";
import {ActivatedRoute} from "@angular/router";
import {ProfileVocabularyService} from "../../../../services/profile-vocabulary.service";
import {IHistory} from "../../../../dto/i-history";
import {IFolder} from "../../../../dto/i-folder";
import {IClaim} from "../../../../dto/i-claim";
import {IUserLink} from "../../../../dto/i-user-link";
import {H21ProfileUserLinksService} from "../../h21-profile-user-links/h21-profile-user-links.service";

// Component Code

const tabs = {
	generalInfo: 'generalInfo',
	links: 'link',
	roles: 'roles',
	claims: 'claims',
	specialFolders: 'specialFolders',
	history: 'history',
	stat: 'stat'
};

@Component({
	selector: 'user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements AfterContentChecked, OnInit {

	/** The user's entity */
	@Input() entity: IUserProfileDto = {};
	/** Editable mode option */
	@Input() editable: boolean = true;

	entityId: number;
	actionInProgress = false;

	validator = new H21Validator();

	claimsDisplayedColumns: string[] = ['name', 'value'];
	claimsData: IClaim[];
	foldersDisplayedColumns: string[] = ['name', 'permission', 'remove'];
	foldersData: IFolder[];
	historyDisplayedColumns: string[] = ['expand', 'date', 'action', 'user'];
	historyExpandDisplayedColumns: string[] = ['blank', 'field', 'oldValue', 'newValue'];
	historyData: IHistory[];
	linksDisplayedColumns: string [] = ['agency', 'branch', 'role', 'actions'];
	linksData: IUserLink[];

	countriesData: any[];
	citiesData: any[] = [];
	languages: any[];

	/** Expanded row element */
	historyExpandedElement: History;

	constructor(protected httpClient: FakeHttpClientService,
				protected activatedRoute: ActivatedRoute,
				protected vocabulary: ProfileVocabularyService,
				protected profileUserLinks: H21ProfileUserLinksService) {

		this.setValidator();

		this.setReferences();
	}

	setValidator(){
		this.validator.register(
			'entity.email',
			() => {
				return !!this.entity && !!this.entity.email
			},
			'Email cannot be empty'
		);

		this.validator.register(
			'entity.email',
			() => {
				return !!this.entity && !!this.entity.email && this.entity.email.length > 10;
			},
			'Email is incorrect'
		);

		this.validator.register(
			'entity.firstName',
			() => {
				return !!this.entity && !!this.entity.firstName
			},
			'First name cannot be empty'
		);

		this.validator.register(
			'entity.lastName',
			() => {
				return !!this.entity && !!this.entity.lastName
			},
			'Last name cannot be empty'
		);
	}

	setReferences() {
		this.historyData = this.httpClient.getHistory();
		this.foldersData = this.httpClient.getUserFolder();
		this.claimsData = this.httpClient.getUserClaim();
		this.linksData = this.httpClient.getUserLink();

		this.vocabulary.getCountries().subscribe(e => {
			this.countriesData = e.sort((n1, n2) => n1.name > n2.name ? 1 : -1);
		});

		this.vocabulary.getLanguages().subscribe(e => {
			this.languages = e;
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

	addLink() {
		this.profileUserLinks.open();
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
			this.httpClient.getUserProfile(this.entityId)
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

import {Component, Input, OnInit} from '@angular/core';
import {IHistory} from "../../../../dto/i-history";
import {H21Validator} from "h21-be-ui-kit";
import {IClaim} from "../../../../dto/i-claim";
import {History} from "../../h21-profile-user-card/h21-profile-user-card.component";
import {FakeHttpClientService} from "../../../../services/fake-http-client.service";
import {IUserLink} from "../../../../dto/i-user-link";
import {ProfileVocabularyService} from "../../../../services/profile-vocabulary.service";
import {H21ProfileUserLinksService} from "../../h21-profile-user-links/h21-profile-user-links.service";
import {ITravelerProfileDto} from "../../../../dto/profile/i-traveler-profile-dto";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-traveler-profile',
  templateUrl: './traveler-profile.component.html',
  styleUrls: ['./traveler-profile.component.css']
})
export class TravelerProfileComponent implements OnInit {

	/** The user's entity */
	@Input() entity: ITravelerProfileDto = {};
	/** Editable mode option */
	@Input() editable: boolean = true;

	entityId: number;
	actionInProgress = false;

	validator = new H21Validator();

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
	}

	setReferences() {
		this.historyData = this.httpClient.getHistory();
		this.linksData = this.httpClient.getUserLink();

		this.vocabulary.getCountries().subscribe(e => {
			this.countriesData = e.sort((n1, n2) => n1.name > n2.name ? 1 : -1);
		});

		this.vocabulary.getLanguages().subscribe(e => {
			this.languages = e;
		});
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

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			this.entityId = +params['id'];
			this.actionInProgress = true;
			this.httpClient.getTravelerProfile(this.entityId)
				.subscribe(entity => {
						this.entity = entity;
					},
					error => {
						console.log(error);
					});
		});
	}
}


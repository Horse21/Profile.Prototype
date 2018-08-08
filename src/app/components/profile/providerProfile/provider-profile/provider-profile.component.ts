import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IAgentProfileDto} from "../../../../dto/profile/i-agent-profile-dto";
import {IHistory} from "../../../../dto/i-history";
import {H21Validator} from "h21-be-ui-kit";
import {History} from "../../h21-profile-user-card/h21-profile-user-card.component";
import {FakeHttpClientService} from "../../../../services/fake-http-client.service";
import {IUserLink} from "../../../../dto/i-user-link";
import {ProfileVocabularyService} from "../../../../services/profile-vocabulary.service";
import {H21ProfileUserLinksService} from "../../h21-profile-user-links/h21-profile-user-links.service";
import {IProviderProfileDto} from "../../../../dto/profile/i-provider-profile-dto";

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css']
})
export class ProviderProfileComponent implements OnInit {

	/** The agent */
	@Input() entity: IProviderProfileDto = {};
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

	/** Expanded row element */
	historyExpandedElement: History;

	constructor(protected httpClient: FakeHttpClientService,
				protected activatedRoute: ActivatedRoute,
				protected vocabulary: ProfileVocabularyService,
				protected profileUserLinks: H21ProfileUserLinksService) {

		this.setValidator();
	}

	setValidator(){
	}

	setReferences() {
		this.historyData = this.httpClient.getHistory();
		this.linksData = this.httpClient.getUserLink();
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
			if (this.entityId > 0) {
				this.httpClient.getProviderProfile(this.entityId)
					.subscribe(entity => {
							this.entity = entity;
							this.setReferences();
						},
						error => {
							console.log(error);
						});
			}
		});
	}
}

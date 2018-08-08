import { Component, OnInit } from '@angular/core';
import {FakeHttpClientService} from "../../../../services/fake-http-client.service";
import {ProfileVocabularyService} from "../../../../services/profile-vocabulary.service";
import {IAgentProfileListDto} from "../../../../dto/profile/i-agent-profile-list-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agent-profile-list',
  templateUrl: './agent-profile-list.component.html',
  styleUrls: ['./agent-profile-list.component.scss']
})
export class AgentProfileListComponent implements OnInit {

	dataSource: IAgentProfileListDto[];

	displayedColumns: string[] = ['name', 'agencyName', 'createUserName', 'updateDate', 'stateId', 'action'];

	constructor(protected httpClient: FakeHttpClientService,
				protected vocabulary: ProfileVocabularyService,
				private _router: Router) {
	}

	ngOnInit() {

		this.httpClient.postQueryAgentProfile()
			.subscribe(e => {
				this.dataSource = e;
				this.httpClient.setUpdateDate(this.dataSource);
			})
	}

	openCard(id: string): void {
		this._router.navigateByUrl(`/agentProfile/${id}`);
	}
}

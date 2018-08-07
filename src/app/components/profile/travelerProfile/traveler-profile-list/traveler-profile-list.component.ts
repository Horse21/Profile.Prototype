import { Component, OnInit } from '@angular/core';
import {FakeHttpClientService} from "../../../../services/fake-http-client.service";
import {IAgentProfileListDto} from "../../../../dto/profile/i-agent-profile-list-dto";
import {ProfileVocabularyService} from "../../../../services/profile-vocabulary.service";
import {ITravelerProfileListDto} from "../../../../dto/profile/i-traveler-profile-list-dto";

@Component({
  selector: 'app-traveler-profile-list',
  templateUrl: './traveler-profile-list.component.html',
  styleUrls: ['./traveler-profile-list.component.scss']
})
export class TravelerProfileListComponent implements OnInit {

	dataSource: ITravelerProfileListDto[];

	displayedColumns: string[] = ['avatar', 'name', 'agencyName', 'branchName', 'agentName', 'stateId', 'action'];

	constructor(protected httpClient: FakeHttpClientService,
				protected vocabulary: ProfileVocabularyService) {
	}

	ngOnInit() {

		this.httpClient.postQueryTravelerProfile()
			.subscribe(e => {
				this.dataSource = e;
				this.httpClient.setUpdateDate(this.dataSource);
			})
	}
}

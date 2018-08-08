import { Component, OnInit } from '@angular/core';
import { FakeHttpClientService } from "../../../../services/fake-http-client.service";
import { ProfileVocabularyService } from "../../../../services/profile-vocabulary.service";
import { IAgencyProfileListDto } from "../../../../dto/profile/i-agency-profile-list-dto";
import { Router } from "@angular/router";

@Component({
	selector: 'app-agency-profile-list',
	templateUrl: './agency-profile-list.component.html',
	styleUrls: ['./agency-profile-list.component.scss']
})
export class AgencyProfileListComponent implements OnInit {
	dataSource: IAgencyProfileListDto[];

	displayedColumns: string[] = ['logo', 'name', 'type', 'createDate', 'updateDate', 'stateId', 'action'];

	constructor(protected httpClient: FakeHttpClientService,
				protected vocabulary: ProfileVocabularyService,
				private _router: Router) {
	}

	ngOnInit() {

		this.httpClient.postQueryAgencyProfile()
		.subscribe(e => {
			this.dataSource = e;
			this.dataSource.forEach(x => x.type = 'Regional');
			this.httpClient.setUpdateDate(this.dataSource);
		});
	}

	openCard(id: string): void {
		this._router.navigateByUrl(`/agencyProfile/${id}`);
	}
}

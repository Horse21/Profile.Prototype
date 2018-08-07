import { Component, OnInit } from '@angular/core';
import { FakeHttpClientService } from 'app/services/fake-http-client.service';
import { ProfileVocabularyService } from 'app/services/profile-vocabulary.service';
import { IAgencyProfileListDto } from 'app/dto/profile/i-agency-profile-list-dto';

@Component({
	selector: 'app-agency-profile-list',
	templateUrl: './agency-profile-list.component.html',
	styleUrls: ['./agency-profile-list.component.css']
})
export class AgencyProfileListComponent implements OnInit {
	dataSource: IAgencyProfileListDto[];
	
	displayedColumns: string[] = ['name'];
	
	constructor(protected httpClient: FakeHttpClientService,
				protected vocabulary: ProfileVocabularyService) {
	}
	
	ngOnInit() {
		
		this.httpClient.postQueryAgencyProfile()
		.subscribe(e => {
			this.dataSource = e;
			this.httpClient.setUpdateDate(this.dataSource);
		});
	}
}

import {Component, OnInit} from '@angular/core';
import {FakeHttpClientService} from "../../../../services/fake-http-client.service";
import {IUserProfileListDto} from "../../../../dto/profile/i-user-profile-list-dto";
import {ProfileVocabularyService} from "../../../../services/profile-vocabulary.service";
import {Router} from "@angular/router";

@Component({
	selector: 'user-profile-list',
	templateUrl: './user-profile-list.component.html',
	styleUrls: ['./user-profile-list.component.scss']
})
export class UserProfileListComponent implements OnInit {

	dataSource: IUserProfileListDto[];

	displayedColumns: string[] = ['avatar', 'name', 'createDate', 'updateDate', 'stateId', 'action'];

	constructor(protected httpClient: FakeHttpClientService,
				protected vocabulary: ProfileVocabularyService,
				private _router: Router) {
	}

	ngOnInit() {

		this.httpClient.postQueryUserProfile()
			.subscribe(e => {
				this.dataSource = e;
				this.httpClient.setUpdateDate(this.dataSource);
			})
	}

	openCard(id: string): void {
		this._router.navigateByUrl(`/userProfile/${id}`);
	}
}

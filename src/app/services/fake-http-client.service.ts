import { Injectable } from '@angular/core';
import { IUserProfileDto } from '../dto/profile/i-user-profile-dto';
import { IUserProfileListDto } from '../dto/profile/i-user-profile-list-dto';
import { Observable } from 'rxjs/internal/Observable';
import { of as observableOf } from 'rxjs';
import { IAgentProfileDto } from '../dto/profile/i-agent-profile-dto';
import { IAgentProfileListDto } from '../dto/profile/i-agent-profile-list-dto';
import { IAgencyProfileDto } from '../dto/profile/i-agency-profile-dto';
import { IAgencyProfileListDto } from '../dto/profile/i-agency-profile-list-dto';
import { IHorseCompanyListDto } from '../dto/profile/i-horse-company-list-dto';
import { IHorseCompanyDto } from '../dto/profile/i-horse-company-dto';
import { IHistory } from '../dto/i-history';
import { IFolder } from '../dto/i-folder';
import { IClaim } from '../dto/i-claim';
import { IUserLink } from '../dto/i-user-link';
import { ITravelerProfileDto } from '../dto/profile/i-traveler-profile-dto';
import { ITravelerProfileListDto } from '../dto/profile/i-traveler-profile-list-dto';
import {IProviderProfileDto} from "../dto/profile/i-provider-profile-dto";

declare var require: any;

@Injectable({
	providedIn: 'root'
})
export class FakeHttpClientService {

	userProfile: IUserProfileDto[] = require('../../data/user-profile.json');
	userProfileList: IUserProfileListDto[] = require('../../data/user-profile-list.json');

	agentProfile: IAgentProfileDto[] = require('../../data/agent-profile.json');
	agentProfileList: IAgentProfileListDto[] = require('../../data/agent-profile-list.json');

	travelerProfile: ITravelerProfileDto[] = require('../../data/traveler-profile.json');
	travelerProfileList: ITravelerProfileListDto[] = require('../../data/traveler-profile-list.json');

	agencyProfile: IAgencyProfileDto[] = require('../../data/agency-profile.json');
	agencyProfileList: IAgencyProfileListDto[] = require('../../data/agency-profile-list.json');

	horseCompany: IHorseCompanyDto[] = require('../../data/horse-company.json');
	horseCompanyList: IHorseCompanyListDto[] = require('../../data/horse-company-list.json');

	providerProfile: IProviderProfileDto[] = require('../../data/provider-profile.json');

	constructor() {
		var i = 0;
		this.travelerProfile.forEach(e => e.id = ++i);
	}

	//#region UserProfile

	getUserProfile(id: number): Observable<IUserProfileDto> {
		return observableOf(this.userProfile.find(e => e.id == id));
	}

	postQueryUserProfile(): Observable<IUserProfileListDto[]> {
		return observableOf(this.userProfileList);
	}

	getUserFolder(): IFolder[] {
		return [
			{id: 1, name: "Docs", permission: "Contributor"},
			{id: 2, name: "Users", permission: "Reader"}
		];
	}

	getUserClaim(): IClaim[] {
		return [
			{id: 1, name: "Email", value: "name@mysite.com"},
			{id: 2, name: "Gender", value: "Male"},
			{id: 3, name: "Given Name", value: "Name"},
			{id: 4, name: "Family Name", value: "Surname"},
			{id: 5, name: "Middle name", value: ""},
			{id: 6, name: "Locale", value: "ru-RU"},
			{id: 7, name: "Agent_id", value: "2"},
			{id: 8, name: "User_tag", value: "SuperAdmin"},
			{id: 9, name: "Read_disk_folder", value: "1"},
		];
	}

	getUserLink(): IUserLink[] {
		return [
			{id: 1, agency: "VCK travel", branch: "VCK Travel (H)", role: "Agent, Traveler"},
			{id: 2, agency: "VCK travel", branch: "VCK Travel (H)", role: "Agent, Traveler"},
		];
	}

	//#endregion

	getAgentProfile(id: number): Observable<IAgentProfileDto> {
		return observableOf(this.agentProfile.find(e => e.id == id));
	}

	postQueryAgentProfile(): Observable<IAgentProfileListDto[]> {
		return observableOf(this.agentProfileList);
	}

	getTravelerProfile(id: number): Observable<ITravelerProfileDto> {
		return observableOf(this.travelerProfile.find(e => e.id == id));
	}

	postQueryTravelerProfile(): Observable<ITravelerProfileListDto[]> {
		return observableOf(this.travelerProfileList);
	}

	getAgencyProfile(id: number): Observable<IAgencyProfileDto> {
		return observableOf(this.agencyProfile.find(e => e.id == id));
	}

	postQueryAgencyProfile(): Observable<IAgencyProfileListDto[]> {
		return observableOf(this.agencyProfileList);
	}

	getHorseCompany(id: number): Observable<IHorseCompanyDto> {
		return observableOf(this.horseCompany.find(e => e.id == id));
	}

	postQueryHorseCompany(): Observable<IHorseCompanyListDto[]> {
		return observableOf(this.horseCompanyList);
	}

	getProviderProfile(id : number): Observable<IProviderProfileDto> {
		return observableOf(this.providerProfile.find(e => e.id == id));
	}

	getHistory(): IHistory[] {
		return [
			{
				id: 1, date: new Date(2018, 8, 1), action: "Edit", user: "Sergey Strovatikov", expandData: [
					{field: "Name", oldValue: "Anan", newValue: "Banan"}
				]
			},
			{
				id: 2, date: new Date(2018, 8, 1), action: "Edit", user: "Sergey Strovatikov", expandData: [
					{field: "Name", oldValue: "Anan", newValue: "Banan"}
				]
			},
			{
				id: 3, date: new Date(2018, 8, 1), action: "Edit", user: "Sergey Strovatikov", expandData: [
					{field: "Name", oldValue: "Anan", newValue: "Banan"}
				]
			},
			{
				id: 4, date: new Date(2018, 8, 1), action: "Edit", user: "Sergey Strovatikov", expandData: [
					{field: "Name", oldValue: "Anan", newValue: "Banan"}
				]
			},
			{
				id: 5, date: new Date(2018, 8, 1), action: "Edit", user: "Sergey Strovatikov", expandData: [
					{field: "Name", oldValue: "Anan", newValue: "Banan"}
				]
			},
		];
	}

	setUpdateDate(arr: any[]): void {
		arr.forEach(x => {
			const date = new Date();
			date.setDate(new Date(x.createDate.date).getDate() + 1);
			x.updateDate = {
				date: date.toDateString(),
				time: '',
				day: 0,
				hour: 0,
				minute: 0,
				month: 0,
				second: 0,
				year: 0
			};
			x.createDate.date = new Date(x.createDate.date).toDateString();
		});
	}
}

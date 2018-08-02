import {IBaseProfileDto} from './i-base-profile-dto';
import {IH21DateTime, IFileInfo} from 'h21-be-ui-kit';
import {IAgencySpecialtyDto} from "./i-agency-specialty-dto";

export interface IAgencyProfileDto extends IBaseProfileDto{
	legalName? : string;
	vatNumber? : string;
	companyRegistrationNumber? : string;
	companyTypeId? : number;
	website? : string;
	email? : string;
	phone? : string;
	fax? : string;
	countryCode? : string;
	cityCode? : string;
	address? : string;
	postcode? : string;
	currencyCode? : string;
	logo : IFileInfo;
	specialties? : IAgencySpecialtyDto[];
	updateDate? : IH21DateTime;
}

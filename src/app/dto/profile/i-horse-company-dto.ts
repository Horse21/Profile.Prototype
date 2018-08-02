import {IBaseProfileDto} from "./i-base-profile-dto";
import {IFileInfo, IH21DateTime} from "h21-be-ui-kit";
import {IAgencySpecialtyDto} from "./i-agency-specialty-dto";

export interface IHorseCompanyDto extends IBaseProfileDto{
	logo? : IFileInfo;
	logoData? : any[];
	brandingName? : string;
	legalName? : string;
	vatNumber? : string;
	companyRegistrationNumber? : string;
	companyTypeId? : number;
	specialties? : IAgencySpecialtyDto[];
	about? : string;
	webSite? : string;
	generalEmail? : string;
	countryCode? : string;
	cityCode? : string;
	address? : string;
	postcode? : string;
	phone? : string;
	fax? : string;
	currencyCode? : string;
	updateDate? : IH21DateTime;
}

import {IBaseProfileDto} from "./i-base-profile-dto";
import {ICodeNamedEntity, IH21DateTime} from "h21-be-ui-kit";

export interface ITravelerProfileDto extends IBaseProfileDto{
	agency? : ICodeNamedEntity;
	branch? : ICodeNamedEntity;
	agent? : ICodeNamedEntity;
	user? : ICodeNamedEntity;
	surname? : string;
	birthDate? : IH21DateTime;
	disability? : string;
	gender? : boolean;
	homeCityOrAirport? : string;
	jobTitle? : string;
	localLanguageCode? : string;
	localLanguageGivenName? : string;
	localLanguageSurname? : string;
	localLanguageUsername? : string;
	nickname? : string;
	otherName? : string;
	suffix? : string;
	title? : string;
	isVip? : boolean;
	travelportUniqueProfileId? : string;
	updateDate? : IH21DateTime;
	canEditAgency? : boolean;
	canEditBranch? : boolean;
	canEditAgent? : boolean;
}

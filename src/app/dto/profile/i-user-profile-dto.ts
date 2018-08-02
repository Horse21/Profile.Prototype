import {IBaseProfileDto} from './i-base-profile-dto';
import {IFileInfo, IH21DateTime} from "h21-be-ui-kit";
import {IUserProfileTagDto} from "./i-user-profile-tag-dto";

export interface IUserProfileDto extends IBaseProfileDto {
	identityUserId? : string;
	email? : string;
	firstName? : string;
	lastName? : string;
	middleName? : string;
	phone? : string;
	gender? : boolean;
	birthDate? : IH21DateTime;
	countryCode? : string;
	cityCode? : string;
	languageCode? : string;
	avatar? : IFileInfo;
	tags? : IUserProfileTagDto[];
}

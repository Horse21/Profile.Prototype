import {IBaseProfileDto} from './i-base-profile-dto';
import {ICodeNamedEntity, IH21DateTime} from 'h21-be-ui-kit';

export interface IAgentProfileDto extends IBaseProfileDto {
	agency?: ICodeNamedEntity;
	branch?: ICodeNamedEntity;
	user?: ICodeNamedEntity;
	givenName?: string;
	nickname?: string;
	occupationalTitle?: string;
	otherName?: string;
	suffix?: string;
	surname?: string;
	title?: string;
	updateDate?: IH21DateTime;
}

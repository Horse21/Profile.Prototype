import {ICodeNamedEntity, IH21DateTime} from 'h21-be-ui-kit';

export interface IUserProfileListDto extends ICodeNamedEntity {
	createUserName?: string;
	createDate?: IH21DateTime;
	updateDate?: IH21DateTime;
	phone?: string;
	email?: string;
	stateId?: number;
	avatar?: string;
}

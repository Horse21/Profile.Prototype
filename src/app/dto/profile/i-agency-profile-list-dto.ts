import {ICodeNamedEntity, IH21DateTime} from 'h21-be-ui-kit';

export interface IAgencyProfileListDto extends ICodeNamedEntity {
	createUserName?: string;
	createDate?: IH21DateTime;
	stateId?: number;
	logo?: string;
	type: string;
}

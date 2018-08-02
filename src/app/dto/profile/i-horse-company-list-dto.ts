import {ICodeNamedEntity, IH21DateTime} from 'h21-be-ui-kit';

export interface IHorseCompanyListDto extends ICodeNamedEntity {
	createUserName?: string;
	createDate?: IH21DateTime;
	stateId?: number;
}

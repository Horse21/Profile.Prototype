import {ICodeNamedEntity, IH21DateTime} from 'h21-be-ui-kit';

export interface ITravelerProfileListDto extends ICodeNamedEntity {
	avatar?: string;
	agencyName?: string;
	branchName?: string;
	agentName?: string;
	agencyId?: number;
	branchId?: number;
	agentId?: number;
	createUserName?: string;
	createDate?: IH21DateTime;
	surname?: string;
	stateId?: number;
}

import {ICodeNamedEntity, IH21DateTime} from 'h21-be-ui-kit';

export interface IAgentProfileListDto extends ICodeNamedEntity {
	agencyName? : string;
	branchCode? : string;
	createUserName? : string;
	createDate? : IH21DateTime;
	stateId? : number;
}

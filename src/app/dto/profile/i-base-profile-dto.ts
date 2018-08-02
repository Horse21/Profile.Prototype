import {ICodeNamedEntity, IH21DateTime} from 'h21-be-ui-kit';

export interface IBaseProfileDto extends ICodeNamedEntity {
	additionalIdentifier? : string;
	stateId? : number;
	createDate? : IH21DateTime;
	entityState? : number;
	entityRefId? : number;
}

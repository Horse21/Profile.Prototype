import {IEntity} from 'h21-be-ui-kit';

export interface IAgencySpecialtyDto extends IEntity {
	agencyId?: number;
	specialtyId?: number;
	specialtyName?: string;
}

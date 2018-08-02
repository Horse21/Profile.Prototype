import {IEntity} from 'h21-be-ui-kit';

export interface IUserProfileTagDto extends IEntity{
	userId? : number;
	tagId? : number;
	tagName? : string;
}

import {IEntity} from "h21-be-ui-kit";

export interface IUserLink extends IEntity{
	agency: string;
	branch: string;
	role: string
}

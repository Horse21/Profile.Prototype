import {IEntity} from "h21-be-ui-kit";

export interface IHistory extends IEntity{
	date: Date;
	action: string;
	user: string;
	expandData: [
		{
			field: string;
			oldValue: string;
			newValue: string
		}]
}

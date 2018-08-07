import {ICodeNamedEntity, IH21DateTime} from "h21-be-ui-kit";

export interface IProviderProfileListDto extends ICodeNamedEntity {
	createUserName?: string;
	createDate?: IH21DateTime;
	updateDate?: IH21DateTime;
	typeId?: number;
	endpoint?: string;
	login?: string;
	password?: string;
	gTargetBranch?: string;
	pTargetBranch?: string;
	vTargetBranch?: string;
	trmTargetBranch?: string;
	marginType?: string;
	marginValue?: string;
	marginCurrencyCode?: string;
	checkState?: CheckState;
	stateId?: number;
}

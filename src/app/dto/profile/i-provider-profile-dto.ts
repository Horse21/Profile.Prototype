import {IBaseProfileDto} from "./i-base-profile-dto";
import {IFileInfo} from "h21-be-ui-kit";

export interface IProviderProfileDto extends IBaseProfileDto {
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
	logo?: IFileInfo;
	checkState?: CheckState;
}


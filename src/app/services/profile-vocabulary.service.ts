import {Injectable} from '@angular/core';
import {Observable, of as observableOf} from 'rxjs';
import {City, VocabularyService} from 'h21-be-ui-kit';
import {HttpClient} from '@angular/common/http';
import {SearchFlightDto} from 'h21-be-ui-kit/dto/search-flight-dto';
import {SearchResult} from 'h21-be-ui-kit/dto/search-result';
import {IHotelInfo, IHotelOption, IHotelSearchOptions, Passenger} from 'h21-be-ui-kit/dto/';

declare var require: any;

@Injectable({
	providedIn: 'root'
})
export class ProfileVocabularyService implements VocabularyService {

	constructor(private _http: HttpClient) {
	}

	genders = [{code: true, name: 'Male'}, {code: false, name: 'Female'}];

	permissions = [{code: 'edit', name: 'Edit'}, {code: 'view', name: 'View'}];

	profileType = [
		{id: 1, code: 'userProfile', name: 'User'},
		{id: 2, code: 'agencyProfile', name: 'Agency'},
		{id: 3, code: 'agentProfile', name: 'Agent'},
		{id: 4, code: 'travelerProfile', name: 'Traveler'},
		{id: 5, code: 'corporateProfile', name: 'Corporate'},
		{id: 6, code: 'providerProfile', name: 'Provider'},
		{id: 7, code: 'horseCompany', name: 'Horse Company'}
	];

	stateMachine = [
		{id: 1, code: 'userProfile', name: 'User'},
		{id: 2, code: 'agencyProfile', name: 'Agency'},
		{id: 3, code: 'agentProfile', name: 'Agent'},
		{id: 4, code: 'travelerProfile', name: 'Traveler'},
		{id: 5, code: 'corporateProfile', name: 'Corporate'},
		{id: 6, code: 'providerProfile', name: 'Provider'},
		{id: 7, code: 'agencyBranch', name: 'Agency Branch'},
		{id: 8, code: 'agencyContract', name: 'Agency Contract'},
		{id: 9, code: 'report', name: 'Report'}];

	state = [
		{id: 1, code: 'active', name: 'Active', stateMachineCode: 'userProfile'},
		{id: 2, code: 'new', name: 'New', stateMachineCode: 'userProfile'},
		{id: 3, code: 'locked', name: 'Locked', stateMachineCode: 'userProfile'},
		{id: 4, code: 'active', name: 'Active', stateMachineCode: 'agentProfile'},
		{id: 5, code: 'new', name: 'New', stateMachineCode: 'agentProfile'},
		{id: 6, code: 'locked', name: 'Locked', stateMachineCode: 'agentProfile'},
		{id: 7, code: 'active', name: 'Active', stateMachineCode: 'agencyProfile'},
		{id: 8, code: 'new', name: 'New', stateMachineCode: 'agencyProfile'},
		{id: 9, code: 'locked', name: 'Locked', stateMachineCode: 'agencyProfile'},
		{id: 10, code: 'active', name: 'Active', stateMachineCode: 'agencyBranch'},
		{id: 11, code: 'new', name: 'New', stateMachineCode: 'agencyBranch'},
		{id: 12, code: 'locked', name: 'Locked', stateMachineCode: 'agencyBranch'},
		{id: 13, code: 'active', name: 'Active', stateMachineCode: 'providerProfile'},
		{id: 14, code: 'new', name: 'New', stateMachineCode: 'providerProfile'},
		{id: 15, code: 'locked', name: 'Locked', stateMachineCode: 'providerProfile'},
		{id: 13, code: 'active', name: 'Active', stateMachineCode: 'horseCompany'},
		{id: 14, code: 'new', name: 'New', stateMachineCode: 'horseCompany'},
		{id: 15, code: 'locked', name: 'Locked', stateMachineCode: 'horseCompany'},
		{id: 16, code: 'red', name: 'Red', stateMachineCode: 'agencyContract'},
		{id: 17, code: 'yellow', name: 'Yellow', stateMachineCode: 'agencyContract'},
		{id: 18, code: 'green', name: 'Green', stateMachineCode: 'agencyContract'},
		{id: 19, code: 'draft', name: 'Draft', stateMachineCode: 'report'},
		{id: 20, code: 'published', name: 'Published', stateMachineCode: 'report'}];

	userProfileState = this.stateByStateMachineCode('userProfile');
	userProfileStateAgg = this.aggregation(this.userProfileState);
	agentProfileState = this.stateByStateMachineCode('agentProfile');
	agencyProfileState = this.stateByStateMachineCode('agencyProfile');
	agencyBranchState = this.stateByStateMachineCode('agencyBranch');
	providerProfileState = this.stateByStateMachineCode('providerProfile');
	horseCompanyState = this.stateByStateMachineCode('horseCompany');
	agencyContractState = this.stateByStateMachineCode('agencyContract');
	travelerProfileState = this.stateByStateMachineCode('travelerProfile');
	reportState = this.stateByStateMachineCode('report');

	providerType = [
		{id: 1, code: 'travelport', name: 'Travelport', group: 'GDS'},
		{id: 2, code: 'holidayTaxis', name: 'Holiday Taxis', group: 'Transfer'},
		{id: 3, code: 'hotelBeds', name: 'Hotel Beds', group: 'Transfer'},
		{id: 4, code: 'get-E', name: 'Get-E', group: 'Transfer'},
		{id: 5, code: 'blackLane', name: 'Black Lane', group: 'Transfer'},
		{id: 6, code: 'i\'way', name: 'I\'way', group: 'Transfer'},
		{id: 7, code: 'kiwiTaxi', name: 'Kiwi Taxi', group: 'Transfer'},
		{id: 8, code: 'openCabs', name: 'Open Cabs', group: 'Transfer'},
		{id: 9, code: 'travelportProfile', name: 'Travelport Profiles', group: 'Profiles'}
	];

	travelportPnrServiceRole = [
		{id: 1, code: 'read', name: 'Read'},
		{id: 2, code: 'write', name: 'Write'}];

	serviceGroup = [
		{id: 1, code: 'travelportPnr', name: 'Save 2 Travelport'},
		{id: 2, code: 'transfer', name: 'Transfer 21 Pro'},
		{id: 3, code: 'disk', name: 'Disk 21 Pro'}];

	specialFolderPermission = [
		{code: 'noaccess', name: 'No access'},
		{code: 'reader', name: 'Reader'},
		{code: 'contributor', name: 'Contributor'}];

	identityGrantTypes = [
		{code: 'implicit', name: 'Implicit'},
		{code: 'hybrid', name: 'Hybrid'},
		{code: 'authorization_code', name: 'AuthorizationCode'},
		{code: 'client_credentials', name: 'ClientCredentials'},
		{code: 'password', name: 'ResourceOwnerPassword'}];

	reportKind = [
		{id: 1, code: 'userProfile', name: 'UserProfile'},
		{id: 2, code: 'agentProfile', name: 'AgentProfile'},
		{id: 3, code: 'agencyProfile', name: 'AgencyProfile'},
		{id: 4, code: 'agencyBranch', name: 'AgencyBranch'},
		{id: 5, code: 'agencyContract', name: 'AgencyContract'},
		{id: 6, code: 'corporateProfile', name: 'CorporateProfile'},
		{id: 7, code: 'travelerProfile', name: 'TravelerProfile'},
		{id: 8, code: 'horseCompany', name: 'HorseCompany'},
		{id: 9, code: 'providerProfile', name: 'ProviderProfile'}];

	unitType = {
		length: 'length',
		weight: 'weight'
	};

	unitKind = [
		{id: 1, code: 'meters', name: 'Meters', typeCode: 'length'},
		{id: 2, code: 'feet', name: 'Feet', typeCode: 'length'},
		{id: 3, code: 'kilograms', name: 'Kilograms', typeCode: 'weight'},
		{id: 4, code: 'pounds', name: 'Pounds', typeCode: 'weight'}];

	geographicalLocationType = [
		{id: 1, code: 'airport', name: 'Airport'},
		{id: 2, code: 'city', name: 'City'},
		{id: 3, code: 'continent', name: 'Continent'},
		{id: 4, code: 'continentGroup', name: 'Continent Group'},
		{id: 5, code: 'country', name: 'Country'},
		{id: 6, code: 'global', name: 'Global'},
		{id: 7, code: 'state', name: 'State/Province'},
		{id: 8, code: 'world', name: 'World'}
	];

	documentKinds = [
		{id: 1, code: 'visa', name: 'Visa', typeCode: 'travel'},
		{id: 2, code: 'passport', name: 'Passport', typeCode: 'travel'},
		{id: 3, code: 'driversLicense', name: 'Drivers License', typeCode: 'travel'},
		{id: 4, code: 'permanentResidenceCard', name: 'Permanent Residence Card', typeCode: 'travel'},
		{id: 5, code: 'nationalIdentityCard', name: 'National Identity Card', typeCode: 'travel'},
		{id: 6, code: 'redressNumber', name: 'Redress Number', typeCode: 'travel'},
		{id: 7, code: 'knownTravelerNumber', name: 'Known Traveler Number', typeCode: 'travel'},
		{id: 8, code: 'militaryCard', name: 'Military Card', typeCode: 'travel'},
		{id: 9, code: 'other', name: 'Other', typeCode: 'travel'}
	];

	travelDocumentKinds = this.documentKinds.filter(e => e.typeCode === 'travel');

	travelerPaymentFormType = [
		{id: 1, code: 'agencyPayment', name: 'Agency Payment'},
		{id: 2, code: 'agentVoucher', name: 'Agent Voucher'},
		{id: 3, code: 'cash', name: 'Cash'},
		{id: 4, code: 'certificate', name: 'Certificate'},
		{id: 5, code: 'check', name: 'Check'},
		{id: 6, code: 'creditCard', name: 'Credit Card'},
		{id: 7, code: 'debitCard', name: 'Debit Card'},
		{id: 8, code: 'directPayment', name: 'Direct Payment'},
		{id: 9, code: 'guarantee', name: 'Guarantee'},
		{id: 10, code: 'miscFormOfPayment', name: 'Miscellaneous Form Of Payment'},
		{id: 11, code: 'paymentAdvice', name: 'Payment Advice'},
		{id: 12, code: 'requisition', name: 'Requisition'},
		{id: 13, code: 'ticketNumber', name: 'Ticket Number'},
		{id: 14, code: 'unitedNations', name: 'United Nations'},
		{id: 15, code: 'voucher', name: 'Voucher'},
	];

	travelerPaymentFormTypeCode = {
		agencyPayment: 'agencyPayment',
		agentVoucher: 'agentVoucher',
		cash: 'cash',
		certificate: 'certificate',
		check: 'check',
		creditCard: 'creditCard',
		debitCard: 'debitCard',
		directPayment: 'directPayment',
		guarantee: 'guarantee',
		miscFormOfPayment: 'miscFormOfPayment',
		paymentAdvice: 'paymentAdvice',
		requisition: 'requisition',
		ticketNumber: 'ticketNumber',
		unitedNations: 'unitedNations',
		voucher: 'voucher'
	};

	creditCardType = [
		{id: 1, name: 'Credit'},
		{id: 2, name: 'Debit'}];

	guaranteeAgencyType = [
		{id: 1, name: 'AgencyIATA'},
		{id: 2, name: 'OtherAgencyIATA'}];

	guaranteeType = [
		{id: 1, name: 'Guarantee'},
		{id: 2, name: 'Deposit'}];

	miscFormOfPaymentCategory = [
		{id: 1, name: 'Text'},
		{id: 2, name: 'Credit'},
		{id: 3, name: 'CreditCard'},
		{id: 4, name: 'FreeFormCreditCard'},
		{id: 5, name: 'Invoice'},
		{id: 6, name: 'NonRefundable'},
		{id: 7, name: 'MultipleReceivables'},
		{id: 8, name: 'Exchange'},
		{id: 9, name: 'Cash'}];

	otherPaymentType = [
		{id: 1, name: 'AGC - Agency Check'},
		{id: 2, name: 'AGG - Agency Guarantee'},
		{id: 3, name: 'AWC - Award Check'},
		{id: 4, name: 'CSH - Cash Equivalent'},
		{id: 5, name: 'DBC - Denied Boarding Compensation'},
		{id: 6, name: 'MCO - Miscellaneous Charge Order'},
		{id: 7, name: 'TOO - Tour Order'},
		{id: 8, name: 'TOV - Tour Voucher'}];

	phoneNumberType = [
		{id: 1, name: 'Agency'},
		{id: 2, name: 'Business'},
		{id: 3, name: 'Mobile'},
		{id: 4, name: 'Home'},
		{id: 5, name: 'Fax'},
		{id: 6, name: 'Hotel'},
		{id: 7, name: 'Other'},
		{id: 8, name: 'None'},
		{id: 9, name: 'Email'}];

	requisitionCategory = [
		{id: 1, name: 'Government'},
		{id: 2, name: 'Other'}];

	requisitionType = [
		{id: 1, name: 'Cash'},
		{id: 2, name: 'Credit'}];

	voucherType = [
		{id: 1, name: 'FullCredit'},
		{id: 2, name: 'GroupOrDay'},
		{id: 3, name: 'SpecificValue'}];

	airFareType = [
		{id: 1, name: 'AdvancePurchaseFares'},
		{id: 2, name: 'NonRefundableFares'},
		{id: 3, name: 'PenaltyFares'},
		{id: 4, name: 'PrivateFaresOnly'},
		{id: 5, name: 'RestrictedFares'}];

	preferencePurpose = [
		{id: 1, name: 'Business'},
		{id: 2, name: 'Leisure'},
		{id: 3, name: 'Meeting'},
		{id: 4, name: 'Group'},
		{id: 5, name: 'Incentive'},
		{id: 6, name: 'Government'},
		{id: 7, name: 'Domestic'},
		{id: 8, name: 'International'},
		{id: 9, name: 'Conference'},
		{id: 10, name: 'Loyalty'}];

	coachCompartmentType = [
		{id: 1, name: 'Seat/Couchette'},
		{id: 2, name: 'Quiet'},
		{id: 3, name: 'Office'},
		{id: 4, name: 'Table'},
		{id: 5, name: 'Wheelchair Place'},
		{id: 6, name: 'Air-conditioned'},
		{id: 7, name: 'Lounge'},
		{id: 8, name: 'Reclining'}];

	seatArrangementType = [
		{id: 1, name: 'Power Plug'},
		{id: 2, name: 'Suitable For Pets'},
		{id: 3, name: 'With Mobile Phone'},
		{id: 4, name: 'Solo Isolated Seat'}];

	seatingType = [
		{id: 1, name: 'Car-Parking'},
		{id: 2, name: 'Motorrail'},
		{id: 3, name: 'Seat Couchette'},
		{id: 4, name: 'Sleeper'}];

	ticketFulfillmentType = [
		{id: 1, name: 'Agency'},
		{id: 2, name: 'Courier'},
		{id: 3, name: 'Kiosk'},
		{id: 4, name: 'Mail'},
		{id: 5, name: 'Ticketless'},
		{id: 6, name: 'Other'}];

	nameById(vocabulary: any[], id: number): any {
		var value = vocabulary.find(e => e.id == id);
		return value ? value['name'] : '';
	};

	fieldById(vocabulary: any[], id: number, field: string): any {
		var value = vocabulary.find(e => e.id == id);
		return value ? value[field] : '';
	};

	stateByStateMachineCode(code: string): any[] {
		return this.state.filter(e => e.stateMachineCode === code);
	}

	private aggregation(list: any[]): any {
		return list.reduce((acc, cur) => {
				acc[cur.code] = cur.id;
				return acc;
			},
			{});
	}

	private cities = require("../../assets/prototype-storage/Cities.json");

	public getCities(pattern: string): Observable<City[]> {
		if (!pattern || pattern.length < 2) {
			return Observable.create();
		}

		return observableOf(this.cities.filter(e => e.countryCode == pattern));
	}

	public getCountries(): Observable<any[]> {
		return this._http.get<City[]>("../../assets/prototype-storage/Countries.json");
	}

	public getLanguages(): Observable<any[]> {
		return this._http.get<City[]>("../../assets/prototype-storage/Languages.json");
	}

	public getCurrencies(): Observable<any[]> {
		return this._http.get<any[]>('../../assets/prototype-storage/Currencies.json');
	}

	searchFlights(options: SearchFlightDto): Observable<SearchResult>{
		return null;
	};

	searchPassengers(pattern: string): Observable<Passenger[]>{
		return null;
	};

	public searchHotels(options: IHotelSearchOptions): Observable<IHotelInfo[]> {
		return null;
	}
}

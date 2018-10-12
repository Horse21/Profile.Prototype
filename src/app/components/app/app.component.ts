import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import {
	INotifyItem,
	H21TopToolbarComponent,
	H21RightOverlayPanelService,
	IUserCardData,
	IToolbarElement,
	IBreadcrumb
} from 'h21-be-ui-kit';
import { ISidebarNavTab } from 'h21-be-ui-kit/dto';
import { AuthData } from '../../dto/auth-data';
import {NavigationEnd, Router} from "@angular/router";

const SIDEBAR_NAV_TABS: Array<ISidebarNavTab> = [
	{name: 'board', label: 'Board', icon: 'apps', type: 'link', url: '/dashboard', disabled: false},
	{name: 'tmc', label: 'TMC', icon: 'domain', type: 'link', url: '/agencies', disabled: false},
	{name: 'users', label: 'Users', icon: 'person', type: 'link', url: '/users', disabled: false}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements AfterContentChecked {
	@ViewChild('sidenav') private sidenav: MatSidenav;
	@ViewChild(H21TopToolbarComponent) private toolbar: H21TopToolbarComponent;

	breadcrumbs: IBreadcrumb[];
	toolbarActions: IToolbarElement[];

	userName: string;
	userCardData: IUserCardData;
	sidenavOpened: boolean;
	sidebarNavDisabled: boolean;
	sidebarNavTabs: Array<ISidebarNavTab> = SIDEBAR_NAV_TABS;
	sidebarNavActiveTab: string;
	contentSidenavHasBackdrop: boolean;

	constructor(
		private _http: HttpClient,
		private _router: Router,
		private _rightPanelDialog: H21RightOverlayPanelService)
	{
		this.init();
		this._router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.setBreadCrumbs();
				this.setToolbarActions();
			}
		});
	}

	init() {
		this.sidenavOpened = false;
		this.sidebarNavDisabled = false;
		this.sidebarNavTabs = SIDEBAR_NAV_TABS;
		this.sidebarNavActiveTab = 'board';
		this.contentSidenavHasBackdrop = false;
		this.userName = 'Zucchetti | Marco Montagni';
		this.userCardData = {
			user: {
				name: 'Marco Montagni',
				email: 'test@viaddi1.it',
				avatarUrl: './assets/img/avatar.png',
			},
			actions: [
				{
					name: 	'profile',
					label:	'My profile',
					icon:	'person',
					route:	'',
					type:	'button'
				}
			]
		};
	}

	ngAfterContentChecked() {
		if (this.sidebarNavTabs) {
			this.sidebarNavActiveTab = this.getSidebarNavTabNameByRoute(this._router.url);
		}
	}

	private getSidebarNavTabNameByRoute(route: string): string {
		if (this.isTmc()) {
			this.sidenavOpened = true;
			return 'tmc';
		} else if (this.isRoute('userProfile')) {
			return 'users';
		}
		else {
			let index = this.sidebarNavTabs.findIndex((item) => {
				return route.indexOf(item.url) >= 0
			});
			if (index >= 0) {
				return this.sidebarNavTabs[index].name;
			}
		}
		return '';
	}

	sidenavToggle(): void {
		this.sidenav.toggle();
		if (this.sidenav.opened) {
			this.sidenavOpened = true;
		} else {
			this.sidenavOpened = false;
		}
	}

	sidebarNavAction(tab: ISidebarNavTab): void {
		if (!this.sidenavOpened && tab.name == 'tmc') {
			this.sidenavToggle();
		} else if (this.sidenavOpened && tab.name != 'tmc') {
			this.sidenavToggle();
		}
	}

	prototypeAuth(data: any): void {
		var authData: AuthData = <AuthData> {
			name: data.name,
			roles: data.roles,
			claims: data.claims
		};
		localStorage.setItem("authData", JSON.stringify(authData));
		location.reload();
	}

	logout(): void {
		localStorage.setItem("authData", null);
		location.reload();
	}

	getNotifyList(): INotifyItem[] {
		return [
			<INotifyItem>{text: 'First notification'},
			<INotifyItem>{text: 'Second notification'}
		];
	}

	isDemo(): boolean {
		return this._router.url.indexOf('/demo') == 0;
	}

	openHelpSection(): void {
		this._rightPanelDialog.open('h21-help');
	}

	isRoute(route: string){
		return this._router.url.indexOf(route) >= 0;
	}

	isRoutes(routes: string[]){
		return routes.some(e => this._router.url.indexOf(e) >= 0);
	}

	isTmc(): boolean {
		return this.isRoutes([
			'agencies',
			'travelers',
			'agents',
			'providers',
			'agencyProfile',
			'travelerProfile',
			'agentProfile',
			'providerProfile']);
	}

	setBreadCrumbs(): void {
		let url = this._router.url.split('/');
		this.breadcrumbs = [];
		if (this.isTmc()) {
			this.breadcrumbs = [
				{ label: 'Home', url: '/'},
				{ label: 'TMC', url: '/agencies'}
			]
			switch (url[1]) {
				case 'agencies':
				case 'agencyProfile':
					this.breadcrumbs.push({ label: 'Agencies', url: '/agencies'});
					break;
				case 'agents':
				case 'agentProfile':
					this.breadcrumbs.push({ label: 'Agents', url: '/agents'});
					break;
				case 'providers':
				case 'providerProfile':
					this.breadcrumbs.push({ label: 'Providers', url: '/providers'});
					break;
				case 'travelers':
				case 'travelerProfile':
					this.breadcrumbs.push({ label: 'Travelers', url: '/travelers'});
					break;
			}
			switch (url[1]) {
				case 'agencyProfile':
					this.breadcrumbs.push({ label: 'Agency profile', url: '/agencyProfile/1'});
					break;
				case 'agentProfile':
					this.breadcrumbs.push({ label: 'Agent profile', url: '/agentProfile/1'});
					break;
				case 'providerProfile':
					this.breadcrumbs.push({ label: 'Provider profile', url: '/providerProfile/1'});
					break;
				case 'travelerProfile':
					this.breadcrumbs.push({ label: 'Traveler profile', url: '/travelerProfile/1'});
					break;
			}
 		} else if (this.isRoute('users') || this.isRoute('userProfile'))  {
			this.breadcrumbs = [
				{ label: 'Home', url: '/'},
				{ label: 'Users', url: '/users'},
			];
			if (this.isRoute('userProfile')) {
				this.breadcrumbs.push({ label: 'User profile', url: './userProfile/1'},);
			}
		}
	}

	setToolbarActions(): void {
		this.toolbarActions = [];

		if (this.isRoute('dashboard')) {
			this.toolbarActions = [
				{
					disabled: false,
					tooltip: 'Settings',
					icon: 'tune',
					style: ['toolbar-action-btn'],
					action: (event) => { }
				}
			];
		}

		if (this.isRoute('agencies')
			|| this.isRoute('agents')
			|| this.isRoute('providers')
			|| this.isRoute('travelers')
			|| this.isRoute('users')) {
			this.toolbarActions = [
				{
					disabled: false,
					tooltip: '',
					icon: 'view_week',
					style: ['toolbar-action-btn'],
					action: (event) => { }
				}
			];
		}

		if (this.isRoute('agencyProfile')
			|| this.isRoute('agentProfile')
			|| this.isRoute('providerProfile')
			|| this.isRoute('travelerProfile')) {
			this.toolbarActions = [
				{
					disabled: false,
					tooltip: 'Edit',
					icon: 'edit',
					style: ['toolbar-action-btn'],
					action: (event) => { }
				},
				{
					disabled: true,
					tooltip: 'Update card',
					icon: 'autorenew',
					style: ['toolbar-action-btn'],
					action: (event) => { }
				},
				{
					disabled: false,
					tooltip: 'Remove',
					icon: 'delete',
					style: ['toolbar-action-btn', 'toolbar-action-btn__hover-red'],
					action: (event) => { }
				},
			];
		}

		if (this.isRoute('userProfile')) {
			this.toolbarActions = [
				{
					disabled: false,
					tooltip: 'Edit',
					icon: 'edit',
					style: ['toolbar-action-btn'],
					action: (event) => { }
				},
				{
					disabled: true,
					tooltip: 'Update card',
					icon: 'autorenew',
					style: ['toolbar-action-btn'],
					action: (event) => { }
				},
				{
					disabled: true,
					tooltip: 'Сonfirm email address',
					icon: 'email',
					style: ['toolbar-action-btn'],
					action: (event) => { }
				},
				{
					disabled: true,
					tooltip: 'Change password',
					icon: 'vpn_key',
					style: ['toolbar-action-btn'],
					action: (event) => { }
				},
				{
					disabled: false,
					tooltip: 'Block user',
					icon: 'block',
					style: ['toolbar-action-btn', 'toolbar-action-btn__hover-red'],
					action: (event) => { }
				},
			];
		}
	}
}

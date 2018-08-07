import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NouisliderModule} from 'ng2-nouislider';
import {ProfilePermissionService} from './services/profile-permission.service';
import {ProfileVocabularyService} from './services/profile-vocabulary.service';
import {PermissionService} from 'h21-be-ui-kit';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import {VocabularyService} from 'h21-be-ui-kit';
import {H21RightOverlayPanelService} from 'h21-be-ui-kit';
import {AppSubscriberService} from 'h21-be-ui-kit';
import {OrderService} from 'h21-be-ui-kit';
import {AppComponent} from './components/app/app.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './modules/app-material.module';
import {H21HeaderModule, H21SidebarModule, H21TopToolbarModule} from 'h21-be-ui-kit';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {H21ProfileUserCardComponent} from './components/profile/h21-profile-user-card/h21-profile-user-card.component';
import {ProfileUserCardDemoComponent} from './components/demo/profile-user-card-demo/profile-user-card-demo.component';
import {DemoComponent} from './components/demo/demo/demo.component';
import {UserProfileComponent} from './components/profile/userProfile/user-profile/user-profile.component';
import {DashboardComponent} from './components/demo/dashboard/dashboard.component';
import {ChartsModule} from 'ng2-charts';

const routes: Routes = [
	{path: '', component: DashboardComponent, pathMatch: 'full'},
	{path: 'userProfile/:id', component: UserProfileComponent},
	{path: 'demo', component: DemoComponent},
	{path: 'demo/profileusercard', component: ProfileUserCardDemoComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: '**', redirectTo: '/'},
];

@NgModule({
		declarations: [
			AppComponent,
			H21ProfileUserCardComponent,
			ProfileUserCardDemoComponent,
			DemoComponent,
			UserProfileComponent,
			DashboardComponent
		],
		imports: [
			BrowserModule,
			RouterModule.forRoot(routes),
			BrowserAnimationsModule,
			AppMaterialModule,
			ReactiveFormsModule,
			FormsModule,
			HttpClientModule,
			MatInputModule,
			MatNativeDateModule,
			NouisliderModule,
			H21HeaderModule,
			H21SidebarModule,
			H21TopToolbarModule,
			ChartsModule
		],
		providers: [
			{
				provide: PermissionService,
				useClass: ProfilePermissionService
			},
			{
				provide: VocabularyService,
				useClass: ProfileVocabularyService
			},
			H21RightOverlayPanelService,
			AppSubscriberService,
			OrderService
		],
		bootstrap: [AppComponent],
		entryComponents: []
	}
)
export class AppModule {

}

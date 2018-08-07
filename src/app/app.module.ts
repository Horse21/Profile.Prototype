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
import { DemoComponent } from './components/demo/demo/demo.component';
import {H21ProfileUserLinksComponent} from './components/profile/h21-profile-user-links/h21-profile-user-links.component';
import {H21ProfileUserLinksService} from './components/profile/h21-profile-user-links/h21-profile-user-links.service';


const routes: Routes = [
	{path: '', redirectTo: '/', pathMatch: 'full'},
	{path: 'demo', component: DemoComponent},
	{path: 'demo/profileusercard', component: ProfileUserCardDemoComponent},
	{path: '**', redirectTo: '/'},
];

@NgModule({
		declarations: [
			AppComponent,
			H21ProfileUserCardComponent,
			ProfileUserCardDemoComponent,
			DemoComponent,
			H21ProfileUserLinksComponent
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
			H21TopToolbarModule
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
			H21ProfileUserLinksService,
			AppSubscriberService,
			OrderService
		],
		bootstrap: [AppComponent],
		entryComponents: [
			H21ProfileUserLinksComponent
		]
	}
)
export class AppModule {

}

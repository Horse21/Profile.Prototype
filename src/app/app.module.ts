import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { ProfilePermissionService } from './services/profile-permission.service';
import { ProfileVocabularyService } from './services/profile-vocabulary.service';
import {
	AppSubscriberService,
	H21HeaderModule,
	H21RightOverlayPanelService,
	H21SidebarModule,
	H21TopToolbarModule,
	OrderService,
	PermissionService,
	VocabularyService
} from 'h21-be-ui-kit';
import { MatInputModule, MatNativeDateModule } from '@angular/material';
import { AppComponent } from './components/app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { H21ProfileUserCardComponent } from './components/profile/h21-profile-user-card/h21-profile-user-card.component';
import { ProfileUserCardDemoComponent } from './components/demo/profile-user-card-demo/profile-user-card-demo.component';
import { DemoComponent } from './components/demo/demo/demo.component';
import { DashboardComponent } from './components/demo/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
	{path: '', redirectTo: '/', pathMatch: 'full'},
	{path: 'demo', component: DemoComponent},
	{path: 'demo/profileusercard', component: ProfileUserCardDemoComponent},
	{ path: 'demo/dashboard', component: DashboardComponent },
	{ path: '**', redirectTo: 'demo/dashboard' }
];

@NgModule({
		declarations: [
			AppComponent,
			H21ProfileUserCardComponent,
			ProfileUserCardDemoComponent,
			DemoComponent,
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

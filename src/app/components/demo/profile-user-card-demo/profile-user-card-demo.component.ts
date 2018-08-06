import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'profile-user-card-demo',
	templateUrl: './profile-user-card-demo.component.html',
	styleUrls: ['./profile-user-card-demo.component.css']
})
export class ProfileUserCardDemoComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	/** Section title */
	title = 'Profile user card';

	editable: boolean = false;

	cardView: string = 'user';
	cardViews: Array<string> = ['provider', 'user', 'agent', 'traveler', 'agency'];
}

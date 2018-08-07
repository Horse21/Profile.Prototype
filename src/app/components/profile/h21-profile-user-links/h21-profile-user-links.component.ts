import { Component, EventEmitter } from "@angular/core";
import { trigger, state, transition, animate, style } from "@angular/animations";
import { H21ProfileUserLinksRef } from "./h21-profile-user-links-ref";

@Component ({
	selector: "h21-profile-user-links",
	templateUrl: "./h21-profile-user-links.component.html",
	animations: [
		trigger('toggleVisibility', [
			state('void', style({transform: 'translateX(800px)'})),
			state('enter', style({transform: 'translateX(0)'})),
			state('leave',style({transform: 'translateX(800px)'})),
			transition('* => *', animate('120ms')),
		])
	]
})

export class H21ProfileUserLinksComponent {

	animationState: 'void' | 'enter' | 'leave' = 'enter';
	animationStateChanged = new EventEmitter<AnimationEvent>();

	agencyData: Array<any> = [
		{ name: 'VCK travel', description: 'Valreep 13 1042 AN Amsterdam', detail: '+31 20 - 6 800 802', selected: false},
		{ name: 'BCD Travel', description: 'Valreep 13 1042 AN Amsterdam', detail: '+31 20 - 6 800 802', selected: false},
		{ name: 'Raptim', description: 'Spoorlaan 308 5038 CC Tilburg The Netherlands', detail: '+31 13 - 5 362 026', selected: true},
	];

	branchData: Array<any> = [
		{ name: 'Raptim', description: 'Spoorlaan 308 5038 CC Tilburg The Netherlands', detail: '+31 13 - 5 362 026', selected: true},
		{ name: 'Raptim', description: 'Spoorlaan 308 5038 CC Tilburg The Netherlands', detail: '+31 13 - 5 362 026', selected: true},
		{ name: 'Raptim', description: 'Spoorlaan 308 5038 CC Tilburg The Netherlands', detail: '+31 13 - 5 362 026', selected: false},
		{ name: 'Raptim', description: 'Spoorlaan 308 5038 CC Tilburg The Netherlands', detail: '+31 13 - 5 362 026', selected: false},
		{ name: 'Raptim', description: 'Spoorlaan 308 5038 CC Tilburg The Netherlands', detail: '+31 13 - 5 362 026', selected: false},
		{ name: 'Raptim', description: 'Spoorlaan 308 5038 CC Tilburg The Netherlands', detail: '+31 13 - 5 362 026', selected: false},
	];


	constructor (public dialogRef: H21ProfileUserLinksRef) {

	}

	close() {
		this.dialogRef.close();
	}

	onAnimationStart(event: AnimationEvent) {
		this.animationStateChanged.emit(event);
	}

	onAnimationDone(event: AnimationEvent) {
		this.animationStateChanged.emit(event);
	}

	startExitAnimation() {
		this.animationState = 'leave';
	}
}

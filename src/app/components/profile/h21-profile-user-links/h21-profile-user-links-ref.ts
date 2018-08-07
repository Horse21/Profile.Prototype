import { OverlayRef } from '@angular/cdk/overlay';
import { H21ProfileUserLinksComponent } from "./h21-profile-user-links.component";
import { Subject, Observable } from "rxjs";
import { take, filter } from "rxjs/operators";


export class H21ProfileUserLinksRef {

	private _beforeClose = new Subject<void>();
	private _afterClosed = new Subject<void>();

	componentInstance: H21ProfileUserLinksComponent;

	constructor(private overlayRef: OverlayRef) {

	}

	close(): void {
		this.componentInstance.animationStateChanged.pipe(
			filter((event: any) => event.phaseName === 'start'),
			take(1)
		).subscribe(() => {
			this._beforeClose.next();
			this._beforeClose.complete();
			this.overlayRef.detachBackdrop();
		});

		this.componentInstance.animationStateChanged.pipe(
			filter((event: any) => event.phaseName === 'done' && event.toState === 'leave'),
			take(1)
		).subscribe(() => {
			this.overlayRef.dispose();
			this._afterClosed.next();
			this._afterClosed.complete();
			this.componentInstance = null!;
		});

		this.componentInstance.startExitAnimation();
	}

	afterClosed(): Observable<void> {
		return this._afterClosed.asObservable();
	}

	beforeClose(): Observable<void> {
		return this._beforeClose.asObservable();
	}

}

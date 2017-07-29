import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: [ './slides.component.css' ],
    templateUrl: './slides.component.html'
})
export class SlidesComponent implements OnDestroy, OnInit {

    private _activatedRoute: ActivatedRoute;

    private _index: number;

    private _router: Router;

    private _routerEventsSubscription: any;

    constructor (activatedRoute: ActivatedRoute, router: Router) {
        this._activatedRoute = activatedRoute;
        this._router = router;
    }

    public handleKeyUp (event) {
        if ((event.code && event.code === 'ArrowLeft') || event.keyCode === 37) {
            this._goToPreviousSlide();
        } else if ((event.code && event.code === 'ArrowRight') || event.keyCode === 39) {
            this._goToNextSlide();
        }
    }

    public handleSwipeLeft () {
        this._goToNextSlide();
    }

    public handleSwipeRight () {
        this._goToPreviousSlide();
    }

    public ngOnDestroy () {
        this._routerEventsSubscription.unsubscribe();
    }

    public ngOnInit () {
        this._routerEventsSubscription = this._router.events
            .filter((routerEvent) => (routerEvent instanceof NavigationEnd))
            .subscribe(() => this._setIndex());

        this._setIndex();
    }

    private _goToNextSlide () {
        if (this._index < 23) {
            this._router.navigate([ `${ this._index + 1 }` ], { relativeTo: this._activatedRoute });
        }
    }

    private _goToPreviousSlide () {
        if (this._index > 1) {
            this._router.navigate([ `${ this._index - 1 }` ], { relativeTo: this._activatedRoute });
        }
    }

    private _setIndex () {
        const activatedChildRoute = this._activatedRoute.firstChild;

        this._index = parseInt(activatedChildRoute.snapshot.url[0].path, 10);
    }

}

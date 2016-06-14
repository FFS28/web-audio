import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SlidesRoutes } from './routes';

@Component({
    directives: [ ROUTER_DIRECTIVES ],
    moduleId: __moduleName,
    selector: 'slides',
    styleUrls: [ 'component.css' ],
    templateUrl: 'component.html'
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

    private _goToNextSlide () {
        if (this._index) {
            if (this._index < SlidesRoutes.length) {
                this._router.navigate([ `${ this._index + 1 }` ], { relativeTo: this._activatedRoute });
            }
        } else {
            // @todo Remove absolute routing when possible.
            this._router.navigateByUrl('/slides/2');
        }
    }

    private _goToPreviousSlide () {
        if (this._index > 1) {
            this._router.navigate([ `${ this._index - 1 }` ], { relativeTo: this._activatedRoute });
        }
    }

    handleKeyUp (event) {
        if ((event.code && event.code === 'ArrowLeft') || event.keyCode === 37) {
            this._goToPreviousSlide();
        } else if ((event.code && event.code === 'ArrowRight') || event.keyCode === 39) {
            this._goToNextSlide();
        }
    }

    handleSwipeLeft () {
        this._goToNextSlide();
    }

    handleSwipeRight () {
        this._goToPreviousSlide();
    }

    ngOnDestroy () {
        this._routerEventsSubscription.unsubscribe();
    }

    ngOnInit () {
        this._routerEventsSubscription = this._router.events
            .subscribe(() => {
                const activatedChildRoute = this._router.routerState.firstChild(this._activatedRoute);

                if (activatedChildRoute && activatedChildRoute.snapshot.urlSegments.length > 0) {
                    this._index = parseInt(activatedChildRoute.snapshot.urlSegments[0].path, 10);
                }
            });

        const activatedChildRoute = this._router.routerState.firstChild(this._activatedRoute);

        if (activatedChildRoute && activatedChildRoute.snapshot.urlSegments.length > 0) {
            this._index = parseInt(activatedChildRoute.snapshot.urlSegments[0].path, 10);
        }
    }

}

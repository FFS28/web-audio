import { BehaviorSubject } from 'rxjs';
import { SlidesComponent } from '../../../src/app/slides';

describe('SlidesComponent', () => {

    let activatedRoute;

    let router;

    let slidesComponent;

    beforeEach(() => {
        activatedRoute = {
            firstChild: {
                snapshot: {
                    url: [ {
                        path: '8'
                    } ]
                }
            }
        };

        router = {
            events: new BehaviorSubject('a fake router event'),
            navigate () {} // tslint:disable-line:no-empty
        };

        spyOn(router, 'navigate').and.callThrough();

        slidesComponent = new SlidesComponent(<any> activatedRoute, <any> router);
    });

    describe('handleKeyUp()', () => {

        beforeEach(() => {
            slidesComponent.ngOnInit();
        });

        it('should navigate to the previous slide', () => {
            slidesComponent.handleKeyUp({ code: 'ArrowLeft' });

            expect(router.navigate).toHaveBeenCalledWith([ '7' ], { relativeTo: activatedRoute });
        });

        it('should navigate to the previous slide', () => {
            slidesComponent.handleKeyUp({ keyCode: 37 });

            expect(router.navigate).toHaveBeenCalledWith([ '7' ], { relativeTo: activatedRoute });
        });

        it('should navigate to the next slide', () => {
            slidesComponent.handleKeyUp({ code: 'ArrowRight' });

            expect(router.navigate).toHaveBeenCalledWith([ '9' ], { relativeTo: activatedRoute });
        });

        it('should navigate to the next slide', () => {
            slidesComponent.handleKeyUp({ keyCode: 39 });

            expect(router.navigate).toHaveBeenCalledWith([ '9' ], { relativeTo: activatedRoute });
        });

    });

    describe('handleSwipeLeft()', () => {

        beforeEach(() => {
            slidesComponent.ngOnInit();
        });

        it('should navigate to the next slide', () => {
            slidesComponent.handleSwipeLeft();

            expect(router.navigate).toHaveBeenCalledWith([ '9' ], { relativeTo: activatedRoute });
        });

    });

    describe('handleSwipeRight()', () => {

        beforeEach(() => {
            slidesComponent.ngOnInit();
        });

        it('should navigate to the previous slide', () => {
            slidesComponent.handleSwipeRight();

            expect(router.navigate).toHaveBeenCalledWith([ '7' ], { relativeTo: activatedRoute });
        });

    });

});

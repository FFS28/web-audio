import { AfterViewInit, Component, ViewChildren, QueryList } from '@angular/core';
import { CanReuse, ComponentInstruction, OnReuse, Router, RouteConfig, ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';
import { SlideEightComponent } from '../slide-eight/component';
import { SlideEighteenComponent } from '../slide-eighteen/component';
import { SlideElevenComponent } from '../slide-eleven/component';
import { SlideFifteenComponent } from '../slide-fifteen/component';
import { SlideFiveComponent } from '../slide-five/component';
import { SlideFourComponent } from '../slide-four/component';
import { SlideFourteenComponent } from '../slide-fourteen/component';
import { SlideNineComponent } from '../slide-nine/component';
import { SlideNineteenComponent } from '../slide-nineteen/component';
import { SlideOneComponent } from '../slide-one/component';
import { SlideSevenComponent } from '../slide-seven/component';
import { SlideSeventeenComponent } from '../slide-seventeen/component';
import { SlideSixComponent } from '../slide-six/component';
import { SlideSixteenComponent } from '../slide-sixteen/component';
import { SlideTenComponent } from '../slide-ten/component';
import { SlideThirteenComponent } from '../slide-thirteen/component';
import { SlideThreeComponent } from '../slide-three/component';
import { SlideTwelveComponent } from '../slide-twelve/component';
import { SlideTwentyComponent } from '../slide-twenty/component';
import { SlideTwentyOneComponent } from '../slide-twenty-one/component';
import { SlideTwentyThreeComponent } from '../slide-twenty-three/component';
import { SlideTwentyTwoComponent } from '../slide-twenty-two/component';
import { SlideTwoComponent } from '../slide-two/component';

const SLIDES = [
          SlideOneComponent,
          SlideTwoComponent,
          SlideThreeComponent,
          SlideFourComponent,
          SlideFiveComponent,
          SlideSixComponent,
          SlideSevenComponent,
          SlideEightComponent,
          SlideNineComponent,
          SlideTenComponent,
          SlideElevenComponent,
          SlideTwelveComponent,
          SlideThirteenComponent,
          SlideFourteenComponent,
          SlideFifteenComponent,
          SlideSixteenComponent,
          SlideSeventeenComponent,
          SlideEighteenComponent,
          SlideNineteenComponent,
          SlideTwentyComponent,
          SlideTwentyOneComponent,
          SlideTwentyTwoComponent,
          SlideTwentyThreeComponent
      ];

const ROUTE_CONFIG = SLIDES.map((slide, index) => {
          return {
              component: slide,
              name: `Slide${ index }`,
              path: `/${ index + 1 }`,
              useAsDefault: index === 0
          };
      });

@Component({
    directives: [ ROUTER_DIRECTIVES ],
    moduleId: __moduleName,
    selector: 'slides',
    styleUrls: [ 'component.css' ],
    templateUrl: 'component.html'
})
@RouteConfig(ROUTE_CONFIG)
export class SlidesComponent implements AfterViewInit, CanReuse, OnReuse {

    // private _index: number;
    //
    private _router: Router;
    //
    // @ViewChildren(SlideComponent) slides: QueryList<SlideComponent>;
    //
    constructor (routeParams: RouteParams, router: Router) {
    //     this._index = parseInt(routeParams.get('index'), 10);
        this._router = router;
    }

    private _goToNextSlide () {
        ROUTE_CONFIG
            .slice(0, -1)
            .some((routeDefinition, index) => {
                if (this._router.isRouteActive(this._router.generate([ routeDefinition.name ]))) {
                    this._router.navigate([ ROUTE_CONFIG[ index + 1 ].name ]);

                    return true;
                }
            });
    }

    private _goToPreviousSlide () {
        ROUTE_CONFIG
            .slice(1)
            .some((routeDefinition, index) => {
                if (this._router.isRouteActive(this._router.generate([ routeDefinition.name ]))) {
                    this._router.navigate([ ROUTE_CONFIG[ index ].name ]);

                    return true;
                }
            });
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

    ngAfterViewInit () {
        // if (this._index > -1 && this._index < this.slides.length) {
        //     this.slides.toArray()[ this._index ].isDisplayed = true;
        // } else {
        //     this._router.navigate([ 'Slide', { index: 0 } ]);
        // }
    }

    routerCanReuse(next: ComponentInstruction, prev: ComponentInstruction) {
        return true;
    }

    routerOnReuse(next: ComponentInstruction, prev: ComponentInstruction) {
        // this.slides.toArray()[ this._index ].isDisplayed = false;
        // this._index = parseInt(next.params['index'], 10);
        // this.slides.toArray()[ this._index ].isDisplayed = true;
    }

}

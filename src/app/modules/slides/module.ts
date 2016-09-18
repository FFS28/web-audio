import { PrismComponent } from './components/prism/component';
import { SlideEightComponent } from './components/slide-eight/component';
import { SlideEighteenComponent } from './components/slide-eighteen/component';
import { SlideElevenComponent } from './components/slide-eleven/component';
import { SlideFifteenComponent } from './components/slide-fifteen/component';
import { SlideFiveComponent } from './components/slide-five/component';
import { SlideFourComponent } from './components/slide-four/component';
import { SlideFourteenComponent } from './components/slide-fourteen/component';
import { SlideNineComponent } from './components/slide-nine/component';
import { SlideNineteenComponent } from './components/slide-nineteen/component';
import { SlideOneComponent } from './components/slide-one/component';
import { SlideSevenComponent } from './components/slide-seven/component';
import { SlideSeventeenComponent } from './components/slide-seventeen/component';
import { SlideSixComponent } from './components/slide-six/component';
import { SlideSixteenComponent } from './components/slide-sixteen/component';
import { SlideTenComponent } from './components/slide-ten/component';
import { SlideThirteenComponent } from './components/slide-thirteen/component';
import { SlideThreeComponent } from './components/slide-three/component';
import { SlideTwelveComponent } from './components/slide-twelve/component';
import { SlideTwentyOneComponent } from './components/slide-twenty-one/component';
import { SlideTwentyThreeComponent } from './components/slide-twenty-three/component';
import { SlideTwentyTwoComponent } from './components/slide-twenty-two/component';
import { SlideTwentyComponent } from './components/slide-twenty/component';
import { SlideTwoComponent } from './components/slide-two/component';
import { SlidesComponent } from './components/slides/component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PrismComponent,
        SlideEightComponent,
        SlideEighteenComponent,
        SlideElevenComponent,
        SlideFifteenComponent,
        SlideFiveComponent,
        SlideFourComponent,
        SlideFourteenComponent,
        SlideNineComponent,
        SlideNineteenComponent,
        SlideOneComponent,
        SlideSevenComponent,
        SlideSeventeenComponent,
        SlideSixComponent,
        SlideSixteenComponent,
        SlideTenComponent,
        SlideThirteenComponent,
        SlideThreeComponent,
        SlideTwelveComponent,
        SlideTwentyComponent,
        SlideTwentyOneComponent,
        SlideTwentyThreeComponent,
        SlideTwentyTwoComponent,
        SlideTwoComponent,
        SlidesComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild([]),
    ]
})
export class SlidesModule {}

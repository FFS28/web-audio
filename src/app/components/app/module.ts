import { PrismComponent } from '../prism/component';
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
import { SlideTwentyOneComponent } from '../slide-twenty-one/component';
import { SlideTwentyThreeComponent } from '../slide-twenty-three/component';
import { SlideTwentyTwoComponent } from '../slide-twenty-two/component';
import { SlideTwentyComponent } from '../slide-twenty/component';
import { SlideTwoComponent } from '../slide-two/component';
import { SlidesComponent } from '../slides/component';
import { AppComponent } from './component';
import { appRoutes } from './routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
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
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppModule {}

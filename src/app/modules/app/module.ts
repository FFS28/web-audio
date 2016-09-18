import { SlidesModule } from '../slides/module';
import { appRoutes } from './routes';
import { AppComponent } from './components/app/component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        SlidesModule
    ]
})
export class AppModule {}

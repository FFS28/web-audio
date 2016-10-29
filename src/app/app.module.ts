import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesModule } from './slides';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        SlidesModule
    ]
})
export class AppModule { }

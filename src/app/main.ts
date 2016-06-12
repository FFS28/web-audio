import 'reflect-metadata';
import 'zone';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent } from './components/app/component';
import { SlidesComponent } from './components/slides/component';
import { bootstrap } from '@angular/platform-browser-dynamic';

enableProdMode();
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    SlidesComponent
]);

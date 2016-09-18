import 'reflect-metadata'; // tslint:disable-line:ordered-imports
import { AppModule } from './modules/app/module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);

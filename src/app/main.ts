import 'reflect-metadata';
import 'zone';
import { AppModule } from './components/app/module';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);

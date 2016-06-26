import 'reflect-metadata';
import 'zone';
import { APP_ROUTER_PROVIDERS } from './routes';
import { AppComponent } from './components/app/component';
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

enableProdMode();
bootstrap(AppComponent, [ APP_ROUTER_PROVIDERS ]);

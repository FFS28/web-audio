import 'reflect-metadata';
import 'zone';
import { APP_ROUTER_PROVIDERS } from './routes';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent } from './components/app/component';
import { bootstrap } from '@angular/platform-browser-dynamic';

enableProdMode();
bootstrap(AppComponent, [ APP_ROUTER_PROVIDERS ]);

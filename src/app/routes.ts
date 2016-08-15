import { appRoutes } from './components/app/routes';
import { RouterConfig, provideRouter } from '@angular/router';

const routes: RouterConfig = [ ...appRoutes ];

export const APP_ROUTER_PROVIDERS = [ provideRouter(routes) ];

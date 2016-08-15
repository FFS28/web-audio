import { SlidesComponent } from '../slides/component';
import { slidesRoutes } from '../slides/routes';
import { RouterConfig } from '@angular/router';

export const appRoutes: RouterConfig = [
    {
        children: [ ...slidesRoutes ],
        component: SlidesComponent,
        path: 'slides'
    }, {
        path: '**',
        redirectTo: 'slides/1'
    }
];

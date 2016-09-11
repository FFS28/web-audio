import { Routes } from '@angular/router';
import { SlidesComponent } from '../slides/component';
import { slidesRoutes } from '../slides/routes';

export const appRoutes: Routes = [
    {
        children: [ ...slidesRoutes ],
        component: SlidesComponent,
        path: 'slides'
    }, {
        path: '**',
        redirectTo: 'slides/1'
    }
];

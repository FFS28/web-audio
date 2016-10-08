import { SlidesComponent } from '../slides/components/slides/component';
import { slidesRoutes } from '../slides/routes';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        children: [ ...slidesRoutes ],
        component: SlidesComponent,
        path: 'slides'
    }, {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'slides'
    }
];

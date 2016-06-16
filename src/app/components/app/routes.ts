import { SlidesComponent } from '../slides/component';
import { SlidesRoutes } from '../slides/routes';

export const AppRoutes = [
    {
        children: [ ...SlidesRoutes ],
        component: SlidesComponent,
        path: 'slides'
    }, {
        path: '**',
        redirectTo: 'slides/1'
    }
];

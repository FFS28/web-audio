import { SlidesComponent } from '../slides/component';
import { SlidesRoutes } from '../slides/routes';

export const AppRoutes = [
    {
        children: [ ...SlidesRoutes ],
        component: SlidesComponent,
        index: true,
        path: 'slides'
    }, {
        path: '**',
        redirectTo: 'slides'
    }
];

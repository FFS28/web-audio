import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Component } from '@angular/core';
import { SlidesComponent } from '../slides/component';

@Component({
    directives: [ ROUTER_DIRECTIVES, SlidesComponent ],
    moduleId: __moduleName,
    selector: 'wac-talk',
    templateUrl: 'component.html'
})
@RouteConfig([{
    component: SlidesComponent,
    name: 'Slides',
    path: '/slides/...',
    useAsDefault: true
}, {
    path: '/...',
    redirectTo: [ 'Slides' ]
}])
export class AppComponent {

}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    moduleId: __moduleName,
    selector: 'wac-talk',
    templateUrl: 'component.html'
})
export class AppComponent {

}

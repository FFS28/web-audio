import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-talk',
    templateUrl: 'component.html'
})
export class AppComponent {

}

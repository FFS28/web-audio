import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-prism',
    styleUrls: [ './prism.component.css' ],
    templateUrl: './prism.component.html'
})
export class PrismComponent implements AfterViewInit, OnChanges {

    @Input() public language: string;

    @ViewChild('element') private element: ElementRef;

    public ngAfterViewInit () {
        Prism.highlightElement(this.element.nativeElement, false);
    }

    public ngOnChanges () {
        this.language = `language-${this.language}`;

        if (this.element !== undefined) {
            Prism.highlightElement(this.element.nativeElement, false);
        }
    }

}

import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'prism',
    styleUrls: [ 'component.css' ],
    templateUrl: 'component.html'
})
export class PrismComponent implements AfterViewInit, OnChanges {

    @Input() language: string;

    @ViewChild('element') element: ElementRef;

    ngAfterViewInit () {
        Prism.highlightElement(this.element.nativeElement);
    }

    ngOnChanges () {
        this.language = `language-${this.language}`;

        if (this.element !== undefined) {
            Prism.highlightElement(this.element.nativeElement);
        }
    }

}

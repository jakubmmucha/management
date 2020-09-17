import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[fuseWidgetToggle]'
})
export class AdminWidgetToggleDirective {
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    ) {
    }
}

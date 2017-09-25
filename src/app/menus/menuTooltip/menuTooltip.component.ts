import {Component, Input} from '@angular/core';

@Component({
    selector: 'blog-menu-tooltip',
    templateUrl: './menuTooltip.component.html'
})
export class MenuTooltipComponent {
    @Input() text: string = '';

    constructor() {}
}

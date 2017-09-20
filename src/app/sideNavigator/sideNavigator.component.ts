import {Component, Input} from '@angular/core';

@Component({
    selector: 'blog-side-navigator-component',
    templateUrl: './sideNavigator.component.html'
})
export class SideNavigatorComponent {
    @Input() postList: any[];
    constructor() {}
}

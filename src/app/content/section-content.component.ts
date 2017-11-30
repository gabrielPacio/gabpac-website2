import {Component} from '@angular/core';
import {BasicContentComponent} from './basic-content.component';

@Component({
    templateUrl: './section-content.component.html',
    selector: 'blog-section'
})
export class SectionContentComponent extends BasicContentComponent {
    constructor() {
        super();
    }
}

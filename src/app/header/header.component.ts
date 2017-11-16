import {Component, Input} from "@angular/core";

@Component({
    selector: 'blog-header',
    templateUrl: './header.component.html',

})
export class HeaderComponent {

    @Input() title: string;
    @Input() subtitle: string = '';

    constructor() {

    }
}

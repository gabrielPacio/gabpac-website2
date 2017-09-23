import {Component, Input, OnInit} from '@angular/core';
import {SideNavigatorModel} from "./sideNavigator.model";

@Component({
    selector: 'blog-side-navigator-component',
    templateUrl: './sideNavigator.component.html'
})
export class SideNavigatorComponent{
    @Input() postList: SideNavigatorModel[];
    constructor() {}

    public linkClicked(linkName: string, event) {
        event.preventDefault();
        const targetElement = document.getElementById(linkName);
        if (targetElement) {
            targetElement.scrollIntoView();
            window.scrollBy(0,-200);
        }
    }

}

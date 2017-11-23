import {Component} from "@angular/core";
import {ContentManagerService} from '../contentManager/content-manager.service';

@Component({
    selector: 'blog-header',
    templateUrl: './header.component.html',

})
export class HeaderComponent {

    public title: string = '';
    public subtitle: string = '';

    constructor(private contentManagerService: ContentManagerService) {
        this.contentManagerService.currentContentEmmiter.subscribe(response => {
            this.title = response.menuTitle;
            this.subtitle = response.tooltip;
        })
    }
}

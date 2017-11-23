import {Component, OnInit} from '@angular/core';
import {ContentModel} from '../contentManager/content-model';
import {ContentManagerService} from '../contentManager/content-manager.service';

@Component({
    selector: 'blog-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit{

    private _contentModelList: ContentModel[];

    constructor(private contentManagerService: ContentManagerService) {}

    public get contentModelList(): ContentModel[] {
        return this._contentModelList;
    }

    ngOnInit() {
        this._contentModelList = this.contentManagerService.getSiteStructure();
    }
}

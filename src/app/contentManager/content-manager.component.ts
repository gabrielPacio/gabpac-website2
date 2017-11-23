import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../shared/navigation/navigation.service';
import {ContentModel} from './content-model';
import {ContentManagerService} from './content-manager.service';
import {Router} from '@angular/router';

@Component({
    selector: 'blog-content-manager',
    templateUrl: 'content-manager.component.html'
})
export class ContentManagerComponent implements OnInit {

    private _contentModelList: ContentModel[];
    private _selectedContent: ContentModel;

    constructor(private router: Router,
                private navigationService: NavigationService,
                private contentManagerService: ContentManagerService) {}

    public get contentModelList(): ContentModel[] {
        return this._contentModelList;
    }

    ngOnInit() {
        this.navigationService.setActivatedRoute(this.router);
        this.navigationService.navigationChange.subscribe(changes => {
            this._selectedContent = this._contentModelList.find(content => content.name === changes.url);
            this.contentManagerService.currentContent = this._selectedContent;
        });
        this._contentModelList = this.contentManagerService.getSiteStructure();
    }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../shared/navigation/navigation.service';

@Component({
    selector: 'blog-content-manager',
    templateUrl: 'content-manager.component.html'
})
export class ContentManagerComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute,
                private navigationService: NavigationService) {}

    ngOnInit() {
        this.navigationService.setActivatedRoute(this.activatedRoute);
    }
}

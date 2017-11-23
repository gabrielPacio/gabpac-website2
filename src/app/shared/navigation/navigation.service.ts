import {EventEmitter, Injectable} from '@angular/core';
import { GuardsCheckEnd, Router} from '@angular/router';
import {NavigationDetailsModel} from './navigation-details.model';

Injectable()
export class NavigationService {

    private _router: Router;
    public navigationChange: EventEmitter<NavigationDetailsModel> = new EventEmitter();

    constructor() {}

    public setActivatedRoute(router: Router): void {
        this._router = router;
        this._router.events.subscribe(event => {
            if (event instanceof GuardsCheckEnd) {
                const details: NavigationDetailsModel = new NavigationDetailsModel();
                details.url = (<GuardsCheckEnd>event).state.root.children[0].params['blogArea'];
                details.queryProperties = (<GuardsCheckEnd>event).state.root.queryParams;
                this.navigationChange.emit(details);
            }
        });
    }
}

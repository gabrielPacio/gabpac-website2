import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

Injectable()
export class NavigationService {

    private _activatedRoute: ActivatedRoute;
    constructor() {

    }

    public setActivatedRoute(activatedRoute: ActivatedRoute): void {
        this._activatedRoute = activatedRoute;
    }
}

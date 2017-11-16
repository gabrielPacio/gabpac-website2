import {Injectable} from '@angular/core';
import * as globals from './../globals'
import {ContentModel} from './content-model';

@Injectable()
export class ContentManagerService {

    private siteStructure: ContentModel[];
    constructor() {}

    public getSiteStructure(): ContentModel[] {
        const elements = globals.siteStructure.elements;
        return elements.map(ele => new ContentModel(ele));
    }
}

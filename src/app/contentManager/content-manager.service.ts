import {EventEmitter, Injectable} from '@angular/core';
import * as globals from './../globals'
import {ContentModel, StructureType} from './content-model';

@Injectable()
export class ContentManagerService {

    private siteStructure: ContentModel[];
    private _currentContent: ContentModel;
    public currentContentEmmiter: EventEmitter<ContentModel> = new EventEmitter();

    constructor() {}

    public getSiteStructure(): ContentModel[] {
        const elements = globals.siteStructure.elements;
        return elements.map(ele => new ContentModel(ele));
    }

    public set currentContent(value: ContentModel) {
        this._currentContent = value;
        this.currentContentEmmiter.emit(value);
    }

    public get currentContent(): ContentModel {
        return this._currentContent;
    }

    public loadContent(queryProperty: object) {
        switch (this._currentContent.structureType) {
            case StructureType.hardcoded:

                break;
            case StructureType.page:

                break;
            case StructureType.section:

                break;
        }
    }
}

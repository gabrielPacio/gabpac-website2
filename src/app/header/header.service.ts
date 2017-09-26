import {EventEmitter, Injectable, Output} from "@angular/core";
import {TitleDescriptionModel} from '../category/titleDescription.model';

@Injectable()
export class HeaderService {
    constructor() {}

    public titleChange: EventEmitter<TitleDescriptionModel> = new EventEmitter();

    public setTitle(titleDescription: TitleDescriptionModel) {
        this.titleChange.emit(titleDescription)
    }
}

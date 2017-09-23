import {EventEmitter, Injectable, Output} from "@angular/core";

@Injectable()
export class HeaderService {
    constructor() {}

    public titleChange: EventEmitter<string> = new EventEmitter();

    public setTitle(title: string) {
        this.titleChange.emit(title)
    }
}

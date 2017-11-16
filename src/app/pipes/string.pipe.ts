import {Pipe, PipeTransform} from '@angular/core';
import * as globals from './../globals';

@Pipe({
    name: 'stringPipe'
})
export class StringPipe implements PipeTransform {

    public transform(value: string, ...args: any[]) {
        return globals.strings[value];
    }
}

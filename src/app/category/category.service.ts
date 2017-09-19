import {Injectable} from '@angular/core';
import {ServerCommunicationService} from '../server-communication.service';
import {Observable} from 'rxjs/Observable';
import {PostModel} from '../post/post.model';
@Injectable()
export class CategoryService {
    constructor(private serverComm: ServerCommunicationService) {}

    private getIdByName(name: string): number {
        let ret: number;
        switch(name) {
            case 'desoriente':
                ret = 6;
                break;
            case 'arcimboldo':
                ret = 8;
                break
            case 'microhistorinhas':
                ret = 5;
                break
        }
        return ret;
    }

    public getCategoryByName(name: string, page = 1): Observable<PostModel[]> {

        return this.serverComm.getPostsByCategory(this.getIdByName(name), page);
    }
}

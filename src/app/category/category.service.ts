import {Injectable} from '@angular/core';
import {ServerCommunicationService} from '../server-communication.service';
import {Observable} from 'rxjs/Observable';
import {PostModel} from '../post/post.model';
import {TitleDescriptionModel} from "./titleDescription.model";
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

    public getTitleBySlug(slug: string): TitleDescriptionModel {
        const ret: TitleDescriptionModel = new TitleDescriptionModel();
        switch (slug) {
            case 'desoriente':
                ret.title = 'Desoriente';
                ret.description = 'Análises, ensaios e crônicas sobre Israel e o Oriente Médio';
                break;
            case 'arcimboldo':
                ret.title = 'Arcimboldo';
                ret.description = 'Contos de Arcimboldo, o Dono do Brasil';
                break;
            case 'microhistorinhas':
                ret.title = 'Microhistorinhas';
                ret.description = 'Pequenas histórias do dia a dia em Israel';
                break;
        }
        return ret;
    }

    public getCategoryByName(name: string, page = 1): Observable<PostModel[]> {

        return this.serverComm.getPostsByCategory(this.getIdByName(name), page);
    }
}

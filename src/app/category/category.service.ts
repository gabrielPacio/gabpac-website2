import {Injectable} from '@angular/core';
import {ServerCommunicationService} from '../server-communication.service';
import {Observable} from 'rxjs/Observable';
import {PostModel} from '../post/post.model';
import {TitleDescriptionModel} from "./titleDescription.model";
import {CategoryModel} from './category.model';
@Injectable()
export class CategoryService {
    private categories: CategoryModel[];

    constructor(private serverComm: ServerCommunicationService) {
        this.categories = serverComm.getAllCategories();
    }

    public getIdByName(name: string): number {
        const ret = this.categories.filter(category => category.slug === name)[0];
        return ret.id;
    }

    public getTitleBySlug(slug: string): TitleDescriptionModel {
        const ret: TitleDescriptionModel = new TitleDescriptionModel();
        const category = this.categories.filter(category => category.slug === slug)[0];
        ret.title = category.name;
        ret.description = category.description;
        return ret;
    }

    public getTitleById(id: number): TitleDescriptionModel {
        const ret: TitleDescriptionModel = new TitleDescriptionModel();
        const category = this.categories.filter(cat => cat.id === id)[0];
        ret.title = category.name;
        ret.description = category.description;
        return ret;
    }

    public getCategoryByName(name: string, page = 1): Observable<PostModel[]> {
        return this.serverComm.getPostsByCategory(this.getIdByName(name), page);
    }
}

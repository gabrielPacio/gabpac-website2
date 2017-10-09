import {LinkModel} from '../../global/link.model';

export class CommentModel {
    id: number;
    post: number;
    parent: number;
    author: number;
    author_name: string;
    author_url: string;
    date: Date;
    date_gmt: Date;
    content: object;
    link: string;
    status: string;
    type: string;
    author_avatar_urls: object;
    meta: Array<any>;
    _links: LinkModel;
    children: CommentModel[];

    constructor(values: object = {}) {
        Object.assign(this, values);
        this._links = new LinkModel(values['_links']);
    }
}

import {LinkModel} from "../global/link.model";

export class PostModel {
    id: number;
    date: Date;
    guid: Object;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Object;
    content: Object;
    excerpt: Object;
    autor: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: any[];
    categories: number[];
    tags: any[];
    _links: LinkModel;

    constructor(values: Object = {}) {
        Object.assign(this, values);
        this._links = new LinkModel(values['_links']);
    }
}

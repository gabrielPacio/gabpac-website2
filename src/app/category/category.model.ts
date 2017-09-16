import {LinkModel} from "../global/link.model";

export class CategoryModel {

  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  _links: LinkModel;

  constructor(value: Object = {}) {
    Object.assign(this, value);
    this._links = new LinkModel(value['_links']);
  }
}

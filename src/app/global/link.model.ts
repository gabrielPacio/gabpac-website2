export class LinkModel {
  self: Object[];
  collection: Object[];
  about: Object[];
  wp_post_type: Object[];
  curies: Object[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

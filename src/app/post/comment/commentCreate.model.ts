export class CommentCreateModel {
    author? : number;
    author_email: string;
    author_ip: string;
    author_name: string;
    author_url: string;
    author_user_agent: string;
    content: string
    date: Date;
    date_gmt: Date;
    parent: number;
    post: number;
    status: string;
    meta: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

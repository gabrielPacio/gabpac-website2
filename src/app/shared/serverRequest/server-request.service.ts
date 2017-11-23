import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, RequestOptionsArgs, Headers, Response} from '@angular/http';
import {PostModel} from '../../post/post.model';
import * as globals from './../../globals'

@Injectable()
export class ServerRequestService {

    private headers = new Headers({
        'Content-Type': 'application/json',
        'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
        'Cache-Control': 'no-cache'
    });

    private loadedPostsCache: PostModel[] = [];

    constructor(private http: Http) {}

    public getPostsByCategory(category: number, page = 1, perPage = 10): Observable<PostModel[]> {
        const url = `posts?categories=${category}&page=${page}&per_page=${perPage}`;
        return this.get(url)
            .map(res => {
                const ret = res.json().map(element => new PostModel(element));
                this.pushPost(ret);
                return ret;
            })
            .catch(this.handleError.bind(this));
    }

    private pushPost(posts: PostModel[]): void {
        posts.forEach(post => {
            const foundPost = this.loadedPostsCache.find(loadedPost => loadedPost.id === post.id);
            if (!foundPost) {
                this.loadedPostsCache.push(post);
            }
        })
    }

    private handleError(error: any): Observable<any> {
        console.log('An error have occurred - ', error);
        return error;
    }

    private get(url: string): Observable<Response> {
        url = globals.SITE_URL + url;
        const opt: RequestOptionsArgs = {};
        opt.headers = this.headers;
        return this.http.get(url, opt);
    }
}

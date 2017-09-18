import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {PostModel} from './post/post.model';
import * as globals from './globals';
import {CategoryModel} from "./category/category.model";

@Injectable()
export class ServerCommunicationService {

  constructor(private http: Http) { }

  public getAllPosts(page = 1): Observable<PostModel[]> {
      return this.http.get(globals.SITE_URL + 'posts?page=' + page)
        .map(res => res.json().map(element => new PostModel(element)))
        .catch(this.handleError);
  }

  public getPostsByCategory(category: number, page = 1): Observable<PostModel[]> {
    return this.http.get(globals.SITE_URL + 'posts?page=' + page + '&category=' + category)
      .map(res => res.json().map(element => new PostModel(element)))
      .catch(this.handleError);
  }

  public getPostByID(id: number): Observable<PostModel> {
    return this.http.get(globals.SITE_URL + 'posts/' + id)
      .map(res => new PostModel(res.json()))
      .catch(this.handleError);
  }

    public getPostBySlug(slug: string): Observable<PostModel> {
        return this.http.get(globals.SITE_URL + 'posts?slug=' + slug)
            .map(res => res.json().map(element => new PostModel(element))[0])
            .catch(this.handleError);
    }

  public getAllCategories(): Observable<CategoryModel[]> {
    return this.http.get(globals.SITE_URL + 'categories')
      .map(res => res.json().map(element => new CategoryModel(element)))
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.log('An error have occurred - ', error);
    return error;
  }

}

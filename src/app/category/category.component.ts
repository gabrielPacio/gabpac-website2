import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ServerCommunicationService} from '../server-communication.service';
import {PostModel} from '../post/post.model';
import {NavigationEnd, Router} from '@angular/router';
import {CategoryService} from './category.service';
import {SideNavigatorModel} from "../sideNavigator/sideNavigator.model";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {HeaderService} from "../header/header.service";
@Component({
    templateUrl: 'category.component.html',
    selector: 'blog-category-component',
    providers: [CategoryService]
})
export class CategoryComponent implements OnInit, OnChanges {

    @Input() categoryNumber: number;
    private slug: string;

    public isLoading: boolean = true;
    public posts: PostModel[];
    public postLinksSide: SideNavigatorModel[] = [];
    constructor(private serverComm: ServerCommunicationService, private router: Router, private categoryService: CategoryService,
                private headerService: HeaderService) {
        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.router.routerState.root.children[0].params['value']['id'])
            .subscribe((event) => {
                this.slug = event;
                this.loadCategoryPosts();
            });
    }

    private loadCategoryPosts() {
        if (this.router.routerState.root.children[0].snapshot.url[0].path !== 'category') {
            return;
        }
        this.categoryService.getCategoryByName(this.slug).subscribe(res => {
            this.isLoading = false;
            this.posts = res;
            this.createSideLinks();
            this.headerService.setTitle(this.categoryService.getTitleBySlug(this.slug));
        });
    }

    ngOnInit() {
        if (this.categoryNumber) {
            this.serverComm.getPostsByCategory(this.categoryNumber).subscribe(res => {
                this.posts = res;
            });
        }
    }

    ngOnChanges() {
        if (this.posts) {

            this.createSideLinks();
        }
    }

    private createSideLinks() {
        this.postLinksSide = this.posts.map(post => {
            const ret = new SideNavigatorModel();
            ret.title = post.title['rendered'];
            ret.linkName = post.slug;
            return ret;
        });
    }
}

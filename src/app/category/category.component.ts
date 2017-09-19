import {Component, Input, OnInit} from '@angular/core';
import {ServerCommunicationService} from '../server-communication.service';
import {PostModel} from '../post/post.model';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from './category.service';
@Component({
    templateUrl: 'category.component.html',
    selector: 'blog-category-component',
    providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

    @Input() categoryNumber: number;
    private slug: string;

    public posts: PostModel[];
    constructor(private serverComm: ServerCommunicationService, private route: ActivatedRoute, private categoryService: CategoryService) {
        if (this.route.params && this.route.params['value'] && this.route.params['value'].id) {
            this.slug = this.route.params['value'].id;

            this.categoryService.getCategoryByName(this.slug).subscribe(res => {
                //console.log('ON CATEGORY', res)
                this.posts = res;
            });
        }
    }

    ngOnInit() {
        if (this.categoryNumber) {
            this.serverComm.getPostsByCategory(this.categoryNumber).subscribe(res => {
                this.posts = res;
            });
        }
    }
}

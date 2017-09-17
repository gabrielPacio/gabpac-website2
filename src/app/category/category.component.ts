import {Component, Input, OnInit} from '@angular/core';
import {ServerCommunicationService} from '../server-communication.service';
import {PostModel} from '../post/post.model';
@Component({
    templateUrl: 'category.component.html',
    selector: 'blog-category-component'
})
export class CategoryComponent implements OnInit {

    @Input() categoryNumber: number;

    public posts: PostModel[];
    constructor(private serverComm: ServerCommunicationService) {}

    ngOnInit() {
        this.serverComm.getPostsByCategory(this.categoryNumber).subscribe(res => {
            this.posts = res;
            console.log(this.posts)
        });
    }
}

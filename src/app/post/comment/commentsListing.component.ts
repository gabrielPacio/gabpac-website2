import {Component, Input, OnChanges} from '@angular/core';
import {CommentModel} from './comment.model';

@Component({
    templateUrl: 'commentsListing.component.html',
    selector: 'blog-comments-listing'
})
export class CommentsListingComponent implements OnChanges {

    @Input() allComments: CommentModel[];
    @Input() parentNumber: number = 0;
    @Input() level: number = 0;
    constructor() {}

    ngOnChanges() {
        console.log('All!!!!!',this.allComments);
        if (!this.allComments) {
            return;
        }
        this.allComments.forEach(comment => {
            if (comment.parent !== this.parentNumber) {
                this.getCommentById(comment.parent).children.push(comment);
            }
        })
    }
    private getCommentById(id: number): CommentModel {
        return this.allComments.filter(comment => comment.id === id)[0];
    }
}

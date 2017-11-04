import {Component, Input} from '@angular/core';
import {CommentCreateModel} from "./commentCreate.model";
import {NgForm} from "@angular/forms";
import {ServerCommunicationService} from '../../server-communication.service';

@Component({
    templateUrl: 'commentCreate.component.html',
    selector: 'blog-comment-create'
})
export class CommentCreateComponent {

    @Input() parentId: number;
    @Input() postID: number;

    public model: CommentCreateModel;

    constructor(private serverComm: ServerCommunicationService) {
        this.model = new CommentCreateModel();
        this.model.parent = this.parentId;
        this.serverComm.getUserIP().subscribe(res => this.model.author_ip = res);
        this.model.author_user_agent = window.navigator.userAgent;
        this.model.date = new Date();
        this.model.post = this.postID;
    }

    onSubmit(commentForm: NgForm) {
        this.serverComm.postPostComment(this.model).subscribe(res => {
            console.log('RES', res);
        })
    }
}

import {Component} from "@angular/core";
import {CommentCreateModel} from "./commentCreate.model";
import {NgForm} from "@angular/forms";

@Component({
    templateUrl: 'commentCreate.component.html',
    selector: 'blog-comment-create'
})
export class CommentCreateComponent {

    public model: CommentCreateModel = new CommentCreateModel();

    constructor() {}

    onSubmit(commentForm: NgForm) {
        console.log(commentForm.value);
    }
}

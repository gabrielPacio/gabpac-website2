import {
    Component, ComponentFactoryResolver, ElementRef, Input, OnChanges, ViewChild,
    ViewContainerRef
} from '@angular/core';
import {CommentModel} from './comment.model';
import {CommentCreateComponent} from "./commentCreate.component";

@Component({
    templateUrl: 'comment.component.html',
    selector: 'blog-comment',
    entryComponents: [CommentCreateComponent]
})
export class CommentComponent implements OnChanges {

    @Input() comment: CommentModel;
    @Input() level: number = 0;
    @ViewChild('commentContent', {read: ElementRef}) commentContent: ElementRef;
    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef) {}

    ngOnChanges() {
        this.commentContent.nativeElement.innerHTML = this.comment.content['rendered'];
    }

    respond(e) {
        e.preventDefault();
        const factory = this.componentFactoryResolver.resolveComponentFactory(CommentCreateComponent);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.instance.postID = this.comment.post;
        ref.instance.parentId = this.comment.id;
    }
}

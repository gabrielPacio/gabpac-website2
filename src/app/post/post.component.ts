import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from "@angular/core";
import {ServerCommunicationService} from "../server-communication.service";
import {PostModel} from './post.model';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  templateUrl: 'post.component.html',
  selector: 'blog-post-component',
  styleUrls: ['post.component.scss']
})
export class PostComponent implements OnChanges {
    @Input() postId: number;
    @Input() postModel: PostModel;
    @ViewChild('content', {read: ElementRef}) content: ElementRef;
    public postContent: string;

    constructor(private serverComm: ServerCommunicationService, private route: ActivatedRoute) {}

    ngOnChanges(changes: SimpleChanges) {
        //console.log(this.route.params);
        if (!this.postModel) {
            this.serverComm.getPostByID(this.postId).subscribe(res => {
                this.postModel = res;
                this.setVars();
            });
        } else {
            this.setVars();
            console.log(this.postModel)
        }

    }

    private setVars(): void {
        if (!this.postModel.content) {
            return;
        }
        this.postContent = this.postModel.content['rendered'];
        this.content.nativeElement.innerHTML = this.postContent;
    }
}

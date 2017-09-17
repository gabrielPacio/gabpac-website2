import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from "@angular/core";
import {ServerCommunicationService} from "../server-communication.service";
import {PostModel} from './post.model';

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

    constructor(private serverComm: ServerCommunicationService) {}

    ngOnChanges(changes: SimpleChanges) {
        if (!this.postModel) {
            this.serverComm.getPostByID(this.postId).subscribe(res => {
                this.postModel = res;
                this.setVars();
            });
        } else {
          this.setVars();
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

import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from "@angular/core";
import {ServerCommunicationService} from "../server-communication.service";
import {PostModel} from './post.model';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: 'post.component.html',
  selector: 'blog-post-component',
  styleUrls: ['post.component.scss']
})
export class PostComponent implements OnChanges {
    @Input() postId: number;
    @Input() postModel: PostModel = new PostModel();
    @ViewChild('content', {read: ElementRef}) content: ElementRef;
    public postContent: string;
    private slug: string;

    constructor(private serverComm: ServerCommunicationService, private route: ActivatedRoute, private router: Router) {

        this.postModel.title = '';

        if (this.route.params && this.route.params['value'] && this.route.params['value'].id) {
            this.slug = this.route.params['value'].id;
            this.serverComm.getPostBySlug(this.slug).subscribe(res => {
                this.postModel = res;
                this.setVars();
            });
        }
    }

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

import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ServerCommunicationService} from "../server-communication.service";
import {PostModel} from './post.model';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: 'post.component.html',
  selector: 'blog-post-component',
  styleUrls: ['post.component.scss']
})
export class PostComponent implements OnChanges, OnInit {

    @Input() postModel: PostModel;
    @Input() isInitializeMinified: boolean = false;
    @ViewChild('content', {read: ElementRef}) content: ElementRef;

    public postContent: string;
    public isMinified: boolean;
    private slug: string;

    constructor(private serverComm: ServerCommunicationService, private route: ActivatedRoute) {

        if (this.route.params && this.route.params['value'] && this.route.params['value'].id) {
            this.slug = this.route.params['value'].id;
        }
    }

    private init() {
        if (this.postModel) {
            this.setVars();
        } else {
            this.serverComm.getPostBySlug(this.slug).subscribe(res => {
                this.postModel = res;
                this.setVars();
            });
        }
        this.isMinified = this.isInitializeMinified;
    }

    ngOnInit() {
        this.init();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.init();
    }

    private setVars(): void {
        if (!this.postModel) {
            return;
        }
        if (!this.postModel.content){
            return;
        }
        this.postContent = this.postModel.content['rendered'];
        this.content.nativeElement.innerHTML = this.postContent;
    }
}

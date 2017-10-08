import {AfterContentInit, Component, Input, OnChanges} from "@angular/core";
import {PostModel} from "../post.model";
import {ServerCommunicationService} from "../../server-communication.service";

@Component({
    templateUrl: 'navigatorBetweenPosts.component.html',
    selector: 'blog-navigator-between-posts'
})
export class NavigationBetweenPostsComponent implements OnChanges {

    @Input() post: PostModel;
    public nextPost: PostModel;
    public previousPost: PostModel;
    constructor(private serverComm: ServerCommunicationService) {}

    ngOnChanges() {
        if (!this.post){
            return;
        }
        this.serverComm.getPostNext(this.post.date, this.post.categories[0]).subscribe(res => {
            this.nextPost = res;
        });
        this.serverComm.getPostPrevious(this.post.date, this.post.categories[0]).subscribe(res => {
            this.previousPost = res;
        });
    }
}

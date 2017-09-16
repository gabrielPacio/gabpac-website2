import {Component, Input, OnChanges, SimpleChanges, ViewContainerRef} from "@angular/core";
import {ServerCommunicationService} from "../server-communication.service";

@Component({
  templateUrl: 'post.component.html',
  selector: 'blog-post-component'
})
export class PostComponent implements OnChanges {
  @Input() postId: number;
  public postContent: string;

  constructor(private serverComm: ServerCommunicationService, private vcr: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this.serverComm.getPostByID(this.postId).subscribe(res => {
      this.postContent = res.content['rendered'];
    });
  }
}

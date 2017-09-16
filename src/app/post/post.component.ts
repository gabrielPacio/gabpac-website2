import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from "@angular/core";
import {ServerCommunicationService} from "../server-communication.service";

@Component({
  templateUrl: 'post.component.html',
  selector: 'blog-post-component',
  styleUrls: ['post.component.scss']
})
export class PostComponent implements OnChanges {
  @Input() postId: number;
  @ViewChild('content', {read: ElementRef}) content: ElementRef;
  public postContent: string;

  constructor(private serverComm: ServerCommunicationService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.serverComm.getPostByID(this.postId).subscribe(res => {
      console.log(res);
      if (res.content) {
        this.postContent = res.content['rendered'];
        this.content.nativeElement.innerHTML = this.postContent;
      }
    });
  }
}

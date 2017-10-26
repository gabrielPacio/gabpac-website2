import {Component, OnInit} from '@angular/core';
import {PostModel} from '../post/post.model';
import {ServerCommunicationService} from '../server-communication.service';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public lastPosts: PostModel[];

    constructor(private serverComm: ServerCommunicationService) {}

    ngOnInit() {
        this.serverComm.getAllPosts(1,3).subscribe(res => {
            this.lastPosts = res;
        })
    }

}

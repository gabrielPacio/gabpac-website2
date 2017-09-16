import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from '../server-communication.service'

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  constructor(private serverCommunication: ServerCommunicationService) { }

  ngOnInit() {
    /*this.serverCommunication.getAllPostsArray().subscribe(res => {
      res.forEach(r => console.log( r.content['rendered']));
    });*/

    this.serverCommunication.getPostByID(51).subscribe(res => {
      console.log(res);
    });
  }

}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ServerCommunicationService} from '../server-communication.service';
import {HeaderService} from '../header/header.service';
import {TitleDescriptionModel} from '../category/titleDescription.model';

@Component({
    selector: 'blog-about-page',
    templateUrl: './aboutPage.component.html'
})
export class AboutPageComponent implements OnInit {

    @ViewChild('content', {read: ElementRef}) content: ElementRef;
    constructor(private serverComm: ServerCommunicationService, private headerService: HeaderService) {

    }

    ngOnInit() {
        const titleDescription: TitleDescriptionModel = new TitleDescriptionModel();
        titleDescription.title = 'Autor';
        titleDescription.description = 'O autor, humildemente escrevendo sobre si mesmo';
        this.headerService.setTitle(titleDescription);
        this.serverComm.getAbout().subscribe(res => {
            this.content.nativeElement.innerHTML = res.content['rendered'];
        });
    }
}

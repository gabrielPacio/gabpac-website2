import {Component, Input} from '@angular/core';
import {ServerCommunicationService} from '../server-communication.service';

@Component({
  selector: 'blog-main-menu-component',
  templateUrl: 'main-menu.component.html'
})
export class MainMenuComponent {
    public tooltips: Array<string> = [];
    @Input() subtitle: string = '';
    constructor(private serverComm: ServerCommunicationService) {
        this.tooltips[0] = 'Página inicial';
        this.tooltips[1] = 'O autor humildemente escreve sobre si mesmo';
        this.tooltips[2] = serverComm.getAllCategories().filter(cat => cat.slug === 'arcimboldo')[0].description;
        this.tooltips[3] = serverComm.getAllCategories().filter(cat => cat.slug === 'desoriente')[0].description;
        this.tooltips[4] = serverComm.getAllCategories().filter(cat => cat.slug === 'microhistorinhas')[0].description;
        this.tooltips[5] = 'Contacte o autor';
    }
}

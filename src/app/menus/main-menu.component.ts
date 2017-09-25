import {Component, Input} from '@angular/core';

@Component({
  selector: 'blog-main-menu-component',
  templateUrl: 'main-menu.component.html'
})
export class MainMenuComponent {

    @Input() subtitle: string = '';
  constructor() {}
}

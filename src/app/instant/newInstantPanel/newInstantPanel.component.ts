import {Component} from "@angular/core";

import {InstantService} from "../instant.service";
import {Instant} from "../instant.model";
@Component({
  selector: 'tm-new-instant-panel',
  templateUrl: './newInstantPanel.component.html',
  styleUrls: ['./newInstantPanel.component.css']
})
export class NewInstantPanelComponent {

  public newInstant = new Instant();

  constructor(private instantService: InstantService) {}

  addInstant() {
    this.instantService.setInstant(this.newInstant);
  }
}

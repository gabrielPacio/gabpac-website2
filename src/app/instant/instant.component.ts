import {Component} from "@angular/core";
import {InstantService} from "./instant.service";
import {Instant} from "./instant.model";
@Component({
  selector: 'tm-instant',
  templateUrl: './instant.component.html',
  styleUrls: ['./instant.component.css']
})
export class InstantComponent {

  public newInstant = new Instant();

  constructor(private instantService: InstantService) {}

  addInstant() {
    this.instantService.setInstant(this.newInstant);
  }
}

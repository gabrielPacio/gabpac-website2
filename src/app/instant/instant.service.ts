import {Injectable} from "@angular/core";
import {Instant} from "./instant.model";
import {Dependency} from "../dependency.model";

@Injectable()
export class InstantService {

  private instants: Instant[] = [];
  private idCount = 0;

  getInstants(): Instant[] {
    return this.instants;
  }

  setInstant(newInstant: Instant): void {
    this.idCount ++;
    this.instants.push(newInstant);
    console.log(this.instants);
  }

  getInstant(id: number): Instant {
    return this.instants.filter(instant => instant.id === id)[0];
  }

  deleteInstant(id: number): void {
    this.instants = this.instants.filter(instant => instant.id !== id);
  }

  updateInstant(id: number, values: Object = {}): Instant {
    const instant = this.getInstant(id);
    if (!instant) {
      return null;
    }
    Object.assign(instant, values)
    return instant;
  }
}

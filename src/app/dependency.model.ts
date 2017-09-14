import {Instant} from "./instant/instant.model";

export class Dependency {
  initialInstant: Instant;
  finalInstant: Instant;
  duration: number; // in milliseconds;
  isResolved: boolean;
  isOverdefined: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

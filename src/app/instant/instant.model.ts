import {Dependency} from "../dependency.model";

export class Instant {
  id: number;
  name: string;
  description: string;
  isFixed: boolean;
  isResolved: boolean;
  date: Date;
  calculatedDate: Date;
  dependencies: Dependency[];
}

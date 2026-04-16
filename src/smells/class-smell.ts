import type { BaseClass } from "../entities/class.js";
import type { BaseClassMetric } from "../metrics/class-metric.js";

export class BaseClassSmell {
  constructor(
    protected readonly classObj: BaseClass,
    protected readonly metric: BaseClassMetric
  ) {}

  isLargeClass(): boolean {
    return this.classObj.getLines().length > 300 || this.metric.getNom() > 15;
  }

  isLazyClass(): boolean {
    return this.metric.getNom() <= 1 && this.classObj.getLines().length < 40;
  }
}

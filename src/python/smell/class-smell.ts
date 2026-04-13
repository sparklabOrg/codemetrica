import { PythonClass } from "../entities/class.js";
import { PythonFunction } from "../entities/function.js";
import { ClassMetric } from "../metric/class-metric.js";
import { MethodMetric } from "../metric/method-metric.js";

export class ClassSmell {
  private readonly metric: ClassMetric;

  constructor(private readonly classObj: PythonClass) {
    this.metric = new ClassMetric(classObj);
  }

  isGodClass(): boolean {
    return (
      this.metric.getNom() > 20 ||
      this.classObj.getLines().length > 1000 ||
      this.metric.getCbo() > 10 ||
      this.metric.getLcom() > 0.8
    );
  }

  isDataClass(): boolean {
    const methods = this.classObj.getMethods();
    const hasComplexBehavior = methods.some((method) => {
      const methodMetric = new MethodMetric(method as PythonFunction);
      return methodMetric.getCc() > 5 || methodMetric.getNbd() > 3;
    });

    return methods.length <= 5 && !hasComplexBehavior;
  }

  isBrainClass(): boolean {
    const totalCc = this.classObj
      .getMethods()
      .map((method) => new MethodMetric(method as PythonFunction).getCc())
      .reduce((sum, value) => sum + value, 0);

    return totalCc > 50;
  }

  isFeatureEnvy(): boolean {
    return false;
  }

  isShotgunSurgery(): boolean {
    return false;
  }

  getSmells(): Record<string, boolean> {
    return {
      god_class: this.isGodClass(),
      data_class: this.isDataClass(),
      brain_class: this.isBrainClass(),
      feature_envy: this.isFeatureEnvy(),
      shotgun_surgery: this.isShotgunSurgery()
    };
  }
}

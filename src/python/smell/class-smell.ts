import { PythonClass } from "../entities/class.js";
import { PythonFunction } from "../entities/function.js";
import { ClassMetric } from "../metric/class-metric.js";
import { MethodMetric } from "../metric/method-metric.js";
import { BaseClassSmell } from "../../smells/class-smell.js";

export class ClassSmell extends BaseClassSmell {
  private readonly pythonMetric: ClassMetric;

  constructor(classObj: PythonClass) {
    const metric = new ClassMetric(classObj);
    super(classObj, metric);
    this.pythonMetric = metric;
  }

  isGodClass(): boolean {
    return (
      this.metric.getNom() > 20 ||
      this.classObj.getLines().length > 1000 ||
      this.pythonMetric.getCbo() > 10 ||
      this.pythonMetric.getLcom() > 0.8
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

  isComplexClass(): boolean {
    return this.pythonMetric.getWmc() > 40 || this.pythonMetric.getAverageCc() > 7;
  }

  isBrainClass(): boolean {
    const totalCc = this.classObj
      .getMethods()
      .map((method) => new MethodMetric(method as PythonFunction).getCc())
      .reduce((sum, value) => sum + value, 0);

    return totalCc > 50;
  }

  isFeatureEnvy(): boolean {
    const methods = this.classObj.getMethods();
    if (methods.length === 0) {
      return false;
    }

    const localMethodNames = new Set(methods.map((method) => method.getName()));

    const foreignCallCount = methods
      .flatMap((method) => (method as PythonFunction).getRemoteCalls())
      .filter((callName) => !localMethodNames.has(callName) && !callName.startsWith("_"))
      .length;

    return foreignCallCount / methods.length > 3;
  }

  isShotgunSurgery(): boolean {
    return this.pythonMetric.getRfc() > 30 && this.pythonMetric.getCbo() > 3;
  }

  getSmells(): Record<string, boolean> {
    return {
      god_class: this.isGodClass(),
      data_class: this.isDataClass(),
      large_class: this.isLargeClass(),
      complex_class: this.isComplexClass(),
      lazy_class: this.isLazyClass(),
      brain_class: this.isBrainClass(),
      feature_envy: this.isFeatureEnvy(),
      shotgun_surgery: this.isShotgunSurgery()
    };
  }
}

import { PythonFunction } from "../entities/function.js";
import { MethodMetric } from "../metric/method-metric.js";

export class MethodSmell {
  private readonly metric: MethodMetric;

  constructor(private readonly methodObj: PythonFunction) {
    this.metric = new MethodMetric(methodObj);
  }

  isLongMethod(): boolean {
    return this.metric.getLoc() > 50 || this.metric.getCc() > 10;
  }

  isComplexMethod(): boolean {
    return this.metric.getCc() > 15 || this.metric.getNbd() > 4;
  }

  isLongParameterList(): boolean {
    return this.metric.getParameters() > 5;
  }

  isBrainMethod(): boolean {
    return (
      this.metric.getCc() > 20 ||
      this.metric.getNbd() > 5 ||
      this.metric.getHalsteadBigN1() > 50 ||
      this.metric.getHalsteadBigN2() > 50
    );
  }

  isDuplicateCode(): boolean {
    return false;
  }

  isSwitchStatement(): boolean {
    const hasSwitch = (node: { type: string; children: Array<{ type: string; children: unknown[] }> }): boolean => {
      if (node.type === "match_statement") {
        return true;
      }

      return node.children.some((child) => hasSwitch(child as never));
    };

    return hasSwitch(this.methodObj["_node"] as never);
  }

  getSmells(): Record<string, boolean> {
    return {
      long_method: this.isLongMethod(),
      complex_method: this.isComplexMethod(),
      long_parameter_list: this.isLongParameterList(),
      brain_method: this.isBrainMethod(),
      duplicate_code: this.isDuplicateCode(),
      switch_statement: this.isSwitchStatement()
    };
  }
}

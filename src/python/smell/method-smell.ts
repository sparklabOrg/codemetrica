import { PythonFunction } from "../entities/function.js";
import { MethodMetric } from "../metric/method-metric.js";
import { BaseMethodSmell } from "../../smells/method-smell.js";

export class MethodSmell extends BaseMethodSmell {
  private readonly pythonMetric: MethodMetric;
  private readonly pythonMethodObj: PythonFunction;

  constructor(methodObj: PythonFunction) {
    const metric = new MethodMetric(methodObj);
    super(methodObj, metric);
    this.pythonMetric = metric;
    this.pythonMethodObj = methodObj;
  }

  isLongMethod(): boolean {
    return this.pythonMetric.getLoc() > 50 || this.pythonMetric.getCc() > 10;
  }

  isComplexMethod(): boolean {
    return this.pythonMetric.getCc() > 15 || this.pythonMetric.getNbd() > 4 || this.pythonMetric.getNpath() > 200;
  }

  isLongParameterList(): boolean {
    return this.pythonMetric.getParameters() > 5;
  }

  isBrainMethod(): boolean {
    return (
      this.pythonMetric.getCc() > 20 ||
      this.pythonMetric.getNbd() > 5 ||
      this.pythonMetric.getHalsteadBigN1() > 50 ||
      this.pythonMetric.getHalsteadBigN2() > 50 ||
      this.pythonMetric.getDecisionDensity() > 0.6 ||
      this.pythonMetric.getHalsteadEffort() > 5000
    );
  }

  isMessageChain(): boolean {
    const hasNestedAttribute = (node: { type: string; children: Array<{ type: string; children: unknown[] }> }): boolean => {
      if (node.type === "attribute") {
        const nested = node.children.some((child) => child.type === "attribute");
        if (nested) {
          return true;
        }
      }

      return node.children.some((child) => hasNestedAttribute(child as never));
    };

    return hasNestedAttribute(this.pythonMethodObj["_node"] as never);
  }

  isSwitchStatement(): boolean {
    const hasSwitch = (node: { type: string; children: Array<{ type: string; children: unknown[] }> }): boolean => {
      if (node.type === "match_statement") {
        return true;
      }

      return node.children.some((child) => hasSwitch(child as never));
    };

    return hasSwitch(this.pythonMethodObj["_node"] as never);
  }

  getSmells(): Record<string, boolean> {
    return {
      long_method: this.isLongMethod(),
      complex_method: this.isComplexMethod(),
      long_parameter_list: this.isLongParameterList(),
      brain_method: this.isBrainMethod(),
      duplicate_code: this.isDuplicateCode(),
      switch_statement: this.isSwitchStatement(),
      message_chain: this.isMessageChain()
    };
  }
}

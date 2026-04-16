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
    return this.metric.getCc() > 15 || this.metric.getNbd() > 4 || this.metric.getNpath() > 200;
  }

  isLongParameterList(): boolean {
    return this.metric.getParameters() > 5;
  }

  isBrainMethod(): boolean {
    return (
      this.metric.getCc() > 20 ||
      this.metric.getNbd() > 5 ||
      this.metric.getHalsteadBigN1() > 50 ||
      this.metric.getHalsteadBigN2() > 50 ||
      this.metric.getDecisionDensity() > 0.6 ||
      this.metric.getHalsteadEffort() > 5000
    );
  }

  isDuplicateCode(): boolean {
    const statements = this.methodObj
      .getStatements()
      .map((statement) => statement.trim())
      .filter((statement) => statement.length > 0);

    if (statements.length < 6) {
      return false;
    }

    const frequencies = new Map<string, number>();
    for (const statement of statements) {
      frequencies.set(statement, (frequencies.get(statement) ?? 0) + 1);
    }

    const duplicatedStatements = Array.from(frequencies.values()).filter((count) => count > 1).length;
    return duplicatedStatements / statements.length > 0.25;
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

    return hasNestedAttribute(this.methodObj["_node"] as never);
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
      switch_statement: this.isSwitchStatement(),
      message_chain: this.isMessageChain()
    };
  }
}

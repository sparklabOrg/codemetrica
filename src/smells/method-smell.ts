import type { BaseFunction } from "../entities/function.js";
import type { BaseMethodMetric } from "../metrics/method-metric.js";

export class BaseMethodSmell {
  constructor(
    protected readonly methodObj: BaseFunction,
    protected readonly metric: BaseMethodMetric
  ) {}

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
}

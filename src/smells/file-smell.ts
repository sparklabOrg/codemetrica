import type { BaseSource } from "../entities/source.js";
import type { BaseFileMetric } from "../metrics/file-metric.js";

export class BaseFileSmell {
  constructor(
    protected readonly sourceObj: BaseSource,
    protected readonly metric: BaseFileMetric
  ) {}

  isLargeFile(): boolean {
    return this.metric.getLoc() > 1000 || this.metric.getNoc() > 5 || this.metric.getNom() > 50;
  }

  isDuplicateFile(): boolean {
    const normalizedLines = this.sourceObj
      .getLines()
      .map((line) => line.trim())
      .filter((line) => line.length > 20);

    if (normalizedLines.length < 20) {
      return false;
    }

    const seen = new Set<string>();
    let duplicates = 0;
    for (const line of normalizedLines) {
      if (seen.has(line)) {
        duplicates += 1;
      } else {
        seen.add(line);
      }
    }

    return duplicates / normalizedLines.length > 0.2;
  }
}

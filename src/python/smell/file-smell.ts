import { PythonSource } from "../entities/source.js";
import { PythonFunction } from "../entities/function.js";
import { FileMetric } from "../metric/file-metric.js";

export class FileSmell {
  private readonly metric: FileMetric;

  constructor(private readonly sourceObj: PythonSource) {
    this.metric = new FileMetric(sourceObj);
  }

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

  isFeatureEnvyFile(): boolean {
    const allCalls = this.sourceObj
      .getMethods()
      .flatMap((method) => (method as PythonFunction).getRemoteCalls());

    if (allCalls.length === 0) {
      return false;
    }

    return allCalls.length / Math.max(this.metric.getNom(), 1) > 5;
  }

  isShotgunSurgeryFile(): boolean {
    return this.metric.getNofm() > 12 && this.metric.getNom() > 20;
  }

  isDivergentChangeFile(): boolean {
    return this.metric.getNoc() > 4 && this.metric.getCommentDensity() < 0.03 && this.metric.getNom() > 30;
  }

  getSmells(): Record<string, boolean> {
    return {
      large_file: this.isLargeFile(),
      duplicate_file: this.isDuplicateFile(),
      feature_envy_file: this.isFeatureEnvyFile(),
      shotgun_surgery_file: this.isShotgunSurgeryFile(),
      divergent_change_file: this.isDivergentChangeFile()
    };
  }
}

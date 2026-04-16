import { PythonSource } from "../entities/source.js";
import { PythonFunction } from "../entities/function.js";
import { FileMetric } from "../metric/file-metric.js";
import { BaseFileSmell } from "../../smells/file-smell.js";

export class FileSmell extends BaseFileSmell {
  private readonly pythonMetric: FileMetric;

  constructor(sourceObj: PythonSource) {
    const metric = new FileMetric(sourceObj);
    super(sourceObj, metric);
    this.pythonMetric = metric;
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
    return this.pythonMetric.getNofm() > 12 && this.metric.getNom() > 20;
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

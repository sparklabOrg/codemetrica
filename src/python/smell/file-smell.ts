import { PythonSource } from "../entities/source.js";
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
    return false;
  }

  isFeatureEnvyFile(): boolean {
    return false;
  }

  isShotgunSurgeryFile(): boolean {
    return false;
  }

  isDivergentChangeFile(): boolean {
    return false;
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

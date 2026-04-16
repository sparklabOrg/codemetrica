import type { BaseSource } from "../entities/source.js";

export abstract class BaseFileMetric {
  constructor(protected readonly sourceObj: BaseSource) {}

  getLoc(): number {
    return this.sourceObj.getLines().length;
  }

  getKloc(): number {
    return this.getLoc() / 1000;
  }

  getSloc(): number {
    return this.sourceObj.getLines().filter((line) => line.trim()).length;
  }

  getCloc(): number {
    return this.sourceObj.getLines().filter((line) => line.trim().startsWith("#")).length;
  }

  getCommentDensity(): number {
    const sloc = this.getSloc();
    if (sloc === 0) {
      return 0;
    }

    return this.getCloc() / sloc;
  }

  getNoc(): number {
    return this.sourceObj.getClasses().length;
  }

  getNom(): number {
    return this.sourceObj.getMethods().length;
  }
}
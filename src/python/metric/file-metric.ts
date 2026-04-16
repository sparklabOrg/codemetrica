import type { TSNode } from "../../types.js";
import { PythonSource } from "../entities/source.js";
import { BaseFileMetric } from "../../metrics/file-metric.js";

export class FileMetric extends BaseFileMetric {
  private readonly node: TSNode;

  constructor(sourceObj: PythonSource) {
    super(sourceObj);
    this.node = sourceObj.tree.rootNode;
  }

  getNof(): number {
    const countFunctions = (node: TSNode): number => {
      let count = 0;
      if (node.type === "function_definition") {
        count += 1;
      }

      for (const child of node.children) {
        count += countFunctions(child);
      }

      return count;
    };

    return countFunctions(this.node);
  }

  getNofm(): number {
    const countImports = (node: TSNode): number => {
      let count = 0;
      if (["import_statement", "import_from_statement"].includes(node.type)) {
        count += 1;
      }

      for (const child of node.children) {
        count += countImports(child);
      }

      return count;
    };

    return countImports(this.node);
  }
}

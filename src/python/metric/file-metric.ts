import type { TSNode } from "../../types.js";
import { PythonSource } from "../entities/source.js";

export class FileMetric {
  private readonly node: TSNode;

  constructor(private readonly sourceObj: PythonSource) {
    this.node = sourceObj.tree.rootNode;
  }

  getLoc(): number {
    return this.sourceObj.getLines().length;
  }

  getSloc(): number {
    return this.sourceObj.getLines().filter((line) => line.trim()).length;
  }

  getCloc(): number {
    return this.sourceObj.getLines().filter((line) => line.trim().startsWith("#")).length;
  }

  getNoc(): number {
    return this.sourceObj.getClasses().length;
  }

  getNom(): number {
    return this.sourceObj.getMethods().length;
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

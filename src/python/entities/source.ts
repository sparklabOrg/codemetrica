import type { TSNode } from "../../types.js";
import { BaseSource } from "../../entities/source.js";
import { BaseClass } from "../../entities/class.js";
import { BaseFunction } from "../../entities/function.js";
import { nodeText } from "../../language/query.js";
import { PythonClass } from "./class.js";
import { PythonFunction } from "./function.js";

export class PythonSource extends BaseSource {
  getClasses(): BaseClass[] {
    return this.adapter
      .getClassNodes(this.tree.rootNode)
      .map((node) => new PythonClass(node, this.code, this.adapter));
  }

  getFunctions(): BaseFunction[] {
    return this.adapter
      .getTopLevelFunctionNodes(this.tree.rootNode)
      .map((node) => new PythonFunction(node, this.code, this.adapter));
  }

  getImports(): string[] {
    return this.adapter.getImportNodes(this.tree.rootNode).map((node) => nodeText(node, this.code));
  }

  protected extractStatementNodes(): TSNode[] {
    return this.adapter.getStatementNodes(this.tree.rootNode);
  }
}

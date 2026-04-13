import type { TSNode } from "../../types.js";
import { BaseClass } from "../../entities/class.js";
import { BaseFunction } from "../../entities/function.js";
import { nodeText } from "../../utils/query.js";
import { PythonFunction } from "./function.js";

export class PythonClass extends BaseClass {
  getName(): string {
    const nameNode = this.adapter.getNameNode(this.node);
    return nameNode ? nodeText(nameNode, this.sourceCode) : super.getName();
  }

  getMethods(): BaseFunction[] {
    return this.adapter
      .getMethodNodes(this.node)
      .map((node) => new PythonFunction(node, this.sourceCode, this.adapter));
  }

  protected extractStatementNodes(): TSNode[] {
    return this.adapter.getStatementNodes(this.node);
  }
}

import type { TSNode } from "../../types.js";
import { BaseClass } from "../../entities/class.js";
import { BaseFunction } from "../../entities/function.js";
import { nodeText } from "../../language/query.js";
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

  getFields(): string[] {
    return this.adapter.getFieldNodes(this.node).map((node) => nodeText(node, this.sourceCode));
  }

  getSuperclasses(): string[] {
    return this.adapter.getSuperclassNodes(this.node).map((node) => nodeText(node, this.sourceCode));
  }

  getDecorators(): string[] {
    return this.adapter.getDecoratorNodes(this.node).map((decoratorNode) => {
      const expr = decoratorNode.namedChildren[0];
      return expr ? nodeText(expr, this.sourceCode) : nodeText(decoratorNode, this.sourceCode).replace(/^@/, "").trim();
    });
  }

  protected extractStatementNodes(): TSNode[] {
    return this.adapter.getStatementNodes(this.node);
  }
}

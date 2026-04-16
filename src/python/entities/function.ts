import type { TSNode } from "../../types.js";
import { BaseFunction } from "../../entities/function.js";
import { nodeText } from "../../language/query.js";

export class PythonFunction extends BaseFunction {
  getName(): string {
    const nameNode = this.adapter.getNameNode(this.node);
    return nameNode ? nodeText(nameNode, this.sourceCode) : super.getName();
  }

  getParameters(): number {
    return this.adapter.getParameterCount(this.node);
  }

  getRemoteCalls(): string[] {
    return this.adapter.getRemoteCallNames(this.node, this.sourceCode);
  }

  getDocstring(): string | null {
    const docNode = this.adapter.getDocstringNode(this.node);
    return docNode ? nodeText(docNode, this.sourceCode) : null;
  }

  getDecorators(): string[] {
    return this.adapter.getDecoratorNodes(this.node).map((decoratorNode) => {
      const expr = decoratorNode.namedChildren[0];
      return expr ? nodeText(expr, this.sourceCode) : nodeText(decoratorNode, this.sourceCode).replace(/^@/, "").trim();
    });
  }

  getReturnType(): string | null {
    const typeNode = this.adapter.getReturnTypeNode(this.node);
    return typeNode ? nodeText(typeNode, this.sourceCode) : null;
  }

  getLocalVariables(): string[] {
    return this.adapter.getLocalVariableNodes(this.node).map((node) => nodeText(node, this.sourceCode));
  }

  getNestedFunctions(): BaseFunction[] {
    return this.adapter
      .getNestedFunctionNodes(this.node)
      .map((node) => new PythonFunction(node, this.sourceCode, this.adapter));
  }

  protected extractStatementNodes(): TSNode[] {
    return this.adapter.getStatementNodes(this.node);
  }
}

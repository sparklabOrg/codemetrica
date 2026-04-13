import type { TSNode } from "../../types.js";
import { BaseFunction } from "../../entities/function.js";
import { nodeText } from "../../utils/query.js";

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

  protected extractStatementNodes(): TSNode[] {
    return this.adapter.getStatementNodes(this.node);
  }
}

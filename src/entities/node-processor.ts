import type { TSNode } from "../types.js";
import { nodeText } from "../utils/query.js";

export abstract class NodeProcessor {
  protected abstract get node(): TSNode;
  protected abstract get sourceCode(): string;
  protected abstract extractStatementNodes(): TSNode[];

  getStatements(): string[] {
    return this.extractStatementNodes().map((node) => nodeText(node, this.sourceCode));
  }
}

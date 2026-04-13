import type { TSNode } from "../types.js";
import { NodeProcessor } from "./node-processor.js";
import { nodeText } from "../utils/query.js";
import type { LanguageAdapter } from "../language/adapter.js";

export abstract class BaseFunction extends NodeProcessor {
  constructor(
    protected readonly _node: TSNode,
    protected readonly _sourceCode: string,
    protected readonly _adapter: LanguageAdapter
  ) {
    super();
  }

  protected get node(): TSNode {
    return this._node;
  }

  protected get sourceCode(): string {
    return this._sourceCode;
  }

  protected get adapter(): LanguageAdapter {
    return this._adapter;
  }

  getName(): string {
    return nodeText(this.node, this.sourceCode);
  }

  getLines(): string[] {
    return nodeText(this.node, this.sourceCode).split(/\r?\n/);
  }
}

import type { TSTree, TSNode } from "../types.js";
import { NodeProcessor } from "./node-processor.js";
import { BaseClass } from "./class.js";
import { BaseFunction } from "./function.js";
import type { LanguageAdapter } from "../language/adapter.js";

export abstract class BaseSource extends NodeProcessor {
  constructor(
    protected readonly _code: string,
    protected readonly _tree: TSTree,
    protected readonly _adapter: LanguageAdapter,
    readonly path?: string
  ) {
    super();
  }

  protected get node(): TSNode {
    return this._tree.rootNode;
  }

  protected get sourceCode(): string {
    return this._code;
  }

  get code(): string {
    return this._code;
  }

  get tree(): TSTree {
    return this._tree;
  }

  protected get adapter(): LanguageAdapter {
    return this._adapter;
  }

  getLines(): string[] {
    return this._code.split(/\r?\n/);
  }

  abstract getClasses(): BaseClass[];
  abstract getFunctions(): BaseFunction[];
  abstract getImports(): string[];

  getMethods(): BaseFunction[] {
    return this.getClasses().flatMap((classObj) => classObj.getMethods());
  }
}

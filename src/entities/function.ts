import { BaseNode } from "./node.js";

export abstract class BaseFunction extends BaseNode {
  abstract getDocstring(): string | null;
  abstract getDecorators(): string[];
  abstract getReturnType(): string | null;
  abstract getLocalVariables(): string[];
  abstract getNestedFunctions(): BaseFunction[];
}

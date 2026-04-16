import { BaseNode } from "./node.js";
import { BaseFunction } from "./function.js";

export abstract class BaseClass extends BaseNode {
  abstract getMethods(): BaseFunction[];
  abstract getFields(): string[];
  abstract getSuperclasses(): string[];
  abstract getDecorators(): string[];
}

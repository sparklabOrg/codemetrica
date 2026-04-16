import type { TSNode } from "../types.js";

export interface LanguageAdapter {
  readonly id: string;
  readonly language: unknown;

  getClassNodes(rootNode: TSNode): TSNode[];
  getTopLevelFunctionNodes(rootNode: TSNode): TSNode[];
  getMethodNodes(classNode: TSNode): TSNode[];
  getStatementNodes(node: TSNode): TSNode[];
  getNameNode(node: TSNode): TSNode | null;
  getParameterCount(functionNode: TSNode): number;
  getRemoteCallNames(functionNode: TSNode, sourceCode: string): string[];

  getFieldNodes(classNode: TSNode): TSNode[];
  getSuperclassNodes(classNode: TSNode): TSNode[];
  getDecoratorNodes(node: TSNode): TSNode[];
  getImportNodes(rootNode: TSNode): TSNode[];
  getDocstringNode(node: TSNode): TSNode | null;
  getReturnTypeNode(functionNode: TSNode): TSNode | null;
  getLocalVariableNodes(functionNode: TSNode): TSNode[];
  getNestedFunctionNodes(functionNode: TSNode): TSNode[];
}

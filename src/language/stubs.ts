import type { TSNode } from "../types.js";
import type { LanguageAdapter } from "./adapter.js";

abstract class UnsupportedLanguageAdapter implements LanguageAdapter {
  abstract readonly id: string;

  get language(): unknown {
    throw new Error(`Language '${this.id}' is not implemented yet.`);
  }

  getClassNodes(_rootNode: TSNode): TSNode[] {
    return [];
  }

  getTopLevelFunctionNodes(_rootNode: TSNode): TSNode[] {
    return [];
  }

  getMethodNodes(_classNode: TSNode): TSNode[] {
    return [];
  }

  getStatementNodes(_node: TSNode): TSNode[] {
    return [];
  }

  getNameNode(_node: TSNode): TSNode | null {
    return null;
  }

  getParameterCount(_functionNode: TSNode): number {
    return 0;
  }

  getRemoteCallNames(_functionNode: TSNode, _sourceCode: string): string[] {
    return [];
  }

  getFieldNodes(_classNode: TSNode): TSNode[] {
    return [];
  }

  getSuperclassNodes(_classNode: TSNode): TSNode[] {
    return [];
  }

  getDecoratorNodes(_node: TSNode): TSNode[] {
    return [];
  }

  getImportNodes(_rootNode: TSNode): TSNode[] {
    return [];
  }

  getDocstringNode(_node: TSNode): TSNode | null {
    return null;
  }

  getReturnTypeNode(_functionNode: TSNode): TSNode | null {
    return null;
  }

  getLocalVariableNodes(_functionNode: TSNode): TSNode[] {
    return [];
  }

  getNestedFunctionNodes(_functionNode: TSNode): TSNode[] {
    return [];
  }
}

export class JavaLanguageAdapter extends UnsupportedLanguageAdapter {
  // TODO: Implement Java tree-sitter queries.
  readonly id = "java";
}

import Python from "tree-sitter-python";
import type { TSNode } from "../types.js";
import { captureNodes, nodeText, runQuery } from "../utils/query.js";
import type { LanguageAdapter } from "../language/adapter.js";

export class PythonLanguageAdapter implements LanguageAdapter {
  readonly id = "python";
  readonly language: unknown = Python;

  getClassNodes(rootNode: TSNode): TSNode[] {
    const captures = runQuery(
      this.language,
      rootNode,
      `
      (class_definition
        body: (block)
      ) @class
    `
    );

    return captureNodes(captures, "class");
  }

  getTopLevelFunctionNodes(rootNode: TSNode): TSNode[] {
    const captures = runQuery(
      this.language,
      rootNode,
      `
      (module (function_definition) @function)
    `
    );

    return captureNodes(captures, "function");
  }

  getMethodNodes(classNode: TSNode): TSNode[] {
    const captures = runQuery(
      this.language,
      classNode,
      `
      (class_definition
        body: (block
          (function_definition) @method
        )
      )
    `
    );

    return captureNodes(captures, "method");
  }

  getStatementNodes(node: TSNode): TSNode[] {
    const captures = runQuery(
      this.language,
      node,
      `
      (expression_statement) @statement
      (return_statement) @statement
      (if_statement) @statement
      (while_statement) @statement
      (for_statement) @statement
      (with_statement) @statement
      (try_statement) @statement
      (assert_statement) @statement
      (raise_statement) @statement
      (pass_statement) @statement
      (break_statement) @statement
      (continue_statement) @statement
      (assignment) @statement
      (augmented_assignment) @statement
    `
    );

    return captureNodes(captures, "statement");
  }

  getNameNode(node: TSNode): TSNode | null {
    return node.childForFieldName("name");
  }

  getParameterCount(functionNode: TSNode): number {
    const parametersNode = functionNode.childForFieldName("parameters");
    if (!parametersNode) {
      return 0;
    }

    return parametersNode.namedChildren.filter((child) => {
      return child.type === "identifier" || child.type === "typed_parameter" || child.type === "default_parameter";
    }).length;
  }

  getRemoteCallNames(functionNode: TSNode, sourceCode: string): string[] {
    const captures = runQuery(
      this.language,
      functionNode,
      `
      (call function: (identifier) @call)
      (call function: (attribute attribute: (identifier) @call))
    `
    );

    const calls = captureNodes(captures, "call").map((callNode) => nodeText(callNode, sourceCode));
    return Array.from(new Set(calls));
  }
}

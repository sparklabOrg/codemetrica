import Python from "tree-sitter-python";
import type { TSNode } from "../types.js";
import { captureNodes, nodeText, runQuery } from "../language/query.js";
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

  getFieldNodes(classNode: TSNode): TSNode[] {
    const fields = new Map<string, TSNode>();
    const body = classNode.childForFieldName("body");
    if (!body) {
      return [];
    }

    for (const child of body.namedChildren) {
      if (child.type !== "function_definition") {
        continue;
      }

      const nameNode = child.childForFieldName("name");
      if (nameNode?.text !== "__init__") {
        continue;
      }

      const walk = (node: TSNode): void => {
        if (node.type === "assignment") {
          const left = node.childForFieldName("left");
          if (left?.type === "attribute") {
            const obj = left.childForFieldName("object");
            const attr = left.childForFieldName("attribute");
            if (obj?.text === "self" && attr && !fields.has(attr.text ?? "")) {
              fields.set(attr.text ?? "", attr);
            }
          }
        }

        for (const grandchild of node.children) {
          walk(grandchild);
        }
      };

      walk(child);
    }

    return Array.from(fields.values());
  }

  getSuperclassNodes(classNode: TSNode): TSNode[] {
    const superclassesNode = classNode.childForFieldName("superclasses");
    if (!superclassesNode) {
      return [];
    }

    return superclassesNode.namedChildren.filter(
      (child) => child.type === "identifier" || child.type === "attribute"
    );
  }

  getDecoratorNodes(node: TSNode): TSNode[] {
    const parent = node.parent;
    if (!parent || parent.type !== "decorated_definition") {
      return [];
    }

    return parent.children.filter((child) => child.type === "decorator");
  }

  getImportNodes(rootNode: TSNode): TSNode[] {
    const captures = runQuery(
      this.language,
      rootNode,
      `
      (import_statement) @import
      (import_from_statement) @import
    `
    );

    return captureNodes(captures, "import");
  }

  getDocstringNode(node: TSNode): TSNode | null {
    const body = node.childForFieldName("body");
    if (!body) {
      return null;
    }

    const first = body.namedChildren[0];
    if (!first || first.type !== "expression_statement") {
      return null;
    }

    const expr = first.namedChildren[0];
    if (!expr || expr.type !== "string") {
      return null;
    }

    return expr;
  }

  getReturnTypeNode(functionNode: TSNode): TSNode | null {
    return functionNode.childForFieldName("return_type");
  }

  getLocalVariableNodes(functionNode: TSNode): TSNode[] {
    const captures = runQuery(
      this.language,
      functionNode,
      `
      (function_definition
        body: (block
          (expression_statement
            (assignment left: (identifier) @var)
          )
        )
      )
    `
    );

    return captureNodes(captures, "var");
  }

  getNestedFunctionNodes(functionNode: TSNode): TSNode[] {
    const captures = runQuery(
      this.language,
      functionNode,
      `
      (function_definition
        body: (block
          (function_definition) @nested
        )
      )
    `
    );

    return captureNodes(captures, "nested");
  }
}

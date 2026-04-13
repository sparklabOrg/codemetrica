import type { TSNode } from "../../types.js";
import { PythonFunction } from "../entities/function.js";

export class MethodMetric {
  private readonly node: TSNode;

  constructor(private readonly methodObj: PythonFunction) {
    this.node = methodObj["_node"];
  }

  getCc(): number {
    const visitNode = (node: TSNode): number => {
      let complexity = 1;
      if (
        [
          "if_statement",
          "elif_clause",
          "else_clause",
          "while_statement",
          "for_statement",
          "try_statement",
          "except_clause",
          "finally_clause",
          "with_statement",
          "assert_statement",
          "boolean_operator",
          "comparison_operator"
        ].includes(node.type)
      ) {
        complexity += 1;
      }

      for (const child of node.children) {
        complexity += visitNode(child);
      }

      return complexity;
    };

    return visitNode(this.node);
  }

  getNbd(): number {
    const visitNode = (node: TSNode, depth = 0): number => {
      let maxDepth = depth;
      if (node.type === "block" || node.type === "suite") {
        for (const child of node.children) {
          maxDepth = Math.max(maxDepth, visitNode(child, depth + 1));
        }
      }

      return maxDepth;
    };

    return visitNode(this.node);
  }

  getLoc(): number {
    return this.methodObj.getLines().length;
  }

  getSloc(): number {
    return this.methodObj.getLines().filter((line) => line.trim()).length;
  }

  getCloc(): number {
    return this.methodObj.getLines().filter((line) => line.trim().startsWith("#")).length;
  }

  getHalsteadN1(): number {
    const operators = new Set<string>();

    const visitNode = (node: TSNode): void => {
      if (["operator", "boolean_operator", "comparison_operator"].includes(node.type)) {
        operators.add(node.text);
      }

      for (const child of node.children) {
        visitNode(child);
      }
    };

    visitNode(this.node);
    return operators.size;
  }

  getHalsteadN2(): number {
    const operands = new Set<string>();

    const visitNode = (node: TSNode): void => {
      if (["identifier", "integer", "float", "string"].includes(node.type)) {
        operands.add(node.text);
      }

      for (const child of node.children) {
        visitNode(child);
      }
    };

    visitNode(this.node);
    return operands.size;
  }

  getHalsteadBigN1(): number {
    let count = 0;
    const visitNode = (node: TSNode): void => {
      if (["operator", "boolean_operator", "comparison_operator"].includes(node.type)) {
        count += 1;
      }

      for (const child of node.children) {
        visitNode(child);
      }
    };

    visitNode(this.node);
    return count;
  }

  getHalsteadBigN2(): number {
    let count = 0;
    const visitNode = (node: TSNode): void => {
      if (["identifier", "integer", "float", "string"].includes(node.type)) {
        count += 1;
      }

      for (const child of node.children) {
        visitNode(child);
      }
    };

    visitNode(this.node);
    return count;
  }

  getParameters(): number {
    return this.methodObj.getParameters();
  }
}

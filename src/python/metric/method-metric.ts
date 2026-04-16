import type { TSNode } from "../../types.js";
import { PythonFunction } from "../entities/function.js";
import { BaseMethodMetric } from "../../metrics/method-metric.js";

export class MethodMetric extends BaseMethodMetric {
  private readonly node: TSNode;
  private readonly pythonMethodObj: PythonFunction;

  constructor(methodObj: PythonFunction) {
    super(methodObj);
    this.pythonMethodObj = methodObj;
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

  private countDecisionNodes(node: TSNode): number {
    let decisions = 0;
    if (
      [
        "if_statement",
        "elif_clause",
        "while_statement",
        "for_statement",
        "except_clause",
        "boolean_operator",
        "comparison_operator"
      ].includes(node.type)
    ) {
      decisions += 1;
    }

    for (const child of node.children) {
      decisions += this.countDecisionNodes(child);
    }

    return decisions;
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

  getNpath(): number {
    const visitNode = (node: TSNode): number => {
      if (node.type === "if_statement") {
        const clauses = node.children.filter((child) => ["if_clause", "elif_clause", "else_clause"].includes(child.type));
        const clausePaths = clauses.map((clause) => {
          const body = clause.childForFieldName("consequence") ?? clause.childForFieldName("body");
          return body ? visitNode(body) : 1;
        });
        return clausePaths.reduce((sum, value) => sum + value, 0);
      }

      if (["for_statement", "while_statement"].includes(node.type)) {
        const body = node.childForFieldName("body");
        return (body ? visitNode(body) : 1) + 1;
      }

      if (node.type === "try_statement") {
        const parts = node.children
          .filter((child) => ["block", "except_clause", "finally_clause"].includes(child.type))
          .map((child) => visitNode(child));
        return Math.max(1, parts.reduce((sum, value) => sum + value, 0));
      }

      if (node.type === "match_statement") {
        const cases = node.children.filter((child) => child.type === "case_clause").map((child) => visitNode(child));
        return Math.max(1, cases.reduce((sum, value) => sum + value, 0));
      }

      const childrenPaths = node.children.map((child) => visitNode(child));
      if (childrenPaths.length === 0) {
        return 1;
      }

      return childrenPaths.reduce((product, value) => product * Math.max(value, 1), 1);
    };

    return visitNode(this.node);
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

  getHalsteadVocabulary(): number {
    return this.getHalsteadN1() + this.getHalsteadN2();
  }

  getHalsteadLength(): number {
    return this.getHalsteadBigN1() + this.getHalsteadBigN2();
  }

  getHalsteadVolume(): number {
    const vocabulary = this.getHalsteadVocabulary();
    const length = this.getHalsteadLength();
    if (vocabulary <= 1 || length === 0) {
      return 0;
    }

    return length * Math.log2(vocabulary);
  }

  getHalsteadDifficulty(): number {
    const n1 = this.getHalsteadN1();
    const n2 = this.getHalsteadN2();
    const N2 = this.getHalsteadBigN2();
    if (n1 === 0 || n2 === 0) {
      return 0;
    }

    return (n1 / 2) * (N2 / n2);
  }

  getHalsteadEffort(): number {
    return this.getHalsteadVolume() * this.getHalsteadDifficulty();
  }

  getDecisionDensity(): number {
    const statements = this.methodObj.getStatements().length;
    if (statements === 0) {
      return 0;
    }

    return this.countDecisionNodes(this.node) / statements;
  }

  getParameters(): number {
    return this.pythonMethodObj.getParameters();
  }
}

import Parser from "tree-sitter";
import type { Capture, TSNode } from "../types.js";

export function runQuery(language: unknown, node: TSNode, querySource: string): Capture[] {
  const query = new Parser.Query(language as never, querySource);
  return query.captures(node) as Capture[];
}

export function captureNodes(captures: Capture[], name: string): TSNode[] {
  return captures.filter((capture) => capture.name === name).map((capture) => capture.node);
}

export function nodeText(node: TSNode, code: string): string {
  const directText = (node as { text?: string }).text;
  if (typeof directText === "string") {
    return directText;
  }

  return code.slice(node.startIndex, node.endIndex);
}

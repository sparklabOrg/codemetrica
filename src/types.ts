import type Parser from "tree-sitter";

export type SupportedLanguage = "python" | "java";

export type TSNode = Parser.SyntaxNode;
export type TSTree = Parser.Tree;
export type TSLanguage = unknown;

export interface Capture {
  name: string;
  node: TSNode;
}

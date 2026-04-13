import { readFileSync } from "node:fs";
import { existsSync } from "node:fs";
import Parser from "tree-sitter";
import type { BaseSource } from "./entities/source.js";
import type { SupportedLanguage } from "./types.js";
import { PythonSource } from "./python/entities/source.js";
import type { LanguageAdapter } from "./language/adapter.js";
import { PythonLanguageAdapter } from "./python/adapter.js";
import { JavaLanguageAdapter } from "./language/stubs.js";

type SourceConstructor = new (code: string, tree: Parser.Tree, adapter: LanguageAdapter, path?: string) => BaseSource;

export class CodemetricaParser {
  private readonly parser: Parser;
  private readonly language: SupportedLanguage;
  private readonly adapter: LanguageAdapter;

  constructor(language: SupportedLanguage) {
    this.language = language;
    this.adapter = this.getLanguageAdapter(language);
    this.parser = new Parser();
    this.parser.setLanguage(this.adapter.language as never);
  }

  parseFromString(sourceCode: string): BaseSource {
    const sourceCtor = this.getLanguageSpecificSourceConstructor();
    const tree = this.sourceCodeToTree(sourceCode);
    return new sourceCtor(sourceCode, tree, this.adapter);
  }

  parseFromFile(filePath: string): BaseSource {
    if (!existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const sourceCode = readFileSync(filePath, "utf8");
    const sourceCtor = this.getLanguageSpecificSourceConstructor();
    const tree = this.sourceCodeToTree(sourceCode);
    return new sourceCtor(sourceCode, tree, this.adapter, filePath);
  }

  private sourceCodeToTree(sourceCode: string): Parser.Tree {
    return this.parser.parse(sourceCode);
  }

  private getLanguageAdapter(language: SupportedLanguage): LanguageAdapter {
    if (language === "python") {
      return new PythonLanguageAdapter();
    }

    if (language === "java") {
      // TODO: Replace stub adapter with real Java adapter.
      return new JavaLanguageAdapter();
    }

    throw new Error(`Unsupported language: ${language}`);
  }

  private getLanguageSpecificSourceConstructor(): SourceConstructor {
    if (this.language === "python") {
      return PythonSource;
    }

    throw new Error(`Unsupported language: ${this.language}`);
  }
}

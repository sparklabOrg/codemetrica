import { ParserRuleContext } from 'antlr4';
import { StatementContext } from '../grammars-v4/java/java20/Java20Parser';
import JavaParserVisitor from '../grammars-v4/java/java20/Java20ParserVisitor';
import { LanguageEnum } from '../LanguageEnum';

export abstract class JavaCodeBlock<T extends ParserRuleContext> {
  ctx: T
  language: LanguageEnum

  constructor(ctx: T) {
      this.ctx = ctx;
      this.language = LanguageEnum.JAVA;
  }

  getClasses() {
    throw new Error("Method getClasses() must be implemented");
  }

  getFunctions() {
    throw new Error("Method getFunctions() must be implemented");
  }

  getMethods() {
    throw new Error("Method getMethods() must be implemented");
  }

  getSimpleStatements(): StatementContext[]  {
    const visitor = new (class extends JavaParserVisitor<void> {
      statements: StatementContext[] = [];

      visitStatement = (ctx: StatementContext): void => {
        this.statements.push(ctx);
      }
    })();
    
    visitor.visit(this.ctx);
    return visitor.statements;
  }
}

import { AtomContext, Simple_stmtContext, Except_blockContext, Except_star_blockContext, ExpressionContext, Match_stmtContext, Star_expressionContext } from "../../../grammars-v4/python/python3_12/PythonParser";
import PythonParserVisitor from "../../../grammars-v4/python/python3_12/PythonParserVisitor";
import { ParserRuleContext } from 'antlr4';
import { Language } from "../../language";
import { ICodeBlock } from "../../interface/ICodeBlock";

export abstract class PyCodeBlock<T extends ParserRuleContext> implements ICodeBlock{
  ctx: T
  language: Language

  constructor(ctx: T) {
      this.ctx = ctx;  
      this.language = Language.PYTHON;
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

  getSimpleStatements(): Simple_stmtContext[]  {
    const visitor = new (class extends PythonParserVisitor<void> {
      simpleStatements: Simple_stmtContext[] = [];
      visitSimple_stmt = (ctx: Simple_stmtContext): void => {
        this.simpleStatements.push(ctx);
      };
    })();

    visitor.visit(this.ctx);
    return visitor.simpleStatements
  }

  getExpressions(): ExpressionContext[] {
    const visitor = new (class extends PythonParserVisitor<void> {
      expressions: ExpressionContext[] = [];
      visitExpression = (ctx: ExpressionContext): void => {
        this.expressions.push(ctx);
      };
    })();

    visitor.visit(this.ctx);
    return visitor.expressions;
  }

  getMatches() {
    const visitor = new (class extends PythonParserVisitor<void> {
      matches: Match_stmtContext[] = [];
      visitMatch_stmt = (ctx: Match_stmtContext): void => {
        this.matches.push(ctx);
      };
    })();

    visitor.visit(this.ctx);
    return visitor.matches;
  }

  getNumberLiterals() {
    const visitor = new (class extends PythonParserVisitor<void> {
      numberLiterals: Star_expressionContext[] = [];
      visitStar_expression = (ctx: Star_expressionContext): void => {
        if (this.anyTerminalsAreNumber(ctx)) {
          this.numberLiterals.push(ctx);
        }
      };

      anyTerminalsAreNumber = (ctx: any): boolean => {
        if (ctx instanceof AtomContext && ctx.NUMBER()) {
          return true;
        }
        for (let i = 0; i < ctx.getChildCount(); i++) {
          if (this.anyTerminalsAreNumber(ctx.getChild(i))) {
            return true;
          }
        }
        return false;
      };
    })();

    visitor.visit(this.ctx);
    return visitor.numberLiterals;
  }

  getExcepts() {
    const visitor = new (class extends PythonParserVisitor<void> {
      excepts: (Except_blockContext | Except_star_blockContext)[] = [];
      visitExcept_block = (ctx: Except_blockContext): void => {
        this.excepts.push(ctx);
      };

      visitExcept_star_block = (ctx: Except_star_blockContext): void => {
        this.excepts.push(ctx);
      };
    })();

    visitor.visit(this.ctx);
    return visitor.excepts;
  }
}

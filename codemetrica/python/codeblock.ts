import { AtomContext, Simple_stmtContext, Except_blockContext, Except_star_blockContext, ExpressionContext, Match_stmtContext, Star_expressionContext } from "../../grammars-v4/python/python3_12_1/PythonParser";
import PythonParserVisitor from "../../grammars-v4/python/python3_12_1/PythonParserVisitor";
import { ParserRuleContext } from 'antlr4';

export abstract class CodeBlock<T extends ParserRuleContext> {
  
  ctx: T

  constructor(ctx: T) {
      this.ctx = ctx;  
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
    class SimpleStmtVisitor extends PythonParserVisitor<void> {
      statements: Simple_stmtContext[];

      constructor() {
        super();
        this.statements = [];
      }

      visitSimple_stmt = (ctx: Simple_stmtContext): void => {
        this.statements.push(ctx);
      }
    }

    const visitor = new SimpleStmtVisitor();
    visitor.visit(this.ctx);
    return visitor.statements;
  }

  getExpressions(): ExpressionContext[] {
    class ExpressionVisitor extends PythonParserVisitor<void> {
      expressions: ExpressionContext[];
      constructor() {
        super();
        this.expressions = [];
      }

      visitExpression = (ctx: ExpressionContext): void => {
        this.expressions.push(ctx);
      }
    }

    const visitor = new ExpressionVisitor();
    visitor.visit(this.ctx);
    return visitor.expressions;
  }

  getMatches() {
    class MatchVisitor extends PythonParserVisitor<void> {
      matches: Match_stmtContext[];

      constructor() {
        super();
        this.matches = [];
      }

      visitMatch_stmt = (ctx: Match_stmtContext): void => {
        this.matches.push(ctx);
      }
    }

    const visitor = new MatchVisitor();
    visitor.visit(this.ctx);
    return visitor.matches;
  }

  getNumberLiterals() {
    class NumberLiteralVisitor extends PythonParserVisitor<void> {
      numberLiterals: Star_expressionContext[] = [];
      constructor() {
        super();
        this.numberLiterals = [];
      }

      visitStar_expression = (ctx: Star_expressionContext) => {
        if (this.anyTerminalsAreNumber(ctx)) {
          this.numberLiterals.push(ctx);
        }
      }

      anyTerminalsAreNumber = (ctx: any) => {
        if (ctx instanceof AtomContext && ctx.NUMBER()) {
          return true;
        }
        for (let i = 0; i < ctx.getChildCount(); i++) {
          if (this.anyTerminalsAreNumber(ctx.getChild(i))) {
            return true;
          }
        }
        return false;
      }
    }

    const visitor = new NumberLiteralVisitor();
    visitor.visit(this.ctx);
    return visitor.numberLiterals;
  }

  getExcepts() {
    class ExceptVisitor extends PythonParserVisitor<void> {
      excepts: (Except_blockContext | Except_star_blockContext)[];

      constructor() {
        super();
        this.excepts = [];
      }

      visitExcept_block = (ctx:Except_blockContext):void =>  {
        this.excepts.push(ctx);
      }

      visitExcept_star_block = (ctx:Except_star_blockContext):void => {
        this.excepts.push(ctx);
      }
    }

    const visitor = new ExceptVisitor();
    visitor.visit(this.ctx);
    return visitor.excepts;
  }
}

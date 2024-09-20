import PythonParser from "./parser/python3_12_1/PythonParser.js";
import PythonParserVisitor from "./parser/python3_12_1/PythonParserVisitor.js";

export default class CodeBlock {
  getClasses() {
    throw new Error("Method getClasses() must be implemented");
  }

  getFunctions() {
    throw new Error("Method getFunctions() must be implemented");
  }

  getMethods() {
    throw new Error("Method getMethods() must be implemented");
  }

  getSimpleStatements() {
    class SimpleStmtVisitor extends PythonParserVisitor {
      constructor() {
        super();
        this.statements = [];
      }

      visitSimple_stmt(ctx) {
        this.statements.push(ctx.getText());
      }
    }

    const visitor = new SimpleStmtVisitor();
    visitor.visit(this.ctx);
    return visitor.statements;
  }

  getExpressions() {
    class ExpressionVisitor extends PythonParserVisitor {
      constructor() {
        super();
        this.expressions = [];
      }

      visitExpression(ctx) {
        this.expressions.push(ctx);
      }
    }

    const visitor = new ExpressionVisitor();
    visitor.visit(this.ctx);
    return visitor.expressions;
  }

  getMatches() {
    class MatchVisitor extends PythonParserVisitor {
      constructor() {
        super();
        this.matches = [];
      }

      visitMatch_stmt(ctx) {
        this.matches.push(ctx);
        return null;
      }
    }

    const visitor = new MatchVisitor();
    visitor.visit(this.ctx);
    return visitor.matches;
  }

  getNumberLiterals() {
    class NumberLiteralVisitor extends PythonParserVisitor {
      constructor() {
        super();
        this.numberLiterals = [];
      }

      visitStar_expression(ctx) {
        if (this.anyTerminalsAreNumber(ctx)) {
          this.numberLiterals.push(ctx);
        }
        return null;
      }

      anyTerminalsAreNumber(ctx) {
        if (ctx instanceof PythonParser.AtomContext && ctx.NUMBER()) {
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

  // Equivalent to getExcepts
  getExcepts() {
    class ExceptVisitor extends PythonParserVisitor {
      constructor() {
        super();
        this.excepts = [];
      }

      visitExcept_block(ctx) {
        this.excepts.push(ctx);
      }

      visitExcept_star_block(ctx) {
        this.excepts.push(ctx);
      }
    }

    const visitor = new ExceptVisitor();
    visitor.visit(this.ctx);
    return visitor.excepts;
  }
}

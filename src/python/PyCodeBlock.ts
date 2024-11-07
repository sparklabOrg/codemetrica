import { AtomContext, Simple_stmtContext, Except_blockContext, Except_star_blockContext, ExpressionContext, Match_stmtContext, Star_expressionContext, AssignmentContext, Function_defContext, Single_targetContext, Star_targetContext, Target_with_star_atomContext, T_primaryContext, Star_atomContext, Single_subscript_attribute_targetContext } from "../grammars-v4/python/python3_12/PythonParser";
import PythonParserVisitor from "../grammars-v4/python/python3_12/PythonParserVisitor";
import { ParserRuleContext, ParseTree, TerminalNode } from 'antlr4';
import { LanguageEnum } from "../LanguageEnum";
import { ICodeBlock } from "../interface/ICodeBlock";
import PythonLexer from "../grammars-v4/python/python3_12/PythonLexer";

export abstract class PyCodeBlock<T extends ParserRuleContext> implements ICodeBlock {
  ctx: T
  language: LanguageEnum

  constructor(ctx: T) {
    this.ctx = ctx;
    this.language = LanguageEnum.PYTHON;
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

  getSimpleStatements(): Simple_stmtContext[] {
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

  getNumberLiterals(): Star_expressionContext[] {
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

  getIdentifiers(): string[] {
    const visitor = new (class extends PythonParserVisitor<void> {
      identifiers: string[] = [];

      visitAssignment = (ctx: AssignmentContext): void => {
        if (ctx.NAME()) {
          // console.log("visit assignment: " + ctx.NAME().getText());
          this.identifiers.push(ctx.NAME().getText());
        }
        this.visitChildren(ctx);
      }

      visitSingle_target = (ctx: Single_targetContext): void => {
        // ignore single_subscript_attribute_target as visit function for it defined below
        if (ctx.NAME()) {
          // console.log("visit single: " + ctx.NAME().getText());

          this.identifiers.push(ctx.NAME().getText());
        }
        // skip visitChildren as no need to get subscript_attribute_target
        // this.visitChildren(ctx); // for recursive single_target
      }

      visitT_primary = (ctx: T_primaryContext): void => {
        if (ctx.atom()) {
          this.visitAtom(ctx.atom());
        } else if (ctx.t_primary()) {
          this.visitT_primary(ctx.t_primary());
        }

        if (ctx.NAME()) {
          // console.log("visit primary: " + ctx.NAME().getText());

          this.identifiers.push(ctx.NAME().getText());
        }
      }

      // Visit atom to collect identifiers
      visitAtom = (ctx: AtomContext): void => {
        if (ctx.NAME()) {
          // console.log("visit atom: " + ctx.NAME().getText());

          this.identifiers.push(ctx.NAME().getText());
        }
      }

      // Visit star_atom to collect identifiers
      visitStar_atom = (ctx: Star_atomContext): void => {
        if (ctx.NAME()) {
          // console.log("visit star atom: " + ctx.NAME().getText());

          this.identifiers.push(ctx.NAME().getText());
        } else if (ctx.target_with_star_atom()) {
          this.visitTarget_with_star_atom(ctx.target_with_star_atom());
        }
      }

      // Visit target_with_star_atom to recursively collect identifiers
      visitTarget_with_star_atom = (ctx: Target_with_star_atomContext): void => {
        if (ctx.t_primary()) {
          this.visitT_primary(ctx.t_primary());
        } else if (ctx.star_atom()) {
          this.visitStar_atom(ctx.star_atom());
        }
      }
    })();

    visitor.visit(this.ctx);
    return Array.from(visitor.identifiers);
  }
}
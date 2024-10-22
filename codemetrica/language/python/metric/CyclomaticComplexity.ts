import { PyFunction } from '../PyFunction';
import PythonParserVisitor from "../../../../grammars-v4/python/python3_12/PythonParserVisitor";
import ParserRuleContext from 'antlr4/context/ParserRuleContext';
import { Elif_stmtContext, ExpressionContext, For_stmtContext, If_stmtContext, Named_expressionContext, Try_stmtContext, While_stmtContext } from '../../../../grammars-v4/python/python3_12/PythonParser';

export class CyclomaticComplexity{
    static calculate(method: PyFunction): number {
        class CyclomaticComplexityVisitor extends PythonParserVisitor<void> {
            complexity: number = 1;

            visitIf_stmt = (ctx: If_stmtContext): void => {
                this.complexity++;
                // console.log("**** Found IF", ctx.getText());
                this.visitChildren(ctx);
            }

            visitElif_stmt = (ctx: Elif_stmtContext): void => {
                this.complexity++;
                return this.visitChildren(ctx);
            }

            visitWhile_stmt = (ctx: While_stmtContext): void => {
                this.complexity++;
                // console.log("**** Found While", ctx.getText());
                this.visitChildren(ctx);
            }
            

            visitFor_stmt = (ctx: For_stmtContext): void => {
                this.complexity++;
                // console.log("**** Found For", ctx.getText());
                return this.visitChildren(ctx);
            }

            visitTry_stmt = (ctx: Try_stmtContext): void => {
                this.complexity++;
                this.visitChildren(ctx);
            }

            visitExpression = (ctx: ExpressionContext): void => {
                const logicalOperatorVisitor = new (class extends PythonParserVisitor<void> {
                    count: number = 0;
                    visitTerminal(node: any) {
                        if (node.symbol.text === 'and' || node.symbol.text === 'or') {
                            console.log(node.symbol.text);
                            this.count++;
                        }
                    }
                })();
                logicalOperatorVisitor.visit(ctx);
                this.complexity += logicalOperatorVisitor.count;
            }

            // TODO match stmt
        };

        const visitor = new CyclomaticComplexityVisitor();
        visitor.visit(method.ctx);
        return visitor.complexity;
    }
}
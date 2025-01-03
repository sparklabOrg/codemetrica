import PythonParserVisitor from "../../grammars-v4/python/python3_12/PythonParserVisitor";
import { Thresholds } from '../../Thresholds';
import { ExpressionContext } from "../../grammars-v4/python/python3_12/PythonParser";

export class ComplexConditional {
  static detect(ctx: ExpressionContext): boolean {
    const visitor = new (class extends PythonParserVisitor<void> {
      count: number = 0;
      visitTerminal(node: any) {
        if (node.symbol.text === 'and' || node.symbol.text === 'or') {
          this.count++;
        }
      }
    })();

    visitor.visit(ctx);
    return visitor.count > Thresholds.COMPLEX_CONDITIONAL; 
  }
}
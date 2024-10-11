import PythonParserVisitor from "../../../../grammars-v4/python/python3_12_1/PythonParserVisitor";
import { Thresholds } from '../../../Thresholds';
import { ExpressionContext } from "../../../../grammars-v4/python/python3_12_1/PythonParser";

export class ComplexConditional {
  static detect(ctx: ExpressionContext): boolean {
    class LogicalOperatorCounterVisitor extends PythonParserVisitor<void> {
      count: number

      constructor() {
        super();
        this.count = 0;
      }

      visitTerminal(node: any) {
        if (node.symbol.text === 'and' || node.symbol.text === 'or') {
          this.count++;
        }
      }
    }

    const visitor = new LogicalOperatorCounterVisitor();
    visitor.visit(ctx);
    return visitor.count > Thresholds.COMPLEX_CONDITIONAL; 
  }
}
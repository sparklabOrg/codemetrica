import PythonParserVisitor from "../parser/python3_12_1/PythonParserVisitor.js";
import thresholds from '../../thresholds.js';

export default class ComplexConditional {
  static detect(ctx){
    class LogicalOperatorCounterVisitor extends PythonParserVisitor {
      constructor() {
        super();
        this.count = 0;
      }
      visitTerminal(node) {
        if (node.symbol.text === 'and' || node.symbol.text === 'or') {
          this.count++;
        }
      }
    }

    const visitor = new LogicalOperatorCounterVisitor();
    visitor.visit(ctx);
    return visitor.count > thresholds.COMPLEX_CONDITIONAL; 
  }
}
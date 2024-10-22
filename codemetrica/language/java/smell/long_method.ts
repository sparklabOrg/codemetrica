import { BlockStatementsContext } from '../../../../grammars-v4/java/java20/Java20Parser';
import { Thresholds } from '../../../Thresholds';
import { JavaMethod } from '../JavaMethod';

export class LongMethod {
  static detect(method: JavaMethod): boolean {
    const block_statements_ctx: BlockStatementsContext = method.ctx.methodBody().block().blockStatements()
    const method_length = block_statements_ctx.stop!.line - block_statements_ctx.start.line + 1
    return method_length > Thresholds.LONG_METHOD
  }
}
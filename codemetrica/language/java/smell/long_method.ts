import { BlockStatementsContext } from '../../../../grammars-v4/java/java20/Java20Parser';
import { Thresholds } from '../../../Thresholds';
import { Method } from '../JavaMethod';
import { ILongMethod } from '../../../interface/smell/ILongMethod';

export class LongMethod implements ILongMethod {
  static detect(method: Method): boolean {
    const block_statements_ctx: BlockStatementsContext = method.ctx.methodBody().block().blockStatements()
    const method_length = block_statements_ctx.stop.line - block_statements_ctx.start.line + 1
    return method_length > Thresholds.LONG_METHOD
  }
}
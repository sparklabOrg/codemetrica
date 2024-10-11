import { BlockStatementsContext } from '../../../../grammars-v4/java/java20/Java20Parser';
import { IMethod } from '../../../interface/IMethod';
import { JavaMethod } from '../JavaMethod';

export class MethodLength {
    staticcalculate(method: IMethod): number {
        const block_statements_ctx: BlockStatementsContext = method.ctx.methodBody().block().blockStatements()
        const method_length = block_statements_ctx.stop.line - block_statements_ctx.start.line + 1
        return method_length;
    }
}

export function calculateMethodLength(method: JavaMethod): number {
    const block_statements_ctx: BlockStatementsContext = method.ctx.methodBody().block().blockStatements()
    const method_length = block_statements_ctx.stop.line - block_statements_ctx.start.line + 1
    return method_length;
}
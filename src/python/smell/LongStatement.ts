import { Simple_stmtContext } from '../../grammars-v4/python/python3_12/PythonParser';
import { Thresholds } from '../../Thresholds';

export class LongStatement{
    static detect(ctx: Simple_stmtContext): boolean {
        return ctx.getText().length > Thresholds.LONG_PARAMETER_LIST;
    }
}
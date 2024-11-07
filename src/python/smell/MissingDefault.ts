import { Simple_stmtContext } from '../../grammars-v4/python/python3_12/PythonParser';
import PythonParserVisitor from '../../grammars-v4/python/python3_12/PythonParserVisitor';
import { Soft_kw_wildcardContext } from '../../grammars-v4/python/python3_12/PythonParser';

export class MissingDefault {
    static detect(ctx: Simple_stmtContext): boolean {
        const visitor = new (class extends PythonParserVisitor<void> {
            count: number = 0;
            visitSoft_kw_wildcard = (ctx: Soft_kw_wildcardContext) =>{
                this.count ++;
            }
        })();

        visitor.visit(ctx);
        return visitor.count > 0;
    }
}

import { PyCodeBlock } from "./PyCodeBlock.js";
import { PyFunction } from "./PyFunction.js";
import { Class_defContext, Function_defContext } from "../grammars-v4/python/python3_12/PythonParser.js";
import PythonParserVisitor from "../grammars-v4/python/python3_12/PythonParserVisitor.js";
import { IClass } from "../interface/IClass.js";

export class PyClass extends PyCodeBlock<Class_defContext> implements IClass {
    constructor(ctx: Class_defContext) {
        super(ctx);
    }

    get name(): string {
        return this.ctx.class_def_raw().NAME().getText();
    }

    getMethods(): PyFunction[] {
        const visitor = new (class extends PythonParserVisitor<void> {
            methods: PyFunction[] = [];
            visitFunction_def = (ctx: Function_defContext): void => {
                this.methods.push(new PyFunction(ctx));
            };
        })();
        visitor.visit(this.ctx);
        return visitor.methods;
    }
}
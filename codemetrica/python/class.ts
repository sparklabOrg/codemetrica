import { CodeBlock } from "./codeblock";
import { Function } from "./function";
import { Class_defContext, Function_defContext } from "../../grammars-v4/python/python3_12_1/PythonParser.js";
import PythonParserVisitor from "../../grammars-v4/python/python3_12_1/PythonParserVisitor";

export class Class extends CodeBlock<Class_defContext> {
    constructor(ctx: Class_defContext) {
        super(ctx);
    }

    get name() {
        return this.ctx.class_def_raw().NAME().getText();
    }

    getMethods() {
        class FunctionVisitor extends PythonParserVisitor<void> {
            methods: Function[];
            constructor() {
                super();
                this.methods = [];
            }

            visitFunction_def = (ctx:Function_defContext) => {
                this.methods.push(new Function(ctx)); 
            }
        }

        const visitor = new FunctionVisitor();
        visitor.visit(this.ctx);
        return visitor.methods; 
    }
}
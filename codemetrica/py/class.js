import CodeBlock from "./codeblock.js";
import Function from "./function.js";
import PythonParserVisitor from "./parser/python3_12_1/PythonParserVisitor.js";

export default class Class extends CodeBlock {
    constructor(ctx) {
        super();
        this.ctx = ctx;  
    }

    get name() {
        return this.ctx.class_def_raw().NAME().getText();
    }

    getMethods() {
        class FunctionVisitor extends PythonParserVisitor {
            constructor() {
                super();
                this.methods = [];
            }

            visitFunction_def(ctx) {
                this.methods.push(new Function(ctx)); 
            }
        }

        const visitor = new FunctionVisitor();
        visitor.visit(this.ctx);
        return visitor.methods; 
    }
}
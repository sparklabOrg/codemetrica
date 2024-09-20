import PythonParserVisitor from "./parser/python3_12_1/PythonParserVisitor.js";
import CodeBlock from "./codeblock.js";
import Class from "./class.js";
import Function from "./function.js";
import Parser from "./parser/parser.js";

export default class File extends CodeBlock {
    constructor(path) {
        super();
        this.path = path;
        this.ctx = Parser.getAST(path);
    }

    get name() {
        return this.path.split('/').pop();
    }

    get extension() {
        return this.path.includes('.') ? this.path.split('.').pop() : null;
    }

    get LOC() {
        return this.ctx.stop.line - this.ctx.start.line + 1;
    }

    getClasses() {
        class ClassVisitor extends PythonParserVisitor {
            constructor() {
                super();
                this.classes = [];
            }

            visitClass_def(ctx) {
                this.classes.push(new Class(ctx)); 
            }
        }

        const visitor = new ClassVisitor();
        visitor.visit(this.ctx);
        return visitor.classes;
    }

    getFunctions() {
        class FunctionVisitor extends PythonParserVisitor {
            constructor() {
                super();
                this.functions = [];
            }

            visitFunction_def(ctx) {
                this.functions.push(new Function(ctx));  
            }
        }

        const visitor = new FunctionVisitor();
        visitor.visit(this.ctx);
        return visitor.functions;
    }
}
import PythonParserVisitor from "../../grammars-v4/python/python3_12_1/PythonParserVisitor";
import { Class_defContext, File_inputContext, Function_defContext } from "../../grammars-v4/python/python3_12_1/PythonParser.js";
import { CodeBlock } from "./codeblock";
import { Class } from "./class";
import { Function } from "./function";
import { Parser } from "./parser";

export class File extends CodeBlock<File_inputContext> {
    path: string;
    constructor(path:string) {
        super(Parser.getANTLRContext(path));
        this.path = path;
    }

    get name() {
        return this.path.split('/').pop();
    }

    get extension() {
        return this.path.includes('.') ? this.path.split('.').pop() : null;
    }

    // get LOC() {
    //     return this.ctx.stop.line - this.ctx.start.line + 1;
    // }

    getClasses(): Class[] {
        class ClassVisitor extends PythonParserVisitor<void> {
            classes: Class[];
            constructor() {
                super();
                this.classes = [];
            }

            visitClass_def = (ctx: Class_defContext) => {
                this.classes.push(new Class(ctx)); 
            }
        }

        const visitor = new ClassVisitor();
        visitor.visit(this.ctx);
        return visitor.classes;
    }

    getFunctions() {
        class FunctionVisitor extends PythonParserVisitor<void> {
            functions: Function[];

            constructor() {
                super();
                this.functions = [];
            }

            visitFunction_def = (ctx: Function_defContext) => {
                this.functions.push(new Function(ctx));  
            }
        }

        const visitor = new FunctionVisitor();
        visitor.visit(this.ctx);
        return visitor.functions;
    }
}
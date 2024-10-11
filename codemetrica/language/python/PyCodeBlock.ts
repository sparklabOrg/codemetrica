import PythonParserVisitor from "../../../grammars-v4/python/python3_12_1/PythonParserVisitor";
import { Class_defContext, File_inputContext, Function_defContext } from "../../../grammars-v4/python/python3_12_1/PythonParser.js";
import { PyCodeBlockBase } from "./PyCodeBlockBase";
import { PyClass } from "./PyClass";
import { PyFunction } from "./PyFunction";

export class PyCodeBlock extends PyCodeBlockBase<File_inputContext> {
    constructor(ctx: File_inputContext) {
        super(ctx);
    }

    get fileName() {
        return this.filePath?.split('/').pop();
    }

    get extension() {
        return this.filePath?.includes('.') ? this.filePath.split('.').pop() : null;
    }

    // get LOC() {
    //     return this.ctx.stop.line - this.ctx.start.line + 1;
    // }

    getClasses(): PyClass[] {
        class ClassVisitor extends PythonParserVisitor<void> {
            classes: PyClass[];
            constructor() {
                super();
                this.classes = [];
            }

            visitClass_def = (ctx: Class_defContext) => {
                this.classes.push(new PyClass(ctx)); 
            }
        }

        const visitor = new ClassVisitor();
        visitor.visit(this.ctx);
        return visitor.classes;
    }

    getFunctions() {
        class FunctionVisitor extends PythonParserVisitor<void> {
            functions: PyFunction[];

            constructor() {
                super();
                this.functions = [];
            }

            visitFunction_def = (ctx: Function_defContext) => {
                this.functions.push(new PyFunction(ctx));  
            }
        }

        const visitor = new FunctionVisitor();
        visitor.visit(this.ctx);
        return visitor.functions;
    }
}
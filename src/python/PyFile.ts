import PythonParserVisitor from "../grammars-v4/python/python3_12/PythonParserVisitor";
import { Class_defContext, File_inputContext, Function_defContext } from "../grammars-v4/python/python3_12/PythonParser.js";
import { PyCodeBlock } from "./PyCodeBlock";
import { PyClass } from "./PyClass";
import { PyFunction } from "./PyFunction";
import { IFile } from "../interface/IFile";

export class PyFile extends PyCodeBlock<File_inputContext> implements IFile {
    filePath: string | undefined = undefined;

    constructor(ctx: File_inputContext) {
        super(ctx);
    }

    get fileName(): string | undefined {
        return this.filePath?.split('/').pop();
    }

    get extension(): string | undefined {
        return this.filePath?.includes('.') ? this.filePath.split('.').pop() : undefined;
    }

    getClasses(): PyClass[] {
        const visitor = new (class extends PythonParserVisitor<void> {
            classes: PyClass[] = [];
            visitClass_def = (ctx: Class_defContext): void => {
                this.classes.push(new PyClass(ctx));
            };
        })();

        visitor.visit(this.ctx);
        return visitor.classes;
    }

    getFunctions() {
        const visitor = new (class extends PythonParserVisitor<void> {
            functions: PyFunction[] = [];
            visitFunction_def = (ctx: Function_defContext): void => {
                this.functions.push(new PyFunction(ctx));
            };
        })();

        visitor.visit(this.ctx);
        return visitor.functions;
    }
}
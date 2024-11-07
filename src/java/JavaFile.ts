import JavaParserVisitor from "../grammars-v4/java/java20/Java20ParserVisitor";
import { JavaClass } from "./JavaClass";
import { CompilationUnitContext, NormalClassDeclarationContext } from "../grammars-v4/java/java20/Java20Parser";
import { JavaCodeBlock } from "./JavaCodeBlock";
import { IFile } from "../interface/IFile";

export class JavaFile extends JavaCodeBlock<CompilationUnitContext> implements IFile{
    filePath: string | undefined;
    
    constructor(ctx: CompilationUnitContext) {
        super(ctx);
    }

    getClasses(): JavaClass[] {
        const visitor = new (class extends JavaParserVisitor<void> {
            classes: JavaClass[] = [];
            visitNormalClassDeclaration = (ctx: NormalClassDeclarationContext): void => {
                this.classes.push(new JavaClass(ctx));
            }
        })();
        
        visitor.visit(this.ctx);
        return visitor.classes;
    }
}
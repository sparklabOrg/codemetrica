import JavaParserVisitor from "../../../grammars-v4/java/java20/Java20ParserVisitor";
import { JavaClass } from "./JavaClass";
import { JavaMethod } from "./JavaMethod";
import { CompilationUnitContext, NormalClassDeclarationContext, MethodDeclarationContext } from "../../../grammars-v4/java/java20/Java20Parser";
import { JavaCodeBlockBase } from "./JavaCodeBlockBase";

export class JavaCodeBlock extends JavaCodeBlockBase<CompilationUnitContext> {
    constructor(ctx: CompilationUnitContext) {
        super(ctx);
    }

    getClasses(): JavaClass[] {
        class ClassVisitor extends JavaParserVisitor<void> {
            classes: JavaClass[];
            constructor() {
                super();
                this.classes = [];
            }

            visitNormalClassDeclaration = (ctx: NormalClassDeclarationContext) => {
                this.classes.push(new JavaClass(ctx)); 
            }
        }

        const visitor = new ClassVisitor();
        visitor.visit(this.ctx);
        return visitor.classes;
    }
}
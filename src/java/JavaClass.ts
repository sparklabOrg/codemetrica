import { JavaCodeBlock } from "./JavaCodeBlock";
import { JavaMethod } from "./JavaMethod";
import { NormalClassDeclarationContext, MethodDeclarationContext } from "../grammars-v4/java/java20/Java20Parser";
import JavaParserVisitor from "../grammars-v4/java/java20/Java20ParserVisitor";

export class JavaClass extends JavaCodeBlock<NormalClassDeclarationContext> {
    constructor(ctx: NormalClassDeclarationContext) {
        super(ctx);
    }

    get name(): string {
        return this.ctx.typeIdentifier().getText();
    }

    getMethods(): JavaMethod[] {
        const visitor = new (class extends JavaParserVisitor<void> {
            methods: JavaMethod[] = [];
            visitMethodDeclaration = (ctx: MethodDeclarationContext): void => {
                this.methods.push(new JavaMethod(ctx));
            }
        })();
        
        visitor.visit(this.ctx);
        return visitor.methods; 
    }
}
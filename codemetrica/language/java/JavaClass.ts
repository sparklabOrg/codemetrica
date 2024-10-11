import { JavaCodeBlockBase } from "./JavaCodeBlockBase";
import { JavaMethod } from "./JavaMethod";
import { NormalClassDeclarationContext, MethodDeclarationContext } from "../../../grammars-v4/java/java20/Java20Parser";
import JavaParserVisitor from "../../../grammars-v4/java/java20/Java20ParserVisitor";

export class JavaClass extends JavaCodeBlockBase<NormalClassDeclarationContext> {
    constructor(ctx: NormalClassDeclarationContext) {
        super(ctx);
    }

    get name(): string {
        return this.ctx.typeIdentifier().getText();
    }

    getMethods(): JavaMethod[] {
        class MethodVisitor extends JavaParserVisitor<void> {
            methods: JavaMethod[];
            constructor() {
                super();
                this.methods = [];
            }

            visitMethodDeclaration = (ctx: MethodDeclarationContext) => {
                this.methods.push(new JavaMethod(ctx)); 
            }
        }

        const visitor = new MethodVisitor();
        visitor.visit(this.ctx);
        return visitor.methods; 
    }
}
import { CodeBlock } from "./codeblock";
import { Method } from "./method";
import { NormalClassDeclarationContext, MethodDeclarationContext } from "../../grammars-v4/java/java20/Java20Parser";
import JavaParserVisitor from "../../grammars-v4/java/java20/Java20ParserVisitor";

export class Class extends CodeBlock<NormalClassDeclarationContext> {
    constructor(ctx: NormalClassDeclarationContext) {
        super(ctx);
    }

    get name() {
        return this.ctx.typeIdentifier().getText();
    }

    getMethods() {
        class MethodVisitor extends JavaParserVisitor<void> {
            methods: Method[];
            constructor() {
                super();
                this.methods = [];
            }

            visitMethodDeclaration = (ctx: MethodDeclarationContext) => {
                this.methods.push(new Method(ctx)); 
            }
        }

        const visitor = new MethodVisitor();
        visitor.visit(this.ctx);
        return visitor.methods; 
    }
}
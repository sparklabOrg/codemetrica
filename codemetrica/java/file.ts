import JavaParserVisitor from "../../grammars-v4/java/java20/Java20ParserVisitor";
import { CodeBlock } from "./codeblock";
import { Class } from "./class";
import { Function } from "./method";
import { Parser } from "./parser";
import { CompilationUnitContext, NormalClassDeclarationContext, MethodDeclarationContext } from "../../grammars-v4/java/java20/Java20Parser";

export class File extends CodeBlock<CompilationUnitContext> {
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
        class ClassVisitor extends JavaParserVisitor<void> {
            classes: Class[];
            constructor() {
                super();
                this.classes = [];
            }

            visitNormalClassDeclaration = (ctx: NormalClassDeclarationContext) => {
                this.classes.push(new Class(ctx)); 
            }
        }

        const visitor = new ClassVisitor();
        visitor.visit(this.ctx);
        return visitor.classes;
    }
}
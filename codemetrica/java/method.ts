import { CodeBlock } from "./codeblock";
import { MethodDeclarationContext } from "../../grammars-v4/java/java20/Java20Parser";

export class Method extends CodeBlock<MethodDeclarationContext> {
  constructor(ctx: MethodDeclarationContext) {
    super(ctx);
  }

  get name() {
    return this.ctx.methodHeader().methodDeclarator().identifier().getText();
  }

  // get length() {
  //   return this.ctx.stop.line - this.ctx.start.line;
  // }

  // getParameters() {
  //   class Parameter {
  //     name: string;
  //     type: string;

  //     constructor(name:string, type:string) {
  //       this.name = name;
  //       this.type = type;
  //     }
  //   }

  //   const parameters: Parameter[] = [];

  //   const paramCtx = this.ctx.MethodDeclaration()?.params()?.parameters()?.children || []
    
  //   paramCtx.forEach((param: any) => {
  //     parameters.push(new Parameter(param.getText(), "lol"));
  //   });

  //   return parameters;
  // }
}

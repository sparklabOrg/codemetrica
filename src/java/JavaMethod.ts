
import { IMethod } from '../interface/IMethod';
import { JavaCodeBlock } from "./JavaCodeBlock";
import { MethodDeclarationContext } from "../grammars-v4/java/java20/Java20Parser";
import { JavaParameter } from './JavaParameter';
export class JavaMethod extends JavaCodeBlock<MethodDeclarationContext> implements IMethod {
  constructor(ctx: MethodDeclarationContext) {
    super(ctx);
  }

  get name() {
    return this.ctx.methodHeader().methodDeclarator().identifier().getText();
  }

  getParameters() {
    const parameters: JavaParameter[] = [];

    const paramCtx = this.ctx?.methodHeader()?.typeParameters()?.children || []
    
    paramCtx.forEach((param: any) => {
      parameters.push(new JavaParameter(param.getText(), "lol"));
    });

    return parameters;
  }
}


import { IMethod } from '../../interface/IMethod';
import { JavaCodeBlockBase } from "./JavaCodeBlockBase";
import { MethodDeclarationContext } from "../../../grammars-v4/java/java20/Java20Parser";
import { IParameter } from '../../interface/IParameter';

export class JavaMethod extends JavaCodeBlockBase<MethodDeclarationContext> implements IMethod {
  constructor(ctx: MethodDeclarationContext) {
    super(ctx);
  }

  get name() {
    return this.ctx.methodHeader().methodDeclarator().identifier().getText();
  }

  getParameters() {
    const parameters: IParameter[] = [];

    const paramCtx = this.ctx.MethodDeclaration()?.params()?.parameters()?.children || []
    
    paramCtx.forEach((param: any) => {
      parameters.push(new Parameter(param.getText(), "lol"));
    });

    return parameters;
  }
}

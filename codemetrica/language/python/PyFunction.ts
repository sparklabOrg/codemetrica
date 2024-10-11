import { PyCodeBlockBase } from "./PyCodeBlockBase";
import { Function_defContext } from "../../../grammars-v4/python/python3_12_1/PythonParser";
import { IParameter } from "../../interface/IParameter";
import { IFunction } from "../../interface/IFunction";
import { PyParameter } from "./PyParameter";

export class PyFunction extends PyCodeBlockBase<Function_defContext> implements IFunction {
  constructor(ctx: Function_defContext) {
    super(ctx);
  }

  get name() {
    return this.ctx.function_def_raw().NAME().getText();
  }

  getParameters(): PyParameter[] {
    const parameters: IParameter[] = [];

    const parameters_ctx = this.ctx.function_def_raw()?.params()?.parameters()?.children || []
    
    parameters_ctx.forEach((param: any) => {
      parameters.push(new PyParameter(param.getText(), "lol"));
    });

    return parameters;
  }
}

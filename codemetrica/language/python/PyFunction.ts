import { PyCodeBlock } from "./PyCodeBlock";
import { Function_defContext } from "../../../grammars-v4/python/python3_12/PythonParser";
import { IParameter } from "../../interface/IParameter";
import { IFunction } from "../../interface/IFunction";
import { IMethod } from "../../interface/IMethod";
import { PyParameter } from "./PyParameter";

export class PyFunction extends PyCodeBlock<Function_defContext> implements IFunction, IMethod {
  constructor(ctx: Function_defContext) {
    super(ctx);
  }

  get name() {
    return this.ctx.function_def_raw().NAME().getText();
  }

  getParameters(): PyParameter[] {
    const parameters: PyParameter[] = [];
    const parameters_ctx = this.ctx.function_def_raw()?.params()?.parameters()?.children || []
    
    parameters_ctx.forEach((param: any) => {
      parameters.push(new PyParameter(param.getText(), "lol"));
    });

    return parameters;
  }
}

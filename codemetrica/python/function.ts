import { CodeBlock } from "./codeblock";
import { Function_defContext } from "../../grammars-v4/python/python3_12_1/PythonParser";

export class Function extends CodeBlock<Function_defContext> {
  constructor(ctx: Function_defContext) {
    super(ctx);
  }

  get name() {
    return this.ctx.function_def_raw().NAME().getText();
  }

  // get length() {
  //   return this.ctx.stop.line - this.ctx.start.line;
  // }

  getParameters() {
    class Parameter {
      name: string;
      type: string;

      constructor(name:string, type:string) {
        this.name = name;
        this.type = type;
      }
    }

    const parameters: Parameter[] = [];

    const paramCtx = this.ctx.function_def_raw()?.params()?.parameters()?.children || []
    
    paramCtx.forEach((param: any) => {
      parameters.push(new Parameter(param.getText(), "lol"));
    });

    return parameters;
  }
}

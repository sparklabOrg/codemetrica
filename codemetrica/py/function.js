import CodeBlock from "./codeblock.js";
import PythonParserVisitor from "./parser/python3_12_1/PythonParserVisitor.js";

export default class Function extends CodeBlock {
  constructor(ctx) {
    super();
    this.ctx = ctx;
  }

  get name() {
    return this.ctx.function_def_raw().NAME().getText();
  }

  get length() {
    return this.ctx.stop.line - this.ctx.start.line;
  }

  getParameters() {
    class Parameter {
      constructor(name, type) {
        this.name = name;
        this.type = type;
      }
    }

    const parameters = [];

    const paramCtx = this.ctx.function_def_raw().params().parameters().children();
    paramCtx.forEach((param) => {
      parameters.push(new Parameter(param.getText(), "lol"));
    });

    return parameters;
  }
}

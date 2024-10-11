import { PyCodeBlockBase } from "./PyCodeBlockBase";
import { PyFunction } from "./PyFunction";
import { Class_defContext, Function_defContext } from "../../../grammars-v4/python/python3_12_1/PythonParser.js";
import PythonParserVisitor from "../../../grammars-v4/python/python3_12_1/PythonParserVisitor";
import { IClass } from "../../interface/IClass";
import { visitWith } from "../../utils/visitor";

export class PyClass extends PyCodeBlockBase<Class_defContext> implements IClass {
    constructor(ctx: Class_defContext) {
        super(ctx);
    }

    get name(): string {
        return this.ctx.class_def_raw().NAME().getText();
    }

    // getMethods(): PyFunction[] {
    //     class FunctionVisitor extends PythonParserVisitor<void> {
    //         methods: PyFunction[];
    //         constructor() {
    //             super();
    //             this.methods = [];
    //         }

    //         visitFunction_def = (ctx:Function_defContext) => {
    //             this.methods.push(new PyFunction(ctx)); 
    //         }
    //     }

    //     const visitor = new FunctionVisitor();
    //     visitor.visit(this.ctx);
    //     return visitor.methods; 
    // }

    getMethods(): PyFunction[] {
        return visitWith<PyFunction>(Function_defContext);
    }
}
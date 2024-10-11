import { IParameter } from "../../interface/IParameter";

export class PyParameter implements IParameter {
    name: string;
    type: string | null;
    defaultValue?: any;
    isPositional?: boolean;
    isKeywordOnly?: boolean;
    isVarArgs?: boolean;
    isKwArgs?: boolean;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}
import { IParameter } from "../../interface/IParameter";
import { JavaCodeBlockBase } from "./JavaCodeBlockBase";

export class Parameter extends JavaCodeBlockBase<> implements IParameter {
    name: string;
    type: string;

    constructor(name: string, type: string) {
        super();
        this.name = name;
        this.type = type;
    }
}
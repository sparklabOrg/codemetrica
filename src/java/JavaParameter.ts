import { IParameter } from "../interface/IParameter";

export class JavaParameter implements IParameter {
    name: string;
    type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}
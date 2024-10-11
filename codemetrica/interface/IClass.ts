import { ICodeBlock } from './ICodeBlock';
import { IMethod } from './IMethod';

export interface IClass extends ICodeBlock {
    name: string;
    getMethods(): IMethod[];
}
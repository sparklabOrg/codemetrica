import { ICodeBlock } from './IFile';
import { IMethod } from './IMethod';

export interface IClass extends ICodeBlock {
    name: string;
    getMethods(): IMethod[];
}
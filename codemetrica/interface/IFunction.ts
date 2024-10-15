import { ICodeBlock } from './IFile';
import { IParameter } from './IParameter';

export interface IFunction extends ICodeBlock{
    name: string;
    getParameters(): IParameter[];
}
import { ICodeBlock } from './ICodeBlock';
import { IParameter } from './IParameter';

export interface IFunction extends ICodeBlock{
    name: string;
    getParameters(): IParameter[];
}
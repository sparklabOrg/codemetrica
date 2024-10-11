import { IFunction } from '../IFunction';
import { IMethod } from '../IMethod';

export interface ILongMethod {
    detect(method: IFunction | IMethod): boolean;
}
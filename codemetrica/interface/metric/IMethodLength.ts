import { IFunction } from '../IFunction';
import { IMethod } from '../IMethod';

export interface IMethodLength {
    calculate(method: IMethod | IFunction): number;
}
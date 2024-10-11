import { IFunction } from '../../../interface/IFunction';
import { PyFunction } from '../PyFunction';

export function calculateMethodLength(method: IFunction): number {
    const method_length = method.ctx.stop.line - method.ctx.start.line + 1
    return method_length;
}

export class MethodLength{
    static calculate(method: PyFunction): number {
        const method_length = method.ctx.stop.line - method.ctx.start.line + 1
        return method_length;
    }
}
import { Thresholds } from '../../../Thresholds';
import { PyFunction } from '../PyFunction';
import { MethodLength } from '../metric/MethodLength';

export class LongMethod {
    static detect(func: PyFunction): boolean {
        const method_length = MethodLength.calculate(func)
        return method_length > Thresholds.LONG_METHOD
    }
}
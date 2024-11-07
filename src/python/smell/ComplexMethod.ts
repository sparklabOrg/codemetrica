import { Thresholds } from '../../Thresholds';
import { CyclomaticComplexity } from '../metric/CyclomaticComplexity';
import { PyFunction } from '../PyFunction';
import { ComplexConditional } from './ComplexConditional';

export class ComplexMethod{
    static detect(method: PyFunction): boolean {
        const cc = CyclomaticComplexity.calculate(method);
        return cc >= Thresholds.COMPLEX_METHOD_CYCLOMATIC_COMPLEXITY 
    }
}
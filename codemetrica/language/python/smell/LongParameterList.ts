import { Thresholds } from '../../../Thresholds';
import { PyFunction } from '../PyFunction';

export class LongParameterList{
    static detect(func: PyFunction): boolean {
        const num_of_parameters = func.getParameters().length;
        return num_of_parameters > Thresholds.LONG_PARAMETER_LIST;
    }
}
import { IMethod } from "../interface/IMethod";
import { IFunction } from "../interface/IFunction";
import { Language } from "../language";
import { calculateMethodLength as javaCalculateMethodLength } from "../language/java/metric/MethodLength";
import { MethodLength as PyMethodLength } from "../language/python/metric/MethodLength";
import { Thresholds } from "../Thresholds";

type MethodLengthCalculator = (method: IMethod | IFunction) => number;

export class LongMethod {
    static detect(method: IMethod | IFunction): boolean {
        const getMethodLengthCalculator = (language: Language): MethodLengthCalculator => {
            switch (language) {
                case Language.PYTHON:
                    return PyMethodLength.calculate;
                case Language.JAVA:
                    return javaCalculateMethodLength;
                default:
                    return () => 0;
            }
        }

        const calculateMethodLength = getMethodLengthCalculator(method.language);
        const methodLength = calculateMethodLength(method);
        return methodLength > Thresholds.LONG_METHOD;
    }
}

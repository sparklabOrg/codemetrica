import { IMethod } from "../interface/IMethod";
import { IFunction } from "../interface/IFunction";
import { Language } from "../language";
import { calculateMethodLength as javaCalculateMethodLength } from "../language/java/metric/MethodLength";
import { MethodLength as PyMethodLength } from "../language/python/metric/MethodLength";
import { Thresholds } from "../Thresholds";

type MethodLengthCalculator = (method: any) => number;

export class LongMethod {
    static detect(method: IMethod | IFunction): boolean {
        const getMethodLengthCalculator = (language: Language): MethodLengthCalculator => {
            switch (language) {
                case Language.PYTHON:
                    return PyMethodLength.calculate;
                case Language.JAVA:
                    return javaCalculateMethodLength;
                default:
                    throw new Error(`Unsupported language: ${language}`);
            }
        }

        const calculateMethodLength = getMethodLengthCalculator(method.language);
        const methodLength = calculateMethodLength(method);
        return methodLength > Thresholds.LONG_METHOD;
    }
}

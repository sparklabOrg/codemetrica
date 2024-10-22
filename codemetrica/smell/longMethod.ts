import { IMethod } from "../interface/IMethod";
import { IFunction } from "../interface/IFunction";
import { LanguageEnum } from "../LanguageEnum";
import { MethodLength as JavaMethodLength } from "../language/java/metric/MethodLength";
import { MethodLength as PyMethodLength } from "../language/python/metric/MethodLength";
import { Thresholds } from "../Thresholds";

type MethodLengthCalculator = (method: any) => number;

export class LongMethod {
    static detect(method: IMethod | IFunction): boolean {
        const getMethodLengthCalculator = (language: LanguageEnum): MethodLengthCalculator => {
            switch (language) {
                case LanguageEnum.PYTHON:
                    return PyMethodLength.calculate;
                case LanguageEnum.JAVA:
                    return JavaMethodLength.calculate;
                default:
                    throw new Error(`Unsupported language: ${language}`);
            }
        }

        const calculateMethodLength = getMethodLengthCalculator(method.language);
        const methodLength = calculateMethodLength(method);
        return methodLength > Thresholds.LONG_METHOD;
    }
}

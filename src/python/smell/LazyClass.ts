import { Thresholds } from '../../Thresholds';
import { PyClass } from "../PyClass";

export class LazyClass {
  static detect(pyClass: PyClass): boolean {
    const cloc = pyClass.ctx.stop!.line - pyClass.ctx.start.line;
    return cloc < Thresholds.LAZY_CLASS_LOC;
  }
}
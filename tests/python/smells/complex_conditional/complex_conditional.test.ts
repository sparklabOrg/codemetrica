import { describe, expect, test, beforeAll } from '@jest/globals';
import { ComplexConditional } from '../../../../codemetrica/language/python/smell/ComplexConditional';
import { ParseSource } from '../../../../codemetrica/ParseSource';
import { PyFile, PyFunction } from '../../../../codemetrica/language/python';

describe('ComplexConditional Detection', () => {
  let functions: PyFunction[];

  beforeAll(() => {
    const file = ParseSource.fromFileSync('./tests/python/smells/complex_conditional/complex_conditional.py') as PyFile;
    functions = file.getFunctions();
  });

  test('should detect complex conditionals in the file', () => {
    let expressions = functions[0].getExpressions();
    const complexConditionals = expressions.filter(e => ComplexConditional.detect(e));
    expect(complexConditionals.length).toEqual(1);
  });

  test('should not detect complex conditionals when none exist', () => {
    let expressions = functions[1].getExpressions();
    const complexConditionals = expressions.filter(e => ComplexConditional.detect(e));
    expect(complexConditionals.length).toEqual(0);
  });
});
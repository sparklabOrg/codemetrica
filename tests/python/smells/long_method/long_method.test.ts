import { describe, expect, test, beforeAll } from '@jest/globals';
import { LongMethod } from '../../../../codemetrica/smell/LongMethod';
import { ParseSource } from '../../../../codemetrica/ParseSource';
import { PyFile, PyFunction } from '../../../../codemetrica/language/python';

describe('ComplexConditional Detection', () => {
  let functions: PyFunction[];

  beforeAll(() => {
    const file = ParseSource.fromFileSync('./tests/python/smells/long_method/long_method.py') as PyFile;
    functions = file.getFunctions();
  });

  test('should detect complex conditionals in the file', () => {
    expect(LongMethod.detect(functions[0])).toBe(true);
  });

  test('should not detect complex conditionals when none exist', () => {
    expect(LongMethod.detect(functions[1])).toBe(false);
  });
});
import { File } from '../../../../python/file';
import { describe, expect, test, beforeAll } from '@jest/globals';
import { ComplexConditional } from '../../../../python/smells/complex_conditional';

describe('ComplexConditional Detection', () => {
  beforeAll(() => {
    
  });

  test('should detect complex conditionals in the file', () => {
    let file = new File('./codemetrica/tests/python/smells/complex_conditional/complex_conditional.py');
    let expressions = file.getExpressions();
    const complexConditionals = expressions.filter(e => ComplexConditional.detect(e));
    expect(complexConditionals.length).toBeGreaterThan(0);
  });

  // test('should not detect complex conditionals when none exist', () => {
  //   const emptyFile = new File('./empty_file.py'); // Assuming this file has no complex conditionals
  //   const emptyExpressions = emptyFile.getExpressions();
  //   const complexConditionals = emptyExpressions.filter(e => ComplexConditional.detect(e));

  //   expect(complexConditionals.length).toBe(0);
  // });
});
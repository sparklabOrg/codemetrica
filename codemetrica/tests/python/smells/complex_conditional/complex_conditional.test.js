const fs = require('fs');

const complexConditional = require('../../../../py/smells/complex_conditional');

test('adds 1 + 2 to equal 3', () => {
    expect(complexConditional()).toBe(6);
});


const path = require('path');

test('should check for functions with too many arguments (code smell)', () => {
  const fileContent = fs.readFileSync('complex_conditional.py', 'utf8');
  
  const smells = checkForLongFunctions(fileContent);
  
  // Assert that a smell is found
  expect(smells.length).toBeGreaterThan(0);
  
  // Optionally, check the details of the smell
  expect(smells[0].function).toContain('def long_function');
  expect(smells[0].argsCount).toBe(7);  // This function has 7 arguments
});

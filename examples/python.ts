import {Class} from '../codemetrica/python/class';
import {File} from '../codemetrica/python/file';
import {ComplexConditional} from '../codemetrica/python/smells/complex_conditional';
import { LongMethod } from '../codemetrica/python/smells/long_method';


const file = new File('./test.py')
const classes = file.getClasses();

classes.forEach((c: Class) => {
    console.log(c.name);
    const methods = c.getMethods();
    methods.forEach(m => {
        console.log('\t' + m.name);
        if(LongMethod.detect(m)) {
            console.log('\tLong method detected ' + m.name);
        }
    });
});

const expressions = file.getExpressions();
expressions.forEach(e => {
    if(ComplexConditional.detect(e)) {
        console.log('Complex conditional detected ' + e.getText());
    }
});
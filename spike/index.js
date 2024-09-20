import File from '../codemetrica/py/file.js';
import ComplexConditional from '../codemetrica/py/smells/complex_conditional.js';


const file = new File('./test.py')
const classes = file.getClasses();

classes.forEach(c => {
    console.log(c.name);
    const methods = c.getMethods();
    methods.forEach(m => {
        console.log('\t' + m.name);
    });
});

const expressions = file.getExpressions();
expressions.forEach(e => {
    if(ComplexConditional.detect(e)) {
        console.log('Complex conditional detected ' + e.getText());
    }
});
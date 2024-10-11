import { Class } from '../codemetrica/java/class';
import { File } from '../codemetrica/java/file';
// import ComplexConditional from '../codemetrica/java/smells/long_method';
import { LongMethod } from '../codemetrica/java/smells/long_method';

const file = new File('./test.java')
const classes = file.getClasses();


classes.forEach((c: Class) => {
    console.log(c.name);
    const methods = c.getMethods();
    methods.forEach(m => {
        if(LongMethod.detect(m)) {
            console.log('\tLong method detected ' + m.name);
        }
        console.log('\t' + m.name);
    });
});

// const expressions = file.getExpressions();
// expressions.forEach(e => {
//     if(ComplexConditional.detect(e)) {
//         console.log('Complex conditional detected ' + e.getText());
//     }
// });
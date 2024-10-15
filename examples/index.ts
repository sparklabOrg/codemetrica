
import { ParseSource } from "../codemetrica/SourceParser";
import { LongMethod } from "../codemetrica/smell/longMethod";

const pyFile = ParseSource.fromFileSync("test.py");

for (const c of pyFile.getClasses()) {
    console.log(c.name);
    for(const m of c.getExpressions()) {
        console.log(m.getText());
        // console.log(LongMethod.detect(m));
    }
}

// for (const f of pyck.getSimpleStatements()) {
//     console.log(f);
// }

const javaFile = ParseSource.fromFileSync("test.java");

for (const c of javaFile.getClasses()) {
    for(const m of c.getMethods()) {
        console.log(m.name);
        console.log(LongMethod.detect(m));
    }
    // console.log(c.name);
}


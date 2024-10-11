
import { ParseSource } from "../codemetrica/SourceParser";
import { LongMethod } from "../codemetrica/smell/longMethod";

const pyck = ParseSource.fromFile("test.py");

for (const c of pyck.getClasses()) {
    console.log(c.name);
}

for (const f of pyck.getSimpleStatements()) {
    console.log(f);
}

const javack = ParseSource.fromFile("test.java");

for (const c of javack.getClasses()) {
    for(const m of c.getMethods()) {
        console.log(m.name);
        console.log(LongMethod.detect(m));
    }
    // console.log(c.name);
}


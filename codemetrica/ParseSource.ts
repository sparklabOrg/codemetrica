import { parsePythonSource } from './language/python/PyParser';
import { parseJavaSource } from './language/java/parser';

import * as fs from 'fs';
import { JavaFile } from './language/java';
import { PyFile } from './language/python';

type CodeFile = PyFile | JavaFile;

export class ParseSource {
    static fromFileSync(filePath: string): CodeFile {
        const extension = filePath.split('.').pop();

        if(!extension) {
            throw new Error('No valid file extension');
        }

        const text = fs.readFileSync(filePath, 'utf-8');
        const file =  ParseSource.fromText(text, extension);
        file.filePath = filePath;
        return file;
    }

    static fromText(text: string, extension: string): CodeFile {
        switch(extension) {
            case 'java':
                return new JavaFile(parseJavaSource(text));
            case 'py':
                return new PyFile(parsePythonSource(text));
            default:
                throw new Error('Unsupported language');
        }
    }
}
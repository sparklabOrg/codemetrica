import { ICodeBlock } from "./interface/ICodeBlock";

import { parsePythonSource } from './language/python/parser';
import { parseJavaSource } from './language/java/parser';

import * as fs from 'fs';
import { JavaCodeBlock } from './language/java';
import { PyCodeBlock } from './language/python';

export class ParseSource {
    static fromFile(filePath: string): ICodeBlock {
        const extension = filePath.split('.').pop();

        if(!extension) {
            throw new Error('No valid file extension');
        }

        const text = fs.readFileSync(filePath, 'utf-8');
        return ParseSource.fromText(text, extension);
    }

    static fromText(text: string, extension: string): JavaCodeBlock | PyCodeBlock {
        switch(extension) {
            case 'java':
                return new JavaCodeBlock(parseJavaSource(text));
            case 'py':
                return new PyCodeBlock(parsePythonSource(text));
            default:
                throw new Error('Unsupported language');
        }
    }
}
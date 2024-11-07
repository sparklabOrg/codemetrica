import { Thresholds } from '../../Thresholds';
import { PyCodeBlock } from '../PyCodeBlock';
import { PyFile } from '../PyFile';

export class LongIdentifier { 
    static detect(codeblock: PyCodeBlock<any>): boolean {
        const identifiers: string[] = codeblock.getIdentifiers();
        return identifiers.some(identifier => identifier.length > Thresholds.LONG_IDENTIFIER);
    }
}
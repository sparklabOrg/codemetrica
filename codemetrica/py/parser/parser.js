import antlr4 from 'antlr4';
import PythonLexer from './python3_12_1/PythonLexer.js';
import PythonParser from './python3_12_1/PythonParser.js';

export default class Parser {
    constructor() {
        this.parser = null;
    }

    static getAST(fileName) {
        const inputStream = new antlr4.FileStream(fileName);  
        const lexer = new PythonLexer(inputStream); 
        const tokenStream = new antlr4.CommonTokenStream(lexer); 

        this.parser = new PythonParser(tokenStream); 
        const tree = this.parser.file_input();  
        return tree;  
    }

    toString() {
        if (!this.parser) {
            return 'No parser initialized';
        }
        return this.parser.file_input().toStringTree(this.parser);
    }
}

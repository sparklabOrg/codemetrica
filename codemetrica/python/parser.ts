import antlr4 from 'antlr4';
import PythonLexer from '../../grammars-v4/python/python3_12_1/PythonLexer';
import PythonParser from '../../grammars-v4/python/python3_12_1/PythonParser';

export class Parser {
    static getANTLRContext(fileName: string) {
        const inputStream = new antlr4.FileStream(fileName);  
        const lexer = new PythonLexer(inputStream) as unknown as antlr4.Lexer; 
        const tokenStream = new antlr4.CommonTokenStream(lexer); 

        const parser = new PythonParser(tokenStream); 
        const tree = parser.file_input();  
        return tree;  
    }
}

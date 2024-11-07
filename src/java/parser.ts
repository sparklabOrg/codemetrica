import antlr4 from 'antlr4';
import JavaLexer from '../grammars-v4/java/java20/Java20Lexer';
import JavaParser from '../grammars-v4/java/java20/Java20Parser';

export class Parser {
    static getANTLRContext(fileName: string) {
        const inputStream = new antlr4.FileStream(fileName);  
        const lexer = new JavaLexer(inputStream);
        const tokenStream = new antlr4.CommonTokenStream(lexer); 

        const parser = new JavaParser(tokenStream); 
        const tree = parser.compilationUnit();
        
        return tree;  
    }
}

export function parseJavaSource(sourceCode: string) {
    const inputStream = new antlr4.InputStream(sourceCode) as unknown as antlr4.CharStream;;
    const lexer = new JavaLexer(inputStream) ;
    const tokenStream = new antlr4.CommonTokenStream(lexer); 

    const parser = new JavaParser(tokenStream); 
    const tree = parser.compilationUnit();  
    return tree;  
}
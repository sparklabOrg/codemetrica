## Generating Language Parsers for Python

#### Prerequisities
1. Make sure Java is installed on your system
2. Download the [ANTLR jar](https://www.antlr.org/download.html)
3. CLone the [grammars-v4](repo https://github.com/rafed/grammars-v4)

#### Generate Parsers
For each target language-
1. Download the Lexer.g4 & Parser.g4
2. ~~Preprocess them by running the transformGrammar.py~~
3. Download the Python3LexerBase.py and Python3ParserBase.py and put them in the same folder
4. Generate the parsers using ```java -jar antlr-4.13.2-complete.jar *.g4 -Dlanguage=JavaScript``` with options ```-listener``` or ```-visitor```
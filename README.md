# CodeMetrica

CodeMetrica is a work-in-progress framework designed to perform static analysis for multiple programming languages. It focuses on calculating various source code metrics and detecting code smells, providing a generalized approach to analyzing and improving code quality across different languages.

> [!CAUTION]
>
> The project is under active development, expect things to break every once in a while.

## Features

* Multi-language support: CodeMetrica is built to support multiple programming languages, with specific support for Java and Python currently in place.
* Generic code smell detection: Detect common code smells like Long Method, God Class, etc., with language-specific implementations where necessary.
* Code metrics calculation: Easily compute various code metrics such as method length, cyclomatic complexity, and more.
* Extensible design: Easily add support for new languages and custom code metrics.


## How It Works

* Parsing: Use ANTLR-generated parsers to extract abstract syntax trees (AST) for various languages.
* Metrics & Smells: Calculate metrics and detect code smells using the parsed AST, with specific logic per language when required.

## Status

The project is still under development, with plans to expand language support and refine smell detection capabilities.

Stay tuned for further updates as the project progresses!
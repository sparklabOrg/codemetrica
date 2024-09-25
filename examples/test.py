from abc import ABC, abstractmethod

from antlr4 import ParseTreeWalker, ParserRuleContext
from codemetrica.parsers.python.python3_12_1.PythonParser import PythonParser
from codemetrica.parsers.python.python3_12_1.PythonParserListener import PythonParserListener
from codemetrica.parsers.python.python3_12_1.PythonParserVisitor import PythonParserVisitor

class CMCommon(ABC):
    def __init__(self, ctx: ParserRuleContext) -> None:
        self.ctx:ParserRuleContext = ctx

    def getSimpleStmtements(self):
        class Simple_stmtListener(PythonParserListener):
            def __init__(self) -> None:
                self.statements = []
            def enterSimple_stmt(self, ctx: PythonParser.Simple_stmtContext):
                self.statements.append(ctx.getText())
                # return super().enterSimple_stmt(ctx)

        listener = Simple_stmtListener()
        walker = ParseTreeWalker()
        walker.walk(listener, self.ctx)

        if 1 > 2 and 3 > 4 or 8>5 or 5 > 7 and 5 > 6 or 9 > 5 and 5 > 6 or 9 > 5:
            return True

        return listener.statements

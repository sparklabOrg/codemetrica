// Generated from Java20Parser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import Java20ParserListener from "./Java20ParserListener.js";
import Java20ParserVisitor from "./Java20ParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class Java20Parser extends Parser {
	public static readonly EXPORTS = 1;
	public static readonly MODULE = 2;
	public static readonly NONSEALED = 3;
	public static readonly OACA = 4;
	public static readonly OPEN = 5;
	public static readonly OPENS = 6;
	public static readonly PERMITS = 7;
	public static readonly PROVIDES = 8;
	public static readonly RECORD = 9;
	public static readonly REQUIRES = 10;
	public static readonly SEALED = 11;
	public static readonly TO = 12;
	public static readonly TRANSITIVE = 13;
	public static readonly USES = 14;
	public static readonly VAR = 15;
	public static readonly WITH = 16;
	public static readonly YIELD = 17;
	public static readonly ABSTRACT = 18;
	public static readonly ASSERT = 19;
	public static readonly BOOLEAN = 20;
	public static readonly BREAK = 21;
	public static readonly BYTE = 22;
	public static readonly CASE = 23;
	public static readonly CATCH = 24;
	public static readonly CHAR = 25;
	public static readonly CLASS = 26;
	public static readonly CONST = 27;
	public static readonly CONTINUE = 28;
	public static readonly DEFAULT = 29;
	public static readonly DO = 30;
	public static readonly DOUBLE = 31;
	public static readonly ELSE = 32;
	public static readonly ENUM = 33;
	public static readonly EXTENDS = 34;
	public static readonly FINAL = 35;
	public static readonly FINALLY = 36;
	public static readonly FLOAT = 37;
	public static readonly FOR = 38;
	public static readonly IF = 39;
	public static readonly GOTO = 40;
	public static readonly IMPLEMENTS = 41;
	public static readonly IMPORT = 42;
	public static readonly INSTANCEOF = 43;
	public static readonly INT = 44;
	public static readonly INTERFACE = 45;
	public static readonly LONG = 46;
	public static readonly NATIVE = 47;
	public static readonly NEW = 48;
	public static readonly PACKAGE = 49;
	public static readonly PRIVATE = 50;
	public static readonly PROTECTED = 51;
	public static readonly PUBLIC = 52;
	public static readonly RETURN = 53;
	public static readonly SHORT = 54;
	public static readonly STATIC = 55;
	public static readonly STRICTFP = 56;
	public static readonly SUPER = 57;
	public static readonly SWITCH = 58;
	public static readonly SYNCHRONIZED = 59;
	public static readonly THIS = 60;
	public static readonly THROW = 61;
	public static readonly THROWS = 62;
	public static readonly TRANSIENT = 63;
	public static readonly TRY = 64;
	public static readonly VOID = 65;
	public static readonly VOLATILE = 66;
	public static readonly WHILE = 67;
	public static readonly UNDER_SCORE = 68;
	public static readonly IntegerLiteral = 69;
	public static readonly FloatingPointLiteral = 70;
	public static readonly BooleanLiteral = 71;
	public static readonly CharacterLiteral = 72;
	public static readonly StringLiteral = 73;
	public static readonly TextBlock = 74;
	public static readonly NullLiteral = 75;
	public static readonly LPAREN = 76;
	public static readonly RPAREN = 77;
	public static readonly LBRACE = 78;
	public static readonly RBRACE = 79;
	public static readonly LBRACK = 80;
	public static readonly RBRACK = 81;
	public static readonly SEMI = 82;
	public static readonly COMMA = 83;
	public static readonly DOT = 84;
	public static readonly ELLIPSIS = 85;
	public static readonly AT = 86;
	public static readonly COLONCOLON = 87;
	public static readonly ASSIGN = 88;
	public static readonly GT = 89;
	public static readonly LT = 90;
	public static readonly BANG = 91;
	public static readonly TILDE = 92;
	public static readonly QUESTION = 93;
	public static readonly COLON = 94;
	public static readonly ARROW = 95;
	public static readonly EQUAL = 96;
	public static readonly LE = 97;
	public static readonly GE = 98;
	public static readonly NOTEQUAL = 99;
	public static readonly AND = 100;
	public static readonly OR = 101;
	public static readonly INC = 102;
	public static readonly DEC = 103;
	public static readonly ADD = 104;
	public static readonly SUB = 105;
	public static readonly MUL = 106;
	public static readonly DIV = 107;
	public static readonly BITAND = 108;
	public static readonly BITOR = 109;
	public static readonly CARET = 110;
	public static readonly MOD = 111;
	public static readonly ADD_ASSIGN = 112;
	public static readonly SUB_ASSIGN = 113;
	public static readonly MUL_ASSIGN = 114;
	public static readonly DIV_ASSIGN = 115;
	public static readonly AND_ASSIGN = 116;
	public static readonly OR_ASSIGN = 117;
	public static readonly XOR_ASSIGN = 118;
	public static readonly MOD_ASSIGN = 119;
	public static readonly LSHIFT_ASSIGN = 120;
	public static readonly RSHIFT_ASSIGN = 121;
	public static readonly URSHIFT_ASSIGN = 122;
	public static readonly Identifier = 123;
	public static readonly WS = 124;
	public static readonly COMMENT = 125;
	public static readonly LINE_COMMENT = 126;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_start_ = 0;
	public static readonly RULE_identifier = 1;
	public static readonly RULE_typeIdentifier = 2;
	public static readonly RULE_unqualifiedMethodIdentifier = 3;
	public static readonly RULE_contextualKeyword = 4;
	public static readonly RULE_contextualKeywordMinusForTypeIdentifier = 5;
	public static readonly RULE_contextualKeywordMinusForUnqualifiedMethodIdentifier = 6;
	public static readonly RULE_literal = 7;
	public static readonly RULE_primitiveType = 8;
	public static readonly RULE_numericType = 9;
	public static readonly RULE_integralType = 10;
	public static readonly RULE_floatingPointType = 11;
	public static readonly RULE_referenceType = 12;
	public static readonly RULE_coit = 13;
	public static readonly RULE_classOrInterfaceType = 14;
	public static readonly RULE_classType = 15;
	public static readonly RULE_interfaceType = 16;
	public static readonly RULE_typeVariable = 17;
	public static readonly RULE_arrayType = 18;
	public static readonly RULE_dims = 19;
	public static readonly RULE_typeParameter = 20;
	public static readonly RULE_typeParameterModifier = 21;
	public static readonly RULE_typeBound = 22;
	public static readonly RULE_additionalBound = 23;
	public static readonly RULE_typeArguments = 24;
	public static readonly RULE_typeArgumentList = 25;
	public static readonly RULE_typeArgument = 26;
	public static readonly RULE_wildcard = 27;
	public static readonly RULE_wildcardBounds = 28;
	public static readonly RULE_moduleName = 29;
	public static readonly RULE_packageName = 30;
	public static readonly RULE_typeName = 31;
	public static readonly RULE_packageOrTypeName = 32;
	public static readonly RULE_expressionName = 33;
	public static readonly RULE_methodName = 34;
	public static readonly RULE_ambiguousName = 35;
	public static readonly RULE_compilationUnit = 36;
	public static readonly RULE_ordinaryCompilationUnit = 37;
	public static readonly RULE_modularCompilationUnit = 38;
	public static readonly RULE_packageDeclaration = 39;
	public static readonly RULE_packageModifier = 40;
	public static readonly RULE_importDeclaration = 41;
	public static readonly RULE_singleTypeImportDeclaration = 42;
	public static readonly RULE_typeImportOnDemandDeclaration = 43;
	public static readonly RULE_singleStaticImportDeclaration = 44;
	public static readonly RULE_staticImportOnDemandDeclaration = 45;
	public static readonly RULE_topLevelClassOrInterfaceDeclaration = 46;
	public static readonly RULE_moduleDeclaration = 47;
	public static readonly RULE_moduleDirective = 48;
	public static readonly RULE_requiresModifier = 49;
	public static readonly RULE_classDeclaration = 50;
	public static readonly RULE_normalClassDeclaration = 51;
	public static readonly RULE_classModifier = 52;
	public static readonly RULE_typeParameters = 53;
	public static readonly RULE_typeParameterList = 54;
	public static readonly RULE_classExtends = 55;
	public static readonly RULE_classImplements = 56;
	public static readonly RULE_interfaceTypeList = 57;
	public static readonly RULE_classPermits = 58;
	public static readonly RULE_classBody = 59;
	public static readonly RULE_classBodyDeclaration = 60;
	public static readonly RULE_classMemberDeclaration = 61;
	public static readonly RULE_fieldDeclaration = 62;
	public static readonly RULE_fieldModifier = 63;
	public static readonly RULE_variableDeclaratorList = 64;
	public static readonly RULE_variableDeclarator = 65;
	public static readonly RULE_variableDeclaratorId = 66;
	public static readonly RULE_variableInitializer = 67;
	public static readonly RULE_unannType = 68;
	public static readonly RULE_unannPrimitiveType = 69;
	public static readonly RULE_unannReferenceType = 70;
	public static readonly RULE_unannClassOrInterfaceType = 71;
	public static readonly RULE_uCOIT = 72;
	public static readonly RULE_unannClassType = 73;
	public static readonly RULE_unannInterfaceType = 74;
	public static readonly RULE_unannTypeVariable = 75;
	public static readonly RULE_unannArrayType = 76;
	public static readonly RULE_methodDeclaration = 77;
	public static readonly RULE_methodModifier = 78;
	public static readonly RULE_methodHeader = 79;
	public static readonly RULE_result = 80;
	public static readonly RULE_methodDeclarator = 81;
	public static readonly RULE_receiverParameter = 82;
	public static readonly RULE_formalParameterList = 83;
	public static readonly RULE_formalParameter = 84;
	public static readonly RULE_variableArityParameter = 85;
	public static readonly RULE_variableModifier = 86;
	public static readonly RULE_throwsT = 87;
	public static readonly RULE_exceptionTypeList = 88;
	public static readonly RULE_exceptionType = 89;
	public static readonly RULE_methodBody = 90;
	public static readonly RULE_instanceInitializer = 91;
	public static readonly RULE_staticInitializer = 92;
	public static readonly RULE_constructorDeclaration = 93;
	public static readonly RULE_constructorModifier = 94;
	public static readonly RULE_constructorDeclarator = 95;
	public static readonly RULE_simpleTypeName = 96;
	public static readonly RULE_constructorBody = 97;
	public static readonly RULE_explicitConstructorInvocation = 98;
	public static readonly RULE_enumDeclaration = 99;
	public static readonly RULE_enumBody = 100;
	public static readonly RULE_enumConstantList = 101;
	public static readonly RULE_enumConstant = 102;
	public static readonly RULE_enumConstantModifier = 103;
	public static readonly RULE_enumBodyDeclarations = 104;
	public static readonly RULE_recordDeclaration = 105;
	public static readonly RULE_recordHeader = 106;
	public static readonly RULE_recordComponentList = 107;
	public static readonly RULE_recordComponent = 108;
	public static readonly RULE_variableArityRecordComponent = 109;
	public static readonly RULE_recordComponentModifier = 110;
	public static readonly RULE_recordBody = 111;
	public static readonly RULE_recordBodyDeclaration = 112;
	public static readonly RULE_compactConstructorDeclaration = 113;
	public static readonly RULE_interfaceDeclaration = 114;
	public static readonly RULE_normalInterfaceDeclaration = 115;
	public static readonly RULE_interfaceModifier = 116;
	public static readonly RULE_interfaceExtends = 117;
	public static readonly RULE_interfacePermits = 118;
	public static readonly RULE_interfaceBody = 119;
	public static readonly RULE_interfaceMemberDeclaration = 120;
	public static readonly RULE_constantDeclaration = 121;
	public static readonly RULE_constantModifier = 122;
	public static readonly RULE_interfaceMethodDeclaration = 123;
	public static readonly RULE_interfaceMethodModifier = 124;
	public static readonly RULE_annotationInterfaceDeclaration = 125;
	public static readonly RULE_annotationInterfaceBody = 126;
	public static readonly RULE_annotationInterfaceMemberDeclaration = 127;
	public static readonly RULE_annotationInterfaceElementDeclaration = 128;
	public static readonly RULE_annotationInterfaceElementModifier = 129;
	public static readonly RULE_defaultValue = 130;
	public static readonly RULE_annotation = 131;
	public static readonly RULE_normalAnnotation = 132;
	public static readonly RULE_elementValuePairList = 133;
	public static readonly RULE_elementValuePair = 134;
	public static readonly RULE_elementValue = 135;
	public static readonly RULE_elementValueArrayInitializer = 136;
	public static readonly RULE_elementValueList = 137;
	public static readonly RULE_markerAnnotation = 138;
	public static readonly RULE_singleElementAnnotation = 139;
	public static readonly RULE_arrayInitializer = 140;
	public static readonly RULE_variableInitializerList = 141;
	public static readonly RULE_block = 142;
	public static readonly RULE_blockStatements = 143;
	public static readonly RULE_blockStatement = 144;
	public static readonly RULE_localClassOrInterfaceDeclaration = 145;
	public static readonly RULE_localVariableDeclaration = 146;
	public static readonly RULE_localVariableType = 147;
	public static readonly RULE_localVariableDeclarationStatement = 148;
	public static readonly RULE_statement = 149;
	public static readonly RULE_statementNoShortIf = 150;
	public static readonly RULE_statementWithoutTrailingSubstatement = 151;
	public static readonly RULE_emptyStatement_ = 152;
	public static readonly RULE_labeledStatement = 153;
	public static readonly RULE_labeledStatementNoShortIf = 154;
	public static readonly RULE_expressionStatement = 155;
	public static readonly RULE_statementExpression = 156;
	public static readonly RULE_ifThenStatement = 157;
	public static readonly RULE_ifThenElseStatement = 158;
	public static readonly RULE_ifThenElseStatementNoShortIf = 159;
	public static readonly RULE_assertStatement = 160;
	public static readonly RULE_switchStatement = 161;
	public static readonly RULE_switchBlock = 162;
	public static readonly RULE_switchRule = 163;
	public static readonly RULE_switchBlockStatementGroup = 164;
	public static readonly RULE_switchLabel = 165;
	public static readonly RULE_caseConstant = 166;
	public static readonly RULE_whileStatement = 167;
	public static readonly RULE_whileStatementNoShortIf = 168;
	public static readonly RULE_doStatement = 169;
	public static readonly RULE_forStatement = 170;
	public static readonly RULE_forStatementNoShortIf = 171;
	public static readonly RULE_basicForStatement = 172;
	public static readonly RULE_basicForStatementNoShortIf = 173;
	public static readonly RULE_forInit = 174;
	public static readonly RULE_forUpdate = 175;
	public static readonly RULE_statementExpressionList = 176;
	public static readonly RULE_enhancedForStatement = 177;
	public static readonly RULE_enhancedForStatementNoShortIf = 178;
	public static readonly RULE_breakStatement = 179;
	public static readonly RULE_continueStatement = 180;
	public static readonly RULE_returnStatement = 181;
	public static readonly RULE_throwStatement = 182;
	public static readonly RULE_synchronizedStatement = 183;
	public static readonly RULE_tryStatement = 184;
	public static readonly RULE_catches = 185;
	public static readonly RULE_catchClause = 186;
	public static readonly RULE_catchFormalParameter = 187;
	public static readonly RULE_catchType = 188;
	public static readonly RULE_finallyBlock = 189;
	public static readonly RULE_tryWithResourcesStatement = 190;
	public static readonly RULE_resourceSpecification = 191;
	public static readonly RULE_resourceList = 192;
	public static readonly RULE_resource = 193;
	public static readonly RULE_variableAccess = 194;
	public static readonly RULE_yieldStatement = 195;
	public static readonly RULE_pattern = 196;
	public static readonly RULE_typePattern = 197;
	public static readonly RULE_expression = 198;
	public static readonly RULE_primary = 199;
	public static readonly RULE_primaryNoNewArray = 200;
	public static readonly RULE_pNNA = 201;
	public static readonly RULE_classLiteral = 202;
	public static readonly RULE_classInstanceCreationExpression = 203;
	public static readonly RULE_unqualifiedClassInstanceCreationExpression = 204;
	public static readonly RULE_classOrInterfaceTypeToInstantiate = 205;
	public static readonly RULE_typeArgumentsOrDiamond = 206;
	public static readonly RULE_arrayCreationExpression = 207;
	public static readonly RULE_arrayCreationExpressionWithoutInitializer = 208;
	public static readonly RULE_arrayCreationExpressionWithInitializer = 209;
	public static readonly RULE_dimExprs = 210;
	public static readonly RULE_dimExpr = 211;
	public static readonly RULE_arrayAccess = 212;
	public static readonly RULE_fieldAccess = 213;
	public static readonly RULE_methodInvocation = 214;
	public static readonly RULE_argumentList = 215;
	public static readonly RULE_methodReference = 216;
	public static readonly RULE_postfixExpression = 217;
	public static readonly RULE_pfE = 218;
	public static readonly RULE_postIncrementExpression = 219;
	public static readonly RULE_postDecrementExpression = 220;
	public static readonly RULE_unaryExpression = 221;
	public static readonly RULE_preIncrementExpression = 222;
	public static readonly RULE_preDecrementExpression = 223;
	public static readonly RULE_unaryExpressionNotPlusMinus = 224;
	public static readonly RULE_castExpression = 225;
	public static readonly RULE_multiplicativeExpression = 226;
	public static readonly RULE_additiveExpression = 227;
	public static readonly RULE_shiftExpression = 228;
	public static readonly RULE_relationalExpression = 229;
	public static readonly RULE_equalityExpression = 230;
	public static readonly RULE_andExpression = 231;
	public static readonly RULE_exclusiveOrExpression = 232;
	public static readonly RULE_inclusiveOrExpression = 233;
	public static readonly RULE_conditionalAndExpression = 234;
	public static readonly RULE_conditionalOrExpression = 235;
	public static readonly RULE_conditionalExpression = 236;
	public static readonly RULE_assignmentExpression = 237;
	public static readonly RULE_assignment = 238;
	public static readonly RULE_leftHandSide = 239;
	public static readonly RULE_assignmentOperator = 240;
	public static readonly RULE_lambdaExpression = 241;
	public static readonly RULE_lambdaParameters = 242;
	public static readonly RULE_lambdaParameterList = 243;
	public static readonly RULE_lambdaParameter = 244;
	public static readonly RULE_lambdaParameterType = 245;
	public static readonly RULE_lambdaBody = 246;
	public static readonly RULE_switchExpression = 247;
	public static readonly RULE_constantExpression = 248;
	public static readonly literalNames: (string | null)[] = [ null, "'exports'", 
                                                            "'module'", 
                                                            "'non-sealed'", 
                                                            "'<>'", "'open'", 
                                                            "'opens'", "'permits'", 
                                                            "'provides'", 
                                                            "'record'", 
                                                            "'requires'", 
                                                            "'sealed'", 
                                                            "'to'", "'transitive'", 
                                                            "'uses'", "'var'", 
                                                            "'with'", "'yield'", 
                                                            "'abstract'", 
                                                            "'assert'", 
                                                            "'boolean'", 
                                                            "'break'", "'byte'", 
                                                            "'case'", "'catch'", 
                                                            "'char'", "'class'", 
                                                            "'const'", "'continue'", 
                                                            "'default'", 
                                                            "'do'", "'double'", 
                                                            "'else'", "'enum'", 
                                                            "'extends'", 
                                                            "'final'", "'finally'", 
                                                            "'float'", "'for'", 
                                                            "'if'", "'goto'", 
                                                            "'implements'", 
                                                            "'import'", 
                                                            "'instanceof'", 
                                                            "'int'", "'interface'", 
                                                            "'long'", "'native'", 
                                                            "'new'", "'package'", 
                                                            "'private'", 
                                                            "'protected'", 
                                                            "'public'", 
                                                            "'return'", 
                                                            "'short'", "'static'", 
                                                            "'strictfp'", 
                                                            "'super'", "'switch'", 
                                                            "'synchronized'", 
                                                            "'this'", "'throw'", 
                                                            "'throws'", 
                                                            "'transient'", 
                                                            "'try'", "'void'", 
                                                            "'volatile'", 
                                                            "'while'", "'_'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'null'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "';'", 
                                                            "','", "'.'", 
                                                            "'...'", "'@'", 
                                                            "'::'", "'='", 
                                                            "'>'", "'<'", 
                                                            "'!'", "'~'", 
                                                            "'?'", "':'", 
                                                            "'->'", "'=='", 
                                                            "'<='", "'>='", 
                                                            "'!='", "'&&'", 
                                                            "'||'", "'++'", 
                                                            "'--'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'&'", 
                                                            "'|'", "'^'", 
                                                            "'%'", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'%='", "'<<='", 
                                                            "'>>='", "'>>>='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "EXPORTS", 
                                                             "MODULE", "NONSEALED", 
                                                             "OACA", "OPEN", 
                                                             "OPENS", "PERMITS", 
                                                             "PROVIDES", 
                                                             "RECORD", "REQUIRES", 
                                                             "SEALED", "TO", 
                                                             "TRANSITIVE", 
                                                             "USES", "VAR", 
                                                             "WITH", "YIELD", 
                                                             "ABSTRACT", 
                                                             "ASSERT", "BOOLEAN", 
                                                             "BREAK", "BYTE", 
                                                             "CASE", "CATCH", 
                                                             "CHAR", "CLASS", 
                                                             "CONST", "CONTINUE", 
                                                             "DEFAULT", 
                                                             "DO", "DOUBLE", 
                                                             "ELSE", "ENUM", 
                                                             "EXTENDS", 
                                                             "FINAL", "FINALLY", 
                                                             "FLOAT", "FOR", 
                                                             "IF", "GOTO", 
                                                             "IMPLEMENTS", 
                                                             "IMPORT", "INSTANCEOF", 
                                                             "INT", "INTERFACE", 
                                                             "LONG", "NATIVE", 
                                                             "NEW", "PACKAGE", 
                                                             "PRIVATE", 
                                                             "PROTECTED", 
                                                             "PUBLIC", "RETURN", 
                                                             "SHORT", "STATIC", 
                                                             "STRICTFP", 
                                                             "SUPER", "SWITCH", 
                                                             "SYNCHRONIZED", 
                                                             "THIS", "THROW", 
                                                             "THROWS", "TRANSIENT", 
                                                             "TRY", "VOID", 
                                                             "VOLATILE", 
                                                             "WHILE", "UNDER_SCORE", 
                                                             "IntegerLiteral", 
                                                             "FloatingPointLiteral", 
                                                             "BooleanLiteral", 
                                                             "CharacterLiteral", 
                                                             "StringLiteral", 
                                                             "TextBlock", 
                                                             "NullLiteral", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACE", "RBRACE", 
                                                             "LBRACK", "RBRACK", 
                                                             "SEMI", "COMMA", 
                                                             "DOT", "ELLIPSIS", 
                                                             "AT", "COLONCOLON", 
                                                             "ASSIGN", "GT", 
                                                             "LT", "BANG", 
                                                             "TILDE", "QUESTION", 
                                                             "COLON", "ARROW", 
                                                             "EQUAL", "LE", 
                                                             "GE", "NOTEQUAL", 
                                                             "AND", "OR", 
                                                             "INC", "DEC", 
                                                             "ADD", "SUB", 
                                                             "MUL", "DIV", 
                                                             "BITAND", "BITOR", 
                                                             "CARET", "MOD", 
                                                             "ADD_ASSIGN", 
                                                             "SUB_ASSIGN", 
                                                             "MUL_ASSIGN", 
                                                             "DIV_ASSIGN", 
                                                             "AND_ASSIGN", 
                                                             "OR_ASSIGN", 
                                                             "XOR_ASSIGN", 
                                                             "MOD_ASSIGN", 
                                                             "LSHIFT_ASSIGN", 
                                                             "RSHIFT_ASSIGN", 
                                                             "URSHIFT_ASSIGN", 
                                                             "Identifier", 
                                                             "WS", "COMMENT", 
                                                             "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start_", "identifier", "typeIdentifier", "unqualifiedMethodIdentifier", 
		"contextualKeyword", "contextualKeywordMinusForTypeIdentifier", "contextualKeywordMinusForUnqualifiedMethodIdentifier", 
		"literal", "primitiveType", "numericType", "integralType", "floatingPointType", 
		"referenceType", "coit", "classOrInterfaceType", "classType", "interfaceType", 
		"typeVariable", "arrayType", "dims", "typeParameter", "typeParameterModifier", 
		"typeBound", "additionalBound", "typeArguments", "typeArgumentList", "typeArgument", 
		"wildcard", "wildcardBounds", "moduleName", "packageName", "typeName", 
		"packageOrTypeName", "expressionName", "methodName", "ambiguousName", 
		"compilationUnit", "ordinaryCompilationUnit", "modularCompilationUnit", 
		"packageDeclaration", "packageModifier", "importDeclaration", "singleTypeImportDeclaration", 
		"typeImportOnDemandDeclaration", "singleStaticImportDeclaration", "staticImportOnDemandDeclaration", 
		"topLevelClassOrInterfaceDeclaration", "moduleDeclaration", "moduleDirective", 
		"requiresModifier", "classDeclaration", "normalClassDeclaration", "classModifier", 
		"typeParameters", "typeParameterList", "classExtends", "classImplements", 
		"interfaceTypeList", "classPermits", "classBody", "classBodyDeclaration", 
		"classMemberDeclaration", "fieldDeclaration", "fieldModifier", "variableDeclaratorList", 
		"variableDeclarator", "variableDeclaratorId", "variableInitializer", "unannType", 
		"unannPrimitiveType", "unannReferenceType", "unannClassOrInterfaceType", 
		"uCOIT", "unannClassType", "unannInterfaceType", "unannTypeVariable", 
		"unannArrayType", "methodDeclaration", "methodModifier", "methodHeader", 
		"result", "methodDeclarator", "receiverParameter", "formalParameterList", 
		"formalParameter", "variableArityParameter", "variableModifier", "throwsT", 
		"exceptionTypeList", "exceptionType", "methodBody", "instanceInitializer", 
		"staticInitializer", "constructorDeclaration", "constructorModifier", 
		"constructorDeclarator", "simpleTypeName", "constructorBody", "explicitConstructorInvocation", 
		"enumDeclaration", "enumBody", "enumConstantList", "enumConstant", "enumConstantModifier", 
		"enumBodyDeclarations", "recordDeclaration", "recordHeader", "recordComponentList", 
		"recordComponent", "variableArityRecordComponent", "recordComponentModifier", 
		"recordBody", "recordBodyDeclaration", "compactConstructorDeclaration", 
		"interfaceDeclaration", "normalInterfaceDeclaration", "interfaceModifier", 
		"interfaceExtends", "interfacePermits", "interfaceBody", "interfaceMemberDeclaration", 
		"constantDeclaration", "constantModifier", "interfaceMethodDeclaration", 
		"interfaceMethodModifier", "annotationInterfaceDeclaration", "annotationInterfaceBody", 
		"annotationInterfaceMemberDeclaration", "annotationInterfaceElementDeclaration", 
		"annotationInterfaceElementModifier", "defaultValue", "annotation", "normalAnnotation", 
		"elementValuePairList", "elementValuePair", "elementValue", "elementValueArrayInitializer", 
		"elementValueList", "markerAnnotation", "singleElementAnnotation", "arrayInitializer", 
		"variableInitializerList", "block", "blockStatements", "blockStatement", 
		"localClassOrInterfaceDeclaration", "localVariableDeclaration", "localVariableType", 
		"localVariableDeclarationStatement", "statement", "statementNoShortIf", 
		"statementWithoutTrailingSubstatement", "emptyStatement_", "labeledStatement", 
		"labeledStatementNoShortIf", "expressionStatement", "statementExpression", 
		"ifThenStatement", "ifThenElseStatement", "ifThenElseStatementNoShortIf", 
		"assertStatement", "switchStatement", "switchBlock", "switchRule", "switchBlockStatementGroup", 
		"switchLabel", "caseConstant", "whileStatement", "whileStatementNoShortIf", 
		"doStatement", "forStatement", "forStatementNoShortIf", "basicForStatement", 
		"basicForStatementNoShortIf", "forInit", "forUpdate", "statementExpressionList", 
		"enhancedForStatement", "enhancedForStatementNoShortIf", "breakStatement", 
		"continueStatement", "returnStatement", "throwStatement", "synchronizedStatement", 
		"tryStatement", "catches", "catchClause", "catchFormalParameter", "catchType", 
		"finallyBlock", "tryWithResourcesStatement", "resourceSpecification", 
		"resourceList", "resource", "variableAccess", "yieldStatement", "pattern", 
		"typePattern", "expression", "primary", "primaryNoNewArray", "pNNA", "classLiteral", 
		"classInstanceCreationExpression", "unqualifiedClassInstanceCreationExpression", 
		"classOrInterfaceTypeToInstantiate", "typeArgumentsOrDiamond", "arrayCreationExpression", 
		"arrayCreationExpressionWithoutInitializer", "arrayCreationExpressionWithInitializer", 
		"dimExprs", "dimExpr", "arrayAccess", "fieldAccess", "methodInvocation", 
		"argumentList", "methodReference", "postfixExpression", "pfE", "postIncrementExpression", 
		"postDecrementExpression", "unaryExpression", "preIncrementExpression", 
		"preDecrementExpression", "unaryExpressionNotPlusMinus", "castExpression", 
		"multiplicativeExpression", "additiveExpression", "shiftExpression", "relationalExpression", 
		"equalityExpression", "andExpression", "exclusiveOrExpression", "inclusiveOrExpression", 
		"conditionalAndExpression", "conditionalOrExpression", "conditionalExpression", 
		"assignmentExpression", "assignment", "leftHandSide", "assignmentOperator", 
		"lambdaExpression", "lambdaParameters", "lambdaParameterList", "lambdaParameter", 
		"lambdaParameterType", "lambdaBody", "switchExpression", "constantExpression",
	];
	public get grammarFileName(): string { return "Java20Parser.g4"; }
	public get literalNames(): (string | null)[] { return Java20Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return Java20Parser.symbolicNames; }
	public get ruleNames(): string[] { return Java20Parser.ruleNames; }
	public get serializedATN(): number[] { return Java20Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, Java20Parser._ATN, Java20Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start_(): Start_Context {
		let localctx: Start_Context = new Start_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 0, Java20Parser.RULE_start_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this.compilationUnit();
			this.state = 499;
			this.match(Java20Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, Java20Parser.RULE_identifier);
		try {
			this.state = 503;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 123:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 501;
				this.match(Java20Parser.Identifier);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 502;
				this.contextualKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeIdentifier(): TypeIdentifierContext {
		let localctx: TypeIdentifierContext = new TypeIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, Java20Parser.RULE_typeIdentifier);
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 123:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 505;
				this.match(Java20Parser.Identifier);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 8:
			case 10:
			case 12:
			case 13:
			case 14:
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 506;
				this.contextualKeywordMinusForTypeIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unqualifiedMethodIdentifier(): UnqualifiedMethodIdentifierContext {
		let localctx: UnqualifiedMethodIdentifierContext = new UnqualifiedMethodIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, Java20Parser.RULE_unqualifiedMethodIdentifier);
		try {
			this.state = 511;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 123:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 509;
				this.match(Java20Parser.Identifier);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 510;
				this.contextualKeywordMinusForUnqualifiedMethodIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public contextualKeyword(): ContextualKeywordContext {
		let localctx: ContextualKeywordContext = new ContextualKeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, Java20Parser.RULE_contextualKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 513;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 262126) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public contextualKeywordMinusForTypeIdentifier(): ContextualKeywordMinusForTypeIdentifierContext {
		let localctx: ContextualKeywordMinusForTypeIdentifierContext = new ContextualKeywordMinusForTypeIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, Java20Parser.RULE_contextualKeywordMinusForTypeIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 515;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 95598) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public contextualKeywordMinusForUnqualifiedMethodIdentifier(): ContextualKeywordMinusForUnqualifiedMethodIdentifierContext {
		let localctx: ContextualKeywordMinusForUnqualifiedMethodIdentifierContext = new ContextualKeywordMinusForUnqualifiedMethodIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, Java20Parser.RULE_contextualKeywordMinusForUnqualifiedMethodIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 517;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 131054) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, Java20Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 519;
			_la = this._input.LA(1);
			if(!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 127) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, Java20Parser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 521;
				this.annotation();
				}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 529;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
			case 25:
			case 31:
			case 37:
			case 44:
			case 46:
			case 54:
				{
				this.state = 527;
				this.numericType();
				}
				break;
			case 20:
				{
				this.state = 528;
				this.match(Java20Parser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericType(): NumericTypeContext {
		let localctx: NumericTypeContext = new NumericTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, Java20Parser.RULE_numericType);
		try {
			this.state = 533;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
			case 25:
			case 44:
			case 46:
			case 54:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 531;
				this.integralType();
				}
				break;
			case 31:
			case 37:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 532;
				this.floatingPointType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integralType(): IntegralTypeContext {
		let localctx: IntegralTypeContext = new IntegralTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, Java20Parser.RULE_integralType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 535;
			_la = this._input.LA(1);
			if(!(_la===22 || _la===25 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1029) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public floatingPointType(): FloatingPointTypeContext {
		let localctx: FloatingPointTypeContext = new FloatingPointTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, Java20Parser.RULE_floatingPointType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 537;
			_la = this._input.LA(1);
			if(!(_la===31 || _la===37)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public referenceType(): ReferenceTypeContext {
		let localctx: ReferenceTypeContext = new ReferenceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, Java20Parser.RULE_referenceType);
		try {
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 539;
				this.classOrInterfaceType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 540;
				this.typeVariable();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 541;
				this.arrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coit(): CoitContext {
		let localctx: CoitContext = new CoitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, Java20Parser.RULE_coit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 544;
			this.match(Java20Parser.DOT);
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 545;
				this.annotation();
				}
				}
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 551;
			this.typeIdentifier();
			this.state = 553;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 552;
				this.typeArguments();
				}
				break;
			}
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 555;
				this.coit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, Java20Parser.RULE_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 561;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 558;
				this.packageName();
				this.state = 559;
				this.match(Java20Parser.DOT);
				}
				break;
			}
			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 563;
				this.annotation();
				}
				}
				this.state = 568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 569;
			this.typeIdentifier();
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 570;
				this.typeArguments();
				}
				break;
			}
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 573;
				this.coit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let localctx: ClassTypeContext = new ClassTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, Java20Parser.RULE_classType);
		let _la: number;
		try {
			this.state = 610;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===86) {
					{
					{
					this.state = 576;
					this.annotation();
					}
					}
					this.state = 581;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 582;
				this.typeIdentifier();
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 583;
					this.typeArguments();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 586;
				this.packageName();
				this.state = 587;
				this.match(Java20Parser.DOT);
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===86) {
					{
					{
					this.state = 588;
					this.annotation();
					}
					}
					this.state = 593;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 594;
				this.typeIdentifier();
				this.state = 596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 595;
					this.typeArguments();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 598;
				this.classOrInterfaceType();
				this.state = 599;
				this.match(Java20Parser.DOT);
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===86) {
					{
					{
					this.state = 600;
					this.annotation();
					}
					}
					this.state = 605;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 606;
				this.typeIdentifier();
				this.state = 608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 607;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceType(): InterfaceTypeContext {
		let localctx: InterfaceTypeContext = new InterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, Java20Parser.RULE_interfaceType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 612;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeVariable(): TypeVariableContext {
		let localctx: TypeVariableContext = new TypeVariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, Java20Parser.RULE_typeVariable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 614;
				this.annotation();
				}
				}
				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 620;
			this.typeIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let localctx: ArrayTypeContext = new ArrayTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, Java20Parser.RULE_arrayType);
		try {
			this.state = 631;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 622;
				this.primitiveType();
				this.state = 623;
				this.dims();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 625;
				this.classType();
				this.state = 626;
				this.dims();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 628;
				this.typeVariable();
				this.state = 629;
				this.dims();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dims(): DimsContext {
		let localctx: DimsContext = new DimsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, Java20Parser.RULE_dims);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 633;
				this.annotation();
				}
				}
				this.state = 638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 639;
			this.match(Java20Parser.LBRACK);
			this.state = 640;
			this.match(Java20Parser.RBRACK);
			this.state = 651;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 644;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===86) {
						{
						{
						this.state = 641;
						this.annotation();
						}
						}
						this.state = 646;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 647;
					this.match(Java20Parser.LBRACK);
					this.state = 648;
					this.match(Java20Parser.RBRACK);
					}
					}
				}
				this.state = 653;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let localctx: TypeParameterContext = new TypeParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, Java20Parser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 654;
				this.typeParameterModifier();
				}
				}
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 660;
			this.typeIdentifier();
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 661;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameterModifier(): TypeParameterModifierContext {
		let localctx: TypeParameterModifierContext = new TypeParameterModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, Java20Parser.RULE_typeParameterModifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 664;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let localctx: TypeBoundContext = new TypeBoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, Java20Parser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 666;
			this.match(Java20Parser.EXTENDS);
			this.state = 675;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 667;
				this.typeVariable();
				}
				break;
			case 2:
				{
				this.state = 668;
				this.classOrInterfaceType();
				this.state = 672;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===108) {
					{
					{
					this.state = 669;
					this.additionalBound();
					}
					}
					this.state = 674;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additionalBound(): AdditionalBoundContext {
		let localctx: AdditionalBoundContext = new AdditionalBoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, Java20Parser.RULE_additionalBound);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 677;
			this.match(Java20Parser.BITAND);
			this.state = 678;
			this.interfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let localctx: TypeArgumentsContext = new TypeArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, Java20Parser.RULE_typeArguments);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 680;
			this.match(Java20Parser.LT);
			this.state = 681;
			this.typeArgumentList();
			this.state = 682;
			this.match(Java20Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgumentList(): TypeArgumentListContext {
		let localctx: TypeArgumentListContext = new TypeArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, Java20Parser.RULE_typeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 684;
			this.typeArgument();
			this.state = 689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 685;
				this.match(Java20Parser.COMMA);
				this.state = 686;
				this.typeArgument();
				}
				}
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let localctx: TypeArgumentContext = new TypeArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, Java20Parser.RULE_typeArgument);
		try {
			this.state = 694;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 692;
				this.referenceType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 693;
				this.wildcard();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wildcard(): WildcardContext {
		let localctx: WildcardContext = new WildcardContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, Java20Parser.RULE_wildcard);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 696;
				this.annotation();
				}
				}
				this.state = 701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 702;
			this.match(Java20Parser.QUESTION);
			this.state = 704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34 || _la===57) {
				{
				this.state = 703;
				this.wildcardBounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wildcardBounds(): WildcardBoundsContext {
		let localctx: WildcardBoundsContext = new WildcardBoundsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, Java20Parser.RULE_wildcardBounds);
		try {
			this.state = 710;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 34:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 706;
				this.match(Java20Parser.EXTENDS);
				this.state = 707;
				this.referenceType();
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 708;
				this.match(Java20Parser.SUPER);
				this.state = 709;
				this.referenceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleName(): ModuleNameContext {
		let localctx: ModuleNameContext = new ModuleNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, Java20Parser.RULE_moduleName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 712;
			this.identifier();
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===84) {
				{
				this.state = 713;
				this.match(Java20Parser.DOT);
				this.state = 714;
				this.moduleName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packageName(): PackageNameContext {
		let localctx: PackageNameContext = new PackageNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, Java20Parser.RULE_packageName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 717;
			this.identifier();
			this.state = 720;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 718;
				this.match(Java20Parser.DOT);
				this.state = 719;
				this.packageName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let localctx: TypeNameContext = new TypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, Java20Parser.RULE_typeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 722;
			this.packageName();
			this.state = 725;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 723;
				this.match(Java20Parser.DOT);
				this.state = 724;
				this.typeIdentifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packageOrTypeName(): PackageOrTypeNameContext {
		let localctx: PackageOrTypeNameContext = new PackageOrTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, Java20Parser.RULE_packageOrTypeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 727;
			this.identifier();
			this.state = 730;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 728;
				this.match(Java20Parser.DOT);
				this.state = 729;
				this.packageOrTypeName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionName(): ExpressionNameContext {
		let localctx: ExpressionNameContext = new ExpressionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, Java20Parser.RULE_expressionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 735;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 732;
				this.ambiguousName();
				this.state = 733;
				this.match(Java20Parser.DOT);
				}
				break;
			}
			this.state = 737;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodName(): MethodNameContext {
		let localctx: MethodNameContext = new MethodNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, Java20Parser.RULE_methodName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 739;
			this.unqualifiedMethodIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ambiguousName(): AmbiguousNameContext {
		let localctx: AmbiguousNameContext = new AmbiguousNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, Java20Parser.RULE_ambiguousName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 741;
			this.identifier();
			this.state = 744;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 742;
				this.match(Java20Parser.DOT);
				this.state = 743;
				this.ambiguousName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, Java20Parser.RULE_compilationUnit);
		try {
			this.state = 748;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 746;
				this.ordinaryCompilationUnit();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 747;
				this.modularCompilationUnit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ordinaryCompilationUnit(): OrdinaryCompilationUnitContext {
		let localctx: OrdinaryCompilationUnitContext = new OrdinaryCompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, Java20Parser.RULE_ordinaryCompilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 750;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===42) {
				{
				{
				this.state = 753;
				this.importDeclaration();
				}
				}
				this.state = 758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67373576) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 13504517) !== 0) || _la===82 || _la===86) {
				{
				{
				this.state = 759;
				this.topLevelClassOrInterfaceDeclaration();
				}
				}
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public modularCompilationUnit(): ModularCompilationUnitContext {
		let localctx: ModularCompilationUnitContext = new ModularCompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, Java20Parser.RULE_modularCompilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===42) {
				{
				{
				this.state = 765;
				this.importDeclaration();
				}
				}
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 771;
			this.moduleDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let localctx: PackageDeclarationContext = new PackageDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, Java20Parser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 776;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 773;
				this.packageModifier();
				}
				}
				this.state = 778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 779;
			this.match(Java20Parser.PACKAGE);
			this.state = 780;
			this.identifier();
			this.state = 785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===84) {
				{
				{
				this.state = 781;
				this.match(Java20Parser.DOT);
				this.state = 782;
				this.identifier();
				}
				}
				this.state = 787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 788;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packageModifier(): PackageModifierContext {
		let localctx: PackageModifierContext = new PackageModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, Java20Parser.RULE_packageModifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 790;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, Java20Parser.RULE_importDeclaration);
		try {
			this.state = 796;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 792;
				this.singleTypeImportDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 793;
				this.typeImportOnDemandDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 794;
				this.singleStaticImportDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 795;
				this.staticImportOnDemandDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext {
		let localctx: SingleTypeImportDeclarationContext = new SingleTypeImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, Java20Parser.RULE_singleTypeImportDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 798;
			this.match(Java20Parser.IMPORT);
			this.state = 799;
			this.typeName();
			this.state = 800;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext {
		let localctx: TypeImportOnDemandDeclarationContext = new TypeImportOnDemandDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, Java20Parser.RULE_typeImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 802;
			this.match(Java20Parser.IMPORT);
			this.state = 803;
			this.packageOrTypeName();
			this.state = 804;
			this.match(Java20Parser.DOT);
			this.state = 805;
			this.match(Java20Parser.MUL);
			this.state = 806;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext {
		let localctx: SingleStaticImportDeclarationContext = new SingleStaticImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, Java20Parser.RULE_singleStaticImportDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 808;
			this.match(Java20Parser.IMPORT);
			this.state = 809;
			this.match(Java20Parser.STATIC);
			this.state = 810;
			this.typeName();
			this.state = 811;
			this.match(Java20Parser.DOT);
			this.state = 812;
			this.identifier();
			this.state = 813;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext {
		let localctx: StaticImportOnDemandDeclarationContext = new StaticImportOnDemandDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, Java20Parser.RULE_staticImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 815;
			this.match(Java20Parser.IMPORT);
			this.state = 816;
			this.match(Java20Parser.STATIC);
			this.state = 817;
			this.typeName();
			this.state = 818;
			this.match(Java20Parser.DOT);
			this.state = 819;
			this.match(Java20Parser.MUL);
			this.state = 820;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public topLevelClassOrInterfaceDeclaration(): TopLevelClassOrInterfaceDeclarationContext {
		let localctx: TopLevelClassOrInterfaceDeclarationContext = new TopLevelClassOrInterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, Java20Parser.RULE_topLevelClassOrInterfaceDeclaration);
		try {
			this.state = 825;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 822;
				this.classDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 823;
				this.interfaceDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 824;
				this.match(Java20Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleDeclaration(): ModuleDeclarationContext {
		let localctx: ModuleDeclarationContext = new ModuleDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, Java20Parser.RULE_moduleDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 827;
				this.annotation();
				}
				}
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 833;
				this.match(Java20Parser.OPEN);
				}
			}

			this.state = 836;
			this.match(Java20Parser.MODULE);
			this.state = 837;
			this.identifier();
			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===84) {
				{
				{
				this.state = 838;
				this.match(Java20Parser.DOT);
				this.state = 839;
				this.identifier();
				}
				}
				this.state = 844;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 845;
			this.match(Java20Parser.LBRACE);
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 17730) !== 0)) {
				{
				{
				this.state = 846;
				this.moduleDirective();
				}
				}
				this.state = 851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 852;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleDirective(): ModuleDirectiveContext {
		let localctx: ModuleDirectiveContext = new ModuleDirectiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, Java20Parser.RULE_moduleDirective);
		let _la: number;
		try {
			let _alt: number;
			this.state = 911;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 854;
				this.match(Java20Parser.REQUIRES);
				this.state = 858;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 54, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 855;
						this.requiresModifier();
						}
						}
					}
					this.state = 860;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 54, this._ctx);
				}
				this.state = 861;
				this.moduleName();
				this.state = 862;
				this.match(Java20Parser.SEMI);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 864;
				this.match(Java20Parser.EXPORTS);
				this.state = 865;
				this.packageName();
				this.state = 875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 866;
					this.match(Java20Parser.TO);
					this.state = 867;
					this.moduleName();
					this.state = 872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===83) {
						{
						{
						this.state = 868;
						this.match(Java20Parser.COMMA);
						this.state = 869;
						this.moduleName();
						}
						}
						this.state = 874;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 877;
				this.match(Java20Parser.SEMI);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 879;
				this.match(Java20Parser.OPENS);
				this.state = 880;
				this.packageName();
				this.state = 890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 881;
					this.match(Java20Parser.TO);
					this.state = 882;
					this.moduleName();
					this.state = 887;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===83) {
						{
						{
						this.state = 883;
						this.match(Java20Parser.COMMA);
						this.state = 884;
						this.moduleName();
						}
						}
						this.state = 889;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 892;
				this.match(Java20Parser.SEMI);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 894;
				this.match(Java20Parser.USES);
				this.state = 895;
				this.typeName();
				this.state = 896;
				this.match(Java20Parser.SEMI);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 898;
				this.match(Java20Parser.PROVIDES);
				this.state = 899;
				this.typeName();
				this.state = 900;
				this.match(Java20Parser.WITH);
				this.state = 901;
				this.typeName();
				this.state = 906;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===83) {
					{
					{
					this.state = 902;
					this.match(Java20Parser.COMMA);
					this.state = 903;
					this.typeName();
					}
					}
					this.state = 908;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 909;
				this.match(Java20Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public requiresModifier(): RequiresModifierContext {
		let localctx: RequiresModifierContext = new RequiresModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, Java20Parser.RULE_requiresModifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 913;
			_la = this._input.LA(1);
			if(!(_la===13 || _la===55)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, Java20Parser.RULE_classDeclaration);
		try {
			this.state = 918;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 915;
				this.normalClassDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 916;
				this.enumDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 917;
				this.recordDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public normalClassDeclaration(): NormalClassDeclarationContext {
		let localctx: NormalClassDeclarationContext = new NormalClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, Java20Parser.RULE_normalClassDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 923;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 264200) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3375105) !== 0) || _la===86) {
				{
				{
				this.state = 920;
				this.classModifier();
				}
				}
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 926;
			this.match(Java20Parser.CLASS);
			this.state = 927;
			this.typeIdentifier();
			this.state = 929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90) {
				{
				this.state = 928;
				this.typeParameters();
				}
			}

			this.state = 932;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 931;
				this.classExtends();
				}
			}

			this.state = 935;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 934;
				this.classImplements();
				}
			}

			this.state = 938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 937;
				this.classPermits();
				}
			}

			this.state = 940;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classModifier(): ClassModifierContext {
		let localctx: ClassModifierContext = new ClassModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, Java20Parser.RULE_classModifier);
		try {
			this.state = 952;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 942;
				this.annotation();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 943;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 944;
				this.match(Java20Parser.PROTECTED);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 945;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 946;
				this.match(Java20Parser.ABSTRACT);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 947;
				this.match(Java20Parser.STATIC);
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 948;
				this.match(Java20Parser.FINAL);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 949;
				this.match(Java20Parser.SEALED);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 950;
				this.match(Java20Parser.NONSEALED);
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 951;
				this.match(Java20Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let localctx: TypeParametersContext = new TypeParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, Java20Parser.RULE_typeParameters);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 954;
			this.match(Java20Parser.LT);
			this.state = 955;
			this.typeParameterList();
			this.state = 956;
			this.match(Java20Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameterList(): TypeParameterListContext {
		let localctx: TypeParameterListContext = new TypeParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, Java20Parser.RULE_typeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 958;
			this.typeParameter();
			this.state = 963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 959;
				this.match(Java20Parser.COMMA);
				this.state = 960;
				this.typeParameter();
				}
				}
				this.state = 965;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classExtends(): ClassExtendsContext {
		let localctx: ClassExtendsContext = new ClassExtendsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, Java20Parser.RULE_classExtends);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 966;
			this.match(Java20Parser.EXTENDS);
			this.state = 967;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classImplements(): ClassImplementsContext {
		let localctx: ClassImplementsContext = new ClassImplementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, Java20Parser.RULE_classImplements);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 969;
			this.match(Java20Parser.IMPLEMENTS);
			this.state = 970;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceTypeList(): InterfaceTypeListContext {
		let localctx: InterfaceTypeListContext = new InterfaceTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, Java20Parser.RULE_interfaceTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 972;
			this.interfaceType();
			this.state = 977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 973;
				this.match(Java20Parser.COMMA);
				this.state = 974;
				this.interfaceType();
				}
				}
				this.state = 979;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classPermits(): ClassPermitsContext {
		let localctx: ClassPermitsContext = new ClassPermitsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, Java20Parser.RULE_classPermits);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 980;
			this.match(Java20Parser.PERMITS);
			this.state = 981;
			this.typeName();
			this.state = 986;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 982;
				this.match(Java20Parser.COMMA);
				this.state = 983;
				this.typeName();
				}
				}
				this.state = 988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let localctx: ClassBodyContext = new ClassBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, Java20Parser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 989;
			this.match(Java20Parser.LBRACE);
			this.state = 993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2253914094) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1156478997) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 35790851) !== 0) || _la===123) {
				{
				{
				this.state = 990;
				this.classBodyDeclaration();
				}
				}
				this.state = 995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 996;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, Java20Parser.RULE_classBodyDeclaration);
		try {
			this.state = 1002;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 998;
				this.classMemberDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 999;
				this.instanceInitializer();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1000;
				this.staticInitializer();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1001;
				this.constructorDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		let localctx: ClassMemberDeclarationContext = new ClassMemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, Java20Parser.RULE_classMemberDeclaration);
		try {
			this.state = 1009;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1004;
				this.fieldDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1005;
				this.methodDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1006;
				this.classDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1007;
				this.interfaceDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1008;
				this.match(Java20Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let localctx: FieldDeclarationContext = new FieldDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, Java20Parser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1014;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2417197057) !== 0) || _la===86) {
				{
				{
				this.state = 1011;
				this.fieldModifier();
				}
				}
				this.state = 1016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1017;
			this.unannType();
			this.state = 1018;
			this.variableDeclaratorList();
			this.state = 1019;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldModifier(): FieldModifierContext {
		let localctx: FieldModifierContext = new FieldModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, Java20Parser.RULE_fieldModifier);
		try {
			this.state = 1029;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1021;
				this.annotation();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1022;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1023;
				this.match(Java20Parser.PROTECTED);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1024;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1025;
				this.match(Java20Parser.STATIC);
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1026;
				this.match(Java20Parser.FINAL);
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1027;
				this.match(Java20Parser.TRANSIENT);
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1028;
				this.match(Java20Parser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorList(): VariableDeclaratorListContext {
		let localctx: VariableDeclaratorListContext = new VariableDeclaratorListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, Java20Parser.RULE_variableDeclaratorList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1031;
			this.variableDeclarator();
			this.state = 1036;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1032;
					this.match(Java20Parser.COMMA);
					this.state = 1033;
					this.variableDeclarator();
					}
					}
				}
				this.state = 1038;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 76, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, Java20Parser.RULE_variableDeclarator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1039;
			this.variableDeclaratorId();
			this.state = 1042;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 1040;
				this.match(Java20Parser.ASSIGN);
				this.state = 1041;
				this.variableInitializer();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, Java20Parser.RULE_variableDeclaratorId);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1044;
			this.identifier();
			this.state = 1046;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 1045;
				this.dims();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let localctx: VariableInitializerContext = new VariableInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, Java20Parser.RULE_variableInitializer);
		try {
			this.state = 1050;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 20:
			case 22:
			case 25:
			case 31:
			case 37:
			case 44:
			case 46:
			case 48:
			case 54:
			case 57:
			case 58:
			case 60:
			case 65:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 86:
			case 91:
			case 92:
			case 102:
			case 103:
			case 104:
			case 105:
			case 123:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1048;
				this.expression();
				}
				break;
			case 78:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1049;
				this.arrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannType(): UnannTypeContext {
		let localctx: UnannTypeContext = new UnannTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, Java20Parser.RULE_unannType);
		try {
			this.state = 1054;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1052;
				this.unannPrimitiveType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1053;
				this.unannReferenceType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		let localctx: UnannPrimitiveTypeContext = new UnannPrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, Java20Parser.RULE_unannPrimitiveType);
		try {
			this.state = 1058;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
			case 25:
			case 31:
			case 37:
			case 44:
			case 46:
			case 54:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1056;
				this.numericType();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1057;
				this.match(Java20Parser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannReferenceType(): UnannReferenceTypeContext {
		let localctx: UnannReferenceTypeContext = new UnannReferenceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, Java20Parser.RULE_unannReferenceType);
		try {
			this.state = 1063;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1060;
				this.unannClassOrInterfaceType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1061;
				this.unannTypeVariable();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1062;
				this.unannArrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		let localctx: UnannClassOrInterfaceTypeContext = new UnannClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, Java20Parser.RULE_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1073;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 1065;
				this.packageName();
				this.state = 1066;
				this.match(Java20Parser.DOT);
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===86) {
					{
					{
					this.state = 1067;
					this.annotation();
					}
					}
					this.state = 1072;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 1075;
			this.typeIdentifier();
			this.state = 1077;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 1076;
				this.typeArguments();
				}
				break;
			}
			this.state = 1080;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 1079;
				this.uCOIT();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public uCOIT(): UCOITContext {
		let localctx: UCOITContext = new UCOITContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, Java20Parser.RULE_uCOIT);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1082;
			this.match(Java20Parser.DOT);
			this.state = 1086;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 1083;
				this.annotation();
				}
				}
				this.state = 1088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1089;
			this.typeIdentifier();
			this.state = 1091;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 1090;
				this.typeArguments();
				}
				break;
			}
			this.state = 1094;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 1093;
				this.uCOIT();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannClassType(): UnannClassTypeContext {
		let localctx: UnannClassTypeContext = new UnannClassTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, Java20Parser.RULE_unannClassType);
		let _la: number;
		try {
			this.state = 1115;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1096;
				this.typeIdentifier();
				this.state = 1098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 1097;
					this.typeArguments();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1102;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 1100;
					this.packageName();
					}
					break;
				case 2:
					{
					this.state = 1101;
					this.unannClassOrInterfaceType();
					}
					break;
				}
				this.state = 1104;
				this.match(Java20Parser.DOT);
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===86) {
					{
					{
					this.state = 1105;
					this.annotation();
					}
					}
					this.state = 1110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1111;
				this.typeIdentifier();
				this.state = 1113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 1112;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType(): UnannInterfaceTypeContext {
		let localctx: UnannInterfaceTypeContext = new UnannInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, Java20Parser.RULE_unannInterfaceType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1117;
			this.unannClassType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannTypeVariable(): UnannTypeVariableContext {
		let localctx: UnannTypeVariableContext = new UnannTypeVariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, Java20Parser.RULE_unannTypeVariable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1119;
			this.typeIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannArrayType(): UnannArrayTypeContext {
		let localctx: UnannArrayTypeContext = new UnannArrayTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, Java20Parser.RULE_unannArrayType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1124;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1121;
				this.unannPrimitiveType();
				}
				break;
			case 2:
				{
				this.state = 1122;
				this.unannClassOrInterfaceType();
				}
				break;
			case 3:
				{
				this.state = 1123;
				this.unannTypeVariable();
				}
				break;
			}
			this.state = 1126;
			this.dims();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let localctx: MethodDeclarationContext = new MethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, Java20Parser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 20156417) !== 0) || _la===86) {
				{
				{
				this.state = 1128;
				this.methodModifier();
				}
				}
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1134;
			this.methodHeader();
			this.state = 1135;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodModifier(): MethodModifierContext {
		let localctx: MethodModifierContext = new MethodModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, Java20Parser.RULE_methodModifier);
		try {
			this.state = 1147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1137;
				this.annotation();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1138;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1139;
				this.match(Java20Parser.PROTECTED);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1140;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1141;
				this.match(Java20Parser.ABSTRACT);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1142;
				this.match(Java20Parser.STATIC);
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1143;
				this.match(Java20Parser.FINAL);
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1144;
				this.match(Java20Parser.SYNCHRONIZED);
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1145;
				this.match(Java20Parser.NATIVE);
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1146;
				this.match(Java20Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodHeader(): MethodHeaderContext {
		let localctx: MethodHeaderContext = new MethodHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, Java20Parser.RULE_methodHeader);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90) {
				{
				this.state = 1149;
				this.typeParameters();
				this.state = 1153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===86) {
					{
					{
					this.state = 1150;
					this.annotation();
					}
					}
					this.state = 1155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1158;
			this.result();
			this.state = 1159;
			this.methodDeclarator();
			this.state = 1161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 1160;
				this.throwsT();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let localctx: ResultContext = new ResultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, Java20Parser.RULE_result);
		try {
			this.state = 1165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 20:
			case 22:
			case 25:
			case 31:
			case 37:
			case 44:
			case 46:
			case 54:
			case 123:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1163;
				this.unannType();
				}
				break;
			case 65:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1164;
				this.match(Java20Parser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodDeclarator(): MethodDeclaratorContext {
		let localctx: MethodDeclaratorContext = new MethodDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, Java20Parser.RULE_methodDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1167;
			this.identifier();
			this.state = 1168;
			this.match(Java20Parser.LPAREN);
			this.state = 1172;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 1169;
				this.receiverParameter();
				this.state = 1170;
				this.match(Java20Parser.COMMA);
				}
				break;
			}
			this.state = 1175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 526853) !== 0) || _la===86 || _la===123) {
				{
				this.state = 1174;
				this.formalParameterList();
				}
			}

			this.state = 1177;
			this.match(Java20Parser.RPAREN);
			this.state = 1179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===80 || _la===86) {
				{
				this.state = 1178;
				this.dims();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public receiverParameter(): ReceiverParameterContext {
		let localctx: ReceiverParameterContext = new ReceiverParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, Java20Parser.RULE_receiverParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 1181;
				this.annotation();
				}
				}
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1187;
			this.unannType();
			this.state = 1191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262126) !== 0) || _la===123) {
				{
				this.state = 1188;
				this.identifier();
				this.state = 1189;
				this.match(Java20Parser.DOT);
				}
			}

			this.state = 1193;
			this.match(Java20Parser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let localctx: FormalParameterListContext = new FormalParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, Java20Parser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1195;
			this.formalParameter();
			this.state = 1200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 1196;
				this.match(Java20Parser.COMMA);
				this.state = 1197;
				this.formalParameter();
				}
				}
				this.state = 1202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let localctx: FormalParameterContext = new FormalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, Java20Parser.RULE_formalParameter);
		let _la: number;
		try {
			this.state = 1213;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===35 || _la===86) {
					{
					{
					this.state = 1203;
					this.variableModifier();
					}
					}
					this.state = 1208;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1209;
				this.unannType();
				this.state = 1210;
				this.variableDeclaratorId();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1212;
				this.variableArityParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableArityParameter(): VariableArityParameterContext {
		let localctx: VariableArityParameterContext = new VariableArityParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, Java20Parser.RULE_variableArityParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35 || _la===86) {
				{
				{
				this.state = 1215;
				this.variableModifier();
				}
				}
				this.state = 1220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1221;
			this.unannType();
			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 1222;
				this.annotation();
				}
				}
				this.state = 1227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1228;
			this.match(Java20Parser.ELLIPSIS);
			this.state = 1229;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let localctx: VariableModifierContext = new VariableModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, Java20Parser.RULE_variableModifier);
		try {
			this.state = 1233;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1231;
				this.annotation();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1232;
				this.match(Java20Parser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public throwsT(): ThrowsTContext {
		let localctx: ThrowsTContext = new ThrowsTContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, Java20Parser.RULE_throwsT);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1235;
			this.match(Java20Parser.THROWS);
			this.state = 1236;
			this.exceptionTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exceptionTypeList(): ExceptionTypeListContext {
		let localctx: ExceptionTypeListContext = new ExceptionTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, Java20Parser.RULE_exceptionTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1238;
			this.exceptionType();
			this.state = 1243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 1239;
				this.match(Java20Parser.COMMA);
				this.state = 1240;
				this.exceptionType();
				}
				}
				this.state = 1245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exceptionType(): ExceptionTypeContext {
		let localctx: ExceptionTypeContext = new ExceptionTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, Java20Parser.RULE_exceptionType);
		try {
			this.state = 1248;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1246;
				this.classType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1247;
				this.typeVariable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let localctx: MethodBodyContext = new MethodBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, Java20Parser.RULE_methodBody);
		try {
			this.state = 1252;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 78:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1250;
				this.block();
				}
				break;
			case 82:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1251;
				this.match(Java20Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public instanceInitializer(): InstanceInitializerContext {
		let localctx: InstanceInitializerContext = new InstanceInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, Java20Parser.RULE_instanceInitializer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1254;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public staticInitializer(): StaticInitializerContext {
		let localctx: StaticInitializerContext = new StaticInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, Java20Parser.RULE_staticInitializer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1256;
			this.match(Java20Parser.STATIC);
			this.state = 1257;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, Java20Parser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 7) !== 0) || _la===86) {
				{
				{
				this.state = 1259;
				this.constructorModifier();
				}
				}
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1265;
			this.constructorDeclarator();
			this.state = 1267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 1266;
				this.throwsT();
				}
			}

			this.state = 1269;
			this.constructorBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorModifier(): ConstructorModifierContext {
		let localctx: ConstructorModifierContext = new ConstructorModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, Java20Parser.RULE_constructorModifier);
		try {
			this.state = 1275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1271;
				this.annotation();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1272;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1273;
				this.match(Java20Parser.PROTECTED);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1274;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorDeclarator(): ConstructorDeclaratorContext {
		let localctx: ConstructorDeclaratorContext = new ConstructorDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, Java20Parser.RULE_constructorDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90) {
				{
				this.state = 1277;
				this.typeParameters();
				}
			}

			this.state = 1280;
			this.simpleTypeName();
			this.state = 1281;
			this.match(Java20Parser.LPAREN);
			this.state = 1285;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1282;
				this.receiverParameter();
				this.state = 1283;
				this.match(Java20Parser.COMMA);
				}
				break;
			}
			this.state = 1288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 526853) !== 0) || _la===86 || _la===123) {
				{
				this.state = 1287;
				this.formalParameterList();
				}
			}

			this.state = 1290;
			this.match(Java20Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleTypeName(): SimpleTypeNameContext {
		let localctx: SimpleTypeNameContext = new SimpleTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, Java20Parser.RULE_simpleTypeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1292;
			this.typeIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorBody(): ConstructorBodyContext {
		let localctx: ConstructorBodyContext = new ConstructorBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, Java20Parser.RULE_constructorBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1294;
			this.match(Java20Parser.LBRACE);
			this.state = 1296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 1295;
				this.explicitConstructorInvocation();
				}
				break;
			}
			this.state = 1299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3598712814) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2684270709) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2240501) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097155) !== 0)) {
				{
				this.state = 1298;
				this.blockStatements();
				}
			}

			this.state = 1301;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		let localctx: ExplicitConstructorInvocationContext = new ExplicitConstructorInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, Java20Parser.RULE_explicitConstructorInvocation);
		let _la: number;
		try {
			this.state = 1329;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 1303;
					this.typeArguments();
					}
				}

				this.state = 1306;
				_la = this._input.LA(1);
				if(!(_la===57 || _la===60)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1307;
				this.match(Java20Parser.LPAREN);
				this.state = 1309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 1308;
					this.argumentList();
					}
				}

				this.state = 1311;
				this.match(Java20Parser.RPAREN);
				this.state = 1312;
				this.match(Java20Parser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1315;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
				case 1:
					{
					this.state = 1313;
					this.expressionName();
					}
					break;
				case 2:
					{
					this.state = 1314;
					this.primary();
					}
					break;
				}
				this.state = 1317;
				this.match(Java20Parser.DOT);
				this.state = 1319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 1318;
					this.typeArguments();
					}
				}

				this.state = 1321;
				this.match(Java20Parser.SUPER);
				this.state = 1322;
				this.match(Java20Parser.LPAREN);
				this.state = 1324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 1323;
					this.argumentList();
					}
				}

				this.state = 1326;
				this.match(Java20Parser.RPAREN);
				this.state = 1327;
				this.match(Java20Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let localctx: EnumDeclarationContext = new EnumDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, Java20Parser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 264200) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3375105) !== 0) || _la===86) {
				{
				{
				this.state = 1331;
				this.classModifier();
				}
				}
				this.state = 1336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1337;
			this.match(Java20Parser.ENUM);
			this.state = 1338;
			this.typeIdentifier();
			this.state = 1340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 1339;
				this.classImplements();
				}
			}

			this.state = 1342;
			this.enumBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let localctx: EnumBodyContext = new EnumBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, Java20Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1344;
			this.match(Java20Parser.LBRACE);
			this.state = 1346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262126) !== 0) || _la===86 || _la===123) {
				{
				this.state = 1345;
				this.enumConstantList();
				}
			}

			this.state = 1349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===83) {
				{
				this.state = 1348;
				this.match(Java20Parser.COMMA);
				}
			}

			this.state = 1352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===82) {
				{
				this.state = 1351;
				this.enumBodyDeclarations();
				}
			}

			this.state = 1354;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumConstantList(): EnumConstantListContext {
		let localctx: EnumConstantListContext = new EnumConstantListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, Java20Parser.RULE_enumConstantList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1356;
			this.enumConstant();
			this.state = 1361;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 135, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1357;
					this.match(Java20Parser.COMMA);
					this.state = 1358;
					this.enumConstant();
					}
					}
				}
				this.state = 1363;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 135, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let localctx: EnumConstantContext = new EnumConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, Java20Parser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 1364;
				this.enumConstantModifier();
				}
				}
				this.state = 1369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1370;
			this.identifier();
			this.state = 1376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===76) {
				{
				this.state = 1371;
				this.match(Java20Parser.LPAREN);
				this.state = 1373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 1372;
					this.argumentList();
					}
				}

				this.state = 1375;
				this.match(Java20Parser.RPAREN);
				}
			}

			this.state = 1379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===78) {
				{
				this.state = 1378;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumConstantModifier(): EnumConstantModifierContext {
		let localctx: EnumConstantModifierContext = new EnumConstantModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, Java20Parser.RULE_enumConstantModifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1381;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, Java20Parser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1383;
			this.match(Java20Parser.SEMI);
			this.state = 1387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2253914094) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1156478997) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 35790851) !== 0) || _la===123) {
				{
				{
				this.state = 1384;
				this.classBodyDeclaration();
				}
				}
				this.state = 1389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordDeclaration(): RecordDeclarationContext {
		let localctx: RecordDeclarationContext = new RecordDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, Java20Parser.RULE_recordDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 264200) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 3375105) !== 0) || _la===86) {
				{
				{
				this.state = 1390;
				this.classModifier();
				}
				}
				this.state = 1395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1396;
			this.match(Java20Parser.RECORD);
			this.state = 1397;
			this.typeIdentifier();
			this.state = 1399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90) {
				{
				this.state = 1398;
				this.typeParameters();
				}
			}

			this.state = 1401;
			this.recordHeader();
			this.state = 1403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 1402;
				this.classImplements();
				}
			}

			this.state = 1405;
			this.recordBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordHeader(): RecordHeaderContext {
		let localctx: RecordHeaderContext = new RecordHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, Java20Parser.RULE_recordHeader);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1407;
			this.match(Java20Parser.LPAREN);
			this.state = 1409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 131713) !== 0) || _la===86 || _la===123) {
				{
				this.state = 1408;
				this.recordComponentList();
				}
			}

			this.state = 1411;
			this.match(Java20Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordComponentList(): RecordComponentListContext {
		let localctx: RecordComponentListContext = new RecordComponentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, Java20Parser.RULE_recordComponentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1413;
			this.recordComponent();
			this.state = 1418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 1414;
				this.match(Java20Parser.COMMA);
				this.state = 1415;
				this.recordComponent();
				}
				}
				this.state = 1420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordComponent(): RecordComponentContext {
		let localctx: RecordComponentContext = new RecordComponentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, Java20Parser.RULE_recordComponent);
		let _la: number;
		try {
			this.state = 1431;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===86) {
					{
					{
					this.state = 1421;
					this.recordComponentModifier();
					}
					}
					this.state = 1426;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1427;
				this.unannType();
				this.state = 1428;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1430;
				this.variableArityRecordComponent();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableArityRecordComponent(): VariableArityRecordComponentContext {
		let localctx: VariableArityRecordComponentContext = new VariableArityRecordComponentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, Java20Parser.RULE_variableArityRecordComponent);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 1433;
				this.recordComponentModifier();
				}
				}
				this.state = 1438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1439;
			this.unannType();
			this.state = 1443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 1440;
				this.annotation();
				}
				}
				this.state = 1445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1446;
			this.match(Java20Parser.ELLIPSIS);
			this.state = 1447;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordComponentModifier(): RecordComponentModifierContext {
		let localctx: RecordComponentModifierContext = new RecordComponentModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, Java20Parser.RULE_recordComponentModifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1449;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordBody(): RecordBodyContext {
		let localctx: RecordBodyContext = new RecordBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, Java20Parser.RULE_recordBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1451;
			this.match(Java20Parser.LBRACE);
			this.state = 1455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2253914094) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1156478997) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 35790851) !== 0) || _la===123) {
				{
				{
				this.state = 1452;
				this.recordBodyDeclaration();
				}
				}
				this.state = 1457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1458;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordBodyDeclaration(): RecordBodyDeclarationContext {
		let localctx: RecordBodyDeclarationContext = new RecordBodyDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, Java20Parser.RULE_recordBodyDeclaration);
		try {
			this.state = 1462;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1460;
				this.classBodyDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1461;
				this.compactConstructorDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compactConstructorDeclaration(): CompactConstructorDeclarationContext {
		let localctx: CompactConstructorDeclarationContext = new CompactConstructorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, Java20Parser.RULE_compactConstructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 7) !== 0) || _la===86) {
				{
				{
				this.state = 1464;
				this.constructorModifier();
				}
				}
				this.state = 1469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1470;
			this.simpleTypeName();
			this.state = 1471;
			this.constructorBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, Java20Parser.RULE_interfaceDeclaration);
		try {
			this.state = 1475;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1473;
				this.normalInterfaceDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1474;
				this.annotationInterfaceDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		let localctx: NormalInterfaceDeclarationContext = new NormalInterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, Java20Parser.RULE_normalInterfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 264200) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 103) !== 0) || _la===86) {
				{
				{
				this.state = 1477;
				this.interfaceModifier();
				}
				}
				this.state = 1482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1483;
			this.match(Java20Parser.INTERFACE);
			this.state = 1484;
			this.typeIdentifier();
			this.state = 1486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90) {
				{
				this.state = 1485;
				this.typeParameters();
				}
			}

			this.state = 1489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 1488;
				this.interfaceExtends();
				}
			}

			this.state = 1492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 1491;
				this.interfacePermits();
				}
			}

			this.state = 1494;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceModifier(): InterfaceModifierContext {
		let localctx: InterfaceModifierContext = new InterfaceModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, Java20Parser.RULE_interfaceModifier);
		try {
			this.state = 1505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1496;
				this.annotation();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1497;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1498;
				this.match(Java20Parser.PROTECTED);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1499;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1500;
				this.match(Java20Parser.ABSTRACT);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1501;
				this.match(Java20Parser.STATIC);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1502;
				this.match(Java20Parser.SEALED);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1503;
				this.match(Java20Parser.NONSEALED);
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1504;
				this.match(Java20Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceExtends(): InterfaceExtendsContext {
		let localctx: InterfaceExtendsContext = new InterfaceExtendsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, Java20Parser.RULE_interfaceExtends);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1507;
			this.match(Java20Parser.EXTENDS);
			this.state = 1508;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfacePermits(): InterfacePermitsContext {
		let localctx: InterfacePermitsContext = new InterfacePermitsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, Java20Parser.RULE_interfacePermits);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1510;
			this.match(Java20Parser.PERMITS);
			this.state = 1511;
			this.typeName();
			this.state = 1516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 1512;
				this.match(Java20Parser.COMMA);
				this.state = 1513;
				this.typeName();
				}
				}
				this.state = 1518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let localctx: InterfaceBodyContext = new InterfaceBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, Java20Parser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1519;
			this.match(Java20Parser.LBRACE);
			this.state = 1523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2790785006) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 15611925) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 35782657) !== 0) || _la===123) {
				{
				{
				this.state = 1520;
				this.interfaceMemberDeclaration();
				}
				}
				this.state = 1525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1526;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, Java20Parser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 1533;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1528;
				this.constantDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1529;
				this.interfaceMethodDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1530;
				this.classDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1531;
				this.interfaceDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1532;
				this.match(Java20Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantDeclaration(): ConstantDeclarationContext {
		let localctx: ConstantDeclarationContext = new ConstantDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, Java20Parser.RULE_constantDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1179649) !== 0) || _la===86) {
				{
				{
				this.state = 1535;
				this.constantModifier();
				}
				}
				this.state = 1540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1541;
			this.unannType();
			this.state = 1542;
			this.variableDeclaratorList();
			this.state = 1543;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantModifier(): ConstantModifierContext {
		let localctx: ConstantModifierContext = new ConstantModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, Java20Parser.RULE_constantModifier);
		try {
			this.state = 1549;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1545;
				this.annotation();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1546;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1547;
				this.match(Java20Parser.STATIC);
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1548;
				this.match(Java20Parser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, Java20Parser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===29 || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 101) !== 0) || _la===86) {
				{
				{
				this.state = 1551;
				this.interfaceMethodModifier();
				}
				}
				this.state = 1556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1557;
			this.methodHeader();
			this.state = 1558;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, Java20Parser.RULE_interfaceMethodModifier);
		try {
			this.state = 1567;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1560;
				this.annotation();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1561;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1562;
				this.match(Java20Parser.PRIVATE);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1563;
				this.match(Java20Parser.ABSTRACT);
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1564;
				this.match(Java20Parser.DEFAULT);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1565;
				this.match(Java20Parser.STATIC);
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1566;
				this.match(Java20Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationInterfaceDeclaration(): AnnotationInterfaceDeclarationContext {
		let localctx: AnnotationInterfaceDeclarationContext = new AnnotationInterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, Java20Parser.RULE_annotationInterfaceDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1572;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 166, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1569;
					this.interfaceModifier();
					}
					}
				}
				this.state = 1574;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 166, this._ctx);
			}
			this.state = 1575;
			this.match(Java20Parser.AT);
			this.state = 1576;
			this.match(Java20Parser.INTERFACE);
			this.state = 1577;
			this.typeIdentifier();
			this.state = 1578;
			this.annotationInterfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationInterfaceBody(): AnnotationInterfaceBodyContext {
		let localctx: AnnotationInterfaceBodyContext = new AnnotationInterfaceBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, Java20Parser.RULE_annotationInterfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1580;
			this.match(Java20Parser.LBRACE);
			this.state = 1584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2253914094) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 15611925) !== 0) || _la===82 || _la===86 || _la===123) {
				{
				{
				this.state = 1581;
				this.annotationInterfaceMemberDeclaration();
				}
				}
				this.state = 1586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1587;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationInterfaceMemberDeclaration(): AnnotationInterfaceMemberDeclarationContext {
		let localctx: AnnotationInterfaceMemberDeclarationContext = new AnnotationInterfaceMemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, Java20Parser.RULE_annotationInterfaceMemberDeclaration);
		try {
			this.state = 1594;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1589;
				this.annotationInterfaceElementDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1590;
				this.constantDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1591;
				this.classDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1592;
				this.interfaceDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1593;
				this.match(Java20Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationInterfaceElementDeclaration(): AnnotationInterfaceElementDeclarationContext {
		let localctx: AnnotationInterfaceElementDeclarationContext = new AnnotationInterfaceElementDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, Java20Parser.RULE_annotationInterfaceElementDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===52 || _la===86) {
				{
				{
				this.state = 1596;
				this.annotationInterfaceElementModifier();
				}
				}
				this.state = 1601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1602;
			this.unannType();
			this.state = 1603;
			this.identifier();
			this.state = 1604;
			this.match(Java20Parser.LPAREN);
			this.state = 1605;
			this.match(Java20Parser.RPAREN);
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===80 || _la===86) {
				{
				this.state = 1606;
				this.dims();
				}
			}

			this.state = 1610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 1609;
				this.defaultValue();
				}
			}

			this.state = 1612;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationInterfaceElementModifier(): AnnotationInterfaceElementModifierContext {
		let localctx: AnnotationInterfaceElementModifierContext = new AnnotationInterfaceElementModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, Java20Parser.RULE_annotationInterfaceElementModifier);
		try {
			this.state = 1617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1614;
				this.annotation();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1615;
				this.match(Java20Parser.PUBLIC);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1616;
				this.match(Java20Parser.ABSTRACT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let localctx: DefaultValueContext = new DefaultValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, Java20Parser.RULE_defaultValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1619;
			this.match(Java20Parser.DEFAULT);
			this.state = 1620;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, Java20Parser.RULE_annotation);
		try {
			this.state = 1625;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1622;
				this.normalAnnotation();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1623;
				this.markerAnnotation();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1624;
				this.singleElementAnnotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public normalAnnotation(): NormalAnnotationContext {
		let localctx: NormalAnnotationContext = new NormalAnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, Java20Parser.RULE_normalAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1627;
			this.match(Java20Parser.AT);
			this.state = 1628;
			this.typeName();
			this.state = 1629;
			this.match(Java20Parser.LPAREN);
			this.state = 1631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262126) !== 0) || _la===123) {
				{
				this.state = 1630;
				this.elementValuePairList();
				}
			}

			this.state = 1633;
			this.match(Java20Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValuePairList(): ElementValuePairListContext {
		let localctx: ElementValuePairListContext = new ElementValuePairListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, Java20Parser.RULE_elementValuePairList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1635;
			this.elementValuePair();
			this.state = 1640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 1636;
				this.match(Java20Parser.COMMA);
				this.state = 1637;
				this.elementValuePair();
				}
				}
				this.state = 1642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let localctx: ElementValuePairContext = new ElementValuePairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, Java20Parser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1643;
			this.identifier();
			this.state = 1644;
			this.match(Java20Parser.ASSIGN);
			this.state = 1645;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let localctx: ElementValueContext = new ElementValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, Java20Parser.RULE_elementValue);
		try {
			this.state = 1650;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1647;
				this.conditionalExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1648;
				this.elementValueArrayInitializer();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1649;
				this.annotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, Java20Parser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1652;
			this.match(Java20Parser.LBRACE);
			this.state = 1654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714751) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
				{
				this.state = 1653;
				this.elementValueList();
				}
			}

			this.state = 1657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===83) {
				{
				this.state = 1656;
				this.match(Java20Parser.COMMA);
				}
			}

			this.state = 1659;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValueList(): ElementValueListContext {
		let localctx: ElementValueListContext = new ElementValueListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, Java20Parser.RULE_elementValueList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1661;
			this.elementValue();
			this.state = 1666;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1662;
					this.match(Java20Parser.COMMA);
					this.state = 1663;
					this.elementValue();
					}
					}
				}
				this.state = 1668;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public markerAnnotation(): MarkerAnnotationContext {
		let localctx: MarkerAnnotationContext = new MarkerAnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, Java20Parser.RULE_markerAnnotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1669;
			this.match(Java20Parser.AT);
			this.state = 1670;
			this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleElementAnnotation(): SingleElementAnnotationContext {
		let localctx: SingleElementAnnotationContext = new SingleElementAnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, Java20Parser.RULE_singleElementAnnotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1672;
			this.match(Java20Parser.AT);
			this.state = 1673;
			this.typeName();
			this.state = 1674;
			this.match(Java20Parser.LPAREN);
			this.state = 1675;
			this.elementValue();
			this.state = 1676;
			this.match(Java20Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let localctx: ArrayInitializerContext = new ArrayInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, Java20Parser.RULE_arrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1678;
			this.match(Java20Parser.LBRACE);
			this.state = 1680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714751) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
				{
				this.state = 1679;
				this.variableInitializerList();
				}
			}

			this.state = 1683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===83) {
				{
				this.state = 1682;
				this.match(Java20Parser.COMMA);
				}
			}

			this.state = 1685;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableInitializerList(): VariableInitializerListContext {
		let localctx: VariableInitializerListContext = new VariableInitializerListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, Java20Parser.RULE_variableInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1687;
			this.variableInitializer();
			this.state = 1692;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1688;
					this.match(Java20Parser.COMMA);
					this.state = 1689;
					this.variableInitializer();
					}
					}
				}
				this.state = 1694;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, Java20Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1695;
			this.match(Java20Parser.LBRACE);
			this.state = 1697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3598712814) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2684270709) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2240501) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097155) !== 0)) {
				{
				this.state = 1696;
				this.blockStatements();
				}
			}

			this.state = 1699;
			this.match(Java20Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockStatements(): BlockStatementsContext {
		let localctx: BlockStatementsContext = new BlockStatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, Java20Parser.RULE_blockStatements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1701;
			this.blockStatement();
			this.state = 1705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3598712814) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2684270709) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2240501) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097155) !== 0)) {
				{
				{
				this.state = 1702;
				this.blockStatement();
				}
				}
				this.state = 1707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let localctx: BlockStatementContext = new BlockStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, Java20Parser.RULE_blockStatement);
		try {
			this.state = 1711;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1708;
				this.localClassOrInterfaceDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1709;
				this.localVariableDeclarationStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1710;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public localClassOrInterfaceDeclaration(): LocalClassOrInterfaceDeclarationContext {
		let localctx: LocalClassOrInterfaceDeclarationContext = new LocalClassOrInterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, Java20Parser.RULE_localClassOrInterfaceDeclaration);
		try {
			this.state = 1715;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1713;
				this.classDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1714;
				this.normalInterfaceDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, Java20Parser.RULE_localVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35 || _la===86) {
				{
				{
				this.state = 1717;
				this.variableModifier();
				}
				}
				this.state = 1722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1723;
			this.localVariableType();
			this.state = 1725;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				{
				this.state = 1724;
				this.variableDeclaratorList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public localVariableType(): LocalVariableTypeContext {
		let localctx: LocalVariableTypeContext = new LocalVariableTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, Java20Parser.RULE_localVariableType);
		try {
			this.state = 1729;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1727;
				this.unannType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1728;
				this.match(Java20Parser.VAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, Java20Parser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1731;
			this.localVariableDeclaration();
			this.state = 1732;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, Java20Parser.RULE_statement);
		try {
			this.state = 1740;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1734;
				this.statementWithoutTrailingSubstatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1735;
				this.labeledStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1736;
				this.ifThenStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1737;
				this.ifThenElseStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1738;
				this.whileStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1739;
				this.forStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementNoShortIf(): StatementNoShortIfContext {
		let localctx: StatementNoShortIfContext = new StatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, Java20Parser.RULE_statementNoShortIf);
		try {
			this.state = 1747;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1742;
				this.statementWithoutTrailingSubstatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1743;
				this.labeledStatementNoShortIf();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1744;
				this.ifThenElseStatementNoShortIf();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1745;
				this.whileStatementNoShortIf();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1746;
				this.forStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		let localctx: StatementWithoutTrailingSubstatementContext = new StatementWithoutTrailingSubstatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, Java20Parser.RULE_statementWithoutTrailingSubstatement);
		try {
			this.state = 1762;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1749;
				this.block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1750;
				this.emptyStatement_();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1751;
				this.expressionStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1752;
				this.assertStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1753;
				this.switchStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1754;
				this.doStatement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1755;
				this.breakStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1756;
				this.continueStatement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1757;
				this.returnStatement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1758;
				this.synchronizedStatement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1759;
				this.throwStatement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1760;
				this.tryStatement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 1761;
				this.yieldStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let localctx: EmptyStatement_Context = new EmptyStatement_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 304, Java20Parser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1764;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let localctx: LabeledStatementContext = new LabeledStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, Java20Parser.RULE_labeledStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1766;
			this.identifier();
			this.state = 1767;
			this.match(Java20Parser.COLON);
			this.state = 1768;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext {
		let localctx: LabeledStatementNoShortIfContext = new LabeledStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, Java20Parser.RULE_labeledStatementNoShortIf);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1770;
			this.identifier();
			this.state = 1771;
			this.match(Java20Parser.COLON);
			this.state = 1772;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, Java20Parser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1774;
			this.statementExpression();
			this.state = 1775;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let localctx: StatementExpressionContext = new StatementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, Java20Parser.RULE_statementExpression);
		try {
			this.state = 1784;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1777;
				this.assignment();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1778;
				this.preIncrementExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1779;
				this.preDecrementExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1780;
				this.postIncrementExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1781;
				this.postDecrementExpression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1782;
				this.methodInvocation();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1783;
				this.classInstanceCreationExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifThenStatement(): IfThenStatementContext {
		let localctx: IfThenStatementContext = new IfThenStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, Java20Parser.RULE_ifThenStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1786;
			this.match(Java20Parser.IF);
			this.state = 1787;
			this.match(Java20Parser.LPAREN);
			this.state = 1788;
			this.expression();
			this.state = 1789;
			this.match(Java20Parser.RPAREN);
			this.state = 1790;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatement(): IfThenElseStatementContext {
		let localctx: IfThenElseStatementContext = new IfThenElseStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, Java20Parser.RULE_ifThenElseStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1792;
			this.match(Java20Parser.IF);
			this.state = 1793;
			this.match(Java20Parser.LPAREN);
			this.state = 1794;
			this.expression();
			this.state = 1795;
			this.match(Java20Parser.RPAREN);
			this.state = 1796;
			this.statementNoShortIf();
			this.state = 1797;
			this.match(Java20Parser.ELSE);
			this.state = 1798;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext {
		let localctx: IfThenElseStatementNoShortIfContext = new IfThenElseStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 318, Java20Parser.RULE_ifThenElseStatementNoShortIf);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1800;
			this.match(Java20Parser.IF);
			this.state = 1801;
			this.match(Java20Parser.LPAREN);
			this.state = 1802;
			this.expression();
			this.state = 1803;
			this.match(Java20Parser.RPAREN);
			this.state = 1804;
			this.statementNoShortIf();
			this.state = 1805;
			this.match(Java20Parser.ELSE);
			this.state = 1806;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		let localctx: AssertStatementContext = new AssertStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 320, Java20Parser.RULE_assertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1808;
			this.match(Java20Parser.ASSERT);
			this.state = 1809;
			this.expression();
			this.state = 1812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===94) {
				{
				this.state = 1810;
				this.match(Java20Parser.COLON);
				this.state = 1811;
				this.expression();
				}
			}

			this.state = 1814;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let localctx: SwitchStatementContext = new SwitchStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, Java20Parser.RULE_switchStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1816;
			this.match(Java20Parser.SWITCH);
			this.state = 1817;
			this.match(Java20Parser.LPAREN);
			this.state = 1818;
			this.expression();
			this.state = 1819;
			this.match(Java20Parser.RPAREN);
			this.state = 1820;
			this.switchBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchBlock(): SwitchBlockContext {
		let localctx: SwitchBlockContext = new SwitchBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 324, Java20Parser.RULE_switchBlock);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1848;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1822;
				this.match(Java20Parser.LBRACE);
				this.state = 1823;
				this.switchRule();
				this.state = 1827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===23 || _la===29) {
					{
					{
					this.state = 1824;
					this.switchRule();
					}
					}
					this.state = 1829;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1830;
				this.match(Java20Parser.RBRACE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1832;
				this.match(Java20Parser.LBRACE);
				this.state = 1836;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 196, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1833;
						this.switchBlockStatementGroup();
						}
						}
					}
					this.state = 1838;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 196, this._ctx);
				}
				this.state = 1844;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===23 || _la===29) {
					{
					{
					this.state = 1839;
					this.switchLabel();
					this.state = 1840;
					this.match(Java20Parser.COLON);
					}
					}
					this.state = 1846;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1847;
				this.match(Java20Parser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchRule(): SwitchRuleContext {
		let localctx: SwitchRuleContext = new SwitchRuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, Java20Parser.RULE_switchRule);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1850;
			this.switchLabel();
			this.state = 1851;
			this.match(Java20Parser.ARROW);
			this.state = 1857;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 20:
			case 22:
			case 25:
			case 31:
			case 37:
			case 44:
			case 46:
			case 48:
			case 54:
			case 57:
			case 58:
			case 60:
			case 65:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 86:
			case 91:
			case 92:
			case 102:
			case 103:
			case 104:
			case 105:
			case 123:
				{
				this.state = 1852;
				this.expression();
				this.state = 1853;
				this.match(Java20Parser.SEMI);
				}
				break;
			case 78:
				{
				this.state = 1855;
				this.block();
				}
				break;
			case 61:
				{
				this.state = 1856;
				this.throwStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, Java20Parser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1859;
			this.switchLabel();
			this.state = 1860;
			this.match(Java20Parser.COLON);
			this.state = 1866;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===23 || _la===29) {
				{
				{
				this.state = 1861;
				this.switchLabel();
				this.state = 1862;
				this.match(Java20Parser.COLON);
				}
				}
				this.state = 1868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1869;
			this.blockStatements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let localctx: SwitchLabelContext = new SwitchLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 330, Java20Parser.RULE_switchLabel);
		let _la: number;
		try {
			this.state = 1881;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1871;
				this.match(Java20Parser.CASE);
				this.state = 1872;
				this.caseConstant();
				this.state = 1877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===83) {
					{
					{
					this.state = 1873;
					this.match(Java20Parser.COMMA);
					this.state = 1874;
					this.caseConstant();
					}
					}
					this.state = 1879;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1880;
				this.match(Java20Parser.DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseConstant(): CaseConstantContext {
		let localctx: CaseConstantContext = new CaseConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 332, Java20Parser.RULE_caseConstant);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1883;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, Java20Parser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1885;
			this.match(Java20Parser.WHILE);
			this.state = 1886;
			this.match(Java20Parser.LPAREN);
			this.state = 1887;
			this.expression();
			this.state = 1888;
			this.match(Java20Parser.RPAREN);
			this.state = 1889;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext {
		let localctx: WhileStatementNoShortIfContext = new WhileStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 336, Java20Parser.RULE_whileStatementNoShortIf);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1891;
			this.match(Java20Parser.WHILE);
			this.state = 1892;
			this.match(Java20Parser.LPAREN);
			this.state = 1893;
			this.expression();
			this.state = 1894;
			this.match(Java20Parser.RPAREN);
			this.state = 1895;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doStatement(): DoStatementContext {
		let localctx: DoStatementContext = new DoStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 338, Java20Parser.RULE_doStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1897;
			this.match(Java20Parser.DO);
			this.state = 1898;
			this.statement();
			this.state = 1899;
			this.match(Java20Parser.WHILE);
			this.state = 1900;
			this.match(Java20Parser.LPAREN);
			this.state = 1901;
			this.expression();
			this.state = 1902;
			this.match(Java20Parser.RPAREN);
			this.state = 1903;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let localctx: ForStatementContext = new ForStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 340, Java20Parser.RULE_forStatement);
		try {
			this.state = 1907;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1905;
				this.basicForStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1906;
				this.enhancedForStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forStatementNoShortIf(): ForStatementNoShortIfContext {
		let localctx: ForStatementNoShortIfContext = new ForStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 342, Java20Parser.RULE_forStatementNoShortIf);
		try {
			this.state = 1911;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1909;
				this.basicForStatementNoShortIf();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1910;
				this.enhancedForStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basicForStatement(): BasicForStatementContext {
		let localctx: BasicForStatementContext = new BasicForStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 344, Java20Parser.RULE_basicForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1913;
			this.match(Java20Parser.FOR);
			this.state = 1914;
			this.match(Java20Parser.LPAREN);
			this.state = 1916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1112025605) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 131327) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097155) !== 0)) {
				{
				this.state = 1915;
				this.forInit();
				}
			}

			this.state = 1918;
			this.match(Java20Parser.SEMI);
			this.state = 1920;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
				{
				this.state = 1919;
				this.expression();
				}
			}

			this.state = 1922;
			this.match(Java20Parser.SEMI);
			this.state = 1924;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 278006401) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 131327) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097155) !== 0)) {
				{
				this.state = 1923;
				this.forUpdate();
				}
			}

			this.state = 1926;
			this.match(Java20Parser.RPAREN);
			this.state = 1927;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext {
		let localctx: BasicForStatementNoShortIfContext = new BasicForStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 346, Java20Parser.RULE_basicForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1929;
			this.match(Java20Parser.FOR);
			this.state = 1930;
			this.match(Java20Parser.LPAREN);
			this.state = 1932;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 1112025605) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 131327) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097155) !== 0)) {
				{
				this.state = 1931;
				this.forInit();
				}
			}

			this.state = 1934;
			this.match(Java20Parser.SEMI);
			this.state = 1936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
				{
				this.state = 1935;
				this.expression();
				}
			}

			this.state = 1938;
			this.match(Java20Parser.SEMI);
			this.state = 1940;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 278006401) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 131327) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097155) !== 0)) {
				{
				this.state = 1939;
				this.forUpdate();
				}
			}

			this.state = 1942;
			this.match(Java20Parser.RPAREN);
			this.state = 1943;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let localctx: ForInitContext = new ForInitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 348, Java20Parser.RULE_forInit);
		try {
			this.state = 1947;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1945;
				this.statementExpressionList();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1946;
				this.localVariableDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let localctx: ForUpdateContext = new ForUpdateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 350, Java20Parser.RULE_forUpdate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1949;
			this.statementExpressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementExpressionList(): StatementExpressionListContext {
		let localctx: StatementExpressionListContext = new StatementExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 352, Java20Parser.RULE_statementExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1951;
			this.statementExpression();
			this.state = 1956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 1952;
				this.match(Java20Parser.COMMA);
				this.state = 1953;
				this.statementExpression();
				}
				}
				this.state = 1958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enhancedForStatement(): EnhancedForStatementContext {
		let localctx: EnhancedForStatementContext = new EnhancedForStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 354, Java20Parser.RULE_enhancedForStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1959;
			this.match(Java20Parser.FOR);
			this.state = 1960;
			this.match(Java20Parser.LPAREN);
			this.state = 1961;
			this.localVariableDeclaration();
			this.state = 1962;
			this.match(Java20Parser.COLON);
			this.state = 1963;
			this.expression();
			this.state = 1964;
			this.match(Java20Parser.RPAREN);
			this.state = 1965;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext {
		let localctx: EnhancedForStatementNoShortIfContext = new EnhancedForStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 356, Java20Parser.RULE_enhancedForStatementNoShortIf);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1967;
			this.match(Java20Parser.FOR);
			this.state = 1968;
			this.match(Java20Parser.LPAREN);
			this.state = 1969;
			this.localVariableDeclaration();
			this.state = 1970;
			this.match(Java20Parser.COLON);
			this.state = 1971;
			this.expression();
			this.state = 1972;
			this.match(Java20Parser.RPAREN);
			this.state = 1973;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let localctx: BreakStatementContext = new BreakStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 358, Java20Parser.RULE_breakStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1975;
			this.match(Java20Parser.BREAK);
			this.state = 1977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262126) !== 0) || _la===123) {
				{
				this.state = 1976;
				this.identifier();
				}
			}

			this.state = 1979;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let localctx: ContinueStatementContext = new ContinueStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 360, Java20Parser.RULE_continueStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1981;
			this.match(Java20Parser.CONTINUE);
			this.state = 1983;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262126) !== 0) || _la===123) {
				{
				this.state = 1982;
				this.identifier();
				}
			}

			this.state = 1985;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 362, Java20Parser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1987;
			this.match(Java20Parser.RETURN);
			this.state = 1989;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
				{
				this.state = 1988;
				this.expression();
				}
			}

			this.state = 1991;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let localctx: ThrowStatementContext = new ThrowStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 364, Java20Parser.RULE_throwStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1993;
			this.match(Java20Parser.THROW);
			this.state = 1994;
			this.expression();
			this.state = 1995;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public synchronizedStatement(): SynchronizedStatementContext {
		let localctx: SynchronizedStatementContext = new SynchronizedStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 366, Java20Parser.RULE_synchronizedStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1997;
			this.match(Java20Parser.SYNCHRONIZED);
			this.state = 1998;
			this.match(Java20Parser.LPAREN);
			this.state = 1999;
			this.expression();
			this.state = 2000;
			this.match(Java20Parser.RPAREN);
			this.state = 2001;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let localctx: TryStatementContext = new TryStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 368, Java20Parser.RULE_tryStatement);
		let _la: number;
		try {
			this.state = 2019;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2003;
				this.match(Java20Parser.TRY);
				this.state = 2004;
				this.block();
				this.state = 2005;
				this.catches();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2007;
				this.match(Java20Parser.TRY);
				this.state = 2008;
				this.block();
				this.state = 2009;
				this.finallyBlock();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2011;
				this.match(Java20Parser.TRY);
				this.state = 2012;
				this.block();
				this.state = 2014;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 2013;
					this.catches();
					}
				}

				this.state = 2016;
				this.finallyBlock();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2018;
				this.tryWithResourcesStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catches(): CatchesContext {
		let localctx: CatchesContext = new CatchesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 370, Java20Parser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2021;
			this.catchClause();
			this.state = 2025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===24) {
				{
				{
				this.state = 2022;
				this.catchClause();
				}
				}
				this.state = 2027;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let localctx: CatchClauseContext = new CatchClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 372, Java20Parser.RULE_catchClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2028;
			this.match(Java20Parser.CATCH);
			this.state = 2029;
			this.match(Java20Parser.LPAREN);
			this.state = 2030;
			this.catchFormalParameter();
			this.state = 2031;
			this.match(Java20Parser.RPAREN);
			this.state = 2032;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchFormalParameter(): CatchFormalParameterContext {
		let localctx: CatchFormalParameterContext = new CatchFormalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 374, Java20Parser.RULE_catchFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35 || _la===86) {
				{
				{
				this.state = 2034;
				this.variableModifier();
				}
				}
				this.state = 2039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2040;
			this.catchType();
			this.state = 2041;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let localctx: CatchTypeContext = new CatchTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 376, Java20Parser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2043;
			this.unannClassType();
			this.state = 2048;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===109) {
				{
				{
				this.state = 2044;
				this.match(Java20Parser.BITOR);
				this.state = 2045;
				this.classType();
				}
				}
				this.state = 2050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let localctx: FinallyBlockContext = new FinallyBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 378, Java20Parser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2051;
			this.match(Java20Parser.FINALLY);
			this.state = 2052;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tryWithResourcesStatement(): TryWithResourcesStatementContext {
		let localctx: TryWithResourcesStatementContext = new TryWithResourcesStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 380, Java20Parser.RULE_tryWithResourcesStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2054;
			this.match(Java20Parser.TRY);
			this.state = 2055;
			this.resourceSpecification();
			this.state = 2056;
			this.block();
			this.state = 2058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 2057;
				this.catches();
				}
			}

			this.state = 2061;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 2060;
				this.finallyBlock();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 382, Java20Parser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2063;
			this.match(Java20Parser.LPAREN);
			this.state = 2064;
			this.resourceList();
			this.state = 2066;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===82) {
				{
				this.state = 2065;
				this.match(Java20Parser.SEMI);
				}
			}

			this.state = 2068;
			this.match(Java20Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resourceList(): ResourceListContext {
		let localctx: ResourceListContext = new ResourceListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 384, Java20Parser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2070;
			this.resource();
			this.state = 2075;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2071;
					this.match(Java20Parser.SEMI);
					this.state = 2072;
					this.resource();
					}
					}
				}
				this.state = 2077;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let localctx: ResourceContext = new ResourceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 386, Java20Parser.RULE_resource);
		try {
			this.state = 2080;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2078;
				this.localVariableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2079;
				this.variableAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableAccess(): VariableAccessContext {
		let localctx: VariableAccessContext = new VariableAccessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 388, Java20Parser.RULE_variableAccess);
		try {
			this.state = 2084;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2082;
				this.expressionName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2083;
				this.fieldAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		let localctx: YieldStatementContext = new YieldStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 390, Java20Parser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2086;
			this.match(Java20Parser.YIELD);
			this.state = 2087;
			this.expression();
			this.state = 2088;
			this.match(Java20Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let localctx: PatternContext = new PatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 392, Java20Parser.RULE_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2090;
			this.typePattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typePattern(): TypePatternContext {
		let localctx: TypePatternContext = new TypePatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 394, Java20Parser.RULE_typePattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2092;
			this.localVariableDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 396, Java20Parser.RULE_expression);
		try {
			this.state = 2096;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2094;
				this.lambdaExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2095;
				this.assignmentExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let localctx: PrimaryContext = new PrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 398, Java20Parser.RULE_primary);
		try {
			this.state = 2100;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2098;
				this.primaryNoNewArray();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2099;
				this.arrayCreationExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray(): PrimaryNoNewArrayContext {
		let localctx: PrimaryNoNewArrayContext = new PrimaryNoNewArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 400, Java20Parser.RULE_primaryNoNewArray);
		let _la: number;
		try {
			this.state = 2319;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2102;
				this.literal();
				this.state = 2104;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 229, this._ctx) ) {
				case 1:
					{
					this.state = 2103;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2106;
				this.classLiteral();
				this.state = 2108;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
				case 1:
					{
					this.state = 2107;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2110;
				this.match(Java20Parser.THIS);
				this.state = 2112;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 2111;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2114;
				this.typeName();
				this.state = 2115;
				this.match(Java20Parser.DOT);
				this.state = 2116;
				this.match(Java20Parser.THIS);
				this.state = 2118;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
				case 1:
					{
					this.state = 2117;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2120;
				this.match(Java20Parser.LPAREN);
				this.state = 2121;
				this.expression();
				this.state = 2122;
				this.match(Java20Parser.RPAREN);
				this.state = 2124;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 2123;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2126;
				this.unqualifiedClassInstanceCreationExpression();
				this.state = 2128;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
				case 1:
					{
					this.state = 2127;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2130;
				this.expressionName();
				this.state = 2131;
				this.match(Java20Parser.DOT);
				this.state = 2132;
				this.unqualifiedClassInstanceCreationExpression();
				this.state = 2134;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
				case 1:
					{
					this.state = 2133;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2136;
				this.arrayCreationExpression();
				this.state = 2137;
				this.match(Java20Parser.DOT);
				this.state = 2138;
				this.unqualifiedClassInstanceCreationExpression();
				this.state = 2140;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
				case 1:
					{
					this.state = 2139;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2142;
				this.arrayCreationExpression();
				this.state = 2143;
				this.match(Java20Parser.DOT);
				this.state = 2144;
				this.identifier();
				this.state = 2146;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
				case 1:
					{
					this.state = 2145;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 2148;
				this.match(Java20Parser.SUPER);
				this.state = 2149;
				this.match(Java20Parser.DOT);
				this.state = 2150;
				this.identifier();
				this.state = 2152;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
				case 1:
					{
					this.state = 2151;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 2154;
				this.typeName();
				this.state = 2155;
				this.match(Java20Parser.DOT);
				this.state = 2156;
				this.match(Java20Parser.SUPER);
				this.state = 2157;
				this.match(Java20Parser.DOT);
				this.state = 2158;
				this.identifier();
				this.state = 2160;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
				case 1:
					{
					this.state = 2159;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 2162;
				this.expressionName();
				this.state = 2163;
				this.match(Java20Parser.LBRACK);
				this.state = 2164;
				this.expression();
				this.state = 2165;
				this.match(Java20Parser.RBRACK);
				this.state = 2167;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
				case 1:
					{
					this.state = 2166;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 2169;
				this.arrayCreationExpressionWithInitializer();
				this.state = 2170;
				this.match(Java20Parser.LBRACK);
				this.state = 2171;
				this.expression();
				this.state = 2172;
				this.match(Java20Parser.RBRACK);
				this.state = 2174;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
				case 1:
					{
					this.state = 2173;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 2176;
				this.methodName();
				this.state = 2177;
				this.match(Java20Parser.LPAREN);
				this.state = 2179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2178;
					this.argumentList();
					}
				}

				this.state = 2181;
				this.match(Java20Parser.RPAREN);
				this.state = 2183;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
				case 1:
					{
					this.state = 2182;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 2185;
				this.typeName();
				this.state = 2186;
				this.match(Java20Parser.DOT);
				this.state = 2188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2187;
					this.typeArguments();
					}
				}

				this.state = 2190;
				this.identifier();
				this.state = 2191;
				this.match(Java20Parser.LPAREN);
				this.state = 2193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2192;
					this.argumentList();
					}
				}

				this.state = 2195;
				this.match(Java20Parser.RPAREN);
				this.state = 2197;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
				case 1:
					{
					this.state = 2196;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 2199;
				this.expressionName();
				this.state = 2200;
				this.match(Java20Parser.DOT);
				this.state = 2202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2201;
					this.typeArguments();
					}
				}

				this.state = 2204;
				this.identifier();
				this.state = 2205;
				this.match(Java20Parser.LPAREN);
				this.state = 2207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2206;
					this.argumentList();
					}
				}

				this.state = 2209;
				this.match(Java20Parser.RPAREN);
				this.state = 2211;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 249, this._ctx) ) {
				case 1:
					{
					this.state = 2210;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 2213;
				this.arrayCreationExpression();
				this.state = 2214;
				this.match(Java20Parser.DOT);
				this.state = 2216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2215;
					this.typeArguments();
					}
				}

				this.state = 2218;
				this.identifier();
				this.state = 2219;
				this.match(Java20Parser.LPAREN);
				this.state = 2221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2220;
					this.argumentList();
					}
				}

				this.state = 2223;
				this.match(Java20Parser.RPAREN);
				this.state = 2225;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 2224;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 2227;
				this.match(Java20Parser.SUPER);
				this.state = 2228;
				this.match(Java20Parser.DOT);
				this.state = 2230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2229;
					this.typeArguments();
					}
				}

				this.state = 2232;
				this.identifier();
				this.state = 2233;
				this.match(Java20Parser.LPAREN);
				this.state = 2235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2234;
					this.argumentList();
					}
				}

				this.state = 2237;
				this.match(Java20Parser.RPAREN);
				this.state = 2239;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
				case 1:
					{
					this.state = 2238;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 2241;
				this.typeName();
				this.state = 2242;
				this.match(Java20Parser.DOT);
				this.state = 2243;
				this.match(Java20Parser.SUPER);
				this.state = 2244;
				this.match(Java20Parser.DOT);
				this.state = 2246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2245;
					this.typeArguments();
					}
				}

				this.state = 2248;
				this.identifier();
				this.state = 2249;
				this.match(Java20Parser.LPAREN);
				this.state = 2251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2250;
					this.argumentList();
					}
				}

				this.state = 2253;
				this.match(Java20Parser.RPAREN);
				this.state = 2255;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 258, this._ctx) ) {
				case 1:
					{
					this.state = 2254;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 2257;
				this.expressionName();
				this.state = 2258;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2259;
					this.typeArguments();
					}
				}

				this.state = 2262;
				this.identifier();
				this.state = 2264;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
				case 1:
					{
					this.state = 2263;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 2266;
				this.arrayCreationExpression();
				this.state = 2267;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2268;
					this.typeArguments();
					}
				}

				this.state = 2271;
				this.identifier();
				this.state = 2273;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 262, this._ctx) ) {
				case 1:
					{
					this.state = 2272;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 2275;
				this.referenceType();
				this.state = 2276;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2277;
					this.typeArguments();
					}
				}

				this.state = 2280;
				this.identifier();
				this.state = 2282;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 264, this._ctx) ) {
				case 1:
					{
					this.state = 2281;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 2284;
				this.match(Java20Parser.SUPER);
				this.state = 2285;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2286;
					this.typeArguments();
					}
				}

				this.state = 2289;
				this.identifier();
				this.state = 2291;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 266, this._ctx) ) {
				case 1:
					{
					this.state = 2290;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 2293;
				this.typeName();
				this.state = 2294;
				this.match(Java20Parser.DOT);
				this.state = 2295;
				this.match(Java20Parser.SUPER);
				this.state = 2296;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2297;
					this.typeArguments();
					}
				}

				this.state = 2300;
				this.identifier();
				this.state = 2302;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 268, this._ctx) ) {
				case 1:
					{
					this.state = 2301;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 2304;
				this.classType();
				this.state = 2305;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2306;
					this.typeArguments();
					}
				}

				this.state = 2309;
				this.match(Java20Parser.NEW);
				this.state = 2311;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
				case 1:
					{
					this.state = 2310;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 2313;
				this.arrayType();
				this.state = 2314;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2315;
				this.match(Java20Parser.NEW);
				this.state = 2317;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 271, this._ctx) ) {
				case 1:
					{
					this.state = 2316;
					this.pNNA();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pNNA(): PNNAContext {
		let localctx: PNNAContext = new PNNAContext(this, this._ctx, this.state);
		this.enterRule(localctx, 402, Java20Parser.RULE_pNNA);
		let _la: number;
		try {
			this.state = 2358;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 281, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2321;
				this.match(Java20Parser.DOT);
				this.state = 2322;
				this.unqualifiedClassInstanceCreationExpression();
				this.state = 2324;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 273, this._ctx) ) {
				case 1:
					{
					this.state = 2323;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2326;
				this.match(Java20Parser.DOT);
				this.state = 2327;
				this.identifier();
				this.state = 2329;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 274, this._ctx) ) {
				case 1:
					{
					this.state = 2328;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2331;
				this.match(Java20Parser.LBRACK);
				this.state = 2332;
				this.expression();
				this.state = 2333;
				this.match(Java20Parser.RBRACK);
				this.state = 2335;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 275, this._ctx) ) {
				case 1:
					{
					this.state = 2334;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2337;
				this.match(Java20Parser.DOT);
				this.state = 2339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2338;
					this.typeArguments();
					}
				}

				this.state = 2341;
				this.identifier();
				this.state = 2342;
				this.match(Java20Parser.LPAREN);
				this.state = 2344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2343;
					this.argumentList();
					}
				}

				this.state = 2346;
				this.match(Java20Parser.RPAREN);
				this.state = 2348;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 278, this._ctx) ) {
				case 1:
					{
					this.state = 2347;
					this.pNNA();
					}
					break;
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2350;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2351;
					this.typeArguments();
					}
				}

				this.state = 2354;
				this.identifier();
				this.state = 2356;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 280, this._ctx) ) {
				case 1:
					{
					this.state = 2355;
					this.pNNA();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classLiteral(): ClassLiteralContext {
		let localctx: ClassLiteralContext = new ClassLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 404, Java20Parser.RULE_classLiteral);
		let _la: number;
		try {
			this.state = 2395;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 123:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2360;
				this.typeName();
				this.state = 2365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===80) {
					{
					{
					this.state = 2361;
					this.match(Java20Parser.LBRACK);
					this.state = 2362;
					this.match(Java20Parser.RBRACK);
					}
					}
					this.state = 2367;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2368;
				this.match(Java20Parser.DOT);
				this.state = 2369;
				this.match(Java20Parser.CLASS);
				}
				break;
			case 22:
			case 25:
			case 31:
			case 37:
			case 44:
			case 46:
			case 54:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2371;
				this.numericType();
				this.state = 2376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===80) {
					{
					{
					this.state = 2372;
					this.match(Java20Parser.LBRACK);
					this.state = 2373;
					this.match(Java20Parser.RBRACK);
					}
					}
					this.state = 2378;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2379;
				this.match(Java20Parser.DOT);
				this.state = 2380;
				this.match(Java20Parser.CLASS);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2382;
				this.match(Java20Parser.BOOLEAN);
				this.state = 2387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===80) {
					{
					{
					this.state = 2383;
					this.match(Java20Parser.LBRACK);
					this.state = 2384;
					this.match(Java20Parser.RBRACK);
					}
					}
					this.state = 2389;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2390;
				this.match(Java20Parser.DOT);
				this.state = 2391;
				this.match(Java20Parser.CLASS);
				}
				break;
			case 65:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2392;
				this.match(Java20Parser.VOID);
				this.state = 2393;
				this.match(Java20Parser.DOT);
				this.state = 2394;
				this.match(Java20Parser.CLASS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		let localctx: ClassInstanceCreationExpressionContext = new ClassInstanceCreationExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 406, Java20Parser.RULE_classInstanceCreationExpression);
		try {
			this.state = 2406;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2397;
				this.unqualifiedClassInstanceCreationExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2398;
				this.expressionName();
				this.state = 2399;
				this.match(Java20Parser.DOT);
				this.state = 2400;
				this.unqualifiedClassInstanceCreationExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2402;
				this.primary();
				this.state = 2403;
				this.match(Java20Parser.DOT);
				this.state = 2404;
				this.unqualifiedClassInstanceCreationExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unqualifiedClassInstanceCreationExpression(): UnqualifiedClassInstanceCreationExpressionContext {
		let localctx: UnqualifiedClassInstanceCreationExpressionContext = new UnqualifiedClassInstanceCreationExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 408, Java20Parser.RULE_unqualifiedClassInstanceCreationExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2408;
			this.match(Java20Parser.NEW);
			this.state = 2410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90) {
				{
				this.state = 2409;
				this.typeArguments();
				}
			}

			this.state = 2412;
			this.classOrInterfaceTypeToInstantiate();
			this.state = 2413;
			this.match(Java20Parser.LPAREN);
			this.state = 2415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
				{
				this.state = 2414;
				this.argumentList();
				}
			}

			this.state = 2417;
			this.match(Java20Parser.RPAREN);
			this.state = 2419;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				{
				this.state = 2418;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceTypeToInstantiate(): ClassOrInterfaceTypeToInstantiateContext {
		let localctx: ClassOrInterfaceTypeToInstantiateContext = new ClassOrInterfaceTypeToInstantiateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 410, Java20Parser.RULE_classOrInterfaceTypeToInstantiate);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 2421;
				this.annotation();
				}
				}
				this.state = 2426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2427;
			this.identifier();
			this.state = 2438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===84) {
				{
				{
				this.state = 2428;
				this.match(Java20Parser.DOT);
				this.state = 2432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===86) {
					{
					{
					this.state = 2429;
					this.annotation();
					}
					}
					this.state = 2434;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2435;
				this.identifier();
				}
				}
				this.state = 2440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4 || _la===90) {
				{
				this.state = 2441;
				this.typeArgumentsOrDiamond();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this, this._ctx, this.state);
		this.enterRule(localctx, 412, Java20Parser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 2446;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2444;
				this.typeArguments();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2445;
				this.match(Java20Parser.OACA);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayCreationExpression(): ArrayCreationExpressionContext {
		let localctx: ArrayCreationExpressionContext = new ArrayCreationExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 414, Java20Parser.RULE_arrayCreationExpression);
		try {
			this.state = 2450;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2448;
				this.arrayCreationExpressionWithoutInitializer();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2449;
				this.arrayCreationExpressionWithInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayCreationExpressionWithoutInitializer(): ArrayCreationExpressionWithoutInitializerContext {
		let localctx: ArrayCreationExpressionWithoutInitializerContext = new ArrayCreationExpressionWithoutInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 416, Java20Parser.RULE_arrayCreationExpressionWithoutInitializer);
		try {
			this.state = 2464;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2452;
				this.match(Java20Parser.NEW);
				this.state = 2453;
				this.primitiveType();
				this.state = 2454;
				this.dimExprs();
				this.state = 2456;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 296, this._ctx) ) {
				case 1:
					{
					this.state = 2455;
					this.dims();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2458;
				this.match(Java20Parser.NEW);
				this.state = 2459;
				this.classType();
				this.state = 2460;
				this.dimExprs();
				this.state = 2462;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 297, this._ctx) ) {
				case 1:
					{
					this.state = 2461;
					this.dims();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayCreationExpressionWithInitializer(): ArrayCreationExpressionWithInitializerContext {
		let localctx: ArrayCreationExpressionWithInitializerContext = new ArrayCreationExpressionWithInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 418, Java20Parser.RULE_arrayCreationExpressionWithInitializer);
		try {
			this.state = 2476;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2466;
				this.match(Java20Parser.NEW);
				this.state = 2467;
				this.primitiveType();
				this.state = 2468;
				this.dims();
				this.state = 2469;
				this.arrayInitializer();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2471;
				this.match(Java20Parser.NEW);
				this.state = 2472;
				this.classOrInterfaceType();
				this.state = 2473;
				this.dims();
				this.state = 2474;
				this.arrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimExprs(): DimExprsContext {
		let localctx: DimExprsContext = new DimExprsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 420, Java20Parser.RULE_dimExprs);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2478;
			this.dimExpr();
			this.state = 2482;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 300, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2479;
					this.dimExpr();
					}
					}
				}
				this.state = 2484;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 300, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimExpr(): DimExprContext {
		let localctx: DimExprContext = new DimExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 422, Java20Parser.RULE_dimExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 2485;
				this.annotation();
				}
				}
				this.state = 2490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2491;
			this.match(Java20Parser.LBRACK);
			this.state = 2492;
			this.expression();
			this.state = 2493;
			this.match(Java20Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayAccess(): ArrayAccessContext {
		let localctx: ArrayAccessContext = new ArrayAccessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 424, Java20Parser.RULE_arrayAccess);
		try {
			this.state = 2510;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 302, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2495;
				this.expressionName();
				this.state = 2496;
				this.match(Java20Parser.LBRACK);
				this.state = 2497;
				this.expression();
				this.state = 2498;
				this.match(Java20Parser.RBRACK);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2500;
				this.primaryNoNewArray();
				this.state = 2501;
				this.match(Java20Parser.LBRACK);
				this.state = 2502;
				this.expression();
				this.state = 2503;
				this.match(Java20Parser.RBRACK);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2505;
				this.arrayCreationExpressionWithInitializer();
				this.state = 2506;
				this.match(Java20Parser.LBRACK);
				this.state = 2507;
				this.expression();
				this.state = 2508;
				this.match(Java20Parser.RBRACK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldAccess(): FieldAccessContext {
		let localctx: FieldAccessContext = new FieldAccessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 426, Java20Parser.RULE_fieldAccess);
		try {
			this.state = 2525;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 303, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2512;
				this.primary();
				this.state = 2513;
				this.match(Java20Parser.DOT);
				this.state = 2514;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2516;
				this.match(Java20Parser.SUPER);
				this.state = 2517;
				this.match(Java20Parser.DOT);
				this.state = 2518;
				this.identifier();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2519;
				this.typeName();
				this.state = 2520;
				this.match(Java20Parser.DOT);
				this.state = 2521;
				this.match(Java20Parser.SUPER);
				this.state = 2522;
				this.match(Java20Parser.DOT);
				this.state = 2523;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodInvocation(): MethodInvocationContext {
		let localctx: MethodInvocationContext = new MethodInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 428, Java20Parser.RULE_methodInvocation);
		let _la: number;
		try {
			this.state = 2596;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 315, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2527;
				this.methodName();
				this.state = 2528;
				this.match(Java20Parser.LPAREN);
				this.state = 2530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2529;
					this.argumentList();
					}
				}

				this.state = 2532;
				this.match(Java20Parser.RPAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2534;
				this.typeName();
				this.state = 2535;
				this.match(Java20Parser.DOT);
				this.state = 2537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2536;
					this.typeArguments();
					}
				}

				this.state = 2539;
				this.identifier();
				this.state = 2540;
				this.match(Java20Parser.LPAREN);
				this.state = 2542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2541;
					this.argumentList();
					}
				}

				this.state = 2544;
				this.match(Java20Parser.RPAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2546;
				this.expressionName();
				this.state = 2547;
				this.match(Java20Parser.DOT);
				this.state = 2549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2548;
					this.typeArguments();
					}
				}

				this.state = 2551;
				this.identifier();
				this.state = 2552;
				this.match(Java20Parser.LPAREN);
				this.state = 2554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2553;
					this.argumentList();
					}
				}

				this.state = 2556;
				this.match(Java20Parser.RPAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2558;
				this.primary();
				this.state = 2559;
				this.match(Java20Parser.DOT);
				this.state = 2561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2560;
					this.typeArguments();
					}
				}

				this.state = 2563;
				this.identifier();
				this.state = 2564;
				this.match(Java20Parser.LPAREN);
				this.state = 2566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2565;
					this.argumentList();
					}
				}

				this.state = 2568;
				this.match(Java20Parser.RPAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2570;
				this.match(Java20Parser.SUPER);
				this.state = 2571;
				this.match(Java20Parser.DOT);
				this.state = 2573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2572;
					this.typeArguments();
					}
				}

				this.state = 2575;
				this.identifier();
				this.state = 2576;
				this.match(Java20Parser.LPAREN);
				this.state = 2578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2577;
					this.argumentList();
					}
				}

				this.state = 2580;
				this.match(Java20Parser.RPAREN);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2582;
				this.typeName();
				this.state = 2583;
				this.match(Java20Parser.DOT);
				this.state = 2584;
				this.match(Java20Parser.SUPER);
				this.state = 2585;
				this.match(Java20Parser.DOT);
				this.state = 2587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2586;
					this.typeArguments();
					}
				}

				this.state = 2589;
				this.identifier();
				this.state = 2590;
				this.match(Java20Parser.LPAREN);
				this.state = 2592;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 280103553) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 12714239) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 2097167) !== 0)) {
					{
					this.state = 2591;
					this.argumentList();
					}
				}

				this.state = 2594;
				this.match(Java20Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 430, Java20Parser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2598;
			this.expression();
			this.state = 2603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===83) {
				{
				{
				this.state = 2599;
				this.match(Java20Parser.COMMA);
				this.state = 2600;
				this.expression();
				}
				}
				this.state = 2605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodReference(): MethodReferenceContext {
		let localctx: MethodReferenceContext = new MethodReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 432, Java20Parser.RULE_methodReference);
		let _la: number;
		try {
			this.state = 2653;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 323, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2606;
				this.expressionName();
				this.state = 2607;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2608;
					this.typeArguments();
					}
				}

				this.state = 2611;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2613;
				this.primary();
				this.state = 2614;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2615;
					this.typeArguments();
					}
				}

				this.state = 2618;
				this.identifier();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2620;
				this.referenceType();
				this.state = 2621;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2622;
					this.typeArguments();
					}
				}

				this.state = 2625;
				this.identifier();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2627;
				this.match(Java20Parser.SUPER);
				this.state = 2628;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2629;
					this.typeArguments();
					}
				}

				this.state = 2632;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2633;
				this.typeName();
				this.state = 2634;
				this.match(Java20Parser.DOT);
				this.state = 2635;
				this.match(Java20Parser.SUPER);
				this.state = 2636;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2637;
					this.typeArguments();
					}
				}

				this.state = 2640;
				this.identifier();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2642;
				this.classType();
				this.state = 2643;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 2644;
					this.typeArguments();
					}
				}

				this.state = 2647;
				this.match(Java20Parser.NEW);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2649;
				this.arrayType();
				this.state = 2650;
				this.match(Java20Parser.COLONCOLON);
				this.state = 2651;
				this.match(Java20Parser.NEW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let localctx: PostfixExpressionContext = new PostfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 434, Java20Parser.RULE_postfixExpression);
		try {
			this.state = 2663;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 326, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2655;
				this.primary();
				this.state = 2657;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 324, this._ctx) ) {
				case 1:
					{
					this.state = 2656;
					this.pfE();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2659;
				this.expressionName();
				this.state = 2661;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 325, this._ctx) ) {
				case 1:
					{
					this.state = 2660;
					this.pfE();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pfE(): PfEContext {
		let localctx: PfEContext = new PfEContext(this, this._ctx, this.state);
		this.enterRule(localctx, 436, Java20Parser.RULE_pfE);
		try {
			this.state = 2673;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 102:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2665;
				this.match(Java20Parser.INC);
				this.state = 2667;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 327, this._ctx) ) {
				case 1:
					{
					this.state = 2666;
					this.pfE();
					}
					break;
				}
				}
				break;
			case 103:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2669;
				this.match(Java20Parser.DEC);
				this.state = 2671;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 328, this._ctx) ) {
				case 1:
					{
					this.state = 2670;
					this.pfE();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postIncrementExpression(): PostIncrementExpressionContext {
		let localctx: PostIncrementExpressionContext = new PostIncrementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 438, Java20Parser.RULE_postIncrementExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2675;
			this.postfixExpression();
			this.state = 2676;
			this.match(Java20Parser.INC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postDecrementExpression(): PostDecrementExpressionContext {
		let localctx: PostDecrementExpressionContext = new PostDecrementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 440, Java20Parser.RULE_postDecrementExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2678;
			this.postfixExpression();
			this.state = 2679;
			this.match(Java20Parser.DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 442, Java20Parser.RULE_unaryExpression);
		try {
			this.state = 2688;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 102:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2681;
				this.preIncrementExpression();
				}
				break;
			case 103:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2682;
				this.preDecrementExpression();
				}
				break;
			case 104:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2683;
				this.match(Java20Parser.ADD);
				this.state = 2684;
				this.unaryExpression();
				}
				break;
			case 105:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2685;
				this.match(Java20Parser.SUB);
				this.state = 2686;
				this.unaryExpression();
				}
				break;
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 20:
			case 22:
			case 25:
			case 31:
			case 37:
			case 44:
			case 46:
			case 48:
			case 54:
			case 57:
			case 58:
			case 60:
			case 65:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 86:
			case 91:
			case 92:
			case 123:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2687;
				this.unaryExpressionNotPlusMinus();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public preIncrementExpression(): PreIncrementExpressionContext {
		let localctx: PreIncrementExpressionContext = new PreIncrementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 444, Java20Parser.RULE_preIncrementExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2690;
			this.match(Java20Parser.INC);
			this.state = 2691;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public preDecrementExpression(): PreDecrementExpressionContext {
		let localctx: PreDecrementExpressionContext = new PreDecrementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 446, Java20Parser.RULE_preDecrementExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2693;
			this.match(Java20Parser.DEC);
			this.state = 2694;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		let localctx: UnaryExpressionNotPlusMinusContext = new UnaryExpressionNotPlusMinusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 448, Java20Parser.RULE_unaryExpressionNotPlusMinus);
		try {
			this.state = 2703;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 331, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2696;
				this.postfixExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2697;
				this.match(Java20Parser.TILDE);
				this.state = 2698;
				this.unaryExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2699;
				this.match(Java20Parser.BANG);
				this.state = 2700;
				this.unaryExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2701;
				this.castExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2702;
				this.switchExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let localctx: CastExpressionContext = new CastExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 450, Java20Parser.RULE_castExpression);
		let _la: number;
		try {
			this.state = 2732;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 334, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2705;
				this.match(Java20Parser.LPAREN);
				this.state = 2706;
				this.primitiveType();
				this.state = 2707;
				this.match(Java20Parser.RPAREN);
				this.state = 2708;
				this.unaryExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2710;
				this.match(Java20Parser.LPAREN);
				this.state = 2711;
				this.referenceType();
				this.state = 2715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===108) {
					{
					{
					this.state = 2712;
					this.additionalBound();
					}
					}
					this.state = 2717;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2718;
				this.match(Java20Parser.RPAREN);
				this.state = 2719;
				this.unaryExpressionNotPlusMinus();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2721;
				this.match(Java20Parser.LPAREN);
				this.state = 2722;
				this.referenceType();
				this.state = 2726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===108) {
					{
					{
					this.state = 2723;
					this.additionalBound();
					}
					}
					this.state = 2728;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2729;
				this.match(Java20Parser.RPAREN);
				this.state = 2730;
				this.lambdaExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = localctx;
		let _startState: number = 452;
		this.enterRecursionRule(localctx, 452, Java20Parser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2735;
			this.unaryExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2748;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 336, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2746;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 335, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_multiplicativeExpression);
						this.state = 2737;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2738;
						this.match(Java20Parser.MUL);
						this.state = 2739;
						this.unaryExpression();
						}
						break;
					case 2:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_multiplicativeExpression);
						this.state = 2740;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2741;
						this.match(Java20Parser.DIV);
						this.state = 2742;
						this.unaryExpression();
						}
						break;
					case 3:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_multiplicativeExpression);
						this.state = 2743;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2744;
						this.match(Java20Parser.MOD);
						this.state = 2745;
						this.unaryExpression();
						}
						break;
					}
					}
				}
				this.state = 2750;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 336, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = localctx;
		let _startState: number = 454;
		this.enterRecursionRule(localctx, 454, Java20Parser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2752;
			this.multiplicativeExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2762;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 338, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2760;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 337, this._ctx) ) {
					case 1:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_additiveExpression);
						this.state = 2754;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2755;
						this.match(Java20Parser.ADD);
						this.state = 2756;
						this.multiplicativeExpression(0);
						}
						break;
					case 2:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_additiveExpression);
						this.state = 2757;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2758;
						this.match(Java20Parser.SUB);
						this.state = 2759;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2764;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 338, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	// @RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ShiftExpressionContext = new ShiftExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = localctx;
		let _startState: number = 456;
		this.enterRecursionRule(localctx, 456, Java20Parser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2766;
			this.additiveExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2783;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 340, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2781;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 339, this._ctx) ) {
					case 1:
						{
						localctx = new ShiftExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_shiftExpression);
						this.state = 2768;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2769;
						this.match(Java20Parser.LT);
						this.state = 2770;
						this.match(Java20Parser.LT);
						this.state = 2771;
						this.additiveExpression(0);
						}
						break;
					case 2:
						{
						localctx = new ShiftExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_shiftExpression);
						this.state = 2772;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2773;
						this.match(Java20Parser.GT);
						this.state = 2774;
						this.match(Java20Parser.GT);
						this.state = 2775;
						this.additiveExpression(0);
						}
						break;
					case 3:
						{
						localctx = new ShiftExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_shiftExpression);
						this.state = 2776;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2777;
						this.match(Java20Parser.GT);
						this.state = 2778;
						this.match(Java20Parser.GT);
						this.state = 2779;
						this.match(Java20Parser.GT);
						this.state = 2780;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2785;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 340, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = localctx;
		let _startState: number = 458;
		this.enterRecursionRule(localctx, 458, Java20Parser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2787;
			this.shiftExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2809;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 343, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2807;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 342, this._ctx) ) {
					case 1:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_relationalExpression);
						this.state = 2789;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 2790;
						this.match(Java20Parser.LT);
						this.state = 2791;
						this.shiftExpression(0);
						}
						break;
					case 2:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_relationalExpression);
						this.state = 2792;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 2793;
						this.match(Java20Parser.GT);
						this.state = 2794;
						this.shiftExpression(0);
						}
						break;
					case 3:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_relationalExpression);
						this.state = 2795;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2796;
						this.match(Java20Parser.LE);
						this.state = 2797;
						this.shiftExpression(0);
						}
						break;
					case 4:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_relationalExpression);
						this.state = 2798;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2799;
						this.match(Java20Parser.GE);
						this.state = 2800;
						this.shiftExpression(0);
						}
						break;
					case 5:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_relationalExpression);
						this.state = 2801;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2802;
						this.match(Java20Parser.INSTANCEOF);
						this.state = 2805;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 341, this._ctx) ) {
						case 1:
							{
							this.state = 2803;
							this.referenceType();
							}
							break;
						case 2:
							{
							this.state = 2804;
							this.pattern();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 2811;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 343, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = localctx;
		let _startState: number = 460;
		this.enterRecursionRule(localctx, 460, Java20Parser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2813;
			this.relationalExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2823;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2821;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 344, this._ctx) ) {
					case 1:
						{
						localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_equalityExpression);
						this.state = 2815;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2816;
						this.match(Java20Parser.EQUAL);
						this.state = 2817;
						this.relationalExpression(0);
						}
						break;
					case 2:
						{
						localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_equalityExpression);
						this.state = 2818;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2819;
						this.match(Java20Parser.NOTEQUAL);
						this.state = 2820;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2825;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 345, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	// @RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AndExpressionContext = new AndExpressionContext(this, this._ctx, _parentState);
		let _prevctx: AndExpressionContext = localctx;
		let _startState: number = 462;
		this.enterRecursionRule(localctx, 462, Java20Parser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2827;
			this.equalityExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2834;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new AndExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_andExpression);
					this.state = 2829;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2830;
					this.match(Java20Parser.BITAND);
					this.state = 2831;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 2836;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public exclusiveOrExpression(): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(_p: number): ExclusiveOrExpressionContext;
	// @RuleVersion(0)
	public exclusiveOrExpression(_p?: number): ExclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExclusiveOrExpressionContext = localctx;
		let _startState: number = 464;
		this.enterRecursionRule(localctx, 464, Java20Parser.RULE_exclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2838;
			this.andExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2845;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 347, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ExclusiveOrExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_exclusiveOrExpression);
					this.state = 2840;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2841;
					this.match(Java20Parser.CARET);
					this.state = 2842;
					this.andExpression(0);
					}
					}
				}
				this.state = 2847;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 347, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public inclusiveOrExpression(): InclusiveOrExpressionContext;
	public inclusiveOrExpression(_p: number): InclusiveOrExpressionContext;
	// @RuleVersion(0)
	public inclusiveOrExpression(_p?: number): InclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this, this._ctx, _parentState);
		let _prevctx: InclusiveOrExpressionContext = localctx;
		let _startState: number = 466;
		this.enterRecursionRule(localctx, 466, Java20Parser.RULE_inclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2849;
			this.exclusiveOrExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2856;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 348, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new InclusiveOrExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_inclusiveOrExpression);
					this.state = 2851;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2852;
					this.match(Java20Parser.BITOR);
					this.state = 2853;
					this.exclusiveOrExpression(0);
					}
					}
				}
				this.state = 2858;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 348, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public conditionalAndExpression(): ConditionalAndExpressionContext;
	public conditionalAndExpression(_p: number): ConditionalAndExpressionContext;
	// @RuleVersion(0)
	public conditionalAndExpression(_p?: number): ConditionalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ConditionalAndExpressionContext = new ConditionalAndExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ConditionalAndExpressionContext = localctx;
		let _startState: number = 468;
		this.enterRecursionRule(localctx, 468, Java20Parser.RULE_conditionalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2860;
			this.inclusiveOrExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2867;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 349, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ConditionalAndExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_conditionalAndExpression);
					this.state = 2862;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2863;
					this.match(Java20Parser.AND);
					this.state = 2864;
					this.inclusiveOrExpression(0);
					}
					}
				}
				this.state = 2869;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 349, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public conditionalOrExpression(): ConditionalOrExpressionContext;
	public conditionalOrExpression(_p: number): ConditionalOrExpressionContext;
	// @RuleVersion(0)
	public conditionalOrExpression(_p?: number): ConditionalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ConditionalOrExpressionContext = new ConditionalOrExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ConditionalOrExpressionContext = localctx;
		let _startState: number = 470;
		this.enterRecursionRule(localctx, 470, Java20Parser.RULE_conditionalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2871;
			this.conditionalAndExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2878;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 350, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ConditionalOrExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java20Parser.RULE_conditionalOrExpression);
					this.state = 2873;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2874;
					this.match(Java20Parser.OR);
					this.state = 2875;
					this.conditionalAndExpression(0);
					}
					}
				}
				this.state = 2880;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 350, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 472, Java20Parser.RULE_conditionalExpression);
		try {
			this.state = 2894;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 351, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2881;
				this.conditionalOrExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2882;
				this.conditionalOrExpression(0);
				this.state = 2883;
				this.match(Java20Parser.QUESTION);
				this.state = 2884;
				this.expression();
				this.state = 2885;
				this.match(Java20Parser.COLON);
				this.state = 2886;
				this.conditionalExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2888;
				this.conditionalOrExpression(0);
				this.state = 2889;
				this.match(Java20Parser.QUESTION);
				this.state = 2890;
				this.expression();
				this.state = 2891;
				this.match(Java20Parser.COLON);
				this.state = 2892;
				this.lambdaExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 474, Java20Parser.RULE_assignmentExpression);
		try {
			this.state = 2898;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 352, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2896;
				this.conditionalExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2897;
				this.assignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 476, Java20Parser.RULE_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2900;
			this.leftHandSide();
			this.state = 2901;
			this.assignmentOperator();
			this.state = 2902;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public leftHandSide(): LeftHandSideContext {
		let localctx: LeftHandSideContext = new LeftHandSideContext(this, this._ctx, this.state);
		this.enterRule(localctx, 478, Java20Parser.RULE_leftHandSide);
		try {
			this.state = 2907;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 353, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2904;
				this.expressionName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2905;
				this.fieldAccess();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2906;
				this.arrayAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 480, Java20Parser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2909;
			_la = this._input.LA(1);
			if(!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 4278190081) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let localctx: LambdaExpressionContext = new LambdaExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 482, Java20Parser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2911;
			this.lambdaParameters();
			this.state = 2912;
			this.match(Java20Parser.ARROW);
			this.state = 2913;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let localctx: LambdaParametersContext = new LambdaParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 484, Java20Parser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 2921;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 76:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2915;
				this.match(Java20Parser.LPAREN);
				this.state = 2917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2186543086) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 526853) !== 0) || _la===86 || _la===123) {
					{
					this.state = 2916;
					this.lambdaParameterList();
					}
				}

				this.state = 2919;
				this.match(Java20Parser.RPAREN);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 123:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2920;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaParameterList(): LambdaParameterListContext {
		let localctx: LambdaParameterListContext = new LambdaParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 486, Java20Parser.RULE_lambdaParameterList);
		let _la: number;
		try {
			this.state = 2939;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 358, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2923;
				this.lambdaParameter();
				this.state = 2928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===83) {
					{
					{
					this.state = 2924;
					this.match(Java20Parser.COMMA);
					this.state = 2925;
					this.lambdaParameter();
					}
					}
					this.state = 2930;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2931;
				this.identifier();
				this.state = 2936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===83) {
					{
					{
					this.state = 2932;
					this.match(Java20Parser.COMMA);
					this.state = 2933;
					this.identifier();
					}
					}
					this.state = 2938;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaParameter(): LambdaParameterContext {
		let localctx: LambdaParameterContext = new LambdaParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 488, Java20Parser.RULE_lambdaParameter);
		let _la: number;
		try {
			this.state = 2951;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 360, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2944;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===35 || _la===86) {
					{
					{
					this.state = 2941;
					this.variableModifier();
					}
					}
					this.state = 2946;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2947;
				this.lambdaParameterType();
				this.state = 2948;
				this.variableDeclaratorId();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2950;
				this.variableArityParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaParameterType(): LambdaParameterTypeContext {
		let localctx: LambdaParameterTypeContext = new LambdaParameterTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 490, Java20Parser.RULE_lambdaParameterType);
		try {
			this.state = 2955;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 361, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2953;
				this.unannType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2954;
				this.match(Java20Parser.VAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let localctx: LambdaBodyContext = new LambdaBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 492, Java20Parser.RULE_lambdaBody);
		try {
			this.state = 2959;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 20:
			case 22:
			case 25:
			case 31:
			case 37:
			case 44:
			case 46:
			case 48:
			case 54:
			case 57:
			case 58:
			case 60:
			case 65:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 86:
			case 91:
			case 92:
			case 102:
			case 103:
			case 104:
			case 105:
			case 123:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2957;
				this.expression();
				}
				break;
			case 78:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2958;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchExpression(): SwitchExpressionContext {
		let localctx: SwitchExpressionContext = new SwitchExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 494, Java20Parser.RULE_switchExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2961;
			this.match(Java20Parser.SWITCH);
			this.state = 2962;
			this.match(Java20Parser.LPAREN);
			this.state = 2963;
			this.expression();
			this.state = 2964;
			this.match(Java20Parser.RPAREN);
			this.state = 2965;
			this.switchBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let localctx: ConstantExpressionContext = new ConstantExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 496, Java20Parser.RULE_constantExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2967;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 226:
			return this.multiplicativeExpression_sempred(localctx as MultiplicativeExpressionContext, predIndex);
		case 227:
			return this.additiveExpression_sempred(localctx as AdditiveExpressionContext, predIndex);
		case 228:
			return this.shiftExpression_sempred(localctx as ShiftExpressionContext, predIndex);
		case 229:
			return this.relationalExpression_sempred(localctx as RelationalExpressionContext, predIndex);
		case 230:
			return this.equalityExpression_sempred(localctx as EqualityExpressionContext, predIndex);
		case 231:
			return this.andExpression_sempred(localctx as AndExpressionContext, predIndex);
		case 232:
			return this.exclusiveOrExpression_sempred(localctx as ExclusiveOrExpressionContext, predIndex);
		case 233:
			return this.inclusiveOrExpression_sempred(localctx as InclusiveOrExpressionContext, predIndex);
		case 234:
			return this.conditionalAndExpression_sempred(localctx as ConditionalAndExpressionContext, predIndex);
		case 235:
			return this.conditionalOrExpression_sempred(localctx as ConditionalOrExpressionContext, predIndex);
		}
		return true;
	}
	private multiplicativeExpression_sempred(localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 5);
		case 9:
			return this.precpred(this._ctx, 4);
		case 10:
			return this.precpred(this._ctx, 3);
		case 11:
			return this.precpred(this._ctx, 2);
		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 2);
		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveOrExpression_sempred(localctx: ExclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveOrExpression_sempred(localctx: InclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalAndExpression_sempred(localctx: ConditionalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalOrExpression_sempred(localctx: ConditionalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,126,2970,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,
	7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
	7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,2,181,
	7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,2,187,
	7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,2,193,
	7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,2,199,
	7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,2,205,
	7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,2,211,
	7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,
	7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,
	7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,
	7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
	7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,2,241,
	7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,7,246,2,247,
	7,247,2,248,7,248,1,0,1,0,1,0,1,1,1,1,3,1,504,8,1,1,2,1,2,3,2,508,8,2,1,
	3,1,3,3,3,512,8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,5,8,523,8,8,10,8,
	12,8,526,9,8,1,8,1,8,3,8,530,8,8,1,9,1,9,3,9,534,8,9,1,10,1,10,1,11,1,11,
	1,12,1,12,1,12,3,12,543,8,12,1,13,1,13,5,13,547,8,13,10,13,12,13,550,9,
	13,1,13,1,13,3,13,554,8,13,1,13,3,13,557,8,13,1,14,1,14,1,14,3,14,562,8,
	14,1,14,5,14,565,8,14,10,14,12,14,568,9,14,1,14,1,14,3,14,572,8,14,1,14,
	3,14,575,8,14,1,15,5,15,578,8,15,10,15,12,15,581,9,15,1,15,1,15,3,15,585,
	8,15,1,15,1,15,1,15,5,15,590,8,15,10,15,12,15,593,9,15,1,15,1,15,3,15,597,
	8,15,1,15,1,15,1,15,5,15,602,8,15,10,15,12,15,605,9,15,1,15,1,15,3,15,609,
	8,15,3,15,611,8,15,1,16,1,16,1,17,5,17,616,8,17,10,17,12,17,619,9,17,1,
	17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,632,8,18,1,19,
	5,19,635,8,19,10,19,12,19,638,9,19,1,19,1,19,1,19,5,19,643,8,19,10,19,12,
	19,646,9,19,1,19,1,19,5,19,650,8,19,10,19,12,19,653,9,19,1,20,5,20,656,
	8,20,10,20,12,20,659,9,20,1,20,1,20,3,20,663,8,20,1,21,1,21,1,22,1,22,1,
	22,1,22,5,22,671,8,22,10,22,12,22,674,9,22,3,22,676,8,22,1,23,1,23,1,23,
	1,24,1,24,1,24,1,24,1,25,1,25,1,25,5,25,688,8,25,10,25,12,25,691,9,25,1,
	26,1,26,3,26,695,8,26,1,27,5,27,698,8,27,10,27,12,27,701,9,27,1,27,1,27,
	3,27,705,8,27,1,28,1,28,1,28,1,28,3,28,711,8,28,1,29,1,29,1,29,3,29,716,
	8,29,1,30,1,30,1,30,3,30,721,8,30,1,31,1,31,1,31,3,31,726,8,31,1,32,1,32,
	1,32,3,32,731,8,32,1,33,1,33,1,33,3,33,736,8,33,1,33,1,33,1,34,1,34,1,35,
	1,35,1,35,3,35,745,8,35,1,36,1,36,3,36,749,8,36,1,37,3,37,752,8,37,1,37,
	5,37,755,8,37,10,37,12,37,758,9,37,1,37,5,37,761,8,37,10,37,12,37,764,9,
	37,1,38,5,38,767,8,38,10,38,12,38,770,9,38,1,38,1,38,1,39,5,39,775,8,39,
	10,39,12,39,778,9,39,1,39,1,39,1,39,1,39,5,39,784,8,39,10,39,12,39,787,
	9,39,1,39,1,39,1,40,1,40,1,41,1,41,1,41,1,41,3,41,797,8,41,1,42,1,42,1,
	42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
	1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,3,46,826,8,46,1,47,5,
	47,829,8,47,10,47,12,47,832,9,47,1,47,3,47,835,8,47,1,47,1,47,1,47,1,47,
	5,47,841,8,47,10,47,12,47,844,9,47,1,47,1,47,5,47,848,8,47,10,47,12,47,
	851,9,47,1,47,1,47,1,48,1,48,5,48,857,8,48,10,48,12,48,860,9,48,1,48,1,
	48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,5,48,871,8,48,10,48,12,48,874,9,48,
	3,48,876,8,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,5,48,886,8,48,10,
	48,12,48,889,9,48,3,48,891,8,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
	1,48,1,48,1,48,1,48,5,48,905,8,48,10,48,12,48,908,9,48,1,48,1,48,3,48,912,
	8,48,1,49,1,49,1,50,1,50,1,50,3,50,919,8,50,1,51,5,51,922,8,51,10,51,12,
	51,925,9,51,1,51,1,51,1,51,3,51,930,8,51,1,51,3,51,933,8,51,1,51,3,51,936,
	8,51,1,51,3,51,939,8,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,
	52,1,52,1,52,3,52,953,8,52,1,53,1,53,1,53,1,53,1,54,1,54,1,54,5,54,962,
	8,54,10,54,12,54,965,9,54,1,55,1,55,1,55,1,56,1,56,1,56,1,57,1,57,1,57,
	5,57,976,8,57,10,57,12,57,979,9,57,1,58,1,58,1,58,1,58,5,58,985,8,58,10,
	58,12,58,988,9,58,1,59,1,59,5,59,992,8,59,10,59,12,59,995,9,59,1,59,1,59,
	1,60,1,60,1,60,1,60,3,60,1003,8,60,1,61,1,61,1,61,1,61,1,61,3,61,1010,8,
	61,1,62,5,62,1013,8,62,10,62,12,62,1016,9,62,1,62,1,62,1,62,1,62,1,63,1,
	63,1,63,1,63,1,63,1,63,1,63,1,63,3,63,1030,8,63,1,64,1,64,1,64,5,64,1035,
	8,64,10,64,12,64,1038,9,64,1,65,1,65,1,65,3,65,1043,8,65,1,66,1,66,3,66,
	1047,8,66,1,67,1,67,3,67,1051,8,67,1,68,1,68,3,68,1055,8,68,1,69,1,69,3,
	69,1059,8,69,1,70,1,70,1,70,3,70,1064,8,70,1,71,1,71,1,71,5,71,1069,8,71,
	10,71,12,71,1072,9,71,3,71,1074,8,71,1,71,1,71,3,71,1078,8,71,1,71,3,71,
	1081,8,71,1,72,1,72,5,72,1085,8,72,10,72,12,72,1088,9,72,1,72,1,72,3,72,
	1092,8,72,1,72,3,72,1095,8,72,1,73,1,73,3,73,1099,8,73,1,73,1,73,3,73,1103,
	8,73,1,73,1,73,5,73,1107,8,73,10,73,12,73,1110,9,73,1,73,1,73,3,73,1114,
	8,73,3,73,1116,8,73,1,74,1,74,1,75,1,75,1,76,1,76,1,76,3,76,1125,8,76,1,
	76,1,76,1,77,5,77,1130,8,77,10,77,12,77,1133,9,77,1,77,1,77,1,77,1,78,1,
	78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,1148,8,78,1,79,1,79,5,79,
	1152,8,79,10,79,12,79,1155,9,79,3,79,1157,8,79,1,79,1,79,1,79,3,79,1162,
	8,79,1,80,1,80,3,80,1166,8,80,1,81,1,81,1,81,1,81,1,81,3,81,1173,8,81,1,
	81,3,81,1176,8,81,1,81,1,81,3,81,1180,8,81,1,82,5,82,1183,8,82,10,82,12,
	82,1186,9,82,1,82,1,82,1,82,1,82,3,82,1192,8,82,1,82,1,82,1,83,1,83,1,83,
	5,83,1199,8,83,10,83,12,83,1202,9,83,1,84,5,84,1205,8,84,10,84,12,84,1208,
	9,84,1,84,1,84,1,84,1,84,3,84,1214,8,84,1,85,5,85,1217,8,85,10,85,12,85,
	1220,9,85,1,85,1,85,5,85,1224,8,85,10,85,12,85,1227,9,85,1,85,1,85,1,85,
	1,86,1,86,3,86,1234,8,86,1,87,1,87,1,87,1,88,1,88,1,88,5,88,1242,8,88,10,
	88,12,88,1245,9,88,1,89,1,89,3,89,1249,8,89,1,90,1,90,3,90,1253,8,90,1,
	91,1,91,1,92,1,92,1,92,1,93,5,93,1261,8,93,10,93,12,93,1264,9,93,1,93,1,
	93,3,93,1268,8,93,1,93,1,93,1,94,1,94,1,94,1,94,3,94,1276,8,94,1,95,3,95,
	1279,8,95,1,95,1,95,1,95,1,95,1,95,3,95,1286,8,95,1,95,3,95,1289,8,95,1,
	95,1,95,1,96,1,96,1,97,1,97,3,97,1297,8,97,1,97,3,97,1300,8,97,1,97,1,97,
	1,98,3,98,1305,8,98,1,98,1,98,1,98,3,98,1310,8,98,1,98,1,98,1,98,1,98,3,
	98,1316,8,98,1,98,1,98,3,98,1320,8,98,1,98,1,98,1,98,3,98,1325,8,98,1,98,
	1,98,1,98,3,98,1330,8,98,1,99,5,99,1333,8,99,10,99,12,99,1336,9,99,1,99,
	1,99,1,99,3,99,1341,8,99,1,99,1,99,1,100,1,100,3,100,1347,8,100,1,100,3,
	100,1350,8,100,1,100,3,100,1353,8,100,1,100,1,100,1,101,1,101,1,101,5,101,
	1360,8,101,10,101,12,101,1363,9,101,1,102,5,102,1366,8,102,10,102,12,102,
	1369,9,102,1,102,1,102,1,102,3,102,1374,8,102,1,102,3,102,1377,8,102,1,
	102,3,102,1380,8,102,1,103,1,103,1,104,1,104,5,104,1386,8,104,10,104,12,
	104,1389,9,104,1,105,5,105,1392,8,105,10,105,12,105,1395,9,105,1,105,1,
	105,1,105,3,105,1400,8,105,1,105,1,105,3,105,1404,8,105,1,105,1,105,1,106,
	1,106,3,106,1410,8,106,1,106,1,106,1,107,1,107,1,107,5,107,1417,8,107,10,
	107,12,107,1420,9,107,1,108,5,108,1423,8,108,10,108,12,108,1426,9,108,1,
	108,1,108,1,108,1,108,3,108,1432,8,108,1,109,5,109,1435,8,109,10,109,12,
	109,1438,9,109,1,109,1,109,5,109,1442,8,109,10,109,12,109,1445,9,109,1,
	109,1,109,1,109,1,110,1,110,1,111,1,111,5,111,1454,8,111,10,111,12,111,
	1457,9,111,1,111,1,111,1,112,1,112,3,112,1463,8,112,1,113,5,113,1466,8,
	113,10,113,12,113,1469,9,113,1,113,1,113,1,113,1,114,1,114,3,114,1476,8,
	114,1,115,5,115,1479,8,115,10,115,12,115,1482,9,115,1,115,1,115,1,115,3,
	115,1487,8,115,1,115,3,115,1490,8,115,1,115,3,115,1493,8,115,1,115,1,115,
	1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,3,116,1506,8,116,
	1,117,1,117,1,117,1,118,1,118,1,118,1,118,5,118,1515,8,118,10,118,12,118,
	1518,9,118,1,119,1,119,5,119,1522,8,119,10,119,12,119,1525,9,119,1,119,
	1,119,1,120,1,120,1,120,1,120,1,120,3,120,1534,8,120,1,121,5,121,1537,8,
	121,10,121,12,121,1540,9,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,
	1,122,3,122,1550,8,122,1,123,5,123,1553,8,123,10,123,12,123,1556,9,123,
	1,123,1,123,1,123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,3,124,1568,
	8,124,1,125,5,125,1571,8,125,10,125,12,125,1574,9,125,1,125,1,125,1,125,
	1,125,1,125,1,126,1,126,5,126,1583,8,126,10,126,12,126,1586,9,126,1,126,
	1,126,1,127,1,127,1,127,1,127,1,127,3,127,1595,8,127,1,128,5,128,1598,8,
	128,10,128,12,128,1601,9,128,1,128,1,128,1,128,1,128,1,128,3,128,1608,8,
	128,1,128,3,128,1611,8,128,1,128,1,128,1,129,1,129,1,129,3,129,1618,8,129,
	1,130,1,130,1,130,1,131,1,131,1,131,3,131,1626,8,131,1,132,1,132,1,132,
	1,132,3,132,1632,8,132,1,132,1,132,1,133,1,133,1,133,5,133,1639,8,133,10,
	133,12,133,1642,9,133,1,134,1,134,1,134,1,134,1,135,1,135,1,135,3,135,1651,
	8,135,1,136,1,136,3,136,1655,8,136,1,136,3,136,1658,8,136,1,136,1,136,1,
	137,1,137,1,137,5,137,1665,8,137,10,137,12,137,1668,9,137,1,138,1,138,1,
	138,1,139,1,139,1,139,1,139,1,139,1,139,1,140,1,140,3,140,1681,8,140,1,
	140,3,140,1684,8,140,1,140,1,140,1,141,1,141,1,141,5,141,1691,8,141,10,
	141,12,141,1694,9,141,1,142,1,142,3,142,1698,8,142,1,142,1,142,1,143,1,
	143,5,143,1704,8,143,10,143,12,143,1707,9,143,1,144,1,144,1,144,3,144,1712,
	8,144,1,145,1,145,3,145,1716,8,145,1,146,5,146,1719,8,146,10,146,12,146,
	1722,9,146,1,146,1,146,3,146,1726,8,146,1,147,1,147,3,147,1730,8,147,1,
	148,1,148,1,148,1,149,1,149,1,149,1,149,1,149,1,149,3,149,1741,8,149,1,
	150,1,150,1,150,1,150,1,150,3,150,1748,8,150,1,151,1,151,1,151,1,151,1,
	151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,3,151,1763,8,151,1,
	152,1,152,1,153,1,153,1,153,1,153,1,154,1,154,1,154,1,154,1,155,1,155,1,
	155,1,156,1,156,1,156,1,156,1,156,1,156,1,156,3,156,1785,8,156,1,157,1,
	157,1,157,1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,
	158,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,160,1,160,1,160,1,
	160,3,160,1813,8,160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,161,1,
	162,1,162,1,162,5,162,1826,8,162,10,162,12,162,1829,9,162,1,162,1,162,1,
	162,1,162,5,162,1835,8,162,10,162,12,162,1838,9,162,1,162,1,162,1,162,5,
	162,1843,8,162,10,162,12,162,1846,9,162,1,162,3,162,1849,8,162,1,163,1,
	163,1,163,1,163,1,163,1,163,1,163,3,163,1858,8,163,1,164,1,164,1,164,1,
	164,1,164,5,164,1865,8,164,10,164,12,164,1868,9,164,1,164,1,164,1,165,1,
	165,1,165,1,165,5,165,1876,8,165,10,165,12,165,1879,9,165,1,165,3,165,1882,
	8,165,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,1,168,1,168,1,168,
	1,168,1,168,1,168,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,170,
	1,170,3,170,1908,8,170,1,171,1,171,3,171,1912,8,171,1,172,1,172,1,172,3,
	172,1917,8,172,1,172,1,172,3,172,1921,8,172,1,172,1,172,3,172,1925,8,172,
	1,172,1,172,1,172,1,173,1,173,1,173,3,173,1933,8,173,1,173,1,173,3,173,
	1937,8,173,1,173,1,173,3,173,1941,8,173,1,173,1,173,1,173,1,174,1,174,3,
	174,1948,8,174,1,175,1,175,1,176,1,176,1,176,5,176,1955,8,176,10,176,12,
	176,1958,9,176,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,178,1,
	178,1,178,1,178,1,178,1,178,1,178,1,178,1,179,1,179,3,179,1978,8,179,1,
	179,1,179,1,180,1,180,3,180,1984,8,180,1,180,1,180,1,181,1,181,3,181,1990,
	8,181,1,181,1,181,1,182,1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,183,
	1,183,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,
	3,184,2015,8,184,1,184,1,184,1,184,3,184,2020,8,184,1,185,1,185,5,185,2024,
	8,185,10,185,12,185,2027,9,185,1,186,1,186,1,186,1,186,1,186,1,186,1,187,
	5,187,2036,8,187,10,187,12,187,2039,9,187,1,187,1,187,1,187,1,188,1,188,
	1,188,5,188,2047,8,188,10,188,12,188,2050,9,188,1,189,1,189,1,189,1,190,
	1,190,1,190,1,190,3,190,2059,8,190,1,190,3,190,2062,8,190,1,191,1,191,1,
	191,3,191,2067,8,191,1,191,1,191,1,192,1,192,1,192,5,192,2074,8,192,10,
	192,12,192,2077,9,192,1,193,1,193,3,193,2081,8,193,1,194,1,194,3,194,2085,
	8,194,1,195,1,195,1,195,1,195,1,196,1,196,1,197,1,197,1,198,1,198,3,198,
	2097,8,198,1,199,1,199,3,199,2101,8,199,1,200,1,200,3,200,2105,8,200,1,
	200,1,200,3,200,2109,8,200,1,200,1,200,3,200,2113,8,200,1,200,1,200,1,200,
	1,200,3,200,2119,8,200,1,200,1,200,1,200,1,200,3,200,2125,8,200,1,200,1,
	200,3,200,2129,8,200,1,200,1,200,1,200,1,200,3,200,2135,8,200,1,200,1,200,
	1,200,1,200,3,200,2141,8,200,1,200,1,200,1,200,1,200,3,200,2147,8,200,1,
	200,1,200,1,200,1,200,3,200,2153,8,200,1,200,1,200,1,200,1,200,1,200,1,
	200,3,200,2161,8,200,1,200,1,200,1,200,1,200,1,200,3,200,2168,8,200,1,200,
	1,200,1,200,1,200,1,200,3,200,2175,8,200,1,200,1,200,1,200,3,200,2180,8,
	200,1,200,1,200,3,200,2184,8,200,1,200,1,200,1,200,3,200,2189,8,200,1,200,
	1,200,1,200,3,200,2194,8,200,1,200,1,200,3,200,2198,8,200,1,200,1,200,1,
	200,3,200,2203,8,200,1,200,1,200,1,200,3,200,2208,8,200,1,200,1,200,3,200,
	2212,8,200,1,200,1,200,1,200,3,200,2217,8,200,1,200,1,200,1,200,3,200,2222,
	8,200,1,200,1,200,3,200,2226,8,200,1,200,1,200,1,200,3,200,2231,8,200,1,
	200,1,200,1,200,3,200,2236,8,200,1,200,1,200,3,200,2240,8,200,1,200,1,200,
	1,200,1,200,1,200,3,200,2247,8,200,1,200,1,200,1,200,3,200,2252,8,200,1,
	200,1,200,3,200,2256,8,200,1,200,1,200,1,200,3,200,2261,8,200,1,200,1,200,
	3,200,2265,8,200,1,200,1,200,1,200,3,200,2270,8,200,1,200,1,200,3,200,2274,
	8,200,1,200,1,200,1,200,3,200,2279,8,200,1,200,1,200,3,200,2283,8,200,1,
	200,1,200,1,200,3,200,2288,8,200,1,200,1,200,3,200,2292,8,200,1,200,1,200,
	1,200,1,200,1,200,3,200,2299,8,200,1,200,1,200,3,200,2303,8,200,1,200,1,
	200,1,200,3,200,2308,8,200,1,200,1,200,3,200,2312,8,200,1,200,1,200,1,200,
	1,200,3,200,2318,8,200,3,200,2320,8,200,1,201,1,201,1,201,3,201,2325,8,
	201,1,201,1,201,1,201,3,201,2330,8,201,1,201,1,201,1,201,1,201,3,201,2336,
	8,201,1,201,1,201,3,201,2340,8,201,1,201,1,201,1,201,3,201,2345,8,201,1,
	201,1,201,3,201,2349,8,201,1,201,1,201,3,201,2353,8,201,1,201,1,201,3,201,
	2357,8,201,3,201,2359,8,201,1,202,1,202,1,202,5,202,2364,8,202,10,202,12,
	202,2367,9,202,1,202,1,202,1,202,1,202,1,202,1,202,5,202,2375,8,202,10,
	202,12,202,2378,9,202,1,202,1,202,1,202,1,202,1,202,1,202,5,202,2386,8,
	202,10,202,12,202,2389,9,202,1,202,1,202,1,202,1,202,1,202,3,202,2396,8,
	202,1,203,1,203,1,203,1,203,1,203,1,203,1,203,1,203,1,203,3,203,2407,8,
	203,1,204,1,204,3,204,2411,8,204,1,204,1,204,1,204,3,204,2416,8,204,1,204,
	1,204,3,204,2420,8,204,1,205,5,205,2423,8,205,10,205,12,205,2426,9,205,
	1,205,1,205,1,205,5,205,2431,8,205,10,205,12,205,2434,9,205,1,205,5,205,
	2437,8,205,10,205,12,205,2440,9,205,1,205,3,205,2443,8,205,1,206,1,206,
	3,206,2447,8,206,1,207,1,207,3,207,2451,8,207,1,208,1,208,1,208,1,208,3,
	208,2457,8,208,1,208,1,208,1,208,1,208,3,208,2463,8,208,3,208,2465,8,208,
	1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,3,209,2477,
	8,209,1,210,1,210,5,210,2481,8,210,10,210,12,210,2484,9,210,1,211,5,211,
	2487,8,211,10,211,12,211,2490,9,211,1,211,1,211,1,211,1,211,1,212,1,212,
	1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,
	1,212,3,212,2511,8,212,1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,213,
	1,213,1,213,1,213,1,213,1,213,3,213,2526,8,213,1,214,1,214,1,214,3,214,
	2531,8,214,1,214,1,214,1,214,1,214,1,214,3,214,2538,8,214,1,214,1,214,1,
	214,3,214,2543,8,214,1,214,1,214,1,214,1,214,1,214,3,214,2550,8,214,1,214,
	1,214,1,214,3,214,2555,8,214,1,214,1,214,1,214,1,214,1,214,3,214,2562,8,
	214,1,214,1,214,1,214,3,214,2567,8,214,1,214,1,214,1,214,1,214,1,214,3,
	214,2574,8,214,1,214,1,214,1,214,3,214,2579,8,214,1,214,1,214,1,214,1,214,
	1,214,1,214,1,214,3,214,2588,8,214,1,214,1,214,1,214,3,214,2593,8,214,1,
	214,1,214,3,214,2597,8,214,1,215,1,215,1,215,5,215,2602,8,215,10,215,12,
	215,2605,9,215,1,216,1,216,1,216,3,216,2610,8,216,1,216,1,216,1,216,1,216,
	1,216,3,216,2617,8,216,1,216,1,216,1,216,1,216,1,216,3,216,2624,8,216,1,
	216,1,216,1,216,1,216,1,216,3,216,2631,8,216,1,216,1,216,1,216,1,216,1,
	216,1,216,3,216,2639,8,216,1,216,1,216,1,216,1,216,1,216,3,216,2646,8,216,
	1,216,1,216,1,216,1,216,1,216,1,216,3,216,2654,8,216,1,217,1,217,3,217,
	2658,8,217,1,217,1,217,3,217,2662,8,217,3,217,2664,8,217,1,218,1,218,3,
	218,2668,8,218,1,218,1,218,3,218,2672,8,218,3,218,2674,8,218,1,219,1,219,
	1,219,1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,221,1,221,1,221,3,221,
	2689,8,221,1,222,1,222,1,222,1,223,1,223,1,223,1,224,1,224,1,224,1,224,
	1,224,1,224,1,224,3,224,2704,8,224,1,225,1,225,1,225,1,225,1,225,1,225,
	1,225,1,225,5,225,2714,8,225,10,225,12,225,2717,9,225,1,225,1,225,1,225,
	1,225,1,225,1,225,5,225,2725,8,225,10,225,12,225,2728,9,225,1,225,1,225,
	1,225,3,225,2733,8,225,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,
	1,226,1,226,1,226,1,226,5,226,2747,8,226,10,226,12,226,2750,9,226,1,227,
	1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,5,227,2761,8,227,10,227,
	12,227,2764,9,227,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,228,
	1,228,1,228,1,228,1,228,1,228,1,228,1,228,5,228,2782,8,228,10,228,12,228,
	2785,9,228,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,
	1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,3,229,2806,8,229,
	5,229,2808,8,229,10,229,12,229,2811,9,229,1,230,1,230,1,230,1,230,1,230,
	1,230,1,230,1,230,1,230,5,230,2822,8,230,10,230,12,230,2825,9,230,1,231,
	1,231,1,231,1,231,1,231,1,231,5,231,2833,8,231,10,231,12,231,2836,9,231,
	1,232,1,232,1,232,1,232,1,232,1,232,5,232,2844,8,232,10,232,12,232,2847,
	9,232,1,233,1,233,1,233,1,233,1,233,1,233,5,233,2855,8,233,10,233,12,233,
	2858,9,233,1,234,1,234,1,234,1,234,1,234,1,234,5,234,2866,8,234,10,234,
	12,234,2869,9,234,1,235,1,235,1,235,1,235,1,235,1,235,5,235,2877,8,235,
	10,235,12,235,2880,9,235,1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,236,
	1,236,1,236,1,236,1,236,1,236,3,236,2895,8,236,1,237,1,237,3,237,2899,8,
	237,1,238,1,238,1,238,1,238,1,239,1,239,1,239,3,239,2908,8,239,1,240,1,
	240,1,241,1,241,1,241,1,241,1,242,1,242,3,242,2918,8,242,1,242,1,242,3,
	242,2922,8,242,1,243,1,243,1,243,5,243,2927,8,243,10,243,12,243,2930,9,
	243,1,243,1,243,1,243,5,243,2935,8,243,10,243,12,243,2938,9,243,3,243,2940,
	8,243,1,244,5,244,2943,8,244,10,244,12,244,2946,9,244,1,244,1,244,1,244,
	1,244,3,244,2952,8,244,1,245,1,245,3,245,2956,8,245,1,246,1,246,3,246,2960,
	8,246,1,247,1,247,1,247,1,247,1,247,1,247,1,248,1,248,1,248,0,10,452,454,
	456,458,460,462,464,466,468,470,249,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
	28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
	76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
	118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,
	154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,
	190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,
	226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,
	262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,
	298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,
	334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,
	370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400,402,404,
	406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,440,
	442,444,446,448,450,452,454,456,458,460,462,464,466,468,470,472,474,476,
	478,480,482,484,486,488,490,492,494,496,0,9,2,0,1,3,5,17,6,0,1,3,5,6,8,
	8,10,10,12,14,16,16,2,0,1,3,5,16,1,0,69,75,5,0,22,22,25,25,44,44,46,46,
	54,54,2,0,31,31,37,37,2,0,13,13,55,55,2,0,57,57,60,60,2,0,88,88,112,122,
	3229,0,498,1,0,0,0,2,503,1,0,0,0,4,507,1,0,0,0,6,511,1,0,0,0,8,513,1,0,
	0,0,10,515,1,0,0,0,12,517,1,0,0,0,14,519,1,0,0,0,16,524,1,0,0,0,18,533,
	1,0,0,0,20,535,1,0,0,0,22,537,1,0,0,0,24,542,1,0,0,0,26,544,1,0,0,0,28,
	561,1,0,0,0,30,610,1,0,0,0,32,612,1,0,0,0,34,617,1,0,0,0,36,631,1,0,0,0,
	38,636,1,0,0,0,40,657,1,0,0,0,42,664,1,0,0,0,44,666,1,0,0,0,46,677,1,0,
	0,0,48,680,1,0,0,0,50,684,1,0,0,0,52,694,1,0,0,0,54,699,1,0,0,0,56,710,
	1,0,0,0,58,712,1,0,0,0,60,717,1,0,0,0,62,722,1,0,0,0,64,727,1,0,0,0,66,
	735,1,0,0,0,68,739,1,0,0,0,70,741,1,0,0,0,72,748,1,0,0,0,74,751,1,0,0,0,
	76,768,1,0,0,0,78,776,1,0,0,0,80,790,1,0,0,0,82,796,1,0,0,0,84,798,1,0,
	0,0,86,802,1,0,0,0,88,808,1,0,0,0,90,815,1,0,0,0,92,825,1,0,0,0,94,830,
	1,0,0,0,96,911,1,0,0,0,98,913,1,0,0,0,100,918,1,0,0,0,102,923,1,0,0,0,104,
	952,1,0,0,0,106,954,1,0,0,0,108,958,1,0,0,0,110,966,1,0,0,0,112,969,1,0,
	0,0,114,972,1,0,0,0,116,980,1,0,0,0,118,989,1,0,0,0,120,1002,1,0,0,0,122,
	1009,1,0,0,0,124,1014,1,0,0,0,126,1029,1,0,0,0,128,1031,1,0,0,0,130,1039,
	1,0,0,0,132,1044,1,0,0,0,134,1050,1,0,0,0,136,1054,1,0,0,0,138,1058,1,0,
	0,0,140,1063,1,0,0,0,142,1073,1,0,0,0,144,1082,1,0,0,0,146,1115,1,0,0,0,
	148,1117,1,0,0,0,150,1119,1,0,0,0,152,1124,1,0,0,0,154,1131,1,0,0,0,156,
	1147,1,0,0,0,158,1156,1,0,0,0,160,1165,1,0,0,0,162,1167,1,0,0,0,164,1184,
	1,0,0,0,166,1195,1,0,0,0,168,1213,1,0,0,0,170,1218,1,0,0,0,172,1233,1,0,
	0,0,174,1235,1,0,0,0,176,1238,1,0,0,0,178,1248,1,0,0,0,180,1252,1,0,0,0,
	182,1254,1,0,0,0,184,1256,1,0,0,0,186,1262,1,0,0,0,188,1275,1,0,0,0,190,
	1278,1,0,0,0,192,1292,1,0,0,0,194,1294,1,0,0,0,196,1329,1,0,0,0,198,1334,
	1,0,0,0,200,1344,1,0,0,0,202,1356,1,0,0,0,204,1367,1,0,0,0,206,1381,1,0,
	0,0,208,1383,1,0,0,0,210,1393,1,0,0,0,212,1407,1,0,0,0,214,1413,1,0,0,0,
	216,1431,1,0,0,0,218,1436,1,0,0,0,220,1449,1,0,0,0,222,1451,1,0,0,0,224,
	1462,1,0,0,0,226,1467,1,0,0,0,228,1475,1,0,0,0,230,1480,1,0,0,0,232,1505,
	1,0,0,0,234,1507,1,0,0,0,236,1510,1,0,0,0,238,1519,1,0,0,0,240,1533,1,0,
	0,0,242,1538,1,0,0,0,244,1549,1,0,0,0,246,1554,1,0,0,0,248,1567,1,0,0,0,
	250,1572,1,0,0,0,252,1580,1,0,0,0,254,1594,1,0,0,0,256,1599,1,0,0,0,258,
	1617,1,0,0,0,260,1619,1,0,0,0,262,1625,1,0,0,0,264,1627,1,0,0,0,266,1635,
	1,0,0,0,268,1643,1,0,0,0,270,1650,1,0,0,0,272,1652,1,0,0,0,274,1661,1,0,
	0,0,276,1669,1,0,0,0,278,1672,1,0,0,0,280,1678,1,0,0,0,282,1687,1,0,0,0,
	284,1695,1,0,0,0,286,1701,1,0,0,0,288,1711,1,0,0,0,290,1715,1,0,0,0,292,
	1720,1,0,0,0,294,1729,1,0,0,0,296,1731,1,0,0,0,298,1740,1,0,0,0,300,1747,
	1,0,0,0,302,1762,1,0,0,0,304,1764,1,0,0,0,306,1766,1,0,0,0,308,1770,1,0,
	0,0,310,1774,1,0,0,0,312,1784,1,0,0,0,314,1786,1,0,0,0,316,1792,1,0,0,0,
	318,1800,1,0,0,0,320,1808,1,0,0,0,322,1816,1,0,0,0,324,1848,1,0,0,0,326,
	1850,1,0,0,0,328,1859,1,0,0,0,330,1881,1,0,0,0,332,1883,1,0,0,0,334,1885,
	1,0,0,0,336,1891,1,0,0,0,338,1897,1,0,0,0,340,1907,1,0,0,0,342,1911,1,0,
	0,0,344,1913,1,0,0,0,346,1929,1,0,0,0,348,1947,1,0,0,0,350,1949,1,0,0,0,
	352,1951,1,0,0,0,354,1959,1,0,0,0,356,1967,1,0,0,0,358,1975,1,0,0,0,360,
	1981,1,0,0,0,362,1987,1,0,0,0,364,1993,1,0,0,0,366,1997,1,0,0,0,368,2019,
	1,0,0,0,370,2021,1,0,0,0,372,2028,1,0,0,0,374,2037,1,0,0,0,376,2043,1,0,
	0,0,378,2051,1,0,0,0,380,2054,1,0,0,0,382,2063,1,0,0,0,384,2070,1,0,0,0,
	386,2080,1,0,0,0,388,2084,1,0,0,0,390,2086,1,0,0,0,392,2090,1,0,0,0,394,
	2092,1,0,0,0,396,2096,1,0,0,0,398,2100,1,0,0,0,400,2319,1,0,0,0,402,2358,
	1,0,0,0,404,2395,1,0,0,0,406,2406,1,0,0,0,408,2408,1,0,0,0,410,2424,1,0,
	0,0,412,2446,1,0,0,0,414,2450,1,0,0,0,416,2464,1,0,0,0,418,2476,1,0,0,0,
	420,2478,1,0,0,0,422,2488,1,0,0,0,424,2510,1,0,0,0,426,2525,1,0,0,0,428,
	2596,1,0,0,0,430,2598,1,0,0,0,432,2653,1,0,0,0,434,2663,1,0,0,0,436,2673,
	1,0,0,0,438,2675,1,0,0,0,440,2678,1,0,0,0,442,2688,1,0,0,0,444,2690,1,0,
	0,0,446,2693,1,0,0,0,448,2703,1,0,0,0,450,2732,1,0,0,0,452,2734,1,0,0,0,
	454,2751,1,0,0,0,456,2765,1,0,0,0,458,2786,1,0,0,0,460,2812,1,0,0,0,462,
	2826,1,0,0,0,464,2837,1,0,0,0,466,2848,1,0,0,0,468,2859,1,0,0,0,470,2870,
	1,0,0,0,472,2894,1,0,0,0,474,2898,1,0,0,0,476,2900,1,0,0,0,478,2907,1,0,
	0,0,480,2909,1,0,0,0,482,2911,1,0,0,0,484,2921,1,0,0,0,486,2939,1,0,0,0,
	488,2951,1,0,0,0,490,2955,1,0,0,0,492,2959,1,0,0,0,494,2961,1,0,0,0,496,
	2967,1,0,0,0,498,499,3,72,36,0,499,500,5,0,0,1,500,1,1,0,0,0,501,504,5,
	123,0,0,502,504,3,8,4,0,503,501,1,0,0,0,503,502,1,0,0,0,504,3,1,0,0,0,505,
	508,5,123,0,0,506,508,3,10,5,0,507,505,1,0,0,0,507,506,1,0,0,0,508,5,1,
	0,0,0,509,512,5,123,0,0,510,512,3,12,6,0,511,509,1,0,0,0,511,510,1,0,0,
	0,512,7,1,0,0,0,513,514,7,0,0,0,514,9,1,0,0,0,515,516,7,1,0,0,516,11,1,
	0,0,0,517,518,7,2,0,0,518,13,1,0,0,0,519,520,7,3,0,0,520,15,1,0,0,0,521,
	523,3,262,131,0,522,521,1,0,0,0,523,526,1,0,0,0,524,522,1,0,0,0,524,525,
	1,0,0,0,525,529,1,0,0,0,526,524,1,0,0,0,527,530,3,18,9,0,528,530,5,20,0,
	0,529,527,1,0,0,0,529,528,1,0,0,0,530,17,1,0,0,0,531,534,3,20,10,0,532,
	534,3,22,11,0,533,531,1,0,0,0,533,532,1,0,0,0,534,19,1,0,0,0,535,536,7,
	4,0,0,536,21,1,0,0,0,537,538,7,5,0,0,538,23,1,0,0,0,539,543,3,28,14,0,540,
	543,3,34,17,0,541,543,3,36,18,0,542,539,1,0,0,0,542,540,1,0,0,0,542,541,
	1,0,0,0,543,25,1,0,0,0,544,548,5,84,0,0,545,547,3,262,131,0,546,545,1,0,
	0,0,547,550,1,0,0,0,548,546,1,0,0,0,548,549,1,0,0,0,549,551,1,0,0,0,550,
	548,1,0,0,0,551,553,3,4,2,0,552,554,3,48,24,0,553,552,1,0,0,0,553,554,1,
	0,0,0,554,556,1,0,0,0,555,557,3,26,13,0,556,555,1,0,0,0,556,557,1,0,0,0,
	557,27,1,0,0,0,558,559,3,60,30,0,559,560,5,84,0,0,560,562,1,0,0,0,561,558,
	1,0,0,0,561,562,1,0,0,0,562,566,1,0,0,0,563,565,3,262,131,0,564,563,1,0,
	0,0,565,568,1,0,0,0,566,564,1,0,0,0,566,567,1,0,0,0,567,569,1,0,0,0,568,
	566,1,0,0,0,569,571,3,4,2,0,570,572,3,48,24,0,571,570,1,0,0,0,571,572,1,
	0,0,0,572,574,1,0,0,0,573,575,3,26,13,0,574,573,1,0,0,0,574,575,1,0,0,0,
	575,29,1,0,0,0,576,578,3,262,131,0,577,576,1,0,0,0,578,581,1,0,0,0,579,
	577,1,0,0,0,579,580,1,0,0,0,580,582,1,0,0,0,581,579,1,0,0,0,582,584,3,4,
	2,0,583,585,3,48,24,0,584,583,1,0,0,0,584,585,1,0,0,0,585,611,1,0,0,0,586,
	587,3,60,30,0,587,591,5,84,0,0,588,590,3,262,131,0,589,588,1,0,0,0,590,
	593,1,0,0,0,591,589,1,0,0,0,591,592,1,0,0,0,592,594,1,0,0,0,593,591,1,0,
	0,0,594,596,3,4,2,0,595,597,3,48,24,0,596,595,1,0,0,0,596,597,1,0,0,0,597,
	611,1,0,0,0,598,599,3,28,14,0,599,603,5,84,0,0,600,602,3,262,131,0,601,
	600,1,0,0,0,602,605,1,0,0,0,603,601,1,0,0,0,603,604,1,0,0,0,604,606,1,0,
	0,0,605,603,1,0,0,0,606,608,3,4,2,0,607,609,3,48,24,0,608,607,1,0,0,0,608,
	609,1,0,0,0,609,611,1,0,0,0,610,579,1,0,0,0,610,586,1,0,0,0,610,598,1,0,
	0,0,611,31,1,0,0,0,612,613,3,30,15,0,613,33,1,0,0,0,614,616,3,262,131,0,
	615,614,1,0,0,0,616,619,1,0,0,0,617,615,1,0,0,0,617,618,1,0,0,0,618,620,
	1,0,0,0,619,617,1,0,0,0,620,621,3,4,2,0,621,35,1,0,0,0,622,623,3,16,8,0,
	623,624,3,38,19,0,624,632,1,0,0,0,625,626,3,30,15,0,626,627,3,38,19,0,627,
	632,1,0,0,0,628,629,3,34,17,0,629,630,3,38,19,0,630,632,1,0,0,0,631,622,
	1,0,0,0,631,625,1,0,0,0,631,628,1,0,0,0,632,37,1,0,0,0,633,635,3,262,131,
	0,634,633,1,0,0,0,635,638,1,0,0,0,636,634,1,0,0,0,636,637,1,0,0,0,637,639,
	1,0,0,0,638,636,1,0,0,0,639,640,5,80,0,0,640,651,5,81,0,0,641,643,3,262,
	131,0,642,641,1,0,0,0,643,646,1,0,0,0,644,642,1,0,0,0,644,645,1,0,0,0,645,
	647,1,0,0,0,646,644,1,0,0,0,647,648,5,80,0,0,648,650,5,81,0,0,649,644,1,
	0,0,0,650,653,1,0,0,0,651,649,1,0,0,0,651,652,1,0,0,0,652,39,1,0,0,0,653,
	651,1,0,0,0,654,656,3,42,21,0,655,654,1,0,0,0,656,659,1,0,0,0,657,655,1,
	0,0,0,657,658,1,0,0,0,658,660,1,0,0,0,659,657,1,0,0,0,660,662,3,4,2,0,661,
	663,3,44,22,0,662,661,1,0,0,0,662,663,1,0,0,0,663,41,1,0,0,0,664,665,3,
	262,131,0,665,43,1,0,0,0,666,675,5,34,0,0,667,676,3,34,17,0,668,672,3,28,
	14,0,669,671,3,46,23,0,670,669,1,0,0,0,671,674,1,0,0,0,672,670,1,0,0,0,
	672,673,1,0,0,0,673,676,1,0,0,0,674,672,1,0,0,0,675,667,1,0,0,0,675,668,
	1,0,0,0,676,45,1,0,0,0,677,678,5,108,0,0,678,679,3,32,16,0,679,47,1,0,0,
	0,680,681,5,90,0,0,681,682,3,50,25,0,682,683,5,89,0,0,683,49,1,0,0,0,684,
	689,3,52,26,0,685,686,5,83,0,0,686,688,3,52,26,0,687,685,1,0,0,0,688,691,
	1,0,0,0,689,687,1,0,0,0,689,690,1,0,0,0,690,51,1,0,0,0,691,689,1,0,0,0,
	692,695,3,24,12,0,693,695,3,54,27,0,694,692,1,0,0,0,694,693,1,0,0,0,695,
	53,1,0,0,0,696,698,3,262,131,0,697,696,1,0,0,0,698,701,1,0,0,0,699,697,
	1,0,0,0,699,700,1,0,0,0,700,702,1,0,0,0,701,699,1,0,0,0,702,704,5,93,0,
	0,703,705,3,56,28,0,704,703,1,0,0,0,704,705,1,0,0,0,705,55,1,0,0,0,706,
	707,5,34,0,0,707,711,3,24,12,0,708,709,5,57,0,0,709,711,3,24,12,0,710,706,
	1,0,0,0,710,708,1,0,0,0,711,57,1,0,0,0,712,715,3,2,1,0,713,714,5,84,0,0,
	714,716,3,58,29,0,715,713,1,0,0,0,715,716,1,0,0,0,716,59,1,0,0,0,717,720,
	3,2,1,0,718,719,5,84,0,0,719,721,3,60,30,0,720,718,1,0,0,0,720,721,1,0,
	0,0,721,61,1,0,0,0,722,725,3,60,30,0,723,724,5,84,0,0,724,726,3,4,2,0,725,
	723,1,0,0,0,725,726,1,0,0,0,726,63,1,0,0,0,727,730,3,2,1,0,728,729,5,84,
	0,0,729,731,3,64,32,0,730,728,1,0,0,0,730,731,1,0,0,0,731,65,1,0,0,0,732,
	733,3,70,35,0,733,734,5,84,0,0,734,736,1,0,0,0,735,732,1,0,0,0,735,736,
	1,0,0,0,736,737,1,0,0,0,737,738,3,2,1,0,738,67,1,0,0,0,739,740,3,6,3,0,
	740,69,1,0,0,0,741,744,3,2,1,0,742,743,5,84,0,0,743,745,3,70,35,0,744,742,
	1,0,0,0,744,745,1,0,0,0,745,71,1,0,0,0,746,749,3,74,37,0,747,749,3,76,38,
	0,748,746,1,0,0,0,748,747,1,0,0,0,749,73,1,0,0,0,750,752,3,78,39,0,751,
	750,1,0,0,0,751,752,1,0,0,0,752,756,1,0,0,0,753,755,3,82,41,0,754,753,1,
	0,0,0,755,758,1,0,0,0,756,754,1,0,0,0,756,757,1,0,0,0,757,762,1,0,0,0,758,
	756,1,0,0,0,759,761,3,92,46,0,760,759,1,0,0,0,761,764,1,0,0,0,762,760,1,
	0,0,0,762,763,1,0,0,0,763,75,1,0,0,0,764,762,1,0,0,0,765,767,3,82,41,0,
	766,765,1,0,0,0,767,770,1,0,0,0,768,766,1,0,0,0,768,769,1,0,0,0,769,771,
	1,0,0,0,770,768,1,0,0,0,771,772,3,94,47,0,772,77,1,0,0,0,773,775,3,80,40,
	0,774,773,1,0,0,0,775,778,1,0,0,0,776,774,1,0,0,0,776,777,1,0,0,0,777,779,
	1,0,0,0,778,776,1,0,0,0,779,780,5,49,0,0,780,785,3,2,1,0,781,782,5,84,0,
	0,782,784,3,2,1,0,783,781,1,0,0,0,784,787,1,0,0,0,785,783,1,0,0,0,785,786,
	1,0,0,0,786,788,1,0,0,0,787,785,1,0,0,0,788,789,5,82,0,0,789,79,1,0,0,0,
	790,791,3,262,131,0,791,81,1,0,0,0,792,797,3,84,42,0,793,797,3,86,43,0,
	794,797,3,88,44,0,795,797,3,90,45,0,796,792,1,0,0,0,796,793,1,0,0,0,796,
	794,1,0,0,0,796,795,1,0,0,0,797,83,1,0,0,0,798,799,5,42,0,0,799,800,3,62,
	31,0,800,801,5,82,0,0,801,85,1,0,0,0,802,803,5,42,0,0,803,804,3,64,32,0,
	804,805,5,84,0,0,805,806,5,106,0,0,806,807,5,82,0,0,807,87,1,0,0,0,808,
	809,5,42,0,0,809,810,5,55,0,0,810,811,3,62,31,0,811,812,5,84,0,0,812,813,
	3,2,1,0,813,814,5,82,0,0,814,89,1,0,0,0,815,816,5,42,0,0,816,817,5,55,0,
	0,817,818,3,62,31,0,818,819,5,84,0,0,819,820,5,106,0,0,820,821,5,82,0,0,
	821,91,1,0,0,0,822,826,3,100,50,0,823,826,3,228,114,0,824,826,5,82,0,0,
	825,822,1,0,0,0,825,823,1,0,0,0,825,824,1,0,0,0,826,93,1,0,0,0,827,829,
	3,262,131,0,828,827,1,0,0,0,829,832,1,0,0,0,830,828,1,0,0,0,830,831,1,0,
	0,0,831,834,1,0,0,0,832,830,1,0,0,0,833,835,5,5,0,0,834,833,1,0,0,0,834,
	835,1,0,0,0,835,836,1,0,0,0,836,837,5,2,0,0,837,842,3,2,1,0,838,839,5,84,
	0,0,839,841,3,2,1,0,840,838,1,0,0,0,841,844,1,0,0,0,842,840,1,0,0,0,842,
	843,1,0,0,0,843,845,1,0,0,0,844,842,1,0,0,0,845,849,5,78,0,0,846,848,3,
	96,48,0,847,846,1,0,0,0,848,851,1,0,0,0,849,847,1,0,0,0,849,850,1,0,0,0,
	850,852,1,0,0,0,851,849,1,0,0,0,852,853,5,79,0,0,853,95,1,0,0,0,854,858,
	5,10,0,0,855,857,3,98,49,0,856,855,1,0,0,0,857,860,1,0,0,0,858,856,1,0,
	0,0,858,859,1,0,0,0,859,861,1,0,0,0,860,858,1,0,0,0,861,862,3,58,29,0,862,
	863,5,82,0,0,863,912,1,0,0,0,864,865,5,1,0,0,865,875,3,60,30,0,866,867,
	5,12,0,0,867,872,3,58,29,0,868,869,5,83,0,0,869,871,3,58,29,0,870,868,1,
	0,0,0,871,874,1,0,0,0,872,870,1,0,0,0,872,873,1,0,0,0,873,876,1,0,0,0,874,
	872,1,0,0,0,875,866,1,0,0,0,875,876,1,0,0,0,876,877,1,0,0,0,877,878,5,82,
	0,0,878,912,1,0,0,0,879,880,5,6,0,0,880,890,3,60,30,0,881,882,5,12,0,0,
	882,887,3,58,29,0,883,884,5,83,0,0,884,886,3,58,29,0,885,883,1,0,0,0,886,
	889,1,0,0,0,887,885,1,0,0,0,887,888,1,0,0,0,888,891,1,0,0,0,889,887,1,0,
	0,0,890,881,1,0,0,0,890,891,1,0,0,0,891,892,1,0,0,0,892,893,5,82,0,0,893,
	912,1,0,0,0,894,895,5,14,0,0,895,896,3,62,31,0,896,897,5,82,0,0,897,912,
	1,0,0,0,898,899,5,8,0,0,899,900,3,62,31,0,900,901,5,16,0,0,901,906,3,62,
	31,0,902,903,5,83,0,0,903,905,3,62,31,0,904,902,1,0,0,0,905,908,1,0,0,0,
	906,904,1,0,0,0,906,907,1,0,0,0,907,909,1,0,0,0,908,906,1,0,0,0,909,910,
	5,82,0,0,910,912,1,0,0,0,911,854,1,0,0,0,911,864,1,0,0,0,911,879,1,0,0,
	0,911,894,1,0,0,0,911,898,1,0,0,0,912,97,1,0,0,0,913,914,7,6,0,0,914,99,
	1,0,0,0,915,919,3,102,51,0,916,919,3,198,99,0,917,919,3,210,105,0,918,915,
	1,0,0,0,918,916,1,0,0,0,918,917,1,0,0,0,919,101,1,0,0,0,920,922,3,104,52,
	0,921,920,1,0,0,0,922,925,1,0,0,0,923,921,1,0,0,0,923,924,1,0,0,0,924,926,
	1,0,0,0,925,923,1,0,0,0,926,927,5,26,0,0,927,929,3,4,2,0,928,930,3,106,
	53,0,929,928,1,0,0,0,929,930,1,0,0,0,930,932,1,0,0,0,931,933,3,110,55,0,
	932,931,1,0,0,0,932,933,1,0,0,0,933,935,1,0,0,0,934,936,3,112,56,0,935,
	934,1,0,0,0,935,936,1,0,0,0,936,938,1,0,0,0,937,939,3,116,58,0,938,937,
	1,0,0,0,938,939,1,0,0,0,939,940,1,0,0,0,940,941,3,118,59,0,941,103,1,0,
	0,0,942,953,3,262,131,0,943,953,5,52,0,0,944,953,5,51,0,0,945,953,5,50,
	0,0,946,953,5,18,0,0,947,953,5,55,0,0,948,953,5,35,0,0,949,953,5,11,0,0,
	950,953,5,3,0,0,951,953,5,56,0,0,952,942,1,0,0,0,952,943,1,0,0,0,952,944,
	1,0,0,0,952,945,1,0,0,0,952,946,1,0,0,0,952,947,1,0,0,0,952,948,1,0,0,0,
	952,949,1,0,0,0,952,950,1,0,0,0,952,951,1,0,0,0,953,105,1,0,0,0,954,955,
	5,90,0,0,955,956,3,108,54,0,956,957,5,89,0,0,957,107,1,0,0,0,958,963,3,
	40,20,0,959,960,5,83,0,0,960,962,3,40,20,0,961,959,1,0,0,0,962,965,1,0,
	0,0,963,961,1,0,0,0,963,964,1,0,0,0,964,109,1,0,0,0,965,963,1,0,0,0,966,
	967,5,34,0,0,967,968,3,30,15,0,968,111,1,0,0,0,969,970,5,41,0,0,970,971,
	3,114,57,0,971,113,1,0,0,0,972,977,3,32,16,0,973,974,5,83,0,0,974,976,3,
	32,16,0,975,973,1,0,0,0,976,979,1,0,0,0,977,975,1,0,0,0,977,978,1,0,0,0,
	978,115,1,0,0,0,979,977,1,0,0,0,980,981,5,7,0,0,981,986,3,62,31,0,982,983,
	5,83,0,0,983,985,3,62,31,0,984,982,1,0,0,0,985,988,1,0,0,0,986,984,1,0,
	0,0,986,987,1,0,0,0,987,117,1,0,0,0,988,986,1,0,0,0,989,993,5,78,0,0,990,
	992,3,120,60,0,991,990,1,0,0,0,992,995,1,0,0,0,993,991,1,0,0,0,993,994,
	1,0,0,0,994,996,1,0,0,0,995,993,1,0,0,0,996,997,5,79,0,0,997,119,1,0,0,
	0,998,1003,3,122,61,0,999,1003,3,182,91,0,1000,1003,3,184,92,0,1001,1003,
	3,186,93,0,1002,998,1,0,0,0,1002,999,1,0,0,0,1002,1000,1,0,0,0,1002,1001,
	1,0,0,0,1003,121,1,0,0,0,1004,1010,3,124,62,0,1005,1010,3,154,77,0,1006,
	1010,3,100,50,0,1007,1010,3,228,114,0,1008,1010,5,82,0,0,1009,1004,1,0,
	0,0,1009,1005,1,0,0,0,1009,1006,1,0,0,0,1009,1007,1,0,0,0,1009,1008,1,0,
	0,0,1010,123,1,0,0,0,1011,1013,3,126,63,0,1012,1011,1,0,0,0,1013,1016,1,
	0,0,0,1014,1012,1,0,0,0,1014,1015,1,0,0,0,1015,1017,1,0,0,0,1016,1014,1,
	0,0,0,1017,1018,3,136,68,0,1018,1019,3,128,64,0,1019,1020,5,82,0,0,1020,
	125,1,0,0,0,1021,1030,3,262,131,0,1022,1030,5,52,0,0,1023,1030,5,51,0,0,
	1024,1030,5,50,0,0,1025,1030,5,55,0,0,1026,1030,5,35,0,0,1027,1030,5,63,
	0,0,1028,1030,5,66,0,0,1029,1021,1,0,0,0,1029,1022,1,0,0,0,1029,1023,1,
	0,0,0,1029,1024,1,0,0,0,1029,1025,1,0,0,0,1029,1026,1,0,0,0,1029,1027,1,
	0,0,0,1029,1028,1,0,0,0,1030,127,1,0,0,0,1031,1036,3,130,65,0,1032,1033,
	5,83,0,0,1033,1035,3,130,65,0,1034,1032,1,0,0,0,1035,1038,1,0,0,0,1036,
	1034,1,0,0,0,1036,1037,1,0,0,0,1037,129,1,0,0,0,1038,1036,1,0,0,0,1039,
	1042,3,132,66,0,1040,1041,5,88,0,0,1041,1043,3,134,67,0,1042,1040,1,0,0,
	0,1042,1043,1,0,0,0,1043,131,1,0,0,0,1044,1046,3,2,1,0,1045,1047,3,38,19,
	0,1046,1045,1,0,0,0,1046,1047,1,0,0,0,1047,133,1,0,0,0,1048,1051,3,396,
	198,0,1049,1051,3,280,140,0,1050,1048,1,0,0,0,1050,1049,1,0,0,0,1051,135,
	1,0,0,0,1052,1055,3,138,69,0,1053,1055,3,140,70,0,1054,1052,1,0,0,0,1054,
	1053,1,0,0,0,1055,137,1,0,0,0,1056,1059,3,18,9,0,1057,1059,5,20,0,0,1058,
	1056,1,0,0,0,1058,1057,1,0,0,0,1059,139,1,0,0,0,1060,1064,3,142,71,0,1061,
	1064,3,150,75,0,1062,1064,3,152,76,0,1063,1060,1,0,0,0,1063,1061,1,0,0,
	0,1063,1062,1,0,0,0,1064,141,1,0,0,0,1065,1066,3,60,30,0,1066,1070,5,84,
	0,0,1067,1069,3,262,131,0,1068,1067,1,0,0,0,1069,1072,1,0,0,0,1070,1068,
	1,0,0,0,1070,1071,1,0,0,0,1071,1074,1,0,0,0,1072,1070,1,0,0,0,1073,1065,
	1,0,0,0,1073,1074,1,0,0,0,1074,1075,1,0,0,0,1075,1077,3,4,2,0,1076,1078,
	3,48,24,0,1077,1076,1,0,0,0,1077,1078,1,0,0,0,1078,1080,1,0,0,0,1079,1081,
	3,144,72,0,1080,1079,1,0,0,0,1080,1081,1,0,0,0,1081,143,1,0,0,0,1082,1086,
	5,84,0,0,1083,1085,3,262,131,0,1084,1083,1,0,0,0,1085,1088,1,0,0,0,1086,
	1084,1,0,0,0,1086,1087,1,0,0,0,1087,1089,1,0,0,0,1088,1086,1,0,0,0,1089,
	1091,3,4,2,0,1090,1092,3,48,24,0,1091,1090,1,0,0,0,1091,1092,1,0,0,0,1092,
	1094,1,0,0,0,1093,1095,3,144,72,0,1094,1093,1,0,0,0,1094,1095,1,0,0,0,1095,
	145,1,0,0,0,1096,1098,3,4,2,0,1097,1099,3,48,24,0,1098,1097,1,0,0,0,1098,
	1099,1,0,0,0,1099,1116,1,0,0,0,1100,1103,3,60,30,0,1101,1103,3,142,71,0,
	1102,1100,1,0,0,0,1102,1101,1,0,0,0,1103,1104,1,0,0,0,1104,1108,5,84,0,
	0,1105,1107,3,262,131,0,1106,1105,1,0,0,0,1107,1110,1,0,0,0,1108,1106,1,
	0,0,0,1108,1109,1,0,0,0,1109,1111,1,0,0,0,1110,1108,1,0,0,0,1111,1113,3,
	4,2,0,1112,1114,3,48,24,0,1113,1112,1,0,0,0,1113,1114,1,0,0,0,1114,1116,
	1,0,0,0,1115,1096,1,0,0,0,1115,1102,1,0,0,0,1116,147,1,0,0,0,1117,1118,
	3,146,73,0,1118,149,1,0,0,0,1119,1120,3,4,2,0,1120,151,1,0,0,0,1121,1125,
	3,138,69,0,1122,1125,3,142,71,0,1123,1125,3,150,75,0,1124,1121,1,0,0,0,
	1124,1122,1,0,0,0,1124,1123,1,0,0,0,1125,1126,1,0,0,0,1126,1127,3,38,19,
	0,1127,153,1,0,0,0,1128,1130,3,156,78,0,1129,1128,1,0,0,0,1130,1133,1,0,
	0,0,1131,1129,1,0,0,0,1131,1132,1,0,0,0,1132,1134,1,0,0,0,1133,1131,1,0,
	0,0,1134,1135,3,158,79,0,1135,1136,3,180,90,0,1136,155,1,0,0,0,1137,1148,
	3,262,131,0,1138,1148,5,52,0,0,1139,1148,5,51,0,0,1140,1148,5,50,0,0,1141,
	1148,5,18,0,0,1142,1148,5,55,0,0,1143,1148,5,35,0,0,1144,1148,5,59,0,0,
	1145,1148,5,47,0,0,1146,1148,5,56,0,0,1147,1137,1,0,0,0,1147,1138,1,0,0,
	0,1147,1139,1,0,0,0,1147,1140,1,0,0,0,1147,1141,1,0,0,0,1147,1142,1,0,0,
	0,1147,1143,1,0,0,0,1147,1144,1,0,0,0,1147,1145,1,0,0,0,1147,1146,1,0,0,
	0,1148,157,1,0,0,0,1149,1153,3,106,53,0,1150,1152,3,262,131,0,1151,1150,
	1,0,0,0,1152,1155,1,0,0,0,1153,1151,1,0,0,0,1153,1154,1,0,0,0,1154,1157,
	1,0,0,0,1155,1153,1,0,0,0,1156,1149,1,0,0,0,1156,1157,1,0,0,0,1157,1158,
	1,0,0,0,1158,1159,3,160,80,0,1159,1161,3,162,81,0,1160,1162,3,174,87,0,
	1161,1160,1,0,0,0,1161,1162,1,0,0,0,1162,159,1,0,0,0,1163,1166,3,136,68,
	0,1164,1166,5,65,0,0,1165,1163,1,0,0,0,1165,1164,1,0,0,0,1166,161,1,0,0,
	0,1167,1168,3,2,1,0,1168,1172,5,76,0,0,1169,1170,3,164,82,0,1170,1171,5,
	83,0,0,1171,1173,1,0,0,0,1172,1169,1,0,0,0,1172,1173,1,0,0,0,1173,1175,
	1,0,0,0,1174,1176,3,166,83,0,1175,1174,1,0,0,0,1175,1176,1,0,0,0,1176,1177,
	1,0,0,0,1177,1179,5,77,0,0,1178,1180,3,38,19,0,1179,1178,1,0,0,0,1179,1180,
	1,0,0,0,1180,163,1,0,0,0,1181,1183,3,262,131,0,1182,1181,1,0,0,0,1183,1186,
	1,0,0,0,1184,1182,1,0,0,0,1184,1185,1,0,0,0,1185,1187,1,0,0,0,1186,1184,
	1,0,0,0,1187,1191,3,136,68,0,1188,1189,3,2,1,0,1189,1190,5,84,0,0,1190,
	1192,1,0,0,0,1191,1188,1,0,0,0,1191,1192,1,0,0,0,1192,1193,1,0,0,0,1193,
	1194,5,60,0,0,1194,165,1,0,0,0,1195,1200,3,168,84,0,1196,1197,5,83,0,0,
	1197,1199,3,168,84,0,1198,1196,1,0,0,0,1199,1202,1,0,0,0,1200,1198,1,0,
	0,0,1200,1201,1,0,0,0,1201,167,1,0,0,0,1202,1200,1,0,0,0,1203,1205,3,172,
	86,0,1204,1203,1,0,0,0,1205,1208,1,0,0,0,1206,1204,1,0,0,0,1206,1207,1,
	0,0,0,1207,1209,1,0,0,0,1208,1206,1,0,0,0,1209,1210,3,136,68,0,1210,1211,
	3,132,66,0,1211,1214,1,0,0,0,1212,1214,3,170,85,0,1213,1206,1,0,0,0,1213,
	1212,1,0,0,0,1214,169,1,0,0,0,1215,1217,3,172,86,0,1216,1215,1,0,0,0,1217,
	1220,1,0,0,0,1218,1216,1,0,0,0,1218,1219,1,0,0,0,1219,1221,1,0,0,0,1220,
	1218,1,0,0,0,1221,1225,3,136,68,0,1222,1224,3,262,131,0,1223,1222,1,0,0,
	0,1224,1227,1,0,0,0,1225,1223,1,0,0,0,1225,1226,1,0,0,0,1226,1228,1,0,0,
	0,1227,1225,1,0,0,0,1228,1229,5,85,0,0,1229,1230,3,2,1,0,1230,171,1,0,0,
	0,1231,1234,3,262,131,0,1232,1234,5,35,0,0,1233,1231,1,0,0,0,1233,1232,
	1,0,0,0,1234,173,1,0,0,0,1235,1236,5,62,0,0,1236,1237,3,176,88,0,1237,175,
	1,0,0,0,1238,1243,3,178,89,0,1239,1240,5,83,0,0,1240,1242,3,178,89,0,1241,
	1239,1,0,0,0,1242,1245,1,0,0,0,1243,1241,1,0,0,0,1243,1244,1,0,0,0,1244,
	177,1,0,0,0,1245,1243,1,0,0,0,1246,1249,3,30,15,0,1247,1249,3,34,17,0,1248,
	1246,1,0,0,0,1248,1247,1,0,0,0,1249,179,1,0,0,0,1250,1253,3,284,142,0,1251,
	1253,5,82,0,0,1252,1250,1,0,0,0,1252,1251,1,0,0,0,1253,181,1,0,0,0,1254,
	1255,3,284,142,0,1255,183,1,0,0,0,1256,1257,5,55,0,0,1257,1258,3,284,142,
	0,1258,185,1,0,0,0,1259,1261,3,188,94,0,1260,1259,1,0,0,0,1261,1264,1,0,
	0,0,1262,1260,1,0,0,0,1262,1263,1,0,0,0,1263,1265,1,0,0,0,1264,1262,1,0,
	0,0,1265,1267,3,190,95,0,1266,1268,3,174,87,0,1267,1266,1,0,0,0,1267,1268,
	1,0,0,0,1268,1269,1,0,0,0,1269,1270,3,194,97,0,1270,187,1,0,0,0,1271,1276,
	3,262,131,0,1272,1276,5,52,0,0,1273,1276,5,51,0,0,1274,1276,5,50,0,0,1275,
	1271,1,0,0,0,1275,1272,1,0,0,0,1275,1273,1,0,0,0,1275,1274,1,0,0,0,1276,
	189,1,0,0,0,1277,1279,3,106,53,0,1278,1277,1,0,0,0,1278,1279,1,0,0,0,1279,
	1280,1,0,0,0,1280,1281,3,192,96,0,1281,1285,5,76,0,0,1282,1283,3,164,82,
	0,1283,1284,5,83,0,0,1284,1286,1,0,0,0,1285,1282,1,0,0,0,1285,1286,1,0,
	0,0,1286,1288,1,0,0,0,1287,1289,3,166,83,0,1288,1287,1,0,0,0,1288,1289,
	1,0,0,0,1289,1290,1,0,0,0,1290,1291,5,77,0,0,1291,191,1,0,0,0,1292,1293,
	3,4,2,0,1293,193,1,0,0,0,1294,1296,5,78,0,0,1295,1297,3,196,98,0,1296,1295,
	1,0,0,0,1296,1297,1,0,0,0,1297,1299,1,0,0,0,1298,1300,3,286,143,0,1299,
	1298,1,0,0,0,1299,1300,1,0,0,0,1300,1301,1,0,0,0,1301,1302,5,79,0,0,1302,
	195,1,0,0,0,1303,1305,3,48,24,0,1304,1303,1,0,0,0,1304,1305,1,0,0,0,1305,
	1306,1,0,0,0,1306,1307,7,7,0,0,1307,1309,5,76,0,0,1308,1310,3,430,215,0,
	1309,1308,1,0,0,0,1309,1310,1,0,0,0,1310,1311,1,0,0,0,1311,1312,5,77,0,
	0,1312,1330,5,82,0,0,1313,1316,3,66,33,0,1314,1316,3,398,199,0,1315,1313,
	1,0,0,0,1315,1314,1,0,0,0,1316,1317,1,0,0,0,1317,1319,5,84,0,0,1318,1320,
	3,48,24,0,1319,1318,1,0,0,0,1319,1320,1,0,0,0,1320,1321,1,0,0,0,1321,1322,
	5,57,0,0,1322,1324,5,76,0,0,1323,1325,3,430,215,0,1324,1323,1,0,0,0,1324,
	1325,1,0,0,0,1325,1326,1,0,0,0,1326,1327,5,77,0,0,1327,1328,5,82,0,0,1328,
	1330,1,0,0,0,1329,1304,1,0,0,0,1329,1315,1,0,0,0,1330,197,1,0,0,0,1331,
	1333,3,104,52,0,1332,1331,1,0,0,0,1333,1336,1,0,0,0,1334,1332,1,0,0,0,1334,
	1335,1,0,0,0,1335,1337,1,0,0,0,1336,1334,1,0,0,0,1337,1338,5,33,0,0,1338,
	1340,3,4,2,0,1339,1341,3,112,56,0,1340,1339,1,0,0,0,1340,1341,1,0,0,0,1341,
	1342,1,0,0,0,1342,1343,3,200,100,0,1343,199,1,0,0,0,1344,1346,5,78,0,0,
	1345,1347,3,202,101,0,1346,1345,1,0,0,0,1346,1347,1,0,0,0,1347,1349,1,0,
	0,0,1348,1350,5,83,0,0,1349,1348,1,0,0,0,1349,1350,1,0,0,0,1350,1352,1,
	0,0,0,1351,1353,3,208,104,0,1352,1351,1,0,0,0,1352,1353,1,0,0,0,1353,1354,
	1,0,0,0,1354,1355,5,79,0,0,1355,201,1,0,0,0,1356,1361,3,204,102,0,1357,
	1358,5,83,0,0,1358,1360,3,204,102,0,1359,1357,1,0,0,0,1360,1363,1,0,0,0,
	1361,1359,1,0,0,0,1361,1362,1,0,0,0,1362,203,1,0,0,0,1363,1361,1,0,0,0,
	1364,1366,3,206,103,0,1365,1364,1,0,0,0,1366,1369,1,0,0,0,1367,1365,1,0,
	0,0,1367,1368,1,0,0,0,1368,1370,1,0,0,0,1369,1367,1,0,0,0,1370,1376,3,2,
	1,0,1371,1373,5,76,0,0,1372,1374,3,430,215,0,1373,1372,1,0,0,0,1373,1374,
	1,0,0,0,1374,1375,1,0,0,0,1375,1377,5,77,0,0,1376,1371,1,0,0,0,1376,1377,
	1,0,0,0,1377,1379,1,0,0,0,1378,1380,3,118,59,0,1379,1378,1,0,0,0,1379,1380,
	1,0,0,0,1380,205,1,0,0,0,1381,1382,3,262,131,0,1382,207,1,0,0,0,1383,1387,
	5,82,0,0,1384,1386,3,120,60,0,1385,1384,1,0,0,0,1386,1389,1,0,0,0,1387,
	1385,1,0,0,0,1387,1388,1,0,0,0,1388,209,1,0,0,0,1389,1387,1,0,0,0,1390,
	1392,3,104,52,0,1391,1390,1,0,0,0,1392,1395,1,0,0,0,1393,1391,1,0,0,0,1393,
	1394,1,0,0,0,1394,1396,1,0,0,0,1395,1393,1,0,0,0,1396,1397,5,9,0,0,1397,
	1399,3,4,2,0,1398,1400,3,106,53,0,1399,1398,1,0,0,0,1399,1400,1,0,0,0,1400,
	1401,1,0,0,0,1401,1403,3,212,106,0,1402,1404,3,112,56,0,1403,1402,1,0,0,
	0,1403,1404,1,0,0,0,1404,1405,1,0,0,0,1405,1406,3,222,111,0,1406,211,1,
	0,0,0,1407,1409,5,76,0,0,1408,1410,3,214,107,0,1409,1408,1,0,0,0,1409,1410,
	1,0,0,0,1410,1411,1,0,0,0,1411,1412,5,77,0,0,1412,213,1,0,0,0,1413,1418,
	3,216,108,0,1414,1415,5,83,0,0,1415,1417,3,216,108,0,1416,1414,1,0,0,0,
	1417,1420,1,0,0,0,1418,1416,1,0,0,0,1418,1419,1,0,0,0,1419,215,1,0,0,0,
	1420,1418,1,0,0,0,1421,1423,3,220,110,0,1422,1421,1,0,0,0,1423,1426,1,0,
	0,0,1424,1422,1,0,0,0,1424,1425,1,0,0,0,1425,1427,1,0,0,0,1426,1424,1,0,
	0,0,1427,1428,3,136,68,0,1428,1429,3,2,1,0,1429,1432,1,0,0,0,1430,1432,
	3,218,109,0,1431,1424,1,0,0,0,1431,1430,1,0,0,0,1432,217,1,0,0,0,1433,1435,
	3,220,110,0,1434,1433,1,0,0,0,1435,1438,1,0,0,0,1436,1434,1,0,0,0,1436,
	1437,1,0,0,0,1437,1439,1,0,0,0,1438,1436,1,0,0,0,1439,1443,3,136,68,0,1440,
	1442,3,262,131,0,1441,1440,1,0,0,0,1442,1445,1,0,0,0,1443,1441,1,0,0,0,
	1443,1444,1,0,0,0,1444,1446,1,0,0,0,1445,1443,1,0,0,0,1446,1447,5,85,0,
	0,1447,1448,3,2,1,0,1448,219,1,0,0,0,1449,1450,3,262,131,0,1450,221,1,0,
	0,0,1451,1455,5,78,0,0,1452,1454,3,224,112,0,1453,1452,1,0,0,0,1454,1457,
	1,0,0,0,1455,1453,1,0,0,0,1455,1456,1,0,0,0,1456,1458,1,0,0,0,1457,1455,
	1,0,0,0,1458,1459,5,79,0,0,1459,223,1,0,0,0,1460,1463,3,120,60,0,1461,1463,
	3,226,113,0,1462,1460,1,0,0,0,1462,1461,1,0,0,0,1463,225,1,0,0,0,1464,1466,
	3,188,94,0,1465,1464,1,0,0,0,1466,1469,1,0,0,0,1467,1465,1,0,0,0,1467,1468,
	1,0,0,0,1468,1470,1,0,0,0,1469,1467,1,0,0,0,1470,1471,3,192,96,0,1471,1472,
	3,194,97,0,1472,227,1,0,0,0,1473,1476,3,230,115,0,1474,1476,3,250,125,0,
	1475,1473,1,0,0,0,1475,1474,1,0,0,0,1476,229,1,0,0,0,1477,1479,3,232,116,
	0,1478,1477,1,0,0,0,1479,1482,1,0,0,0,1480,1478,1,0,0,0,1480,1481,1,0,0,
	0,1481,1483,1,0,0,0,1482,1480,1,0,0,0,1483,1484,5,45,0,0,1484,1486,3,4,
	2,0,1485,1487,3,106,53,0,1486,1485,1,0,0,0,1486,1487,1,0,0,0,1487,1489,
	1,0,0,0,1488,1490,3,234,117,0,1489,1488,1,0,0,0,1489,1490,1,0,0,0,1490,
	1492,1,0,0,0,1491,1493,3,236,118,0,1492,1491,1,0,0,0,1492,1493,1,0,0,0,
	1493,1494,1,0,0,0,1494,1495,3,238,119,0,1495,231,1,0,0,0,1496,1506,3,262,
	131,0,1497,1506,5,52,0,0,1498,1506,5,51,0,0,1499,1506,5,50,0,0,1500,1506,
	5,18,0,0,1501,1506,5,55,0,0,1502,1506,5,11,0,0,1503,1506,5,3,0,0,1504,1506,
	5,56,0,0,1505,1496,1,0,0,0,1505,1497,1,0,0,0,1505,1498,1,0,0,0,1505,1499,
	1,0,0,0,1505,1500,1,0,0,0,1505,1501,1,0,0,0,1505,1502,1,0,0,0,1505,1503,
	1,0,0,0,1505,1504,1,0,0,0,1506,233,1,0,0,0,1507,1508,5,34,0,0,1508,1509,
	3,114,57,0,1509,235,1,0,0,0,1510,1511,5,7,0,0,1511,1516,3,62,31,0,1512,
	1513,5,83,0,0,1513,1515,3,62,31,0,1514,1512,1,0,0,0,1515,1518,1,0,0,0,1516,
	1514,1,0,0,0,1516,1517,1,0,0,0,1517,237,1,0,0,0,1518,1516,1,0,0,0,1519,
	1523,5,78,0,0,1520,1522,3,240,120,0,1521,1520,1,0,0,0,1522,1525,1,0,0,0,
	1523,1521,1,0,0,0,1523,1524,1,0,0,0,1524,1526,1,0,0,0,1525,1523,1,0,0,0,
	1526,1527,5,79,0,0,1527,239,1,0,0,0,1528,1534,3,242,121,0,1529,1534,3,246,
	123,0,1530,1534,3,100,50,0,1531,1534,3,228,114,0,1532,1534,5,82,0,0,1533,
	1528,1,0,0,0,1533,1529,1,0,0,0,1533,1530,1,0,0,0,1533,1531,1,0,0,0,1533,
	1532,1,0,0,0,1534,241,1,0,0,0,1535,1537,3,244,122,0,1536,1535,1,0,0,0,1537,
	1540,1,0,0,0,1538,1536,1,0,0,0,1538,1539,1,0,0,0,1539,1541,1,0,0,0,1540,
	1538,1,0,0,0,1541,1542,3,136,68,0,1542,1543,3,128,64,0,1543,1544,5,82,0,
	0,1544,243,1,0,0,0,1545,1550,3,262,131,0,1546,1550,5,52,0,0,1547,1550,5,
	55,0,0,1548,1550,5,35,0,0,1549,1545,1,0,0,0,1549,1546,1,0,0,0,1549,1547,
	1,0,0,0,1549,1548,1,0,0,0,1550,245,1,0,0,0,1551,1553,3,248,124,0,1552,1551,
	1,0,0,0,1553,1556,1,0,0,0,1554,1552,1,0,0,0,1554,1555,1,0,0,0,1555,1557,
	1,0,0,0,1556,1554,1,0,0,0,1557,1558,3,158,79,0,1558,1559,3,180,90,0,1559,
	247,1,0,0,0,1560,1568,3,262,131,0,1561,1568,5,52,0,0,1562,1568,5,50,0,0,
	1563,1568,5,18,0,0,1564,1568,5,29,0,0,1565,1568,5,55,0,0,1566,1568,5,56,
	0,0,1567,1560,1,0,0,0,1567,1561,1,0,0,0,1567,1562,1,0,0,0,1567,1563,1,0,
	0,0,1567,1564,1,0,0,0,1567,1565,1,0,0,0,1567,1566,1,0,0,0,1568,249,1,0,
	0,0,1569,1571,3,232,116,0,1570,1569,1,0,0,0,1571,1574,1,0,0,0,1572,1570,
	1,0,0,0,1572,1573,1,0,0,0,1573,1575,1,0,0,0,1574,1572,1,0,0,0,1575,1576,
	5,86,0,0,1576,1577,5,45,0,0,1577,1578,3,4,2,0,1578,1579,3,252,126,0,1579,
	251,1,0,0,0,1580,1584,5,78,0,0,1581,1583,3,254,127,0,1582,1581,1,0,0,0,
	1583,1586,1,0,0,0,1584,1582,1,0,0,0,1584,1585,1,0,0,0,1585,1587,1,0,0,0,
	1586,1584,1,0,0,0,1587,1588,5,79,0,0,1588,253,1,0,0,0,1589,1595,3,256,128,
	0,1590,1595,3,242,121,0,1591,1595,3,100,50,0,1592,1595,3,228,114,0,1593,
	1595,5,82,0,0,1594,1589,1,0,0,0,1594,1590,1,0,0,0,1594,1591,1,0,0,0,1594,
	1592,1,0,0,0,1594,1593,1,0,0,0,1595,255,1,0,0,0,1596,1598,3,258,129,0,1597,
	1596,1,0,0,0,1598,1601,1,0,0,0,1599,1597,1,0,0,0,1599,1600,1,0,0,0,1600,
	1602,1,0,0,0,1601,1599,1,0,0,0,1602,1603,3,136,68,0,1603,1604,3,2,1,0,1604,
	1605,5,76,0,0,1605,1607,5,77,0,0,1606,1608,3,38,19,0,1607,1606,1,0,0,0,
	1607,1608,1,0,0,0,1608,1610,1,0,0,0,1609,1611,3,260,130,0,1610,1609,1,0,
	0,0,1610,1611,1,0,0,0,1611,1612,1,0,0,0,1612,1613,5,82,0,0,1613,257,1,0,
	0,0,1614,1618,3,262,131,0,1615,1618,5,52,0,0,1616,1618,5,18,0,0,1617,1614,
	1,0,0,0,1617,1615,1,0,0,0,1617,1616,1,0,0,0,1618,259,1,0,0,0,1619,1620,
	5,29,0,0,1620,1621,3,270,135,0,1621,261,1,0,0,0,1622,1626,3,264,132,0,1623,
	1626,3,276,138,0,1624,1626,3,278,139,0,1625,1622,1,0,0,0,1625,1623,1,0,
	0,0,1625,1624,1,0,0,0,1626,263,1,0,0,0,1627,1628,5,86,0,0,1628,1629,3,62,
	31,0,1629,1631,5,76,0,0,1630,1632,3,266,133,0,1631,1630,1,0,0,0,1631,1632,
	1,0,0,0,1632,1633,1,0,0,0,1633,1634,5,77,0,0,1634,265,1,0,0,0,1635,1640,
	3,268,134,0,1636,1637,5,83,0,0,1637,1639,3,268,134,0,1638,1636,1,0,0,0,
	1639,1642,1,0,0,0,1640,1638,1,0,0,0,1640,1641,1,0,0,0,1641,267,1,0,0,0,
	1642,1640,1,0,0,0,1643,1644,3,2,1,0,1644,1645,5,88,0,0,1645,1646,3,270,
	135,0,1646,269,1,0,0,0,1647,1651,3,472,236,0,1648,1651,3,272,136,0,1649,
	1651,3,262,131,0,1650,1647,1,0,0,0,1650,1648,1,0,0,0,1650,1649,1,0,0,0,
	1651,271,1,0,0,0,1652,1654,5,78,0,0,1653,1655,3,274,137,0,1654,1653,1,0,
	0,0,1654,1655,1,0,0,0,1655,1657,1,0,0,0,1656,1658,5,83,0,0,1657,1656,1,
	0,0,0,1657,1658,1,0,0,0,1658,1659,1,0,0,0,1659,1660,5,79,0,0,1660,273,1,
	0,0,0,1661,1666,3,270,135,0,1662,1663,5,83,0,0,1663,1665,3,270,135,0,1664,
	1662,1,0,0,0,1665,1668,1,0,0,0,1666,1664,1,0,0,0,1666,1667,1,0,0,0,1667,
	275,1,0,0,0,1668,1666,1,0,0,0,1669,1670,5,86,0,0,1670,1671,3,62,31,0,1671,
	277,1,0,0,0,1672,1673,5,86,0,0,1673,1674,3,62,31,0,1674,1675,5,76,0,0,1675,
	1676,3,270,135,0,1676,1677,5,77,0,0,1677,279,1,0,0,0,1678,1680,5,78,0,0,
	1679,1681,3,282,141,0,1680,1679,1,0,0,0,1680,1681,1,0,0,0,1681,1683,1,0,
	0,0,1682,1684,5,83,0,0,1683,1682,1,0,0,0,1683,1684,1,0,0,0,1684,1685,1,
	0,0,0,1685,1686,5,79,0,0,1686,281,1,0,0,0,1687,1692,3,134,67,0,1688,1689,
	5,83,0,0,1689,1691,3,134,67,0,1690,1688,1,0,0,0,1691,1694,1,0,0,0,1692,
	1690,1,0,0,0,1692,1693,1,0,0,0,1693,283,1,0,0,0,1694,1692,1,0,0,0,1695,
	1697,5,78,0,0,1696,1698,3,286,143,0,1697,1696,1,0,0,0,1697,1698,1,0,0,0,
	1698,1699,1,0,0,0,1699,1700,5,79,0,0,1700,285,1,0,0,0,1701,1705,3,288,144,
	0,1702,1704,3,288,144,0,1703,1702,1,0,0,0,1704,1707,1,0,0,0,1705,1703,1,
	0,0,0,1705,1706,1,0,0,0,1706,287,1,0,0,0,1707,1705,1,0,0,0,1708,1712,3,
	290,145,0,1709,1712,3,296,148,0,1710,1712,3,298,149,0,1711,1708,1,0,0,0,
	1711,1709,1,0,0,0,1711,1710,1,0,0,0,1712,289,1,0,0,0,1713,1716,3,100,50,
	0,1714,1716,3,230,115,0,1715,1713,1,0,0,0,1715,1714,1,0,0,0,1716,291,1,
	0,0,0,1717,1719,3,172,86,0,1718,1717,1,0,0,0,1719,1722,1,0,0,0,1720,1718,
	1,0,0,0,1720,1721,1,0,0,0,1721,1723,1,0,0,0,1722,1720,1,0,0,0,1723,1725,
	3,294,147,0,1724,1726,3,128,64,0,1725,1724,1,0,0,0,1725,1726,1,0,0,0,1726,
	293,1,0,0,0,1727,1730,3,136,68,0,1728,1730,5,15,0,0,1729,1727,1,0,0,0,1729,
	1728,1,0,0,0,1730,295,1,0,0,0,1731,1732,3,292,146,0,1732,1733,5,82,0,0,
	1733,297,1,0,0,0,1734,1741,3,302,151,0,1735,1741,3,306,153,0,1736,1741,
	3,314,157,0,1737,1741,3,316,158,0,1738,1741,3,334,167,0,1739,1741,3,340,
	170,0,1740,1734,1,0,0,0,1740,1735,1,0,0,0,1740,1736,1,0,0,0,1740,1737,1,
	0,0,0,1740,1738,1,0,0,0,1740,1739,1,0,0,0,1741,299,1,0,0,0,1742,1748,3,
	302,151,0,1743,1748,3,308,154,0,1744,1748,3,318,159,0,1745,1748,3,336,168,
	0,1746,1748,3,342,171,0,1747,1742,1,0,0,0,1747,1743,1,0,0,0,1747,1744,1,
	0,0,0,1747,1745,1,0,0,0,1747,1746,1,0,0,0,1748,301,1,0,0,0,1749,1763,3,
	284,142,0,1750,1763,3,304,152,0,1751,1763,3,310,155,0,1752,1763,3,320,160,
	0,1753,1763,3,322,161,0,1754,1763,3,338,169,0,1755,1763,3,358,179,0,1756,
	1763,3,360,180,0,1757,1763,3,362,181,0,1758,1763,3,366,183,0,1759,1763,
	3,364,182,0,1760,1763,3,368,184,0,1761,1763,3,390,195,0,1762,1749,1,0,0,
	0,1762,1750,1,0,0,0,1762,1751,1,0,0,0,1762,1752,1,0,0,0,1762,1753,1,0,0,
	0,1762,1754,1,0,0,0,1762,1755,1,0,0,0,1762,1756,1,0,0,0,1762,1757,1,0,0,
	0,1762,1758,1,0,0,0,1762,1759,1,0,0,0,1762,1760,1,0,0,0,1762,1761,1,0,0,
	0,1763,303,1,0,0,0,1764,1765,5,82,0,0,1765,305,1,0,0,0,1766,1767,3,2,1,
	0,1767,1768,5,94,0,0,1768,1769,3,298,149,0,1769,307,1,0,0,0,1770,1771,3,
	2,1,0,1771,1772,5,94,0,0,1772,1773,3,300,150,0,1773,309,1,0,0,0,1774,1775,
	3,312,156,0,1775,1776,5,82,0,0,1776,311,1,0,0,0,1777,1785,3,476,238,0,1778,
	1785,3,444,222,0,1779,1785,3,446,223,0,1780,1785,3,438,219,0,1781,1785,
	3,440,220,0,1782,1785,3,428,214,0,1783,1785,3,406,203,0,1784,1777,1,0,0,
	0,1784,1778,1,0,0,0,1784,1779,1,0,0,0,1784,1780,1,0,0,0,1784,1781,1,0,0,
	0,1784,1782,1,0,0,0,1784,1783,1,0,0,0,1785,313,1,0,0,0,1786,1787,5,39,0,
	0,1787,1788,5,76,0,0,1788,1789,3,396,198,0,1789,1790,5,77,0,0,1790,1791,
	3,298,149,0,1791,315,1,0,0,0,1792,1793,5,39,0,0,1793,1794,5,76,0,0,1794,
	1795,3,396,198,0,1795,1796,5,77,0,0,1796,1797,3,300,150,0,1797,1798,5,32,
	0,0,1798,1799,3,298,149,0,1799,317,1,0,0,0,1800,1801,5,39,0,0,1801,1802,
	5,76,0,0,1802,1803,3,396,198,0,1803,1804,5,77,0,0,1804,1805,3,300,150,0,
	1805,1806,5,32,0,0,1806,1807,3,300,150,0,1807,319,1,0,0,0,1808,1809,5,19,
	0,0,1809,1812,3,396,198,0,1810,1811,5,94,0,0,1811,1813,3,396,198,0,1812,
	1810,1,0,0,0,1812,1813,1,0,0,0,1813,1814,1,0,0,0,1814,1815,5,82,0,0,1815,
	321,1,0,0,0,1816,1817,5,58,0,0,1817,1818,5,76,0,0,1818,1819,3,396,198,0,
	1819,1820,5,77,0,0,1820,1821,3,324,162,0,1821,323,1,0,0,0,1822,1823,5,78,
	0,0,1823,1827,3,326,163,0,1824,1826,3,326,163,0,1825,1824,1,0,0,0,1826,
	1829,1,0,0,0,1827,1825,1,0,0,0,1827,1828,1,0,0,0,1828,1830,1,0,0,0,1829,
	1827,1,0,0,0,1830,1831,5,79,0,0,1831,1849,1,0,0,0,1832,1836,5,78,0,0,1833,
	1835,3,328,164,0,1834,1833,1,0,0,0,1835,1838,1,0,0,0,1836,1834,1,0,0,0,
	1836,1837,1,0,0,0,1837,1844,1,0,0,0,1838,1836,1,0,0,0,1839,1840,3,330,165,
	0,1840,1841,5,94,0,0,1841,1843,1,0,0,0,1842,1839,1,0,0,0,1843,1846,1,0,
	0,0,1844,1842,1,0,0,0,1844,1845,1,0,0,0,1845,1847,1,0,0,0,1846,1844,1,0,
	0,0,1847,1849,5,79,0,0,1848,1822,1,0,0,0,1848,1832,1,0,0,0,1849,325,1,0,
	0,0,1850,1851,3,330,165,0,1851,1857,5,95,0,0,1852,1853,3,396,198,0,1853,
	1854,5,82,0,0,1854,1858,1,0,0,0,1855,1858,3,284,142,0,1856,1858,3,364,182,
	0,1857,1852,1,0,0,0,1857,1855,1,0,0,0,1857,1856,1,0,0,0,1858,327,1,0,0,
	0,1859,1860,3,330,165,0,1860,1866,5,94,0,0,1861,1862,3,330,165,0,1862,1863,
	5,94,0,0,1863,1865,1,0,0,0,1864,1861,1,0,0,0,1865,1868,1,0,0,0,1866,1864,
	1,0,0,0,1866,1867,1,0,0,0,1867,1869,1,0,0,0,1868,1866,1,0,0,0,1869,1870,
	3,286,143,0,1870,329,1,0,0,0,1871,1872,5,23,0,0,1872,1877,3,332,166,0,1873,
	1874,5,83,0,0,1874,1876,3,332,166,0,1875,1873,1,0,0,0,1876,1879,1,0,0,0,
	1877,1875,1,0,0,0,1877,1878,1,0,0,0,1878,1882,1,0,0,0,1879,1877,1,0,0,0,
	1880,1882,5,29,0,0,1881,1871,1,0,0,0,1881,1880,1,0,0,0,1882,331,1,0,0,0,
	1883,1884,3,472,236,0,1884,333,1,0,0,0,1885,1886,5,67,0,0,1886,1887,5,76,
	0,0,1887,1888,3,396,198,0,1888,1889,5,77,0,0,1889,1890,3,298,149,0,1890,
	335,1,0,0,0,1891,1892,5,67,0,0,1892,1893,5,76,0,0,1893,1894,3,396,198,0,
	1894,1895,5,77,0,0,1895,1896,3,300,150,0,1896,337,1,0,0,0,1897,1898,5,30,
	0,0,1898,1899,3,298,149,0,1899,1900,5,67,0,0,1900,1901,5,76,0,0,1901,1902,
	3,396,198,0,1902,1903,5,77,0,0,1903,1904,5,82,0,0,1904,339,1,0,0,0,1905,
	1908,3,344,172,0,1906,1908,3,354,177,0,1907,1905,1,0,0,0,1907,1906,1,0,
	0,0,1908,341,1,0,0,0,1909,1912,3,346,173,0,1910,1912,3,356,178,0,1911,1909,
	1,0,0,0,1911,1910,1,0,0,0,1912,343,1,0,0,0,1913,1914,5,38,0,0,1914,1916,
	5,76,0,0,1915,1917,3,348,174,0,1916,1915,1,0,0,0,1916,1917,1,0,0,0,1917,
	1918,1,0,0,0,1918,1920,5,82,0,0,1919,1921,3,396,198,0,1920,1919,1,0,0,0,
	1920,1921,1,0,0,0,1921,1922,1,0,0,0,1922,1924,5,82,0,0,1923,1925,3,350,
	175,0,1924,1923,1,0,0,0,1924,1925,1,0,0,0,1925,1926,1,0,0,0,1926,1927,5,
	77,0,0,1927,1928,3,298,149,0,1928,345,1,0,0,0,1929,1930,5,38,0,0,1930,1932,
	5,76,0,0,1931,1933,3,348,174,0,1932,1931,1,0,0,0,1932,1933,1,0,0,0,1933,
	1934,1,0,0,0,1934,1936,5,82,0,0,1935,1937,3,396,198,0,1936,1935,1,0,0,0,
	1936,1937,1,0,0,0,1937,1938,1,0,0,0,1938,1940,5,82,0,0,1939,1941,3,350,
	175,0,1940,1939,1,0,0,0,1940,1941,1,0,0,0,1941,1942,1,0,0,0,1942,1943,5,
	77,0,0,1943,1944,3,300,150,0,1944,347,1,0,0,0,1945,1948,3,352,176,0,1946,
	1948,3,292,146,0,1947,1945,1,0,0,0,1947,1946,1,0,0,0,1948,349,1,0,0,0,1949,
	1950,3,352,176,0,1950,351,1,0,0,0,1951,1956,3,312,156,0,1952,1953,5,83,
	0,0,1953,1955,3,312,156,0,1954,1952,1,0,0,0,1955,1958,1,0,0,0,1956,1954,
	1,0,0,0,1956,1957,1,0,0,0,1957,353,1,0,0,0,1958,1956,1,0,0,0,1959,1960,
	5,38,0,0,1960,1961,5,76,0,0,1961,1962,3,292,146,0,1962,1963,5,94,0,0,1963,
	1964,3,396,198,0,1964,1965,5,77,0,0,1965,1966,3,298,149,0,1966,355,1,0,
	0,0,1967,1968,5,38,0,0,1968,1969,5,76,0,0,1969,1970,3,292,146,0,1970,1971,
	5,94,0,0,1971,1972,3,396,198,0,1972,1973,5,77,0,0,1973,1974,3,300,150,0,
	1974,357,1,0,0,0,1975,1977,5,21,0,0,1976,1978,3,2,1,0,1977,1976,1,0,0,0,
	1977,1978,1,0,0,0,1978,1979,1,0,0,0,1979,1980,5,82,0,0,1980,359,1,0,0,0,
	1981,1983,5,28,0,0,1982,1984,3,2,1,0,1983,1982,1,0,0,0,1983,1984,1,0,0,
	0,1984,1985,1,0,0,0,1985,1986,5,82,0,0,1986,361,1,0,0,0,1987,1989,5,53,
	0,0,1988,1990,3,396,198,0,1989,1988,1,0,0,0,1989,1990,1,0,0,0,1990,1991,
	1,0,0,0,1991,1992,5,82,0,0,1992,363,1,0,0,0,1993,1994,5,61,0,0,1994,1995,
	3,396,198,0,1995,1996,5,82,0,0,1996,365,1,0,0,0,1997,1998,5,59,0,0,1998,
	1999,5,76,0,0,1999,2000,3,396,198,0,2000,2001,5,77,0,0,2001,2002,3,284,
	142,0,2002,367,1,0,0,0,2003,2004,5,64,0,0,2004,2005,3,284,142,0,2005,2006,
	3,370,185,0,2006,2020,1,0,0,0,2007,2008,5,64,0,0,2008,2009,3,284,142,0,
	2009,2010,3,378,189,0,2010,2020,1,0,0,0,2011,2012,5,64,0,0,2012,2014,3,
	284,142,0,2013,2015,3,370,185,0,2014,2013,1,0,0,0,2014,2015,1,0,0,0,2015,
	2016,1,0,0,0,2016,2017,3,378,189,0,2017,2020,1,0,0,0,2018,2020,3,380,190,
	0,2019,2003,1,0,0,0,2019,2007,1,0,0,0,2019,2011,1,0,0,0,2019,2018,1,0,0,
	0,2020,369,1,0,0,0,2021,2025,3,372,186,0,2022,2024,3,372,186,0,2023,2022,
	1,0,0,0,2024,2027,1,0,0,0,2025,2023,1,0,0,0,2025,2026,1,0,0,0,2026,371,
	1,0,0,0,2027,2025,1,0,0,0,2028,2029,5,24,0,0,2029,2030,5,76,0,0,2030,2031,
	3,374,187,0,2031,2032,5,77,0,0,2032,2033,3,284,142,0,2033,373,1,0,0,0,2034,
	2036,3,172,86,0,2035,2034,1,0,0,0,2036,2039,1,0,0,0,2037,2035,1,0,0,0,2037,
	2038,1,0,0,0,2038,2040,1,0,0,0,2039,2037,1,0,0,0,2040,2041,3,376,188,0,
	2041,2042,3,132,66,0,2042,375,1,0,0,0,2043,2048,3,146,73,0,2044,2045,5,
	109,0,0,2045,2047,3,30,15,0,2046,2044,1,0,0,0,2047,2050,1,0,0,0,2048,2046,
	1,0,0,0,2048,2049,1,0,0,0,2049,377,1,0,0,0,2050,2048,1,0,0,0,2051,2052,
	5,36,0,0,2052,2053,3,284,142,0,2053,379,1,0,0,0,2054,2055,5,64,0,0,2055,
	2056,3,382,191,0,2056,2058,3,284,142,0,2057,2059,3,370,185,0,2058,2057,
	1,0,0,0,2058,2059,1,0,0,0,2059,2061,1,0,0,0,2060,2062,3,378,189,0,2061,
	2060,1,0,0,0,2061,2062,1,0,0,0,2062,381,1,0,0,0,2063,2064,5,76,0,0,2064,
	2066,3,384,192,0,2065,2067,5,82,0,0,2066,2065,1,0,0,0,2066,2067,1,0,0,0,
	2067,2068,1,0,0,0,2068,2069,5,77,0,0,2069,383,1,0,0,0,2070,2075,3,386,193,
	0,2071,2072,5,82,0,0,2072,2074,3,386,193,0,2073,2071,1,0,0,0,2074,2077,
	1,0,0,0,2075,2073,1,0,0,0,2075,2076,1,0,0,0,2076,385,1,0,0,0,2077,2075,
	1,0,0,0,2078,2081,3,292,146,0,2079,2081,3,388,194,0,2080,2078,1,0,0,0,2080,
	2079,1,0,0,0,2081,387,1,0,0,0,2082,2085,3,66,33,0,2083,2085,3,426,213,0,
	2084,2082,1,0,0,0,2084,2083,1,0,0,0,2085,389,1,0,0,0,2086,2087,5,17,0,0,
	2087,2088,3,396,198,0,2088,2089,5,82,0,0,2089,391,1,0,0,0,2090,2091,3,394,
	197,0,2091,393,1,0,0,0,2092,2093,3,292,146,0,2093,395,1,0,0,0,2094,2097,
	3,482,241,0,2095,2097,3,474,237,0,2096,2094,1,0,0,0,2096,2095,1,0,0,0,2097,
	397,1,0,0,0,2098,2101,3,400,200,0,2099,2101,3,414,207,0,2100,2098,1,0,0,
	0,2100,2099,1,0,0,0,2101,399,1,0,0,0,2102,2104,3,14,7,0,2103,2105,3,402,
	201,0,2104,2103,1,0,0,0,2104,2105,1,0,0,0,2105,2320,1,0,0,0,2106,2108,3,
	404,202,0,2107,2109,3,402,201,0,2108,2107,1,0,0,0,2108,2109,1,0,0,0,2109,
	2320,1,0,0,0,2110,2112,5,60,0,0,2111,2113,3,402,201,0,2112,2111,1,0,0,0,
	2112,2113,1,0,0,0,2113,2320,1,0,0,0,2114,2115,3,62,31,0,2115,2116,5,84,
	0,0,2116,2118,5,60,0,0,2117,2119,3,402,201,0,2118,2117,1,0,0,0,2118,2119,
	1,0,0,0,2119,2320,1,0,0,0,2120,2121,5,76,0,0,2121,2122,3,396,198,0,2122,
	2124,5,77,0,0,2123,2125,3,402,201,0,2124,2123,1,0,0,0,2124,2125,1,0,0,0,
	2125,2320,1,0,0,0,2126,2128,3,408,204,0,2127,2129,3,402,201,0,2128,2127,
	1,0,0,0,2128,2129,1,0,0,0,2129,2320,1,0,0,0,2130,2131,3,66,33,0,2131,2132,
	5,84,0,0,2132,2134,3,408,204,0,2133,2135,3,402,201,0,2134,2133,1,0,0,0,
	2134,2135,1,0,0,0,2135,2320,1,0,0,0,2136,2137,3,414,207,0,2137,2138,5,84,
	0,0,2138,2140,3,408,204,0,2139,2141,3,402,201,0,2140,2139,1,0,0,0,2140,
	2141,1,0,0,0,2141,2320,1,0,0,0,2142,2143,3,414,207,0,2143,2144,5,84,0,0,
	2144,2146,3,2,1,0,2145,2147,3,402,201,0,2146,2145,1,0,0,0,2146,2147,1,0,
	0,0,2147,2320,1,0,0,0,2148,2149,5,57,0,0,2149,2150,5,84,0,0,2150,2152,3,
	2,1,0,2151,2153,3,402,201,0,2152,2151,1,0,0,0,2152,2153,1,0,0,0,2153,2320,
	1,0,0,0,2154,2155,3,62,31,0,2155,2156,5,84,0,0,2156,2157,5,57,0,0,2157,
	2158,5,84,0,0,2158,2160,3,2,1,0,2159,2161,3,402,201,0,2160,2159,1,0,0,0,
	2160,2161,1,0,0,0,2161,2320,1,0,0,0,2162,2163,3,66,33,0,2163,2164,5,80,
	0,0,2164,2165,3,396,198,0,2165,2167,5,81,0,0,2166,2168,3,402,201,0,2167,
	2166,1,0,0,0,2167,2168,1,0,0,0,2168,2320,1,0,0,0,2169,2170,3,418,209,0,
	2170,2171,5,80,0,0,2171,2172,3,396,198,0,2172,2174,5,81,0,0,2173,2175,3,
	402,201,0,2174,2173,1,0,0,0,2174,2175,1,0,0,0,2175,2320,1,0,0,0,2176,2177,
	3,68,34,0,2177,2179,5,76,0,0,2178,2180,3,430,215,0,2179,2178,1,0,0,0,2179,
	2180,1,0,0,0,2180,2181,1,0,0,0,2181,2183,5,77,0,0,2182,2184,3,402,201,0,
	2183,2182,1,0,0,0,2183,2184,1,0,0,0,2184,2320,1,0,0,0,2185,2186,3,62,31,
	0,2186,2188,5,84,0,0,2187,2189,3,48,24,0,2188,2187,1,0,0,0,2188,2189,1,
	0,0,0,2189,2190,1,0,0,0,2190,2191,3,2,1,0,2191,2193,5,76,0,0,2192,2194,
	3,430,215,0,2193,2192,1,0,0,0,2193,2194,1,0,0,0,2194,2195,1,0,0,0,2195,
	2197,5,77,0,0,2196,2198,3,402,201,0,2197,2196,1,0,0,0,2197,2198,1,0,0,0,
	2198,2320,1,0,0,0,2199,2200,3,66,33,0,2200,2202,5,84,0,0,2201,2203,3,48,
	24,0,2202,2201,1,0,0,0,2202,2203,1,0,0,0,2203,2204,1,0,0,0,2204,2205,3,
	2,1,0,2205,2207,5,76,0,0,2206,2208,3,430,215,0,2207,2206,1,0,0,0,2207,2208,
	1,0,0,0,2208,2209,1,0,0,0,2209,2211,5,77,0,0,2210,2212,3,402,201,0,2211,
	2210,1,0,0,0,2211,2212,1,0,0,0,2212,2320,1,0,0,0,2213,2214,3,414,207,0,
	2214,2216,5,84,0,0,2215,2217,3,48,24,0,2216,2215,1,0,0,0,2216,2217,1,0,
	0,0,2217,2218,1,0,0,0,2218,2219,3,2,1,0,2219,2221,5,76,0,0,2220,2222,3,
	430,215,0,2221,2220,1,0,0,0,2221,2222,1,0,0,0,2222,2223,1,0,0,0,2223,2225,
	5,77,0,0,2224,2226,3,402,201,0,2225,2224,1,0,0,0,2225,2226,1,0,0,0,2226,
	2320,1,0,0,0,2227,2228,5,57,0,0,2228,2230,5,84,0,0,2229,2231,3,48,24,0,
	2230,2229,1,0,0,0,2230,2231,1,0,0,0,2231,2232,1,0,0,0,2232,2233,3,2,1,0,
	2233,2235,5,76,0,0,2234,2236,3,430,215,0,2235,2234,1,0,0,0,2235,2236,1,
	0,0,0,2236,2237,1,0,0,0,2237,2239,5,77,0,0,2238,2240,3,402,201,0,2239,2238,
	1,0,0,0,2239,2240,1,0,0,0,2240,2320,1,0,0,0,2241,2242,3,62,31,0,2242,2243,
	5,84,0,0,2243,2244,5,57,0,0,2244,2246,5,84,0,0,2245,2247,3,48,24,0,2246,
	2245,1,0,0,0,2246,2247,1,0,0,0,2247,2248,1,0,0,0,2248,2249,3,2,1,0,2249,
	2251,5,76,0,0,2250,2252,3,430,215,0,2251,2250,1,0,0,0,2251,2252,1,0,0,0,
	2252,2253,1,0,0,0,2253,2255,5,77,0,0,2254,2256,3,402,201,0,2255,2254,1,
	0,0,0,2255,2256,1,0,0,0,2256,2320,1,0,0,0,2257,2258,3,66,33,0,2258,2260,
	5,87,0,0,2259,2261,3,48,24,0,2260,2259,1,0,0,0,2260,2261,1,0,0,0,2261,2262,
	1,0,0,0,2262,2264,3,2,1,0,2263,2265,3,402,201,0,2264,2263,1,0,0,0,2264,
	2265,1,0,0,0,2265,2320,1,0,0,0,2266,2267,3,414,207,0,2267,2269,5,87,0,0,
	2268,2270,3,48,24,0,2269,2268,1,0,0,0,2269,2270,1,0,0,0,2270,2271,1,0,0,
	0,2271,2273,3,2,1,0,2272,2274,3,402,201,0,2273,2272,1,0,0,0,2273,2274,1,
	0,0,0,2274,2320,1,0,0,0,2275,2276,3,24,12,0,2276,2278,5,87,0,0,2277,2279,
	3,48,24,0,2278,2277,1,0,0,0,2278,2279,1,0,0,0,2279,2280,1,0,0,0,2280,2282,
	3,2,1,0,2281,2283,3,402,201,0,2282,2281,1,0,0,0,2282,2283,1,0,0,0,2283,
	2320,1,0,0,0,2284,2285,5,57,0,0,2285,2287,5,87,0,0,2286,2288,3,48,24,0,
	2287,2286,1,0,0,0,2287,2288,1,0,0,0,2288,2289,1,0,0,0,2289,2291,3,2,1,0,
	2290,2292,3,402,201,0,2291,2290,1,0,0,0,2291,2292,1,0,0,0,2292,2320,1,0,
	0,0,2293,2294,3,62,31,0,2294,2295,5,84,0,0,2295,2296,5,57,0,0,2296,2298,
	5,87,0,0,2297,2299,3,48,24,0,2298,2297,1,0,0,0,2298,2299,1,0,0,0,2299,2300,
	1,0,0,0,2300,2302,3,2,1,0,2301,2303,3,402,201,0,2302,2301,1,0,0,0,2302,
	2303,1,0,0,0,2303,2320,1,0,0,0,2304,2305,3,30,15,0,2305,2307,5,87,0,0,2306,
	2308,3,48,24,0,2307,2306,1,0,0,0,2307,2308,1,0,0,0,2308,2309,1,0,0,0,2309,
	2311,5,48,0,0,2310,2312,3,402,201,0,2311,2310,1,0,0,0,2311,2312,1,0,0,0,
	2312,2320,1,0,0,0,2313,2314,3,36,18,0,2314,2315,5,87,0,0,2315,2317,5,48,
	0,0,2316,2318,3,402,201,0,2317,2316,1,0,0,0,2317,2318,1,0,0,0,2318,2320,
	1,0,0,0,2319,2102,1,0,0,0,2319,2106,1,0,0,0,2319,2110,1,0,0,0,2319,2114,
	1,0,0,0,2319,2120,1,0,0,0,2319,2126,1,0,0,0,2319,2130,1,0,0,0,2319,2136,
	1,0,0,0,2319,2142,1,0,0,0,2319,2148,1,0,0,0,2319,2154,1,0,0,0,2319,2162,
	1,0,0,0,2319,2169,1,0,0,0,2319,2176,1,0,0,0,2319,2185,1,0,0,0,2319,2199,
	1,0,0,0,2319,2213,1,0,0,0,2319,2227,1,0,0,0,2319,2241,1,0,0,0,2319,2257,
	1,0,0,0,2319,2266,1,0,0,0,2319,2275,1,0,0,0,2319,2284,1,0,0,0,2319,2293,
	1,0,0,0,2319,2304,1,0,0,0,2319,2313,1,0,0,0,2320,401,1,0,0,0,2321,2322,
	5,84,0,0,2322,2324,3,408,204,0,2323,2325,3,402,201,0,2324,2323,1,0,0,0,
	2324,2325,1,0,0,0,2325,2359,1,0,0,0,2326,2327,5,84,0,0,2327,2329,3,2,1,
	0,2328,2330,3,402,201,0,2329,2328,1,0,0,0,2329,2330,1,0,0,0,2330,2359,1,
	0,0,0,2331,2332,5,80,0,0,2332,2333,3,396,198,0,2333,2335,5,81,0,0,2334,
	2336,3,402,201,0,2335,2334,1,0,0,0,2335,2336,1,0,0,0,2336,2359,1,0,0,0,
	2337,2339,5,84,0,0,2338,2340,3,48,24,0,2339,2338,1,0,0,0,2339,2340,1,0,
	0,0,2340,2341,1,0,0,0,2341,2342,3,2,1,0,2342,2344,5,76,0,0,2343,2345,3,
	430,215,0,2344,2343,1,0,0,0,2344,2345,1,0,0,0,2345,2346,1,0,0,0,2346,2348,
	5,77,0,0,2347,2349,3,402,201,0,2348,2347,1,0,0,0,2348,2349,1,0,0,0,2349,
	2359,1,0,0,0,2350,2352,5,87,0,0,2351,2353,3,48,24,0,2352,2351,1,0,0,0,2352,
	2353,1,0,0,0,2353,2354,1,0,0,0,2354,2356,3,2,1,0,2355,2357,3,402,201,0,
	2356,2355,1,0,0,0,2356,2357,1,0,0,0,2357,2359,1,0,0,0,2358,2321,1,0,0,0,
	2358,2326,1,0,0,0,2358,2331,1,0,0,0,2358,2337,1,0,0,0,2358,2350,1,0,0,0,
	2359,403,1,0,0,0,2360,2365,3,62,31,0,2361,2362,5,80,0,0,2362,2364,5,81,
	0,0,2363,2361,1,0,0,0,2364,2367,1,0,0,0,2365,2363,1,0,0,0,2365,2366,1,0,
	0,0,2366,2368,1,0,0,0,2367,2365,1,0,0,0,2368,2369,5,84,0,0,2369,2370,5,
	26,0,0,2370,2396,1,0,0,0,2371,2376,3,18,9,0,2372,2373,5,80,0,0,2373,2375,
	5,81,0,0,2374,2372,1,0,0,0,2375,2378,1,0,0,0,2376,2374,1,0,0,0,2376,2377,
	1,0,0,0,2377,2379,1,0,0,0,2378,2376,1,0,0,0,2379,2380,5,84,0,0,2380,2381,
	5,26,0,0,2381,2396,1,0,0,0,2382,2387,5,20,0,0,2383,2384,5,80,0,0,2384,2386,
	5,81,0,0,2385,2383,1,0,0,0,2386,2389,1,0,0,0,2387,2385,1,0,0,0,2387,2388,
	1,0,0,0,2388,2390,1,0,0,0,2389,2387,1,0,0,0,2390,2391,5,84,0,0,2391,2396,
	5,26,0,0,2392,2393,5,65,0,0,2393,2394,5,84,0,0,2394,2396,5,26,0,0,2395,
	2360,1,0,0,0,2395,2371,1,0,0,0,2395,2382,1,0,0,0,2395,2392,1,0,0,0,2396,
	405,1,0,0,0,2397,2407,3,408,204,0,2398,2399,3,66,33,0,2399,2400,5,84,0,
	0,2400,2401,3,408,204,0,2401,2407,1,0,0,0,2402,2403,3,398,199,0,2403,2404,
	5,84,0,0,2404,2405,3,408,204,0,2405,2407,1,0,0,0,2406,2397,1,0,0,0,2406,
	2398,1,0,0,0,2406,2402,1,0,0,0,2407,407,1,0,0,0,2408,2410,5,48,0,0,2409,
	2411,3,48,24,0,2410,2409,1,0,0,0,2410,2411,1,0,0,0,2411,2412,1,0,0,0,2412,
	2413,3,410,205,0,2413,2415,5,76,0,0,2414,2416,3,430,215,0,2415,2414,1,0,
	0,0,2415,2416,1,0,0,0,2416,2417,1,0,0,0,2417,2419,5,77,0,0,2418,2420,3,
	118,59,0,2419,2418,1,0,0,0,2419,2420,1,0,0,0,2420,409,1,0,0,0,2421,2423,
	3,262,131,0,2422,2421,1,0,0,0,2423,2426,1,0,0,0,2424,2422,1,0,0,0,2424,
	2425,1,0,0,0,2425,2427,1,0,0,0,2426,2424,1,0,0,0,2427,2438,3,2,1,0,2428,
	2432,5,84,0,0,2429,2431,3,262,131,0,2430,2429,1,0,0,0,2431,2434,1,0,0,0,
	2432,2430,1,0,0,0,2432,2433,1,0,0,0,2433,2435,1,0,0,0,2434,2432,1,0,0,0,
	2435,2437,3,2,1,0,2436,2428,1,0,0,0,2437,2440,1,0,0,0,2438,2436,1,0,0,0,
	2438,2439,1,0,0,0,2439,2442,1,0,0,0,2440,2438,1,0,0,0,2441,2443,3,412,206,
	0,2442,2441,1,0,0,0,2442,2443,1,0,0,0,2443,411,1,0,0,0,2444,2447,3,48,24,
	0,2445,2447,5,4,0,0,2446,2444,1,0,0,0,2446,2445,1,0,0,0,2447,413,1,0,0,
	0,2448,2451,3,416,208,0,2449,2451,3,418,209,0,2450,2448,1,0,0,0,2450,2449,
	1,0,0,0,2451,415,1,0,0,0,2452,2453,5,48,0,0,2453,2454,3,16,8,0,2454,2456,
	3,420,210,0,2455,2457,3,38,19,0,2456,2455,1,0,0,0,2456,2457,1,0,0,0,2457,
	2465,1,0,0,0,2458,2459,5,48,0,0,2459,2460,3,30,15,0,2460,2462,3,420,210,
	0,2461,2463,3,38,19,0,2462,2461,1,0,0,0,2462,2463,1,0,0,0,2463,2465,1,0,
	0,0,2464,2452,1,0,0,0,2464,2458,1,0,0,0,2465,417,1,0,0,0,2466,2467,5,48,
	0,0,2467,2468,3,16,8,0,2468,2469,3,38,19,0,2469,2470,3,280,140,0,2470,2477,
	1,0,0,0,2471,2472,5,48,0,0,2472,2473,3,28,14,0,2473,2474,3,38,19,0,2474,
	2475,3,280,140,0,2475,2477,1,0,0,0,2476,2466,1,0,0,0,2476,2471,1,0,0,0,
	2477,419,1,0,0,0,2478,2482,3,422,211,0,2479,2481,3,422,211,0,2480,2479,
	1,0,0,0,2481,2484,1,0,0,0,2482,2480,1,0,0,0,2482,2483,1,0,0,0,2483,421,
	1,0,0,0,2484,2482,1,0,0,0,2485,2487,3,262,131,0,2486,2485,1,0,0,0,2487,
	2490,1,0,0,0,2488,2486,1,0,0,0,2488,2489,1,0,0,0,2489,2491,1,0,0,0,2490,
	2488,1,0,0,0,2491,2492,5,80,0,0,2492,2493,3,396,198,0,2493,2494,5,81,0,
	0,2494,423,1,0,0,0,2495,2496,3,66,33,0,2496,2497,5,80,0,0,2497,2498,3,396,
	198,0,2498,2499,5,81,0,0,2499,2511,1,0,0,0,2500,2501,3,400,200,0,2501,2502,
	5,80,0,0,2502,2503,3,396,198,0,2503,2504,5,81,0,0,2504,2511,1,0,0,0,2505,
	2506,3,418,209,0,2506,2507,5,80,0,0,2507,2508,3,396,198,0,2508,2509,5,81,
	0,0,2509,2511,1,0,0,0,2510,2495,1,0,0,0,2510,2500,1,0,0,0,2510,2505,1,0,
	0,0,2511,425,1,0,0,0,2512,2513,3,398,199,0,2513,2514,5,84,0,0,2514,2515,
	3,2,1,0,2515,2526,1,0,0,0,2516,2517,5,57,0,0,2517,2518,5,84,0,0,2518,2526,
	3,2,1,0,2519,2520,3,62,31,0,2520,2521,5,84,0,0,2521,2522,5,57,0,0,2522,
	2523,5,84,0,0,2523,2524,3,2,1,0,2524,2526,1,0,0,0,2525,2512,1,0,0,0,2525,
	2516,1,0,0,0,2525,2519,1,0,0,0,2526,427,1,0,0,0,2527,2528,3,68,34,0,2528,
	2530,5,76,0,0,2529,2531,3,430,215,0,2530,2529,1,0,0,0,2530,2531,1,0,0,0,
	2531,2532,1,0,0,0,2532,2533,5,77,0,0,2533,2597,1,0,0,0,2534,2535,3,62,31,
	0,2535,2537,5,84,0,0,2536,2538,3,48,24,0,2537,2536,1,0,0,0,2537,2538,1,
	0,0,0,2538,2539,1,0,0,0,2539,2540,3,2,1,0,2540,2542,5,76,0,0,2541,2543,
	3,430,215,0,2542,2541,1,0,0,0,2542,2543,1,0,0,0,2543,2544,1,0,0,0,2544,
	2545,5,77,0,0,2545,2597,1,0,0,0,2546,2547,3,66,33,0,2547,2549,5,84,0,0,
	2548,2550,3,48,24,0,2549,2548,1,0,0,0,2549,2550,1,0,0,0,2550,2551,1,0,0,
	0,2551,2552,3,2,1,0,2552,2554,5,76,0,0,2553,2555,3,430,215,0,2554,2553,
	1,0,0,0,2554,2555,1,0,0,0,2555,2556,1,0,0,0,2556,2557,5,77,0,0,2557,2597,
	1,0,0,0,2558,2559,3,398,199,0,2559,2561,5,84,0,0,2560,2562,3,48,24,0,2561,
	2560,1,0,0,0,2561,2562,1,0,0,0,2562,2563,1,0,0,0,2563,2564,3,2,1,0,2564,
	2566,5,76,0,0,2565,2567,3,430,215,0,2566,2565,1,0,0,0,2566,2567,1,0,0,0,
	2567,2568,1,0,0,0,2568,2569,5,77,0,0,2569,2597,1,0,0,0,2570,2571,5,57,0,
	0,2571,2573,5,84,0,0,2572,2574,3,48,24,0,2573,2572,1,0,0,0,2573,2574,1,
	0,0,0,2574,2575,1,0,0,0,2575,2576,3,2,1,0,2576,2578,5,76,0,0,2577,2579,
	3,430,215,0,2578,2577,1,0,0,0,2578,2579,1,0,0,0,2579,2580,1,0,0,0,2580,
	2581,5,77,0,0,2581,2597,1,0,0,0,2582,2583,3,62,31,0,2583,2584,5,84,0,0,
	2584,2585,5,57,0,0,2585,2587,5,84,0,0,2586,2588,3,48,24,0,2587,2586,1,0,
	0,0,2587,2588,1,0,0,0,2588,2589,1,0,0,0,2589,2590,3,2,1,0,2590,2592,5,76,
	0,0,2591,2593,3,430,215,0,2592,2591,1,0,0,0,2592,2593,1,0,0,0,2593,2594,
	1,0,0,0,2594,2595,5,77,0,0,2595,2597,1,0,0,0,2596,2527,1,0,0,0,2596,2534,
	1,0,0,0,2596,2546,1,0,0,0,2596,2558,1,0,0,0,2596,2570,1,0,0,0,2596,2582,
	1,0,0,0,2597,429,1,0,0,0,2598,2603,3,396,198,0,2599,2600,5,83,0,0,2600,
	2602,3,396,198,0,2601,2599,1,0,0,0,2602,2605,1,0,0,0,2603,2601,1,0,0,0,
	2603,2604,1,0,0,0,2604,431,1,0,0,0,2605,2603,1,0,0,0,2606,2607,3,66,33,
	0,2607,2609,5,87,0,0,2608,2610,3,48,24,0,2609,2608,1,0,0,0,2609,2610,1,
	0,0,0,2610,2611,1,0,0,0,2611,2612,3,2,1,0,2612,2654,1,0,0,0,2613,2614,3,
	398,199,0,2614,2616,5,87,0,0,2615,2617,3,48,24,0,2616,2615,1,0,0,0,2616,
	2617,1,0,0,0,2617,2618,1,0,0,0,2618,2619,3,2,1,0,2619,2654,1,0,0,0,2620,
	2621,3,24,12,0,2621,2623,5,87,0,0,2622,2624,3,48,24,0,2623,2622,1,0,0,0,
	2623,2624,1,0,0,0,2624,2625,1,0,0,0,2625,2626,3,2,1,0,2626,2654,1,0,0,0,
	2627,2628,5,57,0,0,2628,2630,5,87,0,0,2629,2631,3,48,24,0,2630,2629,1,0,
	0,0,2630,2631,1,0,0,0,2631,2632,1,0,0,0,2632,2654,3,2,1,0,2633,2634,3,62,
	31,0,2634,2635,5,84,0,0,2635,2636,5,57,0,0,2636,2638,5,87,0,0,2637,2639,
	3,48,24,0,2638,2637,1,0,0,0,2638,2639,1,0,0,0,2639,2640,1,0,0,0,2640,2641,
	3,2,1,0,2641,2654,1,0,0,0,2642,2643,3,30,15,0,2643,2645,5,87,0,0,2644,2646,
	3,48,24,0,2645,2644,1,0,0,0,2645,2646,1,0,0,0,2646,2647,1,0,0,0,2647,2648,
	5,48,0,0,2648,2654,1,0,0,0,2649,2650,3,36,18,0,2650,2651,5,87,0,0,2651,
	2652,5,48,0,0,2652,2654,1,0,0,0,2653,2606,1,0,0,0,2653,2613,1,0,0,0,2653,
	2620,1,0,0,0,2653,2627,1,0,0,0,2653,2633,1,0,0,0,2653,2642,1,0,0,0,2653,
	2649,1,0,0,0,2654,433,1,0,0,0,2655,2657,3,398,199,0,2656,2658,3,436,218,
	0,2657,2656,1,0,0,0,2657,2658,1,0,0,0,2658,2664,1,0,0,0,2659,2661,3,66,
	33,0,2660,2662,3,436,218,0,2661,2660,1,0,0,0,2661,2662,1,0,0,0,2662,2664,
	1,0,0,0,2663,2655,1,0,0,0,2663,2659,1,0,0,0,2664,435,1,0,0,0,2665,2667,
	5,102,0,0,2666,2668,3,436,218,0,2667,2666,1,0,0,0,2667,2668,1,0,0,0,2668,
	2674,1,0,0,0,2669,2671,5,103,0,0,2670,2672,3,436,218,0,2671,2670,1,0,0,
	0,2671,2672,1,0,0,0,2672,2674,1,0,0,0,2673,2665,1,0,0,0,2673,2669,1,0,0,
	0,2674,437,1,0,0,0,2675,2676,3,434,217,0,2676,2677,5,102,0,0,2677,439,1,
	0,0,0,2678,2679,3,434,217,0,2679,2680,5,103,0,0,2680,441,1,0,0,0,2681,2689,
	3,444,222,0,2682,2689,3,446,223,0,2683,2684,5,104,0,0,2684,2689,3,442,221,
	0,2685,2686,5,105,0,0,2686,2689,3,442,221,0,2687,2689,3,448,224,0,2688,
	2681,1,0,0,0,2688,2682,1,0,0,0,2688,2683,1,0,0,0,2688,2685,1,0,0,0,2688,
	2687,1,0,0,0,2689,443,1,0,0,0,2690,2691,5,102,0,0,2691,2692,3,442,221,0,
	2692,445,1,0,0,0,2693,2694,5,103,0,0,2694,2695,3,442,221,0,2695,447,1,0,
	0,0,2696,2704,3,434,217,0,2697,2698,5,92,0,0,2698,2704,3,442,221,0,2699,
	2700,5,91,0,0,2700,2704,3,442,221,0,2701,2704,3,450,225,0,2702,2704,3,494,
	247,0,2703,2696,1,0,0,0,2703,2697,1,0,0,0,2703,2699,1,0,0,0,2703,2701,1,
	0,0,0,2703,2702,1,0,0,0,2704,449,1,0,0,0,2705,2706,5,76,0,0,2706,2707,3,
	16,8,0,2707,2708,5,77,0,0,2708,2709,3,442,221,0,2709,2733,1,0,0,0,2710,
	2711,5,76,0,0,2711,2715,3,24,12,0,2712,2714,3,46,23,0,2713,2712,1,0,0,0,
	2714,2717,1,0,0,0,2715,2713,1,0,0,0,2715,2716,1,0,0,0,2716,2718,1,0,0,0,
	2717,2715,1,0,0,0,2718,2719,5,77,0,0,2719,2720,3,448,224,0,2720,2733,1,
	0,0,0,2721,2722,5,76,0,0,2722,2726,3,24,12,0,2723,2725,3,46,23,0,2724,2723,
	1,0,0,0,2725,2728,1,0,0,0,2726,2724,1,0,0,0,2726,2727,1,0,0,0,2727,2729,
	1,0,0,0,2728,2726,1,0,0,0,2729,2730,5,77,0,0,2730,2731,3,482,241,0,2731,
	2733,1,0,0,0,2732,2705,1,0,0,0,2732,2710,1,0,0,0,2732,2721,1,0,0,0,2733,
	451,1,0,0,0,2734,2735,6,226,-1,0,2735,2736,3,442,221,0,2736,2748,1,0,0,
	0,2737,2738,10,3,0,0,2738,2739,5,106,0,0,2739,2747,3,442,221,0,2740,2741,
	10,2,0,0,2741,2742,5,107,0,0,2742,2747,3,442,221,0,2743,2744,10,1,0,0,2744,
	2745,5,111,0,0,2745,2747,3,442,221,0,2746,2737,1,0,0,0,2746,2740,1,0,0,
	0,2746,2743,1,0,0,0,2747,2750,1,0,0,0,2748,2746,1,0,0,0,2748,2749,1,0,0,
	0,2749,453,1,0,0,0,2750,2748,1,0,0,0,2751,2752,6,227,-1,0,2752,2753,3,452,
	226,0,2753,2762,1,0,0,0,2754,2755,10,2,0,0,2755,2756,5,104,0,0,2756,2761,
	3,452,226,0,2757,2758,10,1,0,0,2758,2759,5,105,0,0,2759,2761,3,452,226,
	0,2760,2754,1,0,0,0,2760,2757,1,0,0,0,2761,2764,1,0,0,0,2762,2760,1,0,0,
	0,2762,2763,1,0,0,0,2763,455,1,0,0,0,2764,2762,1,0,0,0,2765,2766,6,228,
	-1,0,2766,2767,3,454,227,0,2767,2783,1,0,0,0,2768,2769,10,3,0,0,2769,2770,
	5,90,0,0,2770,2771,5,90,0,0,2771,2782,3,454,227,0,2772,2773,10,2,0,0,2773,
	2774,5,89,0,0,2774,2775,5,89,0,0,2775,2782,3,454,227,0,2776,2777,10,1,0,
	0,2777,2778,5,89,0,0,2778,2779,5,89,0,0,2779,2780,5,89,0,0,2780,2782,3,
	454,227,0,2781,2768,1,0,0,0,2781,2772,1,0,0,0,2781,2776,1,0,0,0,2782,2785,
	1,0,0,0,2783,2781,1,0,0,0,2783,2784,1,0,0,0,2784,457,1,0,0,0,2785,2783,
	1,0,0,0,2786,2787,6,229,-1,0,2787,2788,3,456,228,0,2788,2809,1,0,0,0,2789,
	2790,10,5,0,0,2790,2791,5,90,0,0,2791,2808,3,456,228,0,2792,2793,10,4,0,
	0,2793,2794,5,89,0,0,2794,2808,3,456,228,0,2795,2796,10,3,0,0,2796,2797,
	5,97,0,0,2797,2808,3,456,228,0,2798,2799,10,2,0,0,2799,2800,5,98,0,0,2800,
	2808,3,456,228,0,2801,2802,10,1,0,0,2802,2805,5,43,0,0,2803,2806,3,24,12,
	0,2804,2806,3,392,196,0,2805,2803,1,0,0,0,2805,2804,1,0,0,0,2806,2808,1,
	0,0,0,2807,2789,1,0,0,0,2807,2792,1,0,0,0,2807,2795,1,0,0,0,2807,2798,1,
	0,0,0,2807,2801,1,0,0,0,2808,2811,1,0,0,0,2809,2807,1,0,0,0,2809,2810,1,
	0,0,0,2810,459,1,0,0,0,2811,2809,1,0,0,0,2812,2813,6,230,-1,0,2813,2814,
	3,458,229,0,2814,2823,1,0,0,0,2815,2816,10,2,0,0,2816,2817,5,96,0,0,2817,
	2822,3,458,229,0,2818,2819,10,1,0,0,2819,2820,5,99,0,0,2820,2822,3,458,
	229,0,2821,2815,1,0,0,0,2821,2818,1,0,0,0,2822,2825,1,0,0,0,2823,2821,1,
	0,0,0,2823,2824,1,0,0,0,2824,461,1,0,0,0,2825,2823,1,0,0,0,2826,2827,6,
	231,-1,0,2827,2828,3,460,230,0,2828,2834,1,0,0,0,2829,2830,10,1,0,0,2830,
	2831,5,108,0,0,2831,2833,3,460,230,0,2832,2829,1,0,0,0,2833,2836,1,0,0,
	0,2834,2832,1,0,0,0,2834,2835,1,0,0,0,2835,463,1,0,0,0,2836,2834,1,0,0,
	0,2837,2838,6,232,-1,0,2838,2839,3,462,231,0,2839,2845,1,0,0,0,2840,2841,
	10,1,0,0,2841,2842,5,110,0,0,2842,2844,3,462,231,0,2843,2840,1,0,0,0,2844,
	2847,1,0,0,0,2845,2843,1,0,0,0,2845,2846,1,0,0,0,2846,465,1,0,0,0,2847,
	2845,1,0,0,0,2848,2849,6,233,-1,0,2849,2850,3,464,232,0,2850,2856,1,0,0,
	0,2851,2852,10,1,0,0,2852,2853,5,109,0,0,2853,2855,3,464,232,0,2854,2851,
	1,0,0,0,2855,2858,1,0,0,0,2856,2854,1,0,0,0,2856,2857,1,0,0,0,2857,467,
	1,0,0,0,2858,2856,1,0,0,0,2859,2860,6,234,-1,0,2860,2861,3,466,233,0,2861,
	2867,1,0,0,0,2862,2863,10,1,0,0,2863,2864,5,100,0,0,2864,2866,3,466,233,
	0,2865,2862,1,0,0,0,2866,2869,1,0,0,0,2867,2865,1,0,0,0,2867,2868,1,0,0,
	0,2868,469,1,0,0,0,2869,2867,1,0,0,0,2870,2871,6,235,-1,0,2871,2872,3,468,
	234,0,2872,2878,1,0,0,0,2873,2874,10,1,0,0,2874,2875,5,101,0,0,2875,2877,
	3,468,234,0,2876,2873,1,0,0,0,2877,2880,1,0,0,0,2878,2876,1,0,0,0,2878,
	2879,1,0,0,0,2879,471,1,0,0,0,2880,2878,1,0,0,0,2881,2895,3,470,235,0,2882,
	2883,3,470,235,0,2883,2884,5,93,0,0,2884,2885,3,396,198,0,2885,2886,5,94,
	0,0,2886,2887,3,472,236,0,2887,2895,1,0,0,0,2888,2889,3,470,235,0,2889,
	2890,5,93,0,0,2890,2891,3,396,198,0,2891,2892,5,94,0,0,2892,2893,3,482,
	241,0,2893,2895,1,0,0,0,2894,2881,1,0,0,0,2894,2882,1,0,0,0,2894,2888,1,
	0,0,0,2895,473,1,0,0,0,2896,2899,3,472,236,0,2897,2899,3,476,238,0,2898,
	2896,1,0,0,0,2898,2897,1,0,0,0,2899,475,1,0,0,0,2900,2901,3,478,239,0,2901,
	2902,3,480,240,0,2902,2903,3,396,198,0,2903,477,1,0,0,0,2904,2908,3,66,
	33,0,2905,2908,3,426,213,0,2906,2908,3,424,212,0,2907,2904,1,0,0,0,2907,
	2905,1,0,0,0,2907,2906,1,0,0,0,2908,479,1,0,0,0,2909,2910,7,8,0,0,2910,
	481,1,0,0,0,2911,2912,3,484,242,0,2912,2913,5,95,0,0,2913,2914,3,492,246,
	0,2914,483,1,0,0,0,2915,2917,5,76,0,0,2916,2918,3,486,243,0,2917,2916,1,
	0,0,0,2917,2918,1,0,0,0,2918,2919,1,0,0,0,2919,2922,5,77,0,0,2920,2922,
	3,2,1,0,2921,2915,1,0,0,0,2921,2920,1,0,0,0,2922,485,1,0,0,0,2923,2928,
	3,488,244,0,2924,2925,5,83,0,0,2925,2927,3,488,244,0,2926,2924,1,0,0,0,
	2927,2930,1,0,0,0,2928,2926,1,0,0,0,2928,2929,1,0,0,0,2929,2940,1,0,0,0,
	2930,2928,1,0,0,0,2931,2936,3,2,1,0,2932,2933,5,83,0,0,2933,2935,3,2,1,
	0,2934,2932,1,0,0,0,2935,2938,1,0,0,0,2936,2934,1,0,0,0,2936,2937,1,0,0,
	0,2937,2940,1,0,0,0,2938,2936,1,0,0,0,2939,2923,1,0,0,0,2939,2931,1,0,0,
	0,2940,487,1,0,0,0,2941,2943,3,172,86,0,2942,2941,1,0,0,0,2943,2946,1,0,
	0,0,2944,2942,1,0,0,0,2944,2945,1,0,0,0,2945,2947,1,0,0,0,2946,2944,1,0,
	0,0,2947,2948,3,490,245,0,2948,2949,3,132,66,0,2949,2952,1,0,0,0,2950,2952,
	3,170,85,0,2951,2944,1,0,0,0,2951,2950,1,0,0,0,2952,489,1,0,0,0,2953,2956,
	3,136,68,0,2954,2956,5,15,0,0,2955,2953,1,0,0,0,2955,2954,1,0,0,0,2956,
	491,1,0,0,0,2957,2960,3,396,198,0,2958,2960,3,284,142,0,2959,2957,1,0,0,
	0,2959,2958,1,0,0,0,2960,493,1,0,0,0,2961,2962,5,58,0,0,2962,2963,5,76,
	0,0,2963,2964,3,396,198,0,2964,2965,5,77,0,0,2965,2966,3,324,162,0,2966,
	495,1,0,0,0,2967,2968,3,396,198,0,2968,497,1,0,0,0,363,503,507,511,524,
	529,533,542,548,553,556,561,566,571,574,579,584,591,596,603,608,610,617,
	631,636,644,651,657,662,672,675,689,694,699,704,710,715,720,725,730,735,
	744,748,751,756,762,768,776,785,796,825,830,834,842,849,858,872,875,887,
	890,906,911,918,923,929,932,935,938,952,963,977,986,993,1002,1009,1014,
	1029,1036,1042,1046,1050,1054,1058,1063,1070,1073,1077,1080,1086,1091,1094,
	1098,1102,1108,1113,1115,1124,1131,1147,1153,1156,1161,1165,1172,1175,1179,
	1184,1191,1200,1206,1213,1218,1225,1233,1243,1248,1252,1262,1267,1275,1278,
	1285,1288,1296,1299,1304,1309,1315,1319,1324,1329,1334,1340,1346,1349,1352,
	1361,1367,1373,1376,1379,1387,1393,1399,1403,1409,1418,1424,1431,1436,1443,
	1455,1462,1467,1475,1480,1486,1489,1492,1505,1516,1523,1533,1538,1549,1554,
	1567,1572,1584,1594,1599,1607,1610,1617,1625,1631,1640,1650,1654,1657,1666,
	1680,1683,1692,1697,1705,1711,1715,1720,1725,1729,1740,1747,1762,1784,1812,
	1827,1836,1844,1848,1857,1866,1877,1881,1907,1911,1916,1920,1924,1932,1936,
	1940,1947,1956,1977,1983,1989,2014,2019,2025,2037,2048,2058,2061,2066,2075,
	2080,2084,2096,2100,2104,2108,2112,2118,2124,2128,2134,2140,2146,2152,2160,
	2167,2174,2179,2183,2188,2193,2197,2202,2207,2211,2216,2221,2225,2230,2235,
	2239,2246,2251,2255,2260,2264,2269,2273,2278,2282,2287,2291,2298,2302,2307,
	2311,2317,2319,2324,2329,2335,2339,2344,2348,2352,2356,2358,2365,2376,2387,
	2395,2406,2410,2415,2419,2424,2432,2438,2442,2446,2450,2456,2462,2464,2476,
	2482,2488,2510,2525,2530,2537,2542,2549,2554,2561,2566,2573,2578,2587,2592,
	2596,2603,2609,2616,2623,2630,2638,2645,2653,2657,2661,2663,2667,2671,2673,
	2688,2703,2715,2726,2732,2746,2748,2760,2762,2781,2783,2805,2807,2809,2821,
	2823,2834,2845,2856,2867,2878,2894,2898,2907,2917,2921,2928,2936,2939,2944,
	2951,2955,2959];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Java20Parser.__ATN) {
			Java20Parser.__ATN = new ATNDeserializer().deserialize(Java20Parser._serializedATN);
		}

		return Java20Parser.__ATN;
	}


	static DecisionsToDFA = Java20Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Start_Context extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public compilationUnit(): CompilationUnitContext {
		return this.getTypedRuleContext(CompilationUnitContext, 0) as CompilationUnitContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(Java20Parser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_start_;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterStart_) {
	 		listener.enterStart_(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitStart_) {
	 		listener.exitStart_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStart_) {
			return visitor.visitStart_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java20Parser.Identifier, 0);
	}
	public contextualKeyword(): ContextualKeywordContext {
		return this.getTypedRuleContext(ContextualKeywordContext, 0) as ContextualKeywordContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_identifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeIdentifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java20Parser.Identifier, 0);
	}
	public contextualKeywordMinusForTypeIdentifier(): ContextualKeywordMinusForTypeIdentifierContext {
		return this.getTypedRuleContext(ContextualKeywordMinusForTypeIdentifierContext, 0) as ContextualKeywordMinusForTypeIdentifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeIdentifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeIdentifier) {
	 		listener.enterTypeIdentifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeIdentifier) {
	 		listener.exitTypeIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeIdentifier) {
			return visitor.visitTypeIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnqualifiedMethodIdentifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java20Parser.Identifier, 0);
	}
	public contextualKeywordMinusForUnqualifiedMethodIdentifier(): ContextualKeywordMinusForUnqualifiedMethodIdentifierContext {
		return this.getTypedRuleContext(ContextualKeywordMinusForUnqualifiedMethodIdentifierContext, 0) as ContextualKeywordMinusForUnqualifiedMethodIdentifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unqualifiedMethodIdentifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnqualifiedMethodIdentifier) {
	 		listener.enterUnqualifiedMethodIdentifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnqualifiedMethodIdentifier) {
	 		listener.exitUnqualifiedMethodIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnqualifiedMethodIdentifier) {
			return visitor.visitUnqualifiedMethodIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContextualKeywordContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPORTS(): TerminalNode {
		return this.getToken(Java20Parser.EXPORTS, 0);
	}
	public MODULE(): TerminalNode {
		return this.getToken(Java20Parser.MODULE, 0);
	}
	public NONSEALED(): TerminalNode {
		return this.getToken(Java20Parser.NONSEALED, 0);
	}
	public OPEN(): TerminalNode {
		return this.getToken(Java20Parser.OPEN, 0);
	}
	public OPENS(): TerminalNode {
		return this.getToken(Java20Parser.OPENS, 0);
	}
	public PERMITS(): TerminalNode {
		return this.getToken(Java20Parser.PERMITS, 0);
	}
	public PROVIDES(): TerminalNode {
		return this.getToken(Java20Parser.PROVIDES, 0);
	}
	public RECORD(): TerminalNode {
		return this.getToken(Java20Parser.RECORD, 0);
	}
	public REQUIRES(): TerminalNode {
		return this.getToken(Java20Parser.REQUIRES, 0);
	}
	public SEALED(): TerminalNode {
		return this.getToken(Java20Parser.SEALED, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(Java20Parser.TO, 0);
	}
	public TRANSITIVE(): TerminalNode {
		return this.getToken(Java20Parser.TRANSITIVE, 0);
	}
	public USES(): TerminalNode {
		return this.getToken(Java20Parser.USES, 0);
	}
	public VAR(): TerminalNode {
		return this.getToken(Java20Parser.VAR, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(Java20Parser.WITH, 0);
	}
	public YIELD(): TerminalNode {
		return this.getToken(Java20Parser.YIELD, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_contextualKeyword;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterContextualKeyword) {
	 		listener.enterContextualKeyword(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitContextualKeyword) {
	 		listener.exitContextualKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitContextualKeyword) {
			return visitor.visitContextualKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContextualKeywordMinusForTypeIdentifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPORTS(): TerminalNode {
		return this.getToken(Java20Parser.EXPORTS, 0);
	}
	public MODULE(): TerminalNode {
		return this.getToken(Java20Parser.MODULE, 0);
	}
	public NONSEALED(): TerminalNode {
		return this.getToken(Java20Parser.NONSEALED, 0);
	}
	public OPEN(): TerminalNode {
		return this.getToken(Java20Parser.OPEN, 0);
	}
	public OPENS(): TerminalNode {
		return this.getToken(Java20Parser.OPENS, 0);
	}
	public PROVIDES(): TerminalNode {
		return this.getToken(Java20Parser.PROVIDES, 0);
	}
	public REQUIRES(): TerminalNode {
		return this.getToken(Java20Parser.REQUIRES, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(Java20Parser.TO, 0);
	}
	public TRANSITIVE(): TerminalNode {
		return this.getToken(Java20Parser.TRANSITIVE, 0);
	}
	public USES(): TerminalNode {
		return this.getToken(Java20Parser.USES, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(Java20Parser.WITH, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_contextualKeywordMinusForTypeIdentifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterContextualKeywordMinusForTypeIdentifier) {
	 		listener.enterContextualKeywordMinusForTypeIdentifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitContextualKeywordMinusForTypeIdentifier) {
	 		listener.exitContextualKeywordMinusForTypeIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitContextualKeywordMinusForTypeIdentifier) {
			return visitor.visitContextualKeywordMinusForTypeIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContextualKeywordMinusForUnqualifiedMethodIdentifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPORTS(): TerminalNode {
		return this.getToken(Java20Parser.EXPORTS, 0);
	}
	public MODULE(): TerminalNode {
		return this.getToken(Java20Parser.MODULE, 0);
	}
	public NONSEALED(): TerminalNode {
		return this.getToken(Java20Parser.NONSEALED, 0);
	}
	public OPEN(): TerminalNode {
		return this.getToken(Java20Parser.OPEN, 0);
	}
	public OPENS(): TerminalNode {
		return this.getToken(Java20Parser.OPENS, 0);
	}
	public PERMITS(): TerminalNode {
		return this.getToken(Java20Parser.PERMITS, 0);
	}
	public PROVIDES(): TerminalNode {
		return this.getToken(Java20Parser.PROVIDES, 0);
	}
	public RECORD(): TerminalNode {
		return this.getToken(Java20Parser.RECORD, 0);
	}
	public REQUIRES(): TerminalNode {
		return this.getToken(Java20Parser.REQUIRES, 0);
	}
	public SEALED(): TerminalNode {
		return this.getToken(Java20Parser.SEALED, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(Java20Parser.TO, 0);
	}
	public TRANSITIVE(): TerminalNode {
		return this.getToken(Java20Parser.TRANSITIVE, 0);
	}
	public USES(): TerminalNode {
		return this.getToken(Java20Parser.USES, 0);
	}
	public VAR(): TerminalNode {
		return this.getToken(Java20Parser.VAR, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(Java20Parser.WITH, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_contextualKeywordMinusForUnqualifiedMethodIdentifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterContextualKeywordMinusForUnqualifiedMethodIdentifier) {
	 		listener.enterContextualKeywordMinusForUnqualifiedMethodIdentifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitContextualKeywordMinusForUnqualifiedMethodIdentifier) {
	 		listener.exitContextualKeywordMinusForUnqualifiedMethodIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitContextualKeywordMinusForUnqualifiedMethodIdentifier) {
			return visitor.visitContextualKeywordMinusForUnqualifiedMethodIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IntegerLiteral(): TerminalNode {
		return this.getToken(Java20Parser.IntegerLiteral, 0);
	}
	public FloatingPointLiteral(): TerminalNode {
		return this.getToken(Java20Parser.FloatingPointLiteral, 0);
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(Java20Parser.BooleanLiteral, 0);
	}
	public CharacterLiteral(): TerminalNode {
		return this.getToken(Java20Parser.CharacterLiteral, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(Java20Parser.StringLiteral, 0);
	}
	public TextBlock(): TerminalNode {
		return this.getToken(Java20Parser.TextBlock, 0);
	}
	public NullLiteral(): TerminalNode {
		return this.getToken(Java20Parser.NullLiteral, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_literal;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numericType(): NumericTypeContext {
		return this.getTypedRuleContext(NumericTypeContext, 0) as NumericTypeContext;
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(Java20Parser.BOOLEAN, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_primitiveType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPrimitiveType) {
	 		listener.enterPrimitiveType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPrimitiveType) {
	 		listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integralType(): IntegralTypeContext {
		return this.getTypedRuleContext(IntegralTypeContext, 0) as IntegralTypeContext;
	}
	public floatingPointType(): FloatingPointTypeContext {
		return this.getTypedRuleContext(FloatingPointTypeContext, 0) as FloatingPointTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_numericType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterNumericType) {
	 		listener.enterNumericType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitNumericType) {
	 		listener.exitNumericType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitNumericType) {
			return visitor.visitNumericType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegralTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BYTE(): TerminalNode {
		return this.getToken(Java20Parser.BYTE, 0);
	}
	public SHORT(): TerminalNode {
		return this.getToken(Java20Parser.SHORT, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(Java20Parser.INT, 0);
	}
	public LONG(): TerminalNode {
		return this.getToken(Java20Parser.LONG, 0);
	}
	public CHAR(): TerminalNode {
		return this.getToken(Java20Parser.CHAR, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_integralType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterIntegralType) {
	 		listener.enterIntegralType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitIntegralType) {
	 		listener.exitIntegralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitIntegralType) {
			return visitor.visitIntegralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatingPointTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLOAT(): TerminalNode {
		return this.getToken(Java20Parser.FLOAT, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(Java20Parser.DOUBLE, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_floatingPointType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterFloatingPointType) {
	 		listener.enterFloatingPointType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitFloatingPointType) {
	 		listener.exitFloatingPointType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFloatingPointType) {
			return visitor.visitFloatingPointType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public typeVariable(): TypeVariableContext {
		return this.getTypedRuleContext(TypeVariableContext, 0) as TypeVariableContext;
	}
	public arrayType(): ArrayTypeContext {
		return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_referenceType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterReferenceType) {
	 		listener.enterReferenceType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitReferenceType) {
	 		listener.exitReferenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitReferenceType) {
			return visitor.visitReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CoitContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public coit(): CoitContext {
		return this.getTypedRuleContext(CoitContext, 0) as CoitContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_coit;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterCoit) {
	 		listener.enterCoit(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitCoit) {
	 		listener.exitCoit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCoit) {
			return visitor.visitCoit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public packageName(): PackageNameContext {
		return this.getTypedRuleContext(PackageNameContext, 0) as PackageNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public coit(): CoitContext {
		return this.getTypedRuleContext(CoitContext, 0) as CoitContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classOrInterfaceType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassOrInterfaceType) {
	 		listener.enterClassOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassOrInterfaceType) {
	 		listener.exitClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public packageName(): PackageNameContext {
		return this.getTypedRuleContext(PackageNameContext, 0) as PackageNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassType) {
	 		listener.enterClassType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassType) {
	 		listener.exitClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassType) {
			return visitor.visitClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_interfaceType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInterfaceType) {
	 		listener.enterInterfaceType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInterfaceType) {
	 		listener.exitInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType) {
			return visitor.visitInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeVariableContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeVariable;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeVariable) {
	 		listener.enterTypeVariable(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeVariable) {
	 		listener.exitTypeVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeVariable) {
			return visitor.visitTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
	public typeVariable(): TypeVariableContext {
		return this.getTypedRuleContext(TypeVariableContext, 0) as TypeVariableContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_arrayType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterArrayType) {
	 		listener.enterArrayType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitArrayType) {
	 		listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(Java20Parser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(Java20Parser.RBRACK, i);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_dims;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterDims) {
	 		listener.enterDims(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitDims) {
	 		listener.exitDims(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitDims) {
			return visitor.visitDims(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public typeParameterModifier_list(): TypeParameterModifierContext[] {
		return this.getTypedRuleContexts(TypeParameterModifierContext) as TypeParameterModifierContext[];
	}
	public typeParameterModifier(i: number): TypeParameterModifierContext {
		return this.getTypedRuleContext(TypeParameterModifierContext, i) as TypeParameterModifierContext;
	}
	public typeBound(): TypeBoundContext {
		return this.getTypedRuleContext(TypeBoundContext, 0) as TypeBoundContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeParameter;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeParameter) {
	 		listener.enterTypeParameter(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeParameter) {
	 		listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeParameterModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeParameterModifier) {
	 		listener.enterTypeParameterModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeParameterModifier) {
	 		listener.exitTypeParameterModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterModifier) {
			return visitor.visitTypeParameterModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(Java20Parser.EXTENDS, 0);
	}
	public typeVariable(): TypeVariableContext {
		return this.getTypedRuleContext(TypeVariableContext, 0) as TypeVariableContext;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public additionalBound_list(): AdditionalBoundContext[] {
		return this.getTypedRuleContexts(AdditionalBoundContext) as AdditionalBoundContext[];
	}
	public additionalBound(i: number): AdditionalBoundContext {
		return this.getTypedRuleContext(AdditionalBoundContext, i) as AdditionalBoundContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeBound;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeBound) {
	 		listener.enterTypeBound(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeBound) {
	 		listener.exitTypeBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionalBoundContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BITAND(): TerminalNode {
		return this.getToken(Java20Parser.BITAND, 0);
	}
	public interfaceType(): InterfaceTypeContext {
		return this.getTypedRuleContext(InterfaceTypeContext, 0) as InterfaceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_additionalBound;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAdditionalBound) {
	 		listener.enterAdditionalBound(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAdditionalBound) {
	 		listener.exitAdditionalBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAdditionalBound) {
			return visitor.visitAdditionalBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(Java20Parser.LT, 0);
	}
	public typeArgumentList(): TypeArgumentListContext {
		return this.getTypedRuleContext(TypeArgumentListContext, 0) as TypeArgumentListContext;
	}
	public GT(): TerminalNode {
		return this.getToken(Java20Parser.GT, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeArguments;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeArguments) {
	 		listener.enterTypeArguments(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeArguments) {
	 		listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeArgument_list(): TypeArgumentContext[] {
		return this.getTypedRuleContexts(TypeArgumentContext) as TypeArgumentContext[];
	}
	public typeArgument(i: number): TypeArgumentContext {
		return this.getTypedRuleContext(TypeArgumentContext, i) as TypeArgumentContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeArgumentList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeArgumentList) {
	 		listener.enterTypeArgumentList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeArgumentList) {
	 		listener.exitTypeArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentList) {
			return visitor.visitTypeArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public wildcard(): WildcardContext {
		return this.getTypedRuleContext(WildcardContext, 0) as WildcardContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeArgument;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeArgument) {
	 		listener.enterTypeArgument(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeArgument) {
	 		listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public QUESTION(): TerminalNode {
		return this.getToken(Java20Parser.QUESTION, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public wildcardBounds(): WildcardBoundsContext {
		return this.getTypedRuleContext(WildcardBoundsContext, 0) as WildcardBoundsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_wildcard;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterWildcard) {
	 		listener.enterWildcard(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitWildcard) {
	 		listener.exitWildcard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitWildcard) {
			return visitor.visitWildcard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardBoundsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(Java20Parser.EXTENDS, 0);
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java20Parser.SUPER, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_wildcardBounds;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterWildcardBounds) {
	 		listener.enterWildcardBounds(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitWildcardBounds) {
	 		listener.exitWildcardBounds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitWildcardBounds) {
			return visitor.visitWildcardBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleNameContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public moduleName(): ModuleNameContext {
		return this.getTypedRuleContext(ModuleNameContext, 0) as ModuleNameContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_moduleName;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterModuleName) {
	 		listener.enterModuleName(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitModuleName) {
	 		listener.exitModuleName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitModuleName) {
			return visitor.visitModuleName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageNameContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public packageName(): PackageNameContext {
		return this.getTypedRuleContext(PackageNameContext, 0) as PackageNameContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_packageName;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPackageName) {
	 		listener.enterPackageName(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPackageName) {
	 		listener.exitPackageName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPackageName) {
			return visitor.visitPackageName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public packageName(): PackageNameContext {
		return this.getTypedRuleContext(PackageNameContext, 0) as PackageNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeName;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeName) {
	 		listener.enterTypeName(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeName) {
	 		listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageOrTypeNameContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public packageOrTypeName(): PackageOrTypeNameContext {
		return this.getTypedRuleContext(PackageOrTypeNameContext, 0) as PackageOrTypeNameContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_packageOrTypeName;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPackageOrTypeName) {
	 		listener.enterPackageOrTypeName(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPackageOrTypeName) {
	 		listener.exitPackageOrTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPackageOrTypeName) {
			return visitor.visitPackageOrTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionNameContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ambiguousName(): AmbiguousNameContext {
		return this.getTypedRuleContext(AmbiguousNameContext, 0) as AmbiguousNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_expressionName;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterExpressionName) {
	 		listener.enterExpressionName(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitExpressionName) {
	 		listener.exitExpressionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExpressionName) {
			return visitor.visitExpressionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodNameContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unqualifiedMethodIdentifier(): UnqualifiedMethodIdentifierContext {
		return this.getTypedRuleContext(UnqualifiedMethodIdentifierContext, 0) as UnqualifiedMethodIdentifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_methodName;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterMethodName) {
	 		listener.enterMethodName(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitMethodName) {
	 		listener.exitMethodName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodName) {
			return visitor.visitMethodName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousNameContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public ambiguousName(): AmbiguousNameContext {
		return this.getTypedRuleContext(AmbiguousNameContext, 0) as AmbiguousNameContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_ambiguousName;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAmbiguousName) {
	 		listener.enterAmbiguousName(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAmbiguousName) {
	 		listener.exitAmbiguousName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAmbiguousName) {
			return visitor.visitAmbiguousName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ordinaryCompilationUnit(): OrdinaryCompilationUnitContext {
		return this.getTypedRuleContext(OrdinaryCompilationUnitContext, 0) as OrdinaryCompilationUnitContext;
	}
	public modularCompilationUnit(): ModularCompilationUnitContext {
		return this.getTypedRuleContext(ModularCompilationUnitContext, 0) as ModularCompilationUnitContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_compilationUnit;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterCompilationUnit) {
	 		listener.enterCompilationUnit(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitCompilationUnit) {
	 		listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrdinaryCompilationUnitContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public packageDeclaration(): PackageDeclarationContext {
		return this.getTypedRuleContext(PackageDeclarationContext, 0) as PackageDeclarationContext;
	}
	public importDeclaration_list(): ImportDeclarationContext[] {
		return this.getTypedRuleContexts(ImportDeclarationContext) as ImportDeclarationContext[];
	}
	public importDeclaration(i: number): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, i) as ImportDeclarationContext;
	}
	public topLevelClassOrInterfaceDeclaration_list(): TopLevelClassOrInterfaceDeclarationContext[] {
		return this.getTypedRuleContexts(TopLevelClassOrInterfaceDeclarationContext) as TopLevelClassOrInterfaceDeclarationContext[];
	}
	public topLevelClassOrInterfaceDeclaration(i: number): TopLevelClassOrInterfaceDeclarationContext {
		return this.getTypedRuleContext(TopLevelClassOrInterfaceDeclarationContext, i) as TopLevelClassOrInterfaceDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_ordinaryCompilationUnit;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterOrdinaryCompilationUnit) {
	 		listener.enterOrdinaryCompilationUnit(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitOrdinaryCompilationUnit) {
	 		listener.exitOrdinaryCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitOrdinaryCompilationUnit) {
			return visitor.visitOrdinaryCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModularCompilationUnitContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public moduleDeclaration(): ModuleDeclarationContext {
		return this.getTypedRuleContext(ModuleDeclarationContext, 0) as ModuleDeclarationContext;
	}
	public importDeclaration_list(): ImportDeclarationContext[] {
		return this.getTypedRuleContexts(ImportDeclarationContext) as ImportDeclarationContext[];
	}
	public importDeclaration(i: number): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, i) as ImportDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_modularCompilationUnit;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterModularCompilationUnit) {
	 		listener.enterModularCompilationUnit(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitModularCompilationUnit) {
	 		listener.exitModularCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitModularCompilationUnit) {
			return visitor.visitModularCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(Java20Parser.PACKAGE, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public packageModifier_list(): PackageModifierContext[] {
		return this.getTypedRuleContexts(PackageModifierContext) as PackageModifierContext[];
	}
	public packageModifier(i: number): PackageModifierContext {
		return this.getTypedRuleContext(PackageModifierContext, i) as PackageModifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java20Parser.DOT, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_packageDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPackageDeclaration) {
	 		listener.enterPackageDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPackageDeclaration) {
	 		listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_packageModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPackageModifier) {
	 		listener.enterPackageModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPackageModifier) {
	 		listener.exitPackageModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPackageModifier) {
			return visitor.visitPackageModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext {
		return this.getTypedRuleContext(SingleTypeImportDeclarationContext, 0) as SingleTypeImportDeclarationContext;
	}
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext {
		return this.getTypedRuleContext(TypeImportOnDemandDeclarationContext, 0) as TypeImportOnDemandDeclarationContext;
	}
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext {
		return this.getTypedRuleContext(SingleStaticImportDeclarationContext, 0) as SingleStaticImportDeclarationContext;
	}
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext {
		return this.getTypedRuleContext(StaticImportOnDemandDeclarationContext, 0) as StaticImportOnDemandDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_importDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterImportDeclaration) {
	 		listener.enterImportDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitImportDeclaration) {
	 		listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleTypeImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Java20Parser.IMPORT, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_singleTypeImportDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSingleTypeImportDeclaration) {
	 		listener.enterSingleTypeImportDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSingleTypeImportDeclaration) {
	 		listener.exitSingleTypeImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSingleTypeImportDeclaration) {
			return visitor.visitSingleTypeImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeImportOnDemandDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Java20Parser.IMPORT, 0);
	}
	public packageOrTypeName(): PackageOrTypeNameContext {
		return this.getTypedRuleContext(PackageOrTypeNameContext, 0) as PackageOrTypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public MUL(): TerminalNode {
		return this.getToken(Java20Parser.MUL, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeImportOnDemandDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeImportOnDemandDeclaration) {
	 		listener.enterTypeImportOnDemandDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeImportOnDemandDeclaration) {
	 		listener.exitTypeImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeImportOnDemandDeclaration) {
			return visitor.visitTypeImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStaticImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Java20Parser.IMPORT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java20Parser.STATIC, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_singleStaticImportDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSingleStaticImportDeclaration) {
	 		listener.enterSingleStaticImportDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSingleStaticImportDeclaration) {
	 		listener.exitSingleStaticImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSingleStaticImportDeclaration) {
			return visitor.visitSingleStaticImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticImportOnDemandDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Java20Parser.IMPORT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java20Parser.STATIC, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public MUL(): TerminalNode {
		return this.getToken(Java20Parser.MUL, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_staticImportOnDemandDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterStaticImportOnDemandDeclaration) {
	 		listener.enterStaticImportOnDemandDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitStaticImportOnDemandDeclaration) {
	 		listener.exitStaticImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStaticImportOnDemandDeclaration) {
			return visitor.visitStaticImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelClassOrInterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_topLevelClassOrInterfaceDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTopLevelClassOrInterfaceDeclaration) {
	 		listener.enterTopLevelClassOrInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTopLevelClassOrInterfaceDeclaration) {
	 		listener.exitTopLevelClassOrInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTopLevelClassOrInterfaceDeclaration) {
			return visitor.visitTopLevelClassOrInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MODULE(): TerminalNode {
		return this.getToken(Java20Parser.MODULE, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public OPEN(): TerminalNode {
		return this.getToken(Java20Parser.OPEN, 0);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java20Parser.DOT, i);
	}
	public moduleDirective_list(): ModuleDirectiveContext[] {
		return this.getTypedRuleContexts(ModuleDirectiveContext) as ModuleDirectiveContext[];
	}
	public moduleDirective(i: number): ModuleDirectiveContext {
		return this.getTypedRuleContext(ModuleDirectiveContext, i) as ModuleDirectiveContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_moduleDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterModuleDeclaration) {
	 		listener.enterModuleDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitModuleDeclaration) {
	 		listener.exitModuleDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitModuleDeclaration) {
			return visitor.visitModuleDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDirectiveContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REQUIRES(): TerminalNode {
		return this.getToken(Java20Parser.REQUIRES, 0);
	}
	public moduleName_list(): ModuleNameContext[] {
		return this.getTypedRuleContexts(ModuleNameContext) as ModuleNameContext[];
	}
	public moduleName(i: number): ModuleNameContext {
		return this.getTypedRuleContext(ModuleNameContext, i) as ModuleNameContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public requiresModifier_list(): RequiresModifierContext[] {
		return this.getTypedRuleContexts(RequiresModifierContext) as RequiresModifierContext[];
	}
	public requiresModifier(i: number): RequiresModifierContext {
		return this.getTypedRuleContext(RequiresModifierContext, i) as RequiresModifierContext;
	}
	public EXPORTS(): TerminalNode {
		return this.getToken(Java20Parser.EXPORTS, 0);
	}
	public packageName(): PackageNameContext {
		return this.getTypedRuleContext(PackageNameContext, 0) as PackageNameContext;
	}
	public TO(): TerminalNode {
		return this.getToken(Java20Parser.TO, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
	public OPENS(): TerminalNode {
		return this.getToken(Java20Parser.OPENS, 0);
	}
	public USES(): TerminalNode {
		return this.getToken(Java20Parser.USES, 0);
	}
	public typeName_list(): TypeNameContext[] {
		return this.getTypedRuleContexts(TypeNameContext) as TypeNameContext[];
	}
	public typeName(i: number): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, i) as TypeNameContext;
	}
	public PROVIDES(): TerminalNode {
		return this.getToken(Java20Parser.PROVIDES, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(Java20Parser.WITH, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_moduleDirective;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterModuleDirective) {
	 		listener.enterModuleDirective(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitModuleDirective) {
	 		listener.exitModuleDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitModuleDirective) {
			return visitor.visitModuleDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequiresModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRANSITIVE(): TerminalNode {
		return this.getToken(Java20Parser.TRANSITIVE, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java20Parser.STATIC, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_requiresModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterRequiresModifier) {
	 		listener.enterRequiresModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitRequiresModifier) {
	 		listener.exitRequiresModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRequiresModifier) {
			return visitor.visitRequiresModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public normalClassDeclaration(): NormalClassDeclarationContext {
		return this.getTypedRuleContext(NormalClassDeclarationContext, 0) as NormalClassDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
	public recordDeclaration(): RecordDeclarationContext {
		return this.getTypedRuleContext(RecordDeclarationContext, 0) as RecordDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassDeclaration) {
	 		listener.enterClassDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassDeclaration) {
	 		listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLASS(): TerminalNode {
		return this.getToken(Java20Parser.CLASS, 0);
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
	public classModifier_list(): ClassModifierContext[] {
		return this.getTypedRuleContexts(ClassModifierContext) as ClassModifierContext[];
	}
	public classModifier(i: number): ClassModifierContext {
		return this.getTypedRuleContext(ClassModifierContext, i) as ClassModifierContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public classExtends(): ClassExtendsContext {
		return this.getTypedRuleContext(ClassExtendsContext, 0) as ClassExtendsContext;
	}
	public classImplements(): ClassImplementsContext {
		return this.getTypedRuleContext(ClassImplementsContext, 0) as ClassImplementsContext;
	}
	public classPermits(): ClassPermitsContext {
		return this.getTypedRuleContext(ClassPermitsContext, 0) as ClassPermitsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_normalClassDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterNormalClassDeclaration) {
	 		listener.enterNormalClassDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitNormalClassDeclaration) {
	 		listener.exitNormalClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitNormalClassDeclaration) {
			return visitor.visitNormalClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java20Parser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(Java20Parser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java20Parser.PRIVATE, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(Java20Parser.ABSTRACT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java20Parser.STATIC, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(Java20Parser.FINAL, 0);
	}
	public SEALED(): TerminalNode {
		return this.getToken(Java20Parser.SEALED, 0);
	}
	public NONSEALED(): TerminalNode {
		return this.getToken(Java20Parser.NONSEALED, 0);
	}
	public STRICTFP(): TerminalNode {
		return this.getToken(Java20Parser.STRICTFP, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassModifier) {
	 		listener.enterClassModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassModifier) {
	 		listener.exitClassModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassModifier) {
			return visitor.visitClassModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(Java20Parser.LT, 0);
	}
	public typeParameterList(): TypeParameterListContext {
		return this.getTypedRuleContext(TypeParameterListContext, 0) as TypeParameterListContext;
	}
	public GT(): TerminalNode {
		return this.getToken(Java20Parser.GT, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeParameters;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeParameters) {
	 		listener.enterTypeParameters(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeParameters) {
	 		listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeParameter_list(): TypeParameterContext[] {
		return this.getTypedRuleContexts(TypeParameterContext) as TypeParameterContext[];
	}
	public typeParameter(i: number): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, i) as TypeParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeParameterList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeParameterList) {
	 		listener.enterTypeParameterList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeParameterList) {
	 		listener.exitTypeParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterList) {
			return visitor.visitTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassExtendsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(Java20Parser.EXTENDS, 0);
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classExtends;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassExtends) {
	 		listener.enterClassExtends(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassExtends) {
	 		listener.exitClassExtends(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassExtends) {
			return visitor.visitClassExtends(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassImplementsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPLEMENTS(): TerminalNode {
		return this.getToken(Java20Parser.IMPLEMENTS, 0);
	}
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getTypedRuleContext(InterfaceTypeListContext, 0) as InterfaceTypeListContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classImplements;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassImplements) {
	 		listener.enterClassImplements(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassImplements) {
	 		listener.exitClassImplements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassImplements) {
			return visitor.visitClassImplements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public interfaceType_list(): InterfaceTypeContext[] {
		return this.getTypedRuleContexts(InterfaceTypeContext) as InterfaceTypeContext[];
	}
	public interfaceType(i: number): InterfaceTypeContext {
		return this.getTypedRuleContext(InterfaceTypeContext, i) as InterfaceTypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_interfaceTypeList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInterfaceTypeList) {
	 		listener.enterInterfaceTypeList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInterfaceTypeList) {
	 		listener.exitInterfaceTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceTypeList) {
			return visitor.visitInterfaceTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassPermitsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PERMITS(): TerminalNode {
		return this.getToken(Java20Parser.PERMITS, 0);
	}
	public typeName_list(): TypeNameContext[] {
		return this.getTypedRuleContexts(TypeNameContext) as TypeNameContext[];
	}
	public typeName(i: number): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, i) as TypeNameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classPermits;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassPermits) {
	 		listener.enterClassPermits(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassPermits) {
	 		listener.exitClassPermits(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassPermits) {
			return visitor.visitClassPermits(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public classBodyDeclaration_list(): ClassBodyDeclarationContext[] {
		return this.getTypedRuleContexts(ClassBodyDeclarationContext) as ClassBodyDeclarationContext[];
	}
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, i) as ClassBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classBody;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassBody) {
	 		listener.enterClassBody(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassBody) {
	 		listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		return this.getTypedRuleContext(ClassMemberDeclarationContext, 0) as ClassMemberDeclarationContext;
	}
	public instanceInitializer(): InstanceInitializerContext {
		return this.getTypedRuleContext(InstanceInitializerContext, 0) as InstanceInitializerContext;
	}
	public staticInitializer(): StaticInitializerContext {
		return this.getTypedRuleContext(StaticInitializerContext, 0) as StaticInitializerContext;
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getTypedRuleContext(ConstructorDeclarationContext, 0) as ConstructorDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classBodyDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassBodyDeclaration) {
	 		listener.enterClassBodyDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassBodyDeclaration) {
	 		listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassMemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fieldDeclaration(): FieldDeclarationContext {
		return this.getTypedRuleContext(FieldDeclarationContext, 0) as FieldDeclarationContext;
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getTypedRuleContext(MethodDeclarationContext, 0) as MethodDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classMemberDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassMemberDeclaration) {
	 		listener.enterClassMemberDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassMemberDeclaration) {
	 		listener.exitClassMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassMemberDeclaration) {
			return visitor.visitClassMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getTypedRuleContext(VariableDeclaratorListContext, 0) as VariableDeclaratorListContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public fieldModifier_list(): FieldModifierContext[] {
		return this.getTypedRuleContexts(FieldModifierContext) as FieldModifierContext[];
	}
	public fieldModifier(i: number): FieldModifierContext {
		return this.getTypedRuleContext(FieldModifierContext, i) as FieldModifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_fieldDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterFieldDeclaration) {
	 		listener.enterFieldDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitFieldDeclaration) {
	 		listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java20Parser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(Java20Parser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java20Parser.PRIVATE, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java20Parser.STATIC, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(Java20Parser.FINAL, 0);
	}
	public TRANSIENT(): TerminalNode {
		return this.getToken(Java20Parser.TRANSIENT, 0);
	}
	public VOLATILE(): TerminalNode {
		return this.getToken(Java20Parser.VOLATILE, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_fieldModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterFieldModifier) {
	 		listener.enterFieldModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitFieldModifier) {
	 		listener.exitFieldModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFieldModifier) {
			return visitor.visitFieldModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclarator_list(): VariableDeclaratorContext[] {
		return this.getTypedRuleContexts(VariableDeclaratorContext) as VariableDeclaratorContext[];
	}
	public variableDeclarator(i: number): VariableDeclaratorContext {
		return this.getTypedRuleContext(VariableDeclaratorContext, i) as VariableDeclaratorContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_variableDeclaratorList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterVariableDeclaratorList) {
	 		listener.enterVariableDeclaratorList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitVariableDeclaratorList) {
	 		listener.exitVariableDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorList) {
			return visitor.visitVariableDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.ASSIGN, 0);
	}
	public variableInitializer(): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, 0) as VariableInitializerContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_variableDeclarator;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterVariableDeclarator) {
	 		listener.enterVariableDeclarator(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitVariableDeclarator) {
	 		listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_variableDeclaratorId;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterVariableDeclaratorId) {
	 		listener.enterVariableDeclaratorId(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitVariableDeclaratorId) {
	 		listener.exitVariableDeclaratorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public arrayInitializer(): ArrayInitializerContext {
		return this.getTypedRuleContext(ArrayInitializerContext, 0) as ArrayInitializerContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_variableInitializer;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterVariableInitializer) {
	 		listener.enterVariableInitializer(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitVariableInitializer) {
	 		listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		return this.getTypedRuleContext(UnannPrimitiveTypeContext, 0) as UnannPrimitiveTypeContext;
	}
	public unannReferenceType(): UnannReferenceTypeContext {
		return this.getTypedRuleContext(UnannReferenceTypeContext, 0) as UnannReferenceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unannType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnannType) {
	 		listener.enterUnannType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnannType) {
	 		listener.exitUnannType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannType) {
			return visitor.visitUnannType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannPrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numericType(): NumericTypeContext {
		return this.getTypedRuleContext(NumericTypeContext, 0) as NumericTypeContext;
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(Java20Parser.BOOLEAN, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unannPrimitiveType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnannPrimitiveType) {
	 		listener.enterUnannPrimitiveType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnannPrimitiveType) {
	 		listener.exitUnannPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannPrimitiveType) {
			return visitor.visitUnannPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannReferenceTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannClassOrInterfaceTypeContext, 0) as UnannClassOrInterfaceTypeContext;
	}
	public unannTypeVariable(): UnannTypeVariableContext {
		return this.getTypedRuleContext(UnannTypeVariableContext, 0) as UnannTypeVariableContext;
	}
	public unannArrayType(): UnannArrayTypeContext {
		return this.getTypedRuleContext(UnannArrayTypeContext, 0) as UnannArrayTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unannReferenceType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnannReferenceType) {
	 		listener.enterUnannReferenceType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnannReferenceType) {
	 		listener.exitUnannReferenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannReferenceType) {
			return visitor.visitUnannReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public packageName(): PackageNameContext {
		return this.getTypedRuleContext(PackageNameContext, 0) as PackageNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public uCOIT(): UCOITContext {
		return this.getTypedRuleContext(UCOITContext, 0) as UCOITContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unannClassOrInterfaceType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnannClassOrInterfaceType) {
	 		listener.enterUnannClassOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnannClassOrInterfaceType) {
	 		listener.exitUnannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassOrInterfaceType) {
			return visitor.visitUnannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UCOITContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public uCOIT(): UCOITContext {
		return this.getTypedRuleContext(UCOITContext, 0) as UCOITContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_uCOIT;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUCOIT) {
	 		listener.enterUCOIT(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUCOIT) {
	 		listener.exitUCOIT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUCOIT) {
			return visitor.visitUCOIT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public packageName(): PackageNameContext {
		return this.getTypedRuleContext(PackageNameContext, 0) as PackageNameContext;
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannClassOrInterfaceTypeContext, 0) as UnannClassOrInterfaceTypeContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unannClassType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnannClassType) {
	 		listener.enterUnannClassType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnannClassType) {
	 		listener.exitUnannClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType) {
			return visitor.visitUnannClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannClassType(): UnannClassTypeContext {
		return this.getTypedRuleContext(UnannClassTypeContext, 0) as UnannClassTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unannInterfaceType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnannInterfaceType) {
	 		listener.enterUnannInterfaceType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnannInterfaceType) {
	 		listener.exitUnannInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType) {
			return visitor.visitUnannInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeVariableContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unannTypeVariable;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnannTypeVariable) {
	 		listener.enterUnannTypeVariable(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnannTypeVariable) {
	 		listener.exitUnannTypeVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannTypeVariable) {
			return visitor.visitUnannTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannArrayTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		return this.getTypedRuleContext(UnannPrimitiveTypeContext, 0) as UnannPrimitiveTypeContext;
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannClassOrInterfaceTypeContext, 0) as UnannClassOrInterfaceTypeContext;
	}
	public unannTypeVariable(): UnannTypeVariableContext {
		return this.getTypedRuleContext(UnannTypeVariableContext, 0) as UnannTypeVariableContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unannArrayType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnannArrayType) {
	 		listener.enterUnannArrayType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnannArrayType) {
	 		listener.exitUnannArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnannArrayType) {
			return visitor.visitUnannArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public methodHeader(): MethodHeaderContext {
		return this.getTypedRuleContext(MethodHeaderContext, 0) as MethodHeaderContext;
	}
	public methodBody(): MethodBodyContext {
		return this.getTypedRuleContext(MethodBodyContext, 0) as MethodBodyContext;
	}
	public methodModifier_list(): MethodModifierContext[] {
		return this.getTypedRuleContexts(MethodModifierContext) as MethodModifierContext[];
	}
	public methodModifier(i: number): MethodModifierContext {
		return this.getTypedRuleContext(MethodModifierContext, i) as MethodModifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_methodDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterMethodDeclaration) {
	 		listener.enterMethodDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitMethodDeclaration) {
	 		listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java20Parser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(Java20Parser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java20Parser.PRIVATE, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(Java20Parser.ABSTRACT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java20Parser.STATIC, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(Java20Parser.FINAL, 0);
	}
	public SYNCHRONIZED(): TerminalNode {
		return this.getToken(Java20Parser.SYNCHRONIZED, 0);
	}
	public NATIVE(): TerminalNode {
		return this.getToken(Java20Parser.NATIVE, 0);
	}
	public STRICTFP(): TerminalNode {
		return this.getToken(Java20Parser.STRICTFP, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_methodModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterMethodModifier) {
	 		listener.enterMethodModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitMethodModifier) {
	 		listener.exitMethodModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodModifier) {
			return visitor.visitMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodHeaderContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public result(): ResultContext {
		return this.getTypedRuleContext(ResultContext, 0) as ResultContext;
	}
	public methodDeclarator(): MethodDeclaratorContext {
		return this.getTypedRuleContext(MethodDeclaratorContext, 0) as MethodDeclaratorContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public throwsT(): ThrowsTContext {
		return this.getTypedRuleContext(ThrowsTContext, 0) as ThrowsTContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_methodHeader;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterMethodHeader) {
	 		listener.enterMethodHeader(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitMethodHeader) {
	 		listener.exitMethodHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodHeader) {
			return visitor.visitMethodHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public VOID(): TerminalNode {
		return this.getToken(Java20Parser.VOID, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_result;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterResult) {
	 		listener.enterResult(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitResult) {
	 		listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclaratorContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public receiverParameter(): ReceiverParameterContext {
		return this.getTypedRuleContext(ReceiverParameterContext, 0) as ReceiverParameterContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Java20Parser.COMMA, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_methodDeclarator;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterMethodDeclarator) {
	 		listener.enterMethodDeclarator(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitMethodDeclarator) {
	 		listener.exitMethodDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclarator) {
			return visitor.visitMethodDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiverParameterContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public THIS(): TerminalNode {
		return this.getToken(Java20Parser.THIS, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_receiverParameter;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterReceiverParameter) {
	 		listener.enterReceiverParameter(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitReceiverParameter) {
	 		listener.exitReceiverParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitReceiverParameter) {
			return visitor.visitReceiverParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public formalParameter_list(): FormalParameterContext[] {
		return this.getTypedRuleContexts(FormalParameterContext) as FormalParameterContext[];
	}
	public formalParameter(i: number): FormalParameterContext {
		return this.getTypedRuleContext(FormalParameterContext, i) as FormalParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_formalParameterList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterFormalParameterList) {
	 		listener.enterFormalParameterList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitFormalParameterList) {
	 		listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
	public variableArityParameter(): VariableArityParameterContext {
		return this.getTypedRuleContext(VariableArityParameterContext, 0) as VariableArityParameterContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_formalParameter;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterFormalParameter) {
	 		listener.enterFormalParameter(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitFormalParameter) {
	 		listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableArityParameterContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(Java20Parser.ELLIPSIS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_variableArityParameter;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterVariableArityParameter) {
	 		listener.enterVariableArityParameter(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitVariableArityParameter) {
	 		listener.exitVariableArityParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableArityParameter) {
			return visitor.visitVariableArityParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public FINAL(): TerminalNode {
		return this.getToken(Java20Parser.FINAL, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_variableModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterVariableModifier) {
	 		listener.enterVariableModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitVariableModifier) {
	 		listener.exitVariableModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowsTContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THROWS(): TerminalNode {
		return this.getToken(Java20Parser.THROWS, 0);
	}
	public exceptionTypeList(): ExceptionTypeListContext {
		return this.getTypedRuleContext(ExceptionTypeListContext, 0) as ExceptionTypeListContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_throwsT;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterThrowsT) {
	 		listener.enterThrowsT(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitThrowsT) {
	 		listener.exitThrowsT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitThrowsT) {
			return visitor.visitThrowsT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exceptionType_list(): ExceptionTypeContext[] {
		return this.getTypedRuleContexts(ExceptionTypeContext) as ExceptionTypeContext[];
	}
	public exceptionType(i: number): ExceptionTypeContext {
		return this.getTypedRuleContext(ExceptionTypeContext, i) as ExceptionTypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_exceptionTypeList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterExceptionTypeList) {
	 		listener.enterExceptionTypeList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitExceptionTypeList) {
	 		listener.exitExceptionTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExceptionTypeList) {
			return visitor.visitExceptionTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
	public typeVariable(): TypeVariableContext {
		return this.getTypedRuleContext(TypeVariableContext, 0) as TypeVariableContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_exceptionType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterExceptionType) {
	 		listener.enterExceptionType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitExceptionType) {
	 		listener.exitExceptionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExceptionType) {
			return visitor.visitExceptionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_methodBody;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterMethodBody) {
	 		listener.enterMethodBody(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitMethodBody) {
	 		listener.exitMethodBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceInitializerContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_instanceInitializer;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInstanceInitializer) {
	 		listener.enterInstanceInitializer(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInstanceInitializer) {
	 		listener.exitInstanceInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInstanceInitializer) {
			return visitor.visitInstanceInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticInitializerContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java20Parser.STATIC, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_staticInitializer;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterStaticInitializer) {
	 		listener.enterStaticInitializer(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitStaticInitializer) {
	 		listener.exitStaticInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStaticInitializer) {
			return visitor.visitStaticInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constructorDeclarator(): ConstructorDeclaratorContext {
		return this.getTypedRuleContext(ConstructorDeclaratorContext, 0) as ConstructorDeclaratorContext;
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getTypedRuleContext(ConstructorBodyContext, 0) as ConstructorBodyContext;
	}
	public constructorModifier_list(): ConstructorModifierContext[] {
		return this.getTypedRuleContexts(ConstructorModifierContext) as ConstructorModifierContext[];
	}
	public constructorModifier(i: number): ConstructorModifierContext {
		return this.getTypedRuleContext(ConstructorModifierContext, i) as ConstructorModifierContext;
	}
	public throwsT(): ThrowsTContext {
		return this.getTypedRuleContext(ThrowsTContext, 0) as ThrowsTContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_constructorDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterConstructorDeclaration) {
	 		listener.enterConstructorDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitConstructorDeclaration) {
	 		listener.exitConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java20Parser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(Java20Parser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java20Parser.PRIVATE, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_constructorModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterConstructorModifier) {
	 		listener.enterConstructorModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitConstructorModifier) {
	 		listener.exitConstructorModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstructorModifier) {
			return visitor.visitConstructorModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclaratorContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleTypeName(): SimpleTypeNameContext {
		return this.getTypedRuleContext(SimpleTypeNameContext, 0) as SimpleTypeNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public receiverParameter(): ReceiverParameterContext {
		return this.getTypedRuleContext(ReceiverParameterContext, 0) as ReceiverParameterContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Java20Parser.COMMA, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_constructorDeclarator;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterConstructorDeclarator) {
	 		listener.enterConstructorDeclarator(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitConstructorDeclarator) {
	 		listener.exitConstructorDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclarator) {
			return visitor.visitConstructorDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeNameContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_simpleTypeName;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSimpleTypeName) {
	 		listener.enterSimpleTypeName(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSimpleTypeName) {
	 		listener.exitSimpleTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSimpleTypeName) {
			return visitor.visitSimpleTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorBodyContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		return this.getTypedRuleContext(ExplicitConstructorInvocationContext, 0) as ExplicitConstructorInvocationContext;
	}
	public blockStatements(): BlockStatementsContext {
		return this.getTypedRuleContext(BlockStatementsContext, 0) as BlockStatementsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_constructorBody;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterConstructorBody) {
	 		listener.enterConstructorBody(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitConstructorBody) {
	 		listener.exitConstructorBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstructorBody) {
			return visitor.visitConstructorBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitConstructorInvocationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(Java20Parser.THIS, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java20Parser.SUPER, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_explicitConstructorInvocation;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterExplicitConstructorInvocation) {
	 		listener.enterExplicitConstructorInvocation(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitExplicitConstructorInvocation) {
	 		listener.exitExplicitConstructorInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExplicitConstructorInvocation) {
			return visitor.visitExplicitConstructorInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(Java20Parser.ENUM, 0);
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public enumBody(): EnumBodyContext {
		return this.getTypedRuleContext(EnumBodyContext, 0) as EnumBodyContext;
	}
	public classModifier_list(): ClassModifierContext[] {
		return this.getTypedRuleContexts(ClassModifierContext) as ClassModifierContext[];
	}
	public classModifier(i: number): ClassModifierContext {
		return this.getTypedRuleContext(ClassModifierContext, i) as ClassModifierContext;
	}
	public classImplements(): ClassImplementsContext {
		return this.getTypedRuleContext(ClassImplementsContext, 0) as ClassImplementsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_enumDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterEnumDeclaration) {
	 		listener.enterEnumDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitEnumDeclaration) {
	 		listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public enumConstantList(): EnumConstantListContext {
		return this.getTypedRuleContext(EnumConstantListContext, 0) as EnumConstantListContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Java20Parser.COMMA, 0);
	}
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		return this.getTypedRuleContext(EnumBodyDeclarationsContext, 0) as EnumBodyDeclarationsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_enumBody;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterEnumBody) {
	 		listener.enterEnumBody(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitEnumBody) {
	 		listener.exitEnumBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumConstant_list(): EnumConstantContext[] {
		return this.getTypedRuleContexts(EnumConstantContext) as EnumConstantContext[];
	}
	public enumConstant(i: number): EnumConstantContext {
		return this.getTypedRuleContext(EnumConstantContext, i) as EnumConstantContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_enumConstantList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterEnumConstantList) {
	 		listener.enterEnumConstantList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitEnumConstantList) {
	 		listener.exitEnumConstantList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantList) {
			return visitor.visitEnumConstantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enumConstantModifier_list(): EnumConstantModifierContext[] {
		return this.getTypedRuleContexts(EnumConstantModifierContext) as EnumConstantModifierContext[];
	}
	public enumConstantModifier(i: number): EnumConstantModifierContext {
		return this.getTypedRuleContext(EnumConstantModifierContext, i) as EnumConstantModifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_enumConstant;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterEnumConstant) {
	 		listener.enterEnumConstant(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitEnumConstant) {
	 		listener.exitEnumConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_enumConstantModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterEnumConstantModifier) {
	 		listener.enterEnumConstantModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitEnumConstantModifier) {
	 		listener.exitEnumConstantModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantModifier) {
			return visitor.visitEnumConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public classBodyDeclaration_list(): ClassBodyDeclarationContext[] {
		return this.getTypedRuleContexts(ClassBodyDeclarationContext) as ClassBodyDeclarationContext[];
	}
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, i) as ClassBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_enumBodyDeclarations;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterEnumBodyDeclarations) {
	 		listener.enterEnumBodyDeclarations(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitEnumBodyDeclarations) {
	 		listener.exitEnumBodyDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RECORD(): TerminalNode {
		return this.getToken(Java20Parser.RECORD, 0);
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public recordHeader(): RecordHeaderContext {
		return this.getTypedRuleContext(RecordHeaderContext, 0) as RecordHeaderContext;
	}
	public recordBody(): RecordBodyContext {
		return this.getTypedRuleContext(RecordBodyContext, 0) as RecordBodyContext;
	}
	public classModifier_list(): ClassModifierContext[] {
		return this.getTypedRuleContexts(ClassModifierContext) as ClassModifierContext[];
	}
	public classModifier(i: number): ClassModifierContext {
		return this.getTypedRuleContext(ClassModifierContext, i) as ClassModifierContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public classImplements(): ClassImplementsContext {
		return this.getTypedRuleContext(ClassImplementsContext, 0) as ClassImplementsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_recordDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterRecordDeclaration) {
	 		listener.enterRecordDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitRecordDeclaration) {
	 		listener.exitRecordDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordDeclaration) {
			return visitor.visitRecordDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordHeaderContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public recordComponentList(): RecordComponentListContext {
		return this.getTypedRuleContext(RecordComponentListContext, 0) as RecordComponentListContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_recordHeader;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterRecordHeader) {
	 		listener.enterRecordHeader(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitRecordHeader) {
	 		listener.exitRecordHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordHeader) {
			return visitor.visitRecordHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordComponentListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public recordComponent_list(): RecordComponentContext[] {
		return this.getTypedRuleContexts(RecordComponentContext) as RecordComponentContext[];
	}
	public recordComponent(i: number): RecordComponentContext {
		return this.getTypedRuleContext(RecordComponentContext, i) as RecordComponentContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_recordComponentList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterRecordComponentList) {
	 		listener.enterRecordComponentList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitRecordComponentList) {
	 		listener.exitRecordComponentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordComponentList) {
			return visitor.visitRecordComponentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordComponentContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public recordComponentModifier_list(): RecordComponentModifierContext[] {
		return this.getTypedRuleContexts(RecordComponentModifierContext) as RecordComponentModifierContext[];
	}
	public recordComponentModifier(i: number): RecordComponentModifierContext {
		return this.getTypedRuleContext(RecordComponentModifierContext, i) as RecordComponentModifierContext;
	}
	public variableArityRecordComponent(): VariableArityRecordComponentContext {
		return this.getTypedRuleContext(VariableArityRecordComponentContext, 0) as VariableArityRecordComponentContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_recordComponent;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterRecordComponent) {
	 		listener.enterRecordComponent(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitRecordComponent) {
	 		listener.exitRecordComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordComponent) {
			return visitor.visitRecordComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableArityRecordComponentContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(Java20Parser.ELLIPSIS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public recordComponentModifier_list(): RecordComponentModifierContext[] {
		return this.getTypedRuleContexts(RecordComponentModifierContext) as RecordComponentModifierContext[];
	}
	public recordComponentModifier(i: number): RecordComponentModifierContext {
		return this.getTypedRuleContext(RecordComponentModifierContext, i) as RecordComponentModifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_variableArityRecordComponent;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterVariableArityRecordComponent) {
	 		listener.enterVariableArityRecordComponent(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitVariableArityRecordComponent) {
	 		listener.exitVariableArityRecordComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableArityRecordComponent) {
			return visitor.visitVariableArityRecordComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordComponentModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_recordComponentModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterRecordComponentModifier) {
	 		listener.enterRecordComponentModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitRecordComponentModifier) {
	 		listener.exitRecordComponentModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordComponentModifier) {
			return visitor.visitRecordComponentModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordBodyContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public recordBodyDeclaration_list(): RecordBodyDeclarationContext[] {
		return this.getTypedRuleContexts(RecordBodyDeclarationContext) as RecordBodyDeclarationContext[];
	}
	public recordBodyDeclaration(i: number): RecordBodyDeclarationContext {
		return this.getTypedRuleContext(RecordBodyDeclarationContext, i) as RecordBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_recordBody;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterRecordBody) {
	 		listener.enterRecordBody(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitRecordBody) {
	 		listener.exitRecordBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordBody) {
			return visitor.visitRecordBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordBodyDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, 0) as ClassBodyDeclarationContext;
	}
	public compactConstructorDeclaration(): CompactConstructorDeclarationContext {
		return this.getTypedRuleContext(CompactConstructorDeclarationContext, 0) as CompactConstructorDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_recordBodyDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterRecordBodyDeclaration) {
	 		listener.enterRecordBodyDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitRecordBodyDeclaration) {
	 		listener.exitRecordBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRecordBodyDeclaration) {
			return visitor.visitRecordBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompactConstructorDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleTypeName(): SimpleTypeNameContext {
		return this.getTypedRuleContext(SimpleTypeNameContext, 0) as SimpleTypeNameContext;
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getTypedRuleContext(ConstructorBodyContext, 0) as ConstructorBodyContext;
	}
	public constructorModifier_list(): ConstructorModifierContext[] {
		return this.getTypedRuleContexts(ConstructorModifierContext) as ConstructorModifierContext[];
	}
	public constructorModifier(i: number): ConstructorModifierContext {
		return this.getTypedRuleContext(ConstructorModifierContext, i) as ConstructorModifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_compactConstructorDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterCompactConstructorDeclaration) {
	 		listener.enterCompactConstructorDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitCompactConstructorDeclaration) {
	 		listener.exitCompactConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCompactConstructorDeclaration) {
			return visitor.visitCompactConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		return this.getTypedRuleContext(NormalInterfaceDeclarationContext, 0) as NormalInterfaceDeclarationContext;
	}
	public annotationInterfaceDeclaration(): AnnotationInterfaceDeclarationContext {
		return this.getTypedRuleContext(AnnotationInterfaceDeclarationContext, 0) as AnnotationInterfaceDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_interfaceDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInterfaceDeclaration) {
	 		listener.enterInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInterfaceDeclaration) {
	 		listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalInterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(Java20Parser.INTERFACE, 0);
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getTypedRuleContext(InterfaceBodyContext, 0) as InterfaceBodyContext;
	}
	public interfaceModifier_list(): InterfaceModifierContext[] {
		return this.getTypedRuleContexts(InterfaceModifierContext) as InterfaceModifierContext[];
	}
	public interfaceModifier(i: number): InterfaceModifierContext {
		return this.getTypedRuleContext(InterfaceModifierContext, i) as InterfaceModifierContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public interfaceExtends(): InterfaceExtendsContext {
		return this.getTypedRuleContext(InterfaceExtendsContext, 0) as InterfaceExtendsContext;
	}
	public interfacePermits(): InterfacePermitsContext {
		return this.getTypedRuleContext(InterfacePermitsContext, 0) as InterfacePermitsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_normalInterfaceDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterNormalInterfaceDeclaration) {
	 		listener.enterNormalInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitNormalInterfaceDeclaration) {
	 		listener.exitNormalInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitNormalInterfaceDeclaration) {
			return visitor.visitNormalInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java20Parser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(Java20Parser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java20Parser.PRIVATE, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(Java20Parser.ABSTRACT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java20Parser.STATIC, 0);
	}
	public SEALED(): TerminalNode {
		return this.getToken(Java20Parser.SEALED, 0);
	}
	public NONSEALED(): TerminalNode {
		return this.getToken(Java20Parser.NONSEALED, 0);
	}
	public STRICTFP(): TerminalNode {
		return this.getToken(Java20Parser.STRICTFP, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_interfaceModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInterfaceModifier) {
	 		listener.enterInterfaceModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInterfaceModifier) {
	 		listener.exitInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceModifier) {
			return visitor.visitInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceExtendsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(Java20Parser.EXTENDS, 0);
	}
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getTypedRuleContext(InterfaceTypeListContext, 0) as InterfaceTypeListContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_interfaceExtends;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInterfaceExtends) {
	 		listener.enterInterfaceExtends(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInterfaceExtends) {
	 		listener.exitInterfaceExtends(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceExtends) {
			return visitor.visitInterfaceExtends(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfacePermitsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PERMITS(): TerminalNode {
		return this.getToken(Java20Parser.PERMITS, 0);
	}
	public typeName_list(): TypeNameContext[] {
		return this.getTypedRuleContexts(TypeNameContext) as TypeNameContext[];
	}
	public typeName(i: number): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, i) as TypeNameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_interfacePermits;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInterfacePermits) {
	 		listener.enterInterfacePermits(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInterfacePermits) {
	 		listener.exitInterfacePermits(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfacePermits) {
			return visitor.visitInterfacePermits(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public interfaceMemberDeclaration_list(): InterfaceMemberDeclarationContext[] {
		return this.getTypedRuleContexts(InterfaceMemberDeclarationContext) as InterfaceMemberDeclarationContext[];
	}
	public interfaceMemberDeclaration(i: number): InterfaceMemberDeclarationContext {
		return this.getTypedRuleContext(InterfaceMemberDeclarationContext, i) as InterfaceMemberDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_interfaceBody;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInterfaceBody) {
	 		listener.enterInterfaceBody(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInterfaceBody) {
	 		listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constantDeclaration(): ConstantDeclarationContext {
		return this.getTypedRuleContext(ConstantDeclarationContext, 0) as ConstantDeclarationContext;
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		return this.getTypedRuleContext(InterfaceMethodDeclarationContext, 0) as InterfaceMethodDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_interfaceMemberDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInterfaceMemberDeclaration) {
	 		listener.enterInterfaceMemberDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInterfaceMemberDeclaration) {
	 		listener.exitInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getTypedRuleContext(VariableDeclaratorListContext, 0) as VariableDeclaratorListContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public constantModifier_list(): ConstantModifierContext[] {
		return this.getTypedRuleContexts(ConstantModifierContext) as ConstantModifierContext[];
	}
	public constantModifier(i: number): ConstantModifierContext {
		return this.getTypedRuleContext(ConstantModifierContext, i) as ConstantModifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_constantDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterConstantDeclaration) {
	 		listener.enterConstantDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitConstantDeclaration) {
	 		listener.exitConstantDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclaration) {
			return visitor.visitConstantDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java20Parser.PUBLIC, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java20Parser.STATIC, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(Java20Parser.FINAL, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_constantModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterConstantModifier) {
	 		listener.enterConstantModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitConstantModifier) {
	 		listener.exitConstantModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstantModifier) {
			return visitor.visitConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public methodHeader(): MethodHeaderContext {
		return this.getTypedRuleContext(MethodHeaderContext, 0) as MethodHeaderContext;
	}
	public methodBody(): MethodBodyContext {
		return this.getTypedRuleContext(MethodBodyContext, 0) as MethodBodyContext;
	}
	public interfaceMethodModifier_list(): InterfaceMethodModifierContext[] {
		return this.getTypedRuleContexts(InterfaceMethodModifierContext) as InterfaceMethodModifierContext[];
	}
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext {
		return this.getTypedRuleContext(InterfaceMethodModifierContext, i) as InterfaceMethodModifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_interfaceMethodDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInterfaceMethodDeclaration) {
	 		listener.enterInterfaceMethodDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInterfaceMethodDeclaration) {
	 		listener.exitInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java20Parser.PUBLIC, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java20Parser.PRIVATE, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(Java20Parser.ABSTRACT, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(Java20Parser.DEFAULT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java20Parser.STATIC, 0);
	}
	public STRICTFP(): TerminalNode {
		return this.getToken(Java20Parser.STRICTFP, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_interfaceMethodModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInterfaceMethodModifier) {
	 		listener.enterInterfaceMethodModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInterfaceMethodModifier) {
	 		listener.exitInterfaceMethodModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodModifier) {
			return visitor.visitInterfaceMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationInterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(Java20Parser.AT, 0);
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(Java20Parser.INTERFACE, 0);
	}
	public typeIdentifier(): TypeIdentifierContext {
		return this.getTypedRuleContext(TypeIdentifierContext, 0) as TypeIdentifierContext;
	}
	public annotationInterfaceBody(): AnnotationInterfaceBodyContext {
		return this.getTypedRuleContext(AnnotationInterfaceBodyContext, 0) as AnnotationInterfaceBodyContext;
	}
	public interfaceModifier_list(): InterfaceModifierContext[] {
		return this.getTypedRuleContexts(InterfaceModifierContext) as InterfaceModifierContext[];
	}
	public interfaceModifier(i: number): InterfaceModifierContext {
		return this.getTypedRuleContext(InterfaceModifierContext, i) as InterfaceModifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_annotationInterfaceDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAnnotationInterfaceDeclaration) {
	 		listener.enterAnnotationInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAnnotationInterfaceDeclaration) {
	 		listener.exitAnnotationInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationInterfaceDeclaration) {
			return visitor.visitAnnotationInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationInterfaceBodyContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public annotationInterfaceMemberDeclaration_list(): AnnotationInterfaceMemberDeclarationContext[] {
		return this.getTypedRuleContexts(AnnotationInterfaceMemberDeclarationContext) as AnnotationInterfaceMemberDeclarationContext[];
	}
	public annotationInterfaceMemberDeclaration(i: number): AnnotationInterfaceMemberDeclarationContext {
		return this.getTypedRuleContext(AnnotationInterfaceMemberDeclarationContext, i) as AnnotationInterfaceMemberDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_annotationInterfaceBody;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAnnotationInterfaceBody) {
	 		listener.enterAnnotationInterfaceBody(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAnnotationInterfaceBody) {
	 		listener.exitAnnotationInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationInterfaceBody) {
			return visitor.visitAnnotationInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationInterfaceMemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationInterfaceElementDeclaration(): AnnotationInterfaceElementDeclarationContext {
		return this.getTypedRuleContext(AnnotationInterfaceElementDeclarationContext, 0) as AnnotationInterfaceElementDeclarationContext;
	}
	public constantDeclaration(): ConstantDeclarationContext {
		return this.getTypedRuleContext(ConstantDeclarationContext, 0) as ConstantDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_annotationInterfaceMemberDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAnnotationInterfaceMemberDeclaration) {
	 		listener.enterAnnotationInterfaceMemberDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAnnotationInterfaceMemberDeclaration) {
	 		listener.exitAnnotationInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationInterfaceMemberDeclaration) {
			return visitor.visitAnnotationInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationInterfaceElementDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public annotationInterfaceElementModifier_list(): AnnotationInterfaceElementModifierContext[] {
		return this.getTypedRuleContexts(AnnotationInterfaceElementModifierContext) as AnnotationInterfaceElementModifierContext[];
	}
	public annotationInterfaceElementModifier(i: number): AnnotationInterfaceElementModifierContext {
		return this.getTypedRuleContext(AnnotationInterfaceElementModifierContext, i) as AnnotationInterfaceElementModifierContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
	public defaultValue(): DefaultValueContext {
		return this.getTypedRuleContext(DefaultValueContext, 0) as DefaultValueContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_annotationInterfaceElementDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAnnotationInterfaceElementDeclaration) {
	 		listener.enterAnnotationInterfaceElementDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAnnotationInterfaceElementDeclaration) {
	 		listener.exitAnnotationInterfaceElementDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationInterfaceElementDeclaration) {
			return visitor.visitAnnotationInterfaceElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationInterfaceElementModifierContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java20Parser.PUBLIC, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(Java20Parser.ABSTRACT, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_annotationInterfaceElementModifier;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAnnotationInterfaceElementModifier) {
	 		listener.enterAnnotationInterfaceElementModifier(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAnnotationInterfaceElementModifier) {
	 		listener.exitAnnotationInterfaceElementModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationInterfaceElementModifier) {
			return visitor.visitAnnotationInterfaceElementModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(Java20Parser.DEFAULT, 0);
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_defaultValue;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterDefaultValue) {
	 		listener.enterDefaultValue(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitDefaultValue) {
	 		listener.exitDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public normalAnnotation(): NormalAnnotationContext {
		return this.getTypedRuleContext(NormalAnnotationContext, 0) as NormalAnnotationContext;
	}
	public markerAnnotation(): MarkerAnnotationContext {
		return this.getTypedRuleContext(MarkerAnnotationContext, 0) as MarkerAnnotationContext;
	}
	public singleElementAnnotation(): SingleElementAnnotationContext {
		return this.getTypedRuleContext(SingleElementAnnotationContext, 0) as SingleElementAnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_annotation;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAnnotation) {
	 		listener.enterAnnotation(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAnnotation) {
	 		listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalAnnotationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(Java20Parser.AT, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public elementValuePairList(): ElementValuePairListContext {
		return this.getTypedRuleContext(ElementValuePairListContext, 0) as ElementValuePairListContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_normalAnnotation;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterNormalAnnotation) {
	 		listener.enterNormalAnnotation(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitNormalAnnotation) {
	 		listener.exitNormalAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitNormalAnnotation) {
			return visitor.visitNormalAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementValuePair_list(): ElementValuePairContext[] {
		return this.getTypedRuleContexts(ElementValuePairContext) as ElementValuePairContext[];
	}
	public elementValuePair(i: number): ElementValuePairContext {
		return this.getTypedRuleContext(ElementValuePairContext, i) as ElementValuePairContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_elementValuePairList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterElementValuePairList) {
	 		listener.enterElementValuePairList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitElementValuePairList) {
	 		listener.exitElementValuePairList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairList) {
			return visitor.visitElementValuePairList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.ASSIGN, 0);
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_elementValuePair;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterElementValuePair) {
	 		listener.enterElementValuePair(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitElementValuePair) {
	 		listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		return this.getTypedRuleContext(ElementValueArrayInitializerContext, 0) as ElementValueArrayInitializerContext;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_elementValue;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterElementValue) {
	 		listener.enterElementValue(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitElementValue) {
	 		listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public elementValueList(): ElementValueListContext {
		return this.getTypedRuleContext(ElementValueListContext, 0) as ElementValueListContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Java20Parser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_elementValueArrayInitializer;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterElementValueArrayInitializer) {
	 		listener.enterElementValueArrayInitializer(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitElementValueArrayInitializer) {
	 		listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementValue_list(): ElementValueContext[] {
		return this.getTypedRuleContexts(ElementValueContext) as ElementValueContext[];
	}
	public elementValue(i: number): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, i) as ElementValueContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_elementValueList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterElementValueList) {
	 		listener.enterElementValueList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitElementValueList) {
	 		listener.exitElementValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitElementValueList) {
			return visitor.visitElementValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MarkerAnnotationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(Java20Parser.AT, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_markerAnnotation;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterMarkerAnnotation) {
	 		listener.enterMarkerAnnotation(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitMarkerAnnotation) {
	 		listener.exitMarkerAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMarkerAnnotation) {
			return visitor.visitMarkerAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleElementAnnotationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(Java20Parser.AT, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_singleElementAnnotation;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSingleElementAnnotation) {
	 		listener.enterSingleElementAnnotation(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSingleElementAnnotation) {
	 		listener.exitSingleElementAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSingleElementAnnotation) {
			return visitor.visitSingleElementAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public variableInitializerList(): VariableInitializerListContext {
		return this.getTypedRuleContext(VariableInitializerListContext, 0) as VariableInitializerListContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Java20Parser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_arrayInitializer;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterArrayInitializer) {
	 		listener.enterArrayInitializer(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitArrayInitializer) {
	 		listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableInitializer_list(): VariableInitializerContext[] {
		return this.getTypedRuleContexts(VariableInitializerContext) as VariableInitializerContext[];
	}
	public variableInitializer(i: number): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, i) as VariableInitializerContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_variableInitializerList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterVariableInitializerList) {
	 		listener.enterVariableInitializerList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitVariableInitializerList) {
	 		listener.exitVariableInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializerList) {
			return visitor.visitVariableInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public blockStatements(): BlockStatementsContext {
		return this.getTypedRuleContext(BlockStatementsContext, 0) as BlockStatementsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_block;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}
	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_blockStatements;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterBlockStatements) {
	 		listener.enterBlockStatements(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitBlockStatements) {
	 		listener.exitBlockStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBlockStatements) {
			return visitor.visitBlockStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localClassOrInterfaceDeclaration(): LocalClassOrInterfaceDeclarationContext {
		return this.getTypedRuleContext(LocalClassOrInterfaceDeclarationContext, 0) as LocalClassOrInterfaceDeclarationContext;
	}
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		return this.getTypedRuleContext(LocalVariableDeclarationStatementContext, 0) as LocalVariableDeclarationStatementContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_blockStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterBlockStatement) {
	 		listener.enterBlockStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitBlockStatement) {
	 		listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalClassOrInterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		return this.getTypedRuleContext(NormalInterfaceDeclarationContext, 0) as NormalInterfaceDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_localClassOrInterfaceDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLocalClassOrInterfaceDeclaration) {
	 		listener.enterLocalClassOrInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLocalClassOrInterfaceDeclaration) {
	 		listener.exitLocalClassOrInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLocalClassOrInterfaceDeclaration) {
			return visitor.visitLocalClassOrInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableType(): LocalVariableTypeContext {
		return this.getTypedRuleContext(LocalVariableTypeContext, 0) as LocalVariableTypeContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getTypedRuleContext(VariableDeclaratorListContext, 0) as VariableDeclaratorListContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_localVariableDeclaration;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLocalVariableDeclaration) {
	 		listener.enterLocalVariableDeclaration(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLocalVariableDeclaration) {
	 		listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public VAR(): TerminalNode {
		return this.getToken(Java20Parser.VAR, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_localVariableType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLocalVariableType) {
	 		listener.enterLocalVariableType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLocalVariableType) {
	 		listener.exitLocalVariableType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableType) {
			return visitor.visitLocalVariableType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_localVariableDeclarationStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLocalVariableDeclarationStatement) {
	 		listener.enterLocalVariableDeclarationStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLocalVariableDeclarationStatement) {
	 		listener.exitLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		return this.getTypedRuleContext(StatementWithoutTrailingSubstatementContext, 0) as StatementWithoutTrailingSubstatementContext;
	}
	public labeledStatement(): LabeledStatementContext {
		return this.getTypedRuleContext(LabeledStatementContext, 0) as LabeledStatementContext;
	}
	public ifThenStatement(): IfThenStatementContext {
		return this.getTypedRuleContext(IfThenStatementContext, 0) as IfThenStatementContext;
	}
	public ifThenElseStatement(): IfThenElseStatementContext {
		return this.getTypedRuleContext(IfThenElseStatementContext, 0) as IfThenElseStatementContext;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public forStatement(): ForStatementContext {
		return this.getTypedRuleContext(ForStatementContext, 0) as ForStatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_statement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		return this.getTypedRuleContext(StatementWithoutTrailingSubstatementContext, 0) as StatementWithoutTrailingSubstatementContext;
	}
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext {
		return this.getTypedRuleContext(LabeledStatementNoShortIfContext, 0) as LabeledStatementNoShortIfContext;
	}
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext {
		return this.getTypedRuleContext(IfThenElseStatementNoShortIfContext, 0) as IfThenElseStatementNoShortIfContext;
	}
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext {
		return this.getTypedRuleContext(WhileStatementNoShortIfContext, 0) as WhileStatementNoShortIfContext;
	}
	public forStatementNoShortIf(): ForStatementNoShortIfContext {
		return this.getTypedRuleContext(ForStatementNoShortIfContext, 0) as ForStatementNoShortIfContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_statementNoShortIf;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterStatementNoShortIf) {
	 		listener.enterStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitStatementNoShortIf) {
	 		listener.exitStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStatementNoShortIf) {
			return visitor.visitStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementWithoutTrailingSubstatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public assertStatement(): AssertStatementContext {
		return this.getTypedRuleContext(AssertStatementContext, 0) as AssertStatementContext;
	}
	public switchStatement(): SwitchStatementContext {
		return this.getTypedRuleContext(SwitchStatementContext, 0) as SwitchStatementContext;
	}
	public doStatement(): DoStatementContext {
		return this.getTypedRuleContext(DoStatementContext, 0) as DoStatementContext;
	}
	public breakStatement(): BreakStatementContext {
		return this.getTypedRuleContext(BreakStatementContext, 0) as BreakStatementContext;
	}
	public continueStatement(): ContinueStatementContext {
		return this.getTypedRuleContext(ContinueStatementContext, 0) as ContinueStatementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public synchronizedStatement(): SynchronizedStatementContext {
		return this.getTypedRuleContext(SynchronizedStatementContext, 0) as SynchronizedStatementContext;
	}
	public throwStatement(): ThrowStatementContext {
		return this.getTypedRuleContext(ThrowStatementContext, 0) as ThrowStatementContext;
	}
	public tryStatement(): TryStatementContext {
		return this.getTypedRuleContext(TryStatementContext, 0) as TryStatementContext;
	}
	public yieldStatement(): YieldStatementContext {
		return this.getTypedRuleContext(YieldStatementContext, 0) as YieldStatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_statementWithoutTrailingSubstatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterStatementWithoutTrailingSubstatement) {
	 		listener.enterStatementWithoutTrailingSubstatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitStatementWithoutTrailingSubstatement) {
	 		listener.exitStatementWithoutTrailingSubstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStatementWithoutTrailingSubstatement) {
			return visitor.visitStatementWithoutTrailingSubstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_emptyStatement_;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterEmptyStatement_) {
	 		listener.enterEmptyStatement_(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitEmptyStatement_) {
	 		listener.exitEmptyStatement_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Java20Parser.COLON, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_labeledStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLabeledStatement) {
	 		listener.enterLabeledStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLabeledStatement) {
	 		listener.exitLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Java20Parser.COLON, 0);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, 0) as StatementNoShortIfContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_labeledStatementNoShortIf;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLabeledStatementNoShortIf) {
	 		listener.enterLabeledStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLabeledStatementNoShortIf) {
	 		listener.exitLabeledStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatementNoShortIf) {
			return visitor.visitLabeledStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementExpression(): StatementExpressionContext {
		return this.getTypedRuleContext(StatementExpressionContext, 0) as StatementExpressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_expressionStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
	public preIncrementExpression(): PreIncrementExpressionContext {
		return this.getTypedRuleContext(PreIncrementExpressionContext, 0) as PreIncrementExpressionContext;
	}
	public preDecrementExpression(): PreDecrementExpressionContext {
		return this.getTypedRuleContext(PreDecrementExpressionContext, 0) as PreDecrementExpressionContext;
	}
	public postIncrementExpression(): PostIncrementExpressionContext {
		return this.getTypedRuleContext(PostIncrementExpressionContext, 0) as PostIncrementExpressionContext;
	}
	public postDecrementExpression(): PostDecrementExpressionContext {
		return this.getTypedRuleContext(PostDecrementExpressionContext, 0) as PostDecrementExpressionContext;
	}
	public methodInvocation(): MethodInvocationContext {
		return this.getTypedRuleContext(MethodInvocationContext, 0) as MethodInvocationContext;
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		return this.getTypedRuleContext(ClassInstanceCreationExpressionContext, 0) as ClassInstanceCreationExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_statementExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterStatementExpression) {
	 		listener.enterStatementExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitStatementExpression) {
	 		listener.exitStatementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStatementExpression) {
			return visitor.visitStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(Java20Parser.IF, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_ifThenStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterIfThenStatement) {
	 		listener.enterIfThenStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitIfThenStatement) {
	 		listener.exitIfThenStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitIfThenStatement) {
			return visitor.visitIfThenStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(Java20Parser.IF, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, 0) as StatementNoShortIfContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(Java20Parser.ELSE, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_ifThenElseStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterIfThenElseStatement) {
	 		listener.enterIfThenElseStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitIfThenElseStatement) {
	 		listener.exitIfThenElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitIfThenElseStatement) {
			return visitor.visitIfThenElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(Java20Parser.IF, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public statementNoShortIf_list(): StatementNoShortIfContext[] {
		return this.getTypedRuleContexts(StatementNoShortIfContext) as StatementNoShortIfContext[];
	}
	public statementNoShortIf(i: number): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, i) as StatementNoShortIfContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(Java20Parser.ELSE, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_ifThenElseStatementNoShortIf;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterIfThenElseStatementNoShortIf) {
	 		listener.enterIfThenElseStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitIfThenElseStatementNoShortIf) {
	 		listener.exitIfThenElseStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitIfThenElseStatementNoShortIf) {
			return visitor.visitIfThenElseStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(Java20Parser.ASSERT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(Java20Parser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_assertStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAssertStatement) {
	 		listener.enterAssertStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAssertStatement) {
	 		listener.exitAssertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SWITCH(): TerminalNode {
		return this.getToken(Java20Parser.SWITCH, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public switchBlock(): SwitchBlockContext {
		return this.getTypedRuleContext(SwitchBlockContext, 0) as SwitchBlockContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_switchStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSwitchStatement) {
	 		listener.enterSwitchStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSwitchStatement) {
	 		listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java20Parser.LBRACE, 0);
	}
	public switchRule_list(): SwitchRuleContext[] {
		return this.getTypedRuleContexts(SwitchRuleContext) as SwitchRuleContext[];
	}
	public switchRule(i: number): SwitchRuleContext {
		return this.getTypedRuleContext(SwitchRuleContext, i) as SwitchRuleContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java20Parser.RBRACE, 0);
	}
	public switchBlockStatementGroup_list(): SwitchBlockStatementGroupContext[] {
		return this.getTypedRuleContexts(SwitchBlockStatementGroupContext) as SwitchBlockStatementGroupContext[];
	}
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext {
		return this.getTypedRuleContext(SwitchBlockStatementGroupContext, i) as SwitchBlockStatementGroupContext;
	}
	public switchLabel_list(): SwitchLabelContext[] {
		return this.getTypedRuleContexts(SwitchLabelContext) as SwitchLabelContext[];
	}
	public switchLabel(i: number): SwitchLabelContext {
		return this.getTypedRuleContext(SwitchLabelContext, i) as SwitchLabelContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(Java20Parser.COLON, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_switchBlock;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSwitchBlock) {
	 		listener.enterSwitchBlock(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSwitchBlock) {
	 		listener.exitSwitchBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlock) {
			return visitor.visitSwitchBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchRuleContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public switchLabel(): SwitchLabelContext {
		return this.getTypedRuleContext(SwitchLabelContext, 0) as SwitchLabelContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(Java20Parser.ARROW, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public throwStatement(): ThrowStatementContext {
		return this.getTypedRuleContext(ThrowStatementContext, 0) as ThrowStatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_switchRule;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSwitchRule) {
	 		listener.enterSwitchRule(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSwitchRule) {
	 		listener.exitSwitchRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchRule) {
			return visitor.visitSwitchRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public switchLabel_list(): SwitchLabelContext[] {
		return this.getTypedRuleContexts(SwitchLabelContext) as SwitchLabelContext[];
	}
	public switchLabel(i: number): SwitchLabelContext {
		return this.getTypedRuleContext(SwitchLabelContext, i) as SwitchLabelContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(Java20Parser.COLON, i);
	}
	public blockStatements(): BlockStatementsContext {
		return this.getTypedRuleContext(BlockStatementsContext, 0) as BlockStatementsContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_switchBlockStatementGroup;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSwitchBlockStatementGroup) {
	 		listener.enterSwitchBlockStatementGroup(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSwitchBlockStatementGroup) {
	 		listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(Java20Parser.CASE, 0);
	}
	public caseConstant_list(): CaseConstantContext[] {
		return this.getTypedRuleContexts(CaseConstantContext) as CaseConstantContext[];
	}
	public caseConstant(i: number): CaseConstantContext {
		return this.getTypedRuleContext(CaseConstantContext, i) as CaseConstantContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(Java20Parser.DEFAULT, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_switchLabel;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSwitchLabel) {
	 		listener.enterSwitchLabel(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSwitchLabel) {
	 		listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseConstantContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_caseConstant;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterCaseConstant) {
	 		listener.enterCaseConstant(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitCaseConstant) {
	 		listener.exitCaseConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCaseConstant) {
			return visitor.visitCaseConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(Java20Parser.WHILE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_whileStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(Java20Parser.WHILE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, 0) as StatementNoShortIfContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_whileStatementNoShortIf;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterWhileStatementNoShortIf) {
	 		listener.enterWhileStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitWhileStatementNoShortIf) {
	 		listener.exitWhileStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitWhileStatementNoShortIf) {
			return visitor.visitWhileStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DO(): TerminalNode {
		return this.getToken(Java20Parser.DO, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public WHILE(): TerminalNode {
		return this.getToken(Java20Parser.WHILE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_doStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterDoStatement) {
	 		listener.enterDoStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitDoStatement) {
	 		listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basicForStatement(): BasicForStatementContext {
		return this.getTypedRuleContext(BasicForStatementContext, 0) as BasicForStatementContext;
	}
	public enhancedForStatement(): EnhancedForStatementContext {
		return this.getTypedRuleContext(EnhancedForStatementContext, 0) as EnhancedForStatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_forStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterForStatement) {
	 		listener.enterForStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitForStatement) {
	 		listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext {
		return this.getTypedRuleContext(BasicForStatementNoShortIfContext, 0) as BasicForStatementNoShortIfContext;
	}
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext {
		return this.getTypedRuleContext(EnhancedForStatementNoShortIfContext, 0) as EnhancedForStatementNoShortIfContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_forStatementNoShortIf;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterForStatementNoShortIf) {
	 		listener.enterForStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitForStatementNoShortIf) {
	 		listener.exitForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitForStatementNoShortIf) {
			return visitor.visitForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(Java20Parser.FOR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(Java20Parser.SEMI, i);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public forInit(): ForInitContext {
		return this.getTypedRuleContext(ForInitContext, 0) as ForInitContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public forUpdate(): ForUpdateContext {
		return this.getTypedRuleContext(ForUpdateContext, 0) as ForUpdateContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_basicForStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterBasicForStatement) {
	 		listener.enterBasicForStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitBasicForStatement) {
	 		listener.exitBasicForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBasicForStatement) {
			return visitor.visitBasicForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(Java20Parser.FOR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(Java20Parser.SEMI, i);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, 0) as StatementNoShortIfContext;
	}
	public forInit(): ForInitContext {
		return this.getTypedRuleContext(ForInitContext, 0) as ForInitContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public forUpdate(): ForUpdateContext {
		return this.getTypedRuleContext(ForUpdateContext, 0) as ForUpdateContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_basicForStatementNoShortIf;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterBasicForStatementNoShortIf) {
	 		listener.enterBasicForStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitBasicForStatementNoShortIf) {
	 		listener.exitBasicForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBasicForStatementNoShortIf) {
			return visitor.visitBasicForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementExpressionList(): StatementExpressionListContext {
		return this.getTypedRuleContext(StatementExpressionListContext, 0) as StatementExpressionListContext;
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_forInit;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterForInit) {
	 		listener.enterForInit(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitForInit) {
	 		listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementExpressionList(): StatementExpressionListContext {
		return this.getTypedRuleContext(StatementExpressionListContext, 0) as StatementExpressionListContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_forUpdate;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterForUpdate) {
	 		listener.enterForUpdate(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitForUpdate) {
	 		listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementExpression_list(): StatementExpressionContext[] {
		return this.getTypedRuleContexts(StatementExpressionContext) as StatementExpressionContext[];
	}
	public statementExpression(i: number): StatementExpressionContext {
		return this.getTypedRuleContext(StatementExpressionContext, i) as StatementExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_statementExpressionList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterStatementExpressionList) {
	 		listener.enterStatementExpressionList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitStatementExpressionList) {
	 		listener.exitStatementExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitStatementExpressionList) {
			return visitor.visitStatementExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(Java20Parser.FOR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Java20Parser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_enhancedForStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterEnhancedForStatement) {
	 		listener.enterEnhancedForStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitEnhancedForStatement) {
	 		listener.exitEnhancedForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForStatement) {
			return visitor.visitEnhancedForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(Java20Parser.FOR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Java20Parser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, 0) as StatementNoShortIfContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_enhancedForStatementNoShortIf;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterEnhancedForStatementNoShortIf) {
	 		listener.enterEnhancedForStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitEnhancedForStatementNoShortIf) {
	 		listener.exitEnhancedForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForStatementNoShortIf) {
			return visitor.visitEnhancedForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(Java20Parser.BREAK, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_breakStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterBreakStatement) {
	 		listener.enterBreakStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitBreakStatement) {
	 		listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(Java20Parser.CONTINUE, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_continueStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterContinueStatement) {
	 		listener.enterContinueStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitContinueStatement) {
	 		listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(Java20Parser.RETURN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_returnStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THROW(): TerminalNode {
		return this.getToken(Java20Parser.THROW, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_throwStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterThrowStatement) {
	 		listener.enterThrowStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitThrowStatement) {
	 		listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SynchronizedStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYNCHRONIZED(): TerminalNode {
		return this.getToken(Java20Parser.SYNCHRONIZED, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_synchronizedStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSynchronizedStatement) {
	 		listener.enterSynchronizedStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSynchronizedStatement) {
	 		listener.exitSynchronizedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSynchronizedStatement) {
			return visitor.visitSynchronizedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(Java20Parser.TRY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public catches(): CatchesContext {
		return this.getTypedRuleContext(CatchesContext, 0) as CatchesContext;
	}
	public finallyBlock(): FinallyBlockContext {
		return this.getTypedRuleContext(FinallyBlockContext, 0) as FinallyBlockContext;
	}
	public tryWithResourcesStatement(): TryWithResourcesStatementContext {
		return this.getTypedRuleContext(TryWithResourcesStatementContext, 0) as TryWithResourcesStatementContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_tryStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTryStatement) {
	 		listener.enterTryStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTryStatement) {
	 		listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchesContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public catchClause_list(): CatchClauseContext[] {
		return this.getTypedRuleContexts(CatchClauseContext) as CatchClauseContext[];
	}
	public catchClause(i: number): CatchClauseContext {
		return this.getTypedRuleContext(CatchClauseContext, i) as CatchClauseContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_catches;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterCatches) {
	 		listener.enterCatches(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitCatches) {
	 		listener.exitCatches(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCatches) {
			return visitor.visitCatches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CATCH(): TerminalNode {
		return this.getToken(Java20Parser.CATCH, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public catchFormalParameter(): CatchFormalParameterContext {
		return this.getTypedRuleContext(CatchFormalParameterContext, 0) as CatchFormalParameterContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_catchClause;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterCatchClause) {
	 		listener.enterCatchClause(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitCatchClause) {
	 		listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchFormalParameterContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public catchType(): CatchTypeContext {
		return this.getTypedRuleContext(CatchTypeContext, 0) as CatchTypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_catchFormalParameter;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterCatchFormalParameter) {
	 		listener.enterCatchFormalParameter(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitCatchFormalParameter) {
	 		listener.exitCatchFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCatchFormalParameter) {
			return visitor.visitCatchFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannClassType(): UnannClassTypeContext {
		return this.getTypedRuleContext(UnannClassTypeContext, 0) as UnannClassTypeContext;
	}
	public BITOR_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.BITOR);
	}
	public BITOR(i: number): TerminalNode {
		return this.getToken(Java20Parser.BITOR, i);
	}
	public classType_list(): ClassTypeContext[] {
		return this.getTypedRuleContexts(ClassTypeContext) as ClassTypeContext[];
	}
	public classType(i: number): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, i) as ClassTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_catchType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterCatchType) {
	 		listener.enterCatchType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitCatchType) {
	 		listener.exitCatchType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FINALLY(): TerminalNode {
		return this.getToken(Java20Parser.FINALLY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_finallyBlock;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterFinallyBlock) {
	 		listener.enterFinallyBlock(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitFinallyBlock) {
	 		listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryWithResourcesStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(Java20Parser.TRY, 0);
	}
	public resourceSpecification(): ResourceSpecificationContext {
		return this.getTypedRuleContext(ResourceSpecificationContext, 0) as ResourceSpecificationContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public catches(): CatchesContext {
		return this.getTypedRuleContext(CatchesContext, 0) as CatchesContext;
	}
	public finallyBlock(): FinallyBlockContext {
		return this.getTypedRuleContext(FinallyBlockContext, 0) as FinallyBlockContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_tryWithResourcesStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTryWithResourcesStatement) {
	 		listener.enterTryWithResourcesStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTryWithResourcesStatement) {
	 		listener.exitTryWithResourcesStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTryWithResourcesStatement) {
			return visitor.visitTryWithResourcesStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public resourceList(): ResourceListContext {
		return this.getTypedRuleContext(ResourceListContext, 0) as ResourceListContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_resourceSpecification;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterResourceSpecification) {
	 		listener.enterResourceSpecification(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitResourceSpecification) {
	 		listener.exitResourceSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitResourceSpecification) {
			return visitor.visitResourceSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public resource_list(): ResourceContext[] {
		return this.getTypedRuleContexts(ResourceContext) as ResourceContext[];
	}
	public resource(i: number): ResourceContext {
		return this.getTypedRuleContext(ResourceContext, i) as ResourceContext;
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(Java20Parser.SEMI, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_resourceList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterResourceList) {
	 		listener.enterResourceList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitResourceList) {
	 		listener.exitResourceList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitResourceList) {
			return visitor.visitResourceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
	public variableAccess(): VariableAccessContext {
		return this.getTypedRuleContext(VariableAccessContext, 0) as VariableAccessContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_resource;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterResource) {
	 		listener.enterResource(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitResource) {
	 		listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableAccessContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public fieldAccess(): FieldAccessContext {
		return this.getTypedRuleContext(FieldAccessContext, 0) as FieldAccessContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_variableAccess;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterVariableAccess) {
	 		listener.enterVariableAccess(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitVariableAccess) {
	 		listener.exitVariableAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitVariableAccess) {
			return visitor.visitVariableAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public YIELD(): TerminalNode {
		return this.getToken(Java20Parser.YIELD, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java20Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_yieldStatement;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterYieldStatement) {
	 		listener.enterYieldStatement(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitYieldStatement) {
	 		listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typePattern(): TypePatternContext {
		return this.getTypedRuleContext(TypePatternContext, 0) as TypePatternContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_pattern;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPattern) {
	 		listener.enterPattern(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPattern) {
	 		listener.exitPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPattern) {
			return visitor.visitPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePatternContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typePattern;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypePattern) {
	 		listener.enterTypePattern(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypePattern) {
	 		listener.exitTypePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypePattern) {
			return visitor.visitTypePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambdaExpression(): LambdaExpressionContext {
		return this.getTypedRuleContext(LambdaExpressionContext, 0) as LambdaExpressionContext;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_expression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryNoNewArray(): PrimaryNoNewArrayContext {
		return this.getTypedRuleContext(PrimaryNoNewArrayContext, 0) as PrimaryNoNewArrayContext;
	}
	public arrayCreationExpression(): ArrayCreationExpressionContext {
		return this.getTypedRuleContext(ArrayCreationExpressionContext, 0) as ArrayCreationExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_primary;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPrimary) {
	 		listener.enterPrimary(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPrimary) {
	 		listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArrayContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public pNNA(): PNNAContext {
		return this.getTypedRuleContext(PNNAContext, 0) as PNNAContext;
	}
	public classLiteral(): ClassLiteralContext {
		return this.getTypedRuleContext(ClassLiteralContext, 0) as ClassLiteralContext;
	}
	public THIS(): TerminalNode {
		return this.getToken(Java20Parser.THIS, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java20Parser.DOT, i);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public unqualifiedClassInstanceCreationExpression(): UnqualifiedClassInstanceCreationExpressionContext {
		return this.getTypedRuleContext(UnqualifiedClassInstanceCreationExpressionContext, 0) as UnqualifiedClassInstanceCreationExpressionContext;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public arrayCreationExpression(): ArrayCreationExpressionContext {
		return this.getTypedRuleContext(ArrayCreationExpressionContext, 0) as ArrayCreationExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java20Parser.SUPER, 0);
	}
	public LBRACK(): TerminalNode {
		return this.getToken(Java20Parser.LBRACK, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(Java20Parser.RBRACK, 0);
	}
	public arrayCreationExpressionWithInitializer(): ArrayCreationExpressionWithInitializerContext {
		return this.getTypedRuleContext(ArrayCreationExpressionWithInitializerContext, 0) as ArrayCreationExpressionWithInitializerContext;
	}
	public methodName(): MethodNameContext {
		return this.getTypedRuleContext(MethodNameContext, 0) as MethodNameContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public COLONCOLON(): TerminalNode {
		return this.getToken(Java20Parser.COLONCOLON, 0);
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
	public NEW(): TerminalNode {
		return this.getToken(Java20Parser.NEW, 0);
	}
	public arrayType(): ArrayTypeContext {
		return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_primaryNoNewArray;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPrimaryNoNewArray) {
	 		listener.enterPrimaryNoNewArray(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPrimaryNoNewArray) {
	 		listener.exitPrimaryNoNewArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray) {
			return visitor.visitPrimaryNoNewArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PNNAContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public unqualifiedClassInstanceCreationExpression(): UnqualifiedClassInstanceCreationExpressionContext {
		return this.getTypedRuleContext(UnqualifiedClassInstanceCreationExpressionContext, 0) as UnqualifiedClassInstanceCreationExpressionContext;
	}
	public pNNA(): PNNAContext {
		return this.getTypedRuleContext(PNNAContext, 0) as PNNAContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LBRACK(): TerminalNode {
		return this.getToken(Java20Parser.LBRACK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RBRACK(): TerminalNode {
		return this.getToken(Java20Parser.RBRACK, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public COLONCOLON(): TerminalNode {
		return this.getToken(Java20Parser.COLONCOLON, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_pNNA;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPNNA) {
	 		listener.enterPNNA(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPNNA) {
	 		listener.exitPNNA(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPNNA) {
			return visitor.visitPNNA(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassLiteralContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(Java20Parser.CLASS, 0);
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(Java20Parser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(Java20Parser.RBRACK, i);
	}
	public numericType(): NumericTypeContext {
		return this.getTypedRuleContext(NumericTypeContext, 0) as NumericTypeContext;
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(Java20Parser.BOOLEAN, 0);
	}
	public VOID(): TerminalNode {
		return this.getToken(Java20Parser.VOID, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classLiteral;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassLiteral) {
	 		listener.enterClassLiteral(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassLiteral) {
	 		listener.exitClassLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassLiteral) {
			return visitor.visitClassLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unqualifiedClassInstanceCreationExpression(): UnqualifiedClassInstanceCreationExpressionContext {
		return this.getTypedRuleContext(UnqualifiedClassInstanceCreationExpressionContext, 0) as UnqualifiedClassInstanceCreationExpressionContext;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classInstanceCreationExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassInstanceCreationExpression) {
	 		listener.enterClassInstanceCreationExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassInstanceCreationExpression) {
	 		listener.exitClassInstanceCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression) {
			return visitor.visitClassInstanceCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnqualifiedClassInstanceCreationExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEW(): TerminalNode {
		return this.getToken(Java20Parser.NEW, 0);
	}
	public classOrInterfaceTypeToInstantiate(): ClassOrInterfaceTypeToInstantiateContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeToInstantiateContext, 0) as ClassOrInterfaceTypeToInstantiateContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unqualifiedClassInstanceCreationExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnqualifiedClassInstanceCreationExpression) {
	 		listener.enterUnqualifiedClassInstanceCreationExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnqualifiedClassInstanceCreationExpression) {
	 		listener.exitUnqualifiedClassInstanceCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnqualifiedClassInstanceCreationExpression) {
			return visitor.visitUnqualifiedClassInstanceCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeToInstantiateContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java20Parser.DOT, i);
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		return this.getTypedRuleContext(TypeArgumentsOrDiamondContext, 0) as TypeArgumentsOrDiamondContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_classOrInterfaceTypeToInstantiate;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterClassOrInterfaceTypeToInstantiate) {
	 		listener.enterClassOrInterfaceTypeToInstantiate(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitClassOrInterfaceTypeToInstantiate) {
	 		listener.exitClassOrInterfaceTypeToInstantiate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceTypeToInstantiate) {
			return visitor.visitClassOrInterfaceTypeToInstantiate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public OACA(): TerminalNode {
		return this.getToken(Java20Parser.OACA, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_typeArgumentsOrDiamond;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterTypeArgumentsOrDiamond) {
	 		listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitTypeArgumentsOrDiamond) {
	 		listener.exitTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreationExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrayCreationExpressionWithoutInitializer(): ArrayCreationExpressionWithoutInitializerContext {
		return this.getTypedRuleContext(ArrayCreationExpressionWithoutInitializerContext, 0) as ArrayCreationExpressionWithoutInitializerContext;
	}
	public arrayCreationExpressionWithInitializer(): ArrayCreationExpressionWithInitializerContext {
		return this.getTypedRuleContext(ArrayCreationExpressionWithInitializerContext, 0) as ArrayCreationExpressionWithInitializerContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_arrayCreationExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterArrayCreationExpression) {
	 		listener.enterArrayCreationExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitArrayCreationExpression) {
	 		listener.exitArrayCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayCreationExpression) {
			return visitor.visitArrayCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreationExpressionWithoutInitializerContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEW(): TerminalNode {
		return this.getToken(Java20Parser.NEW, 0);
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public dimExprs(): DimExprsContext {
		return this.getTypedRuleContext(DimExprsContext, 0) as DimExprsContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_arrayCreationExpressionWithoutInitializer;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterArrayCreationExpressionWithoutInitializer) {
	 		listener.enterArrayCreationExpressionWithoutInitializer(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitArrayCreationExpressionWithoutInitializer) {
	 		listener.exitArrayCreationExpressionWithoutInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayCreationExpressionWithoutInitializer) {
			return visitor.visitArrayCreationExpressionWithoutInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreationExpressionWithInitializerContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEW(): TerminalNode {
		return this.getToken(Java20Parser.NEW, 0);
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
	public arrayInitializer(): ArrayInitializerContext {
		return this.getTypedRuleContext(ArrayInitializerContext, 0) as ArrayInitializerContext;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_arrayCreationExpressionWithInitializer;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterArrayCreationExpressionWithInitializer) {
	 		listener.enterArrayCreationExpressionWithInitializer(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitArrayCreationExpressionWithInitializer) {
	 		listener.exitArrayCreationExpressionWithInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayCreationExpressionWithInitializer) {
			return visitor.visitArrayCreationExpressionWithInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprsContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dimExpr_list(): DimExprContext[] {
		return this.getTypedRuleContexts(DimExprContext) as DimExprContext[];
	}
	public dimExpr(i: number): DimExprContext {
		return this.getTypedRuleContext(DimExprContext, i) as DimExprContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_dimExprs;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterDimExprs) {
	 		listener.enterDimExprs(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitDimExprs) {
	 		listener.exitDimExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitDimExprs) {
			return visitor.visitDimExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACK(): TerminalNode {
		return this.getToken(Java20Parser.LBRACK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RBRACK(): TerminalNode {
		return this.getToken(Java20Parser.RBRACK, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_dimExpr;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterDimExpr) {
	 		listener.enterDimExpr(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitDimExpr) {
	 		listener.exitDimExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitDimExpr) {
			return visitor.visitDimExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccessContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public LBRACK(): TerminalNode {
		return this.getToken(Java20Parser.LBRACK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RBRACK(): TerminalNode {
		return this.getToken(Java20Parser.RBRACK, 0);
	}
	public primaryNoNewArray(): PrimaryNoNewArrayContext {
		return this.getTypedRuleContext(PrimaryNoNewArrayContext, 0) as PrimaryNoNewArrayContext;
	}
	public arrayCreationExpressionWithInitializer(): ArrayCreationExpressionWithInitializerContext {
		return this.getTypedRuleContext(ArrayCreationExpressionWithInitializerContext, 0) as ArrayCreationExpressionWithInitializerContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_arrayAccess;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterArrayAccess) {
	 		listener.enterArrayAccess(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitArrayAccess) {
	 		listener.exitArrayAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess) {
			return visitor.visitArrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccessContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java20Parser.DOT, i);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java20Parser.SUPER, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_fieldAccess;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterFieldAccess) {
	 		listener.enterFieldAccess(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitFieldAccess) {
	 		listener.exitFieldAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess) {
			return visitor.visitFieldAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocationContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public methodName(): MethodNameContext {
		return this.getTypedRuleContext(MethodNameContext, 0) as MethodNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java20Parser.DOT, i);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java20Parser.SUPER, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_methodInvocation;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterMethodInvocation) {
	 		listener.enterMethodInvocation(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitMethodInvocation) {
	 		listener.exitMethodInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation) {
			return visitor.visitMethodInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_argumentList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterArgumentList) {
	 		listener.enterArgumentList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitArgumentList) {
	 		listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReferenceContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public COLONCOLON(): TerminalNode {
		return this.getToken(Java20Parser.COLONCOLON, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java20Parser.SUPER, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java20Parser.DOT, 0);
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
	public NEW(): TerminalNode {
		return this.getToken(Java20Parser.NEW, 0);
	}
	public arrayType(): ArrayTypeContext {
		return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_methodReference;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterMethodReference) {
	 		listener.enterMethodReference(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitMethodReference) {
	 		listener.exitMethodReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMethodReference) {
			return visitor.visitMethodReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public pfE(): PfEContext {
		return this.getTypedRuleContext(PfEContext, 0) as PfEContext;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_postfixExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPostfixExpression) {
	 		listener.enterPostfixExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPostfixExpression) {
	 		listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PfEContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INC(): TerminalNode {
		return this.getToken(Java20Parser.INC, 0);
	}
	public pfE(): PfEContext {
		return this.getTypedRuleContext(PfEContext, 0) as PfEContext;
	}
	public DEC(): TerminalNode {
		return this.getToken(Java20Parser.DEC, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_pfE;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPfE) {
	 		listener.enterPfE(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPfE) {
	 		listener.exitPfE(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPfE) {
			return visitor.visitPfE(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public INC(): TerminalNode {
		return this.getToken(Java20Parser.INC, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_postIncrementExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPostIncrementExpression) {
	 		listener.enterPostIncrementExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPostIncrementExpression) {
	 		listener.exitPostIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public DEC(): TerminalNode {
		return this.getToken(Java20Parser.DEC, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_postDecrementExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPostDecrementExpression) {
	 		listener.enterPostDecrementExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPostDecrementExpression) {
	 		listener.exitPostDecrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPostDecrementExpression) {
			return visitor.visitPostDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public preIncrementExpression(): PreIncrementExpressionContext {
		return this.getTypedRuleContext(PreIncrementExpressionContext, 0) as PreIncrementExpressionContext;
	}
	public preDecrementExpression(): PreDecrementExpressionContext {
		return this.getTypedRuleContext(PreDecrementExpressionContext, 0) as PreDecrementExpressionContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(Java20Parser.ADD, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public SUB(): TerminalNode {
		return this.getToken(Java20Parser.SUB, 0);
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		return this.getTypedRuleContext(UnaryExpressionNotPlusMinusContext, 0) as UnaryExpressionNotPlusMinusContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unaryExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreIncrementExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INC(): TerminalNode {
		return this.getToken(Java20Parser.INC, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_preIncrementExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPreIncrementExpression) {
	 		listener.enterPreIncrementExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPreIncrementExpression) {
	 		listener.exitPreIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreDecrementExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEC(): TerminalNode {
		return this.getToken(Java20Parser.DEC, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_preDecrementExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterPreDecrementExpression) {
	 		listener.enterPreDecrementExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitPreDecrementExpression) {
	 		listener.exitPreDecrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitPreDecrementExpression) {
			return visitor.visitPreDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionNotPlusMinusContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public TILDE(): TerminalNode {
		return this.getToken(Java20Parser.TILDE, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public BANG(): TerminalNode {
		return this.getToken(Java20Parser.BANG, 0);
	}
	public castExpression(): CastExpressionContext {
		return this.getTypedRuleContext(CastExpressionContext, 0) as CastExpressionContext;
	}
	public switchExpression(): SwitchExpressionContext {
		return this.getTypedRuleContext(SwitchExpressionContext, 0) as SwitchExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_unaryExpressionNotPlusMinus;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterUnaryExpressionNotPlusMinus) {
	 		listener.enterUnaryExpressionNotPlusMinus(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitUnaryExpressionNotPlusMinus) {
	 		listener.exitUnaryExpressionNotPlusMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpressionNotPlusMinus) {
			return visitor.visitUnaryExpressionNotPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		return this.getTypedRuleContext(UnaryExpressionNotPlusMinusContext, 0) as UnaryExpressionNotPlusMinusContext;
	}
	public additionalBound_list(): AdditionalBoundContext[] {
		return this.getTypedRuleContexts(AdditionalBoundContext) as AdditionalBoundContext[];
	}
	public additionalBound(i: number): AdditionalBoundContext {
		return this.getTypedRuleContext(AdditionalBoundContext, i) as AdditionalBoundContext;
	}
	public lambdaExpression(): LambdaExpressionContext {
		return this.getTypedRuleContext(LambdaExpressionContext, 0) as LambdaExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_castExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterCastExpression) {
	 		listener.enterCastExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitCastExpression) {
	 		listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public MUL(): TerminalNode {
		return this.getToken(Java20Parser.MUL, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(Java20Parser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(Java20Parser.MOD, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_multiplicativeExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(Java20Parser.ADD, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(Java20Parser.SUB, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_additiveExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public shiftExpression(): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, 0) as ShiftExpressionContext;
	}
	public LT_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.LT);
	}
	public LT(i: number): TerminalNode {
		return this.getToken(Java20Parser.LT, i);
	}
	public GT_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.GT);
	}
	public GT(i: number): TerminalNode {
		return this.getToken(Java20Parser.GT, i);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_shiftExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterShiftExpression) {
	 		listener.enterShiftExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitShiftExpression) {
	 		listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shiftExpression(): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, 0) as ShiftExpressionContext;
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public LT(): TerminalNode {
		return this.getToken(Java20Parser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(Java20Parser.GT, 0);
	}
	public LE(): TerminalNode {
		return this.getToken(Java20Parser.LE, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(Java20Parser.GE, 0);
	}
	public INSTANCEOF(): TerminalNode {
		return this.getToken(Java20Parser.INSTANCEOF, 0);
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_relationalExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterRelationalExpression) {
	 		listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitRelationalExpression) {
	 		listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(Java20Parser.EQUAL, 0);
	}
	public NOTEQUAL(): TerminalNode {
		return this.getToken(Java20Parser.NOTEQUAL, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_equalityExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterEqualityExpression) {
	 		listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitEqualityExpression) {
	 		listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public andExpression(): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, 0) as AndExpressionContext;
	}
	public BITAND(): TerminalNode {
		return this.getToken(Java20Parser.BITAND, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_andExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAndExpression) {
	 		listener.enterAndExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAndExpression) {
	 		listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public andExpression(): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, 0) as AndExpressionContext;
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getTypedRuleContext(ExclusiveOrExpressionContext, 0) as ExclusiveOrExpressionContext;
	}
	public CARET(): TerminalNode {
		return this.getToken(Java20Parser.CARET, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_exclusiveOrExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterExclusiveOrExpression) {
	 		listener.enterExclusiveOrExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitExclusiveOrExpression) {
	 		listener.exitExclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExpression) {
			return visitor.visitExclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getTypedRuleContext(ExclusiveOrExpressionContext, 0) as ExclusiveOrExpressionContext;
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getTypedRuleContext(InclusiveOrExpressionContext, 0) as InclusiveOrExpressionContext;
	}
	public BITOR(): TerminalNode {
		return this.getToken(Java20Parser.BITOR, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_inclusiveOrExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterInclusiveOrExpression) {
	 		listener.enterInclusiveOrExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitInclusiveOrExpression) {
	 		listener.exitInclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExpression) {
			return visitor.visitInclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalAndExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getTypedRuleContext(InclusiveOrExpressionContext, 0) as InclusiveOrExpressionContext;
	}
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		return this.getTypedRuleContext(ConditionalAndExpressionContext, 0) as ConditionalAndExpressionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(Java20Parser.AND, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_conditionalAndExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterConditionalAndExpression) {
	 		listener.enterConditionalAndExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitConditionalAndExpression) {
	 		listener.exitConditionalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConditionalAndExpression) {
			return visitor.visitConditionalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOrExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		return this.getTypedRuleContext(ConditionalAndExpressionContext, 0) as ConditionalAndExpressionContext;
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getTypedRuleContext(ConditionalOrExpressionContext, 0) as ConditionalOrExpressionContext;
	}
	public OR(): TerminalNode {
		return this.getToken(Java20Parser.OR, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_conditionalOrExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterConditionalOrExpression) {
	 		listener.enterConditionalOrExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitConditionalOrExpression) {
	 		listener.exitConditionalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConditionalOrExpression) {
			return visitor.visitConditionalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getTypedRuleContext(ConditionalOrExpressionContext, 0) as ConditionalOrExpressionContext;
	}
	public QUESTION(): TerminalNode {
		return this.getToken(Java20Parser.QUESTION, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Java20Parser.COLON, 0);
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
	public lambdaExpression(): LambdaExpressionContext {
		return this.getTypedRuleContext(LambdaExpressionContext, 0) as LambdaExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_conditionalExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterConditionalExpression) {
	 		listener.enterConditionalExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitConditionalExpression) {
	 		listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_assignmentExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAssignmentExpression) {
	 		listener.enterAssignmentExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAssignmentExpression) {
	 		listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public leftHandSide(): LeftHandSideContext {
		return this.getTypedRuleContext(LeftHandSideContext, 0) as LeftHandSideContext;
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_assignment;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LeftHandSideContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public fieldAccess(): FieldAccessContext {
		return this.getTypedRuleContext(FieldAccessContext, 0) as FieldAccessContext;
	}
	public arrayAccess(): ArrayAccessContext {
		return this.getTypedRuleContext(ArrayAccessContext, 0) as ArrayAccessContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_leftHandSide;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLeftHandSide) {
	 		listener.enterLeftHandSide(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLeftHandSide) {
	 		listener.exitLeftHandSide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLeftHandSide) {
			return visitor.visitLeftHandSide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.ASSIGN, 0);
	}
	public MUL_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.MUL_ASSIGN, 0);
	}
	public DIV_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.DIV_ASSIGN, 0);
	}
	public MOD_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.MOD_ASSIGN, 0);
	}
	public ADD_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.ADD_ASSIGN, 0);
	}
	public SUB_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.SUB_ASSIGN, 0);
	}
	public LSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.LSHIFT_ASSIGN, 0);
	}
	public RSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.RSHIFT_ASSIGN, 0);
	}
	public URSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.URSHIFT_ASSIGN, 0);
	}
	public AND_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.AND_ASSIGN, 0);
	}
	public XOR_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.XOR_ASSIGN, 0);
	}
	public OR_ASSIGN(): TerminalNode {
		return this.getToken(Java20Parser.OR_ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_assignmentOperator;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterAssignmentOperator) {
	 		listener.enterAssignmentOperator(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitAssignmentOperator) {
	 		listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambdaParameters(): LambdaParametersContext {
		return this.getTypedRuleContext(LambdaParametersContext, 0) as LambdaParametersContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(Java20Parser.ARROW, 0);
	}
	public lambdaBody(): LambdaBodyContext {
		return this.getTypedRuleContext(LambdaBodyContext, 0) as LambdaBodyContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_lambdaExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLambdaExpression) {
	 		listener.enterLambdaExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLambdaExpression) {
	 		listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public lambdaParameterList(): LambdaParameterListContext {
		return this.getTypedRuleContext(LambdaParameterListContext, 0) as LambdaParameterListContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_lambdaParameters;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLambdaParameters) {
	 		listener.enterLambdaParameters(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLambdaParameters) {
	 		listener.exitLambdaParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParameterListContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambdaParameter_list(): LambdaParameterContext[] {
		return this.getTypedRuleContexts(LambdaParameterContext) as LambdaParameterContext[];
	}
	public lambdaParameter(i: number): LambdaParameterContext {
		return this.getTypedRuleContext(LambdaParameterContext, i) as LambdaParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java20Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java20Parser.COMMA, i);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_lambdaParameterList;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLambdaParameterList) {
	 		listener.enterLambdaParameterList(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLambdaParameterList) {
	 		listener.exitLambdaParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameterList) {
			return visitor.visitLambdaParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParameterContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambdaParameterType(): LambdaParameterTypeContext {
		return this.getTypedRuleContext(LambdaParameterTypeContext, 0) as LambdaParameterTypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
	public variableArityParameter(): VariableArityParameterContext {
		return this.getTypedRuleContext(VariableArityParameterContext, 0) as VariableArityParameterContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_lambdaParameter;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLambdaParameter) {
	 		listener.enterLambdaParameter(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLambdaParameter) {
	 		listener.exitLambdaParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameter) {
			return visitor.visitLambdaParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParameterTypeContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public VAR(): TerminalNode {
		return this.getToken(Java20Parser.VAR, 0);
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_lambdaParameterType;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLambdaParameterType) {
	 		listener.enterLambdaParameterType(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLambdaParameterType) {
	 		listener.exitLambdaParameterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameterType) {
			return visitor.visitLambdaParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_lambdaBody;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterLambdaBody) {
	 		listener.enterLambdaBody(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitLambdaBody) {
	 		listener.exitLambdaBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SWITCH(): TerminalNode {
		return this.getToken(Java20Parser.SWITCH, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java20Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java20Parser.RPAREN, 0);
	}
	public switchBlock(): SwitchBlockContext {
		return this.getTypedRuleContext(SwitchBlockContext, 0) as SwitchBlockContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_switchExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterSwitchExpression) {
	 		listener.enterSwitchExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitSwitchExpression) {
	 		listener.exitSwitchExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitSwitchExpression) {
			return visitor.visitSwitchExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	constructor(parser?: Java20Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java20Parser.RULE_constantExpression;
	}
	public enterRule(listener: Java20ParserListener): void {
	    if(listener.enterConstantExpression) {
	 		listener.enterConstantExpression(this);
		}
	}
	public exitRule(listener: Java20ParserListener): void {
	    if(listener.exitConstantExpression) {
	 		listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java20ParserVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

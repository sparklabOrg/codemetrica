// Generated from Java20Parser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { Start_Context } from "./Java20Parser.js";
import { IdentifierContext } from "./Java20Parser.js";
import { TypeIdentifierContext } from "./Java20Parser.js";
import { UnqualifiedMethodIdentifierContext } from "./Java20Parser.js";
import { ContextualKeywordContext } from "./Java20Parser.js";
import { ContextualKeywordMinusForTypeIdentifierContext } from "./Java20Parser.js";
import { ContextualKeywordMinusForUnqualifiedMethodIdentifierContext } from "./Java20Parser.js";
import { LiteralContext } from "./Java20Parser.js";
import { PrimitiveTypeContext } from "./Java20Parser.js";
import { NumericTypeContext } from "./Java20Parser.js";
import { IntegralTypeContext } from "./Java20Parser.js";
import { FloatingPointTypeContext } from "./Java20Parser.js";
import { ReferenceTypeContext } from "./Java20Parser.js";
import { CoitContext } from "./Java20Parser.js";
import { ClassOrInterfaceTypeContext } from "./Java20Parser.js";
import { ClassTypeContext } from "./Java20Parser.js";
import { InterfaceTypeContext } from "./Java20Parser.js";
import { TypeVariableContext } from "./Java20Parser.js";
import { ArrayTypeContext } from "./Java20Parser.js";
import { DimsContext } from "./Java20Parser.js";
import { TypeParameterContext } from "./Java20Parser.js";
import { TypeParameterModifierContext } from "./Java20Parser.js";
import { TypeBoundContext } from "./Java20Parser.js";
import { AdditionalBoundContext } from "./Java20Parser.js";
import { TypeArgumentsContext } from "./Java20Parser.js";
import { TypeArgumentListContext } from "./Java20Parser.js";
import { TypeArgumentContext } from "./Java20Parser.js";
import { WildcardContext } from "./Java20Parser.js";
import { WildcardBoundsContext } from "./Java20Parser.js";
import { ModuleNameContext } from "./Java20Parser.js";
import { PackageNameContext } from "./Java20Parser.js";
import { TypeNameContext } from "./Java20Parser.js";
import { PackageOrTypeNameContext } from "./Java20Parser.js";
import { ExpressionNameContext } from "./Java20Parser.js";
import { MethodNameContext } from "./Java20Parser.js";
import { AmbiguousNameContext } from "./Java20Parser.js";
import { CompilationUnitContext } from "./Java20Parser.js";
import { OrdinaryCompilationUnitContext } from "./Java20Parser.js";
import { ModularCompilationUnitContext } from "./Java20Parser.js";
import { PackageDeclarationContext } from "./Java20Parser.js";
import { PackageModifierContext } from "./Java20Parser.js";
import { ImportDeclarationContext } from "./Java20Parser.js";
import { SingleTypeImportDeclarationContext } from "./Java20Parser.js";
import { TypeImportOnDemandDeclarationContext } from "./Java20Parser.js";
import { SingleStaticImportDeclarationContext } from "./Java20Parser.js";
import { StaticImportOnDemandDeclarationContext } from "./Java20Parser.js";
import { TopLevelClassOrInterfaceDeclarationContext } from "./Java20Parser.js";
import { ModuleDeclarationContext } from "./Java20Parser.js";
import { ModuleDirectiveContext } from "./Java20Parser.js";
import { RequiresModifierContext } from "./Java20Parser.js";
import { ClassDeclarationContext } from "./Java20Parser.js";
import { NormalClassDeclarationContext } from "./Java20Parser.js";
import { ClassModifierContext } from "./Java20Parser.js";
import { TypeParametersContext } from "./Java20Parser.js";
import { TypeParameterListContext } from "./Java20Parser.js";
import { ClassExtendsContext } from "./Java20Parser.js";
import { ClassImplementsContext } from "./Java20Parser.js";
import { InterfaceTypeListContext } from "./Java20Parser.js";
import { ClassPermitsContext } from "./Java20Parser.js";
import { ClassBodyContext } from "./Java20Parser.js";
import { ClassBodyDeclarationContext } from "./Java20Parser.js";
import { ClassMemberDeclarationContext } from "./Java20Parser.js";
import { FieldDeclarationContext } from "./Java20Parser.js";
import { FieldModifierContext } from "./Java20Parser.js";
import { VariableDeclaratorListContext } from "./Java20Parser.js";
import { VariableDeclaratorContext } from "./Java20Parser.js";
import { VariableDeclaratorIdContext } from "./Java20Parser.js";
import { VariableInitializerContext } from "./Java20Parser.js";
import { UnannTypeContext } from "./Java20Parser.js";
import { UnannPrimitiveTypeContext } from "./Java20Parser.js";
import { UnannReferenceTypeContext } from "./Java20Parser.js";
import { UnannClassOrInterfaceTypeContext } from "./Java20Parser.js";
import { UCOITContext } from "./Java20Parser.js";
import { UnannClassTypeContext } from "./Java20Parser.js";
import { UnannInterfaceTypeContext } from "./Java20Parser.js";
import { UnannTypeVariableContext } from "./Java20Parser.js";
import { UnannArrayTypeContext } from "./Java20Parser.js";
import { MethodDeclarationContext } from "./Java20Parser.js";
import { MethodModifierContext } from "./Java20Parser.js";
import { MethodHeaderContext } from "./Java20Parser.js";
import { ResultContext } from "./Java20Parser.js";
import { MethodDeclaratorContext } from "./Java20Parser.js";
import { ReceiverParameterContext } from "./Java20Parser.js";
import { FormalParameterListContext } from "./Java20Parser.js";
import { FormalParameterContext } from "./Java20Parser.js";
import { VariableArityParameterContext } from "./Java20Parser.js";
import { VariableModifierContext } from "./Java20Parser.js";
import { ThrowsTContext } from "./Java20Parser.js";
import { ExceptionTypeListContext } from "./Java20Parser.js";
import { ExceptionTypeContext } from "./Java20Parser.js";
import { MethodBodyContext } from "./Java20Parser.js";
import { InstanceInitializerContext } from "./Java20Parser.js";
import { StaticInitializerContext } from "./Java20Parser.js";
import { ConstructorDeclarationContext } from "./Java20Parser.js";
import { ConstructorModifierContext } from "./Java20Parser.js";
import { ConstructorDeclaratorContext } from "./Java20Parser.js";
import { SimpleTypeNameContext } from "./Java20Parser.js";
import { ConstructorBodyContext } from "./Java20Parser.js";
import { ExplicitConstructorInvocationContext } from "./Java20Parser.js";
import { EnumDeclarationContext } from "./Java20Parser.js";
import { EnumBodyContext } from "./Java20Parser.js";
import { EnumConstantListContext } from "./Java20Parser.js";
import { EnumConstantContext } from "./Java20Parser.js";
import { EnumConstantModifierContext } from "./Java20Parser.js";
import { EnumBodyDeclarationsContext } from "./Java20Parser.js";
import { RecordDeclarationContext } from "./Java20Parser.js";
import { RecordHeaderContext } from "./Java20Parser.js";
import { RecordComponentListContext } from "./Java20Parser.js";
import { RecordComponentContext } from "./Java20Parser.js";
import { VariableArityRecordComponentContext } from "./Java20Parser.js";
import { RecordComponentModifierContext } from "./Java20Parser.js";
import { RecordBodyContext } from "./Java20Parser.js";
import { RecordBodyDeclarationContext } from "./Java20Parser.js";
import { CompactConstructorDeclarationContext } from "./Java20Parser.js";
import { InterfaceDeclarationContext } from "./Java20Parser.js";
import { NormalInterfaceDeclarationContext } from "./Java20Parser.js";
import { InterfaceModifierContext } from "./Java20Parser.js";
import { InterfaceExtendsContext } from "./Java20Parser.js";
import { InterfacePermitsContext } from "./Java20Parser.js";
import { InterfaceBodyContext } from "./Java20Parser.js";
import { InterfaceMemberDeclarationContext } from "./Java20Parser.js";
import { ConstantDeclarationContext } from "./Java20Parser.js";
import { ConstantModifierContext } from "./Java20Parser.js";
import { InterfaceMethodDeclarationContext } from "./Java20Parser.js";
import { InterfaceMethodModifierContext } from "./Java20Parser.js";
import { AnnotationInterfaceDeclarationContext } from "./Java20Parser.js";
import { AnnotationInterfaceBodyContext } from "./Java20Parser.js";
import { AnnotationInterfaceMemberDeclarationContext } from "./Java20Parser.js";
import { AnnotationInterfaceElementDeclarationContext } from "./Java20Parser.js";
import { AnnotationInterfaceElementModifierContext } from "./Java20Parser.js";
import { DefaultValueContext } from "./Java20Parser.js";
import { AnnotationContext } from "./Java20Parser.js";
import { NormalAnnotationContext } from "./Java20Parser.js";
import { ElementValuePairListContext } from "./Java20Parser.js";
import { ElementValuePairContext } from "./Java20Parser.js";
import { ElementValueContext } from "./Java20Parser.js";
import { ElementValueArrayInitializerContext } from "./Java20Parser.js";
import { ElementValueListContext } from "./Java20Parser.js";
import { MarkerAnnotationContext } from "./Java20Parser.js";
import { SingleElementAnnotationContext } from "./Java20Parser.js";
import { ArrayInitializerContext } from "./Java20Parser.js";
import { VariableInitializerListContext } from "./Java20Parser.js";
import { BlockContext } from "./Java20Parser.js";
import { BlockStatementsContext } from "./Java20Parser.js";
import { BlockStatementContext } from "./Java20Parser.js";
import { LocalClassOrInterfaceDeclarationContext } from "./Java20Parser.js";
import { LocalVariableDeclarationContext } from "./Java20Parser.js";
import { LocalVariableTypeContext } from "./Java20Parser.js";
import { LocalVariableDeclarationStatementContext } from "./Java20Parser.js";
import { StatementContext } from "./Java20Parser.js";
import { StatementNoShortIfContext } from "./Java20Parser.js";
import { StatementWithoutTrailingSubstatementContext } from "./Java20Parser.js";
import { EmptyStatement_Context } from "./Java20Parser.js";
import { LabeledStatementContext } from "./Java20Parser.js";
import { LabeledStatementNoShortIfContext } from "./Java20Parser.js";
import { ExpressionStatementContext } from "./Java20Parser.js";
import { StatementExpressionContext } from "./Java20Parser.js";
import { IfThenStatementContext } from "./Java20Parser.js";
import { IfThenElseStatementContext } from "./Java20Parser.js";
import { IfThenElseStatementNoShortIfContext } from "./Java20Parser.js";
import { AssertStatementContext } from "./Java20Parser.js";
import { SwitchStatementContext } from "./Java20Parser.js";
import { SwitchBlockContext } from "./Java20Parser.js";
import { SwitchRuleContext } from "./Java20Parser.js";
import { SwitchBlockStatementGroupContext } from "./Java20Parser.js";
import { SwitchLabelContext } from "./Java20Parser.js";
import { CaseConstantContext } from "./Java20Parser.js";
import { WhileStatementContext } from "./Java20Parser.js";
import { WhileStatementNoShortIfContext } from "./Java20Parser.js";
import { DoStatementContext } from "./Java20Parser.js";
import { ForStatementContext } from "./Java20Parser.js";
import { ForStatementNoShortIfContext } from "./Java20Parser.js";
import { BasicForStatementContext } from "./Java20Parser.js";
import { BasicForStatementNoShortIfContext } from "./Java20Parser.js";
import { ForInitContext } from "./Java20Parser.js";
import { ForUpdateContext } from "./Java20Parser.js";
import { StatementExpressionListContext } from "./Java20Parser.js";
import { EnhancedForStatementContext } from "./Java20Parser.js";
import { EnhancedForStatementNoShortIfContext } from "./Java20Parser.js";
import { BreakStatementContext } from "./Java20Parser.js";
import { ContinueStatementContext } from "./Java20Parser.js";
import { ReturnStatementContext } from "./Java20Parser.js";
import { ThrowStatementContext } from "./Java20Parser.js";
import { SynchronizedStatementContext } from "./Java20Parser.js";
import { TryStatementContext } from "./Java20Parser.js";
import { CatchesContext } from "./Java20Parser.js";
import { CatchClauseContext } from "./Java20Parser.js";
import { CatchFormalParameterContext } from "./Java20Parser.js";
import { CatchTypeContext } from "./Java20Parser.js";
import { FinallyBlockContext } from "./Java20Parser.js";
import { TryWithResourcesStatementContext } from "./Java20Parser.js";
import { ResourceSpecificationContext } from "./Java20Parser.js";
import { ResourceListContext } from "./Java20Parser.js";
import { ResourceContext } from "./Java20Parser.js";
import { VariableAccessContext } from "./Java20Parser.js";
import { YieldStatementContext } from "./Java20Parser.js";
import { PatternContext } from "./Java20Parser.js";
import { TypePatternContext } from "./Java20Parser.js";
import { ExpressionContext } from "./Java20Parser.js";
import { PrimaryContext } from "./Java20Parser.js";
import { PrimaryNoNewArrayContext } from "./Java20Parser.js";
import { PNNAContext } from "./Java20Parser.js";
import { ClassLiteralContext } from "./Java20Parser.js";
import { ClassInstanceCreationExpressionContext } from "./Java20Parser.js";
import { UnqualifiedClassInstanceCreationExpressionContext } from "./Java20Parser.js";
import { ClassOrInterfaceTypeToInstantiateContext } from "./Java20Parser.js";
import { TypeArgumentsOrDiamondContext } from "./Java20Parser.js";
import { ArrayCreationExpressionContext } from "./Java20Parser.js";
import { ArrayCreationExpressionWithoutInitializerContext } from "./Java20Parser.js";
import { ArrayCreationExpressionWithInitializerContext } from "./Java20Parser.js";
import { DimExprsContext } from "./Java20Parser.js";
import { DimExprContext } from "./Java20Parser.js";
import { ArrayAccessContext } from "./Java20Parser.js";
import { FieldAccessContext } from "./Java20Parser.js";
import { MethodInvocationContext } from "./Java20Parser.js";
import { ArgumentListContext } from "./Java20Parser.js";
import { MethodReferenceContext } from "./Java20Parser.js";
import { PostfixExpressionContext } from "./Java20Parser.js";
import { PfEContext } from "./Java20Parser.js";
import { PostIncrementExpressionContext } from "./Java20Parser.js";
import { PostDecrementExpressionContext } from "./Java20Parser.js";
import { UnaryExpressionContext } from "./Java20Parser.js";
import { PreIncrementExpressionContext } from "./Java20Parser.js";
import { PreDecrementExpressionContext } from "./Java20Parser.js";
import { UnaryExpressionNotPlusMinusContext } from "./Java20Parser.js";
import { CastExpressionContext } from "./Java20Parser.js";
import { MultiplicativeExpressionContext } from "./Java20Parser.js";
import { AdditiveExpressionContext } from "./Java20Parser.js";
import { ShiftExpressionContext } from "./Java20Parser.js";
import { RelationalExpressionContext } from "./Java20Parser.js";
import { EqualityExpressionContext } from "./Java20Parser.js";
import { AndExpressionContext } from "./Java20Parser.js";
import { ExclusiveOrExpressionContext } from "./Java20Parser.js";
import { InclusiveOrExpressionContext } from "./Java20Parser.js";
import { ConditionalAndExpressionContext } from "./Java20Parser.js";
import { ConditionalOrExpressionContext } from "./Java20Parser.js";
import { ConditionalExpressionContext } from "./Java20Parser.js";
import { AssignmentExpressionContext } from "./Java20Parser.js";
import { AssignmentContext } from "./Java20Parser.js";
import { LeftHandSideContext } from "./Java20Parser.js";
import { AssignmentOperatorContext } from "./Java20Parser.js";
import { LambdaExpressionContext } from "./Java20Parser.js";
import { LambdaParametersContext } from "./Java20Parser.js";
import { LambdaParameterListContext } from "./Java20Parser.js";
import { LambdaParameterContext } from "./Java20Parser.js";
import { LambdaParameterTypeContext } from "./Java20Parser.js";
import { LambdaBodyContext } from "./Java20Parser.js";
import { SwitchExpressionContext } from "./Java20Parser.js";
import { ConstantExpressionContext } from "./Java20Parser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Java20Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class Java20ParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Java20Parser.start_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_?: (ctx: Start_Context) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeIdentifier?: (ctx: TypeIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unqualifiedMethodIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnqualifiedMethodIdentifier?: (ctx: UnqualifiedMethodIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.contextualKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContextualKeyword?: (ctx: ContextualKeywordContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.contextualKeywordMinusForTypeIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContextualKeywordMinusForTypeIdentifier?: (ctx: ContextualKeywordMinusForTypeIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.contextualKeywordMinusForUnqualifiedMethodIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContextualKeywordMinusForUnqualifiedMethodIdentifier?: (ctx: ContextualKeywordMinusForUnqualifiedMethodIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.numericType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericType?: (ctx: NumericTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.integralType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegralType?: (ctx: IntegralTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.floatingPointType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatingPointType?: (ctx: FloatingPointTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.referenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceType?: (ctx: ReferenceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.coit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoit?: (ctx: CoitContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassType?: (ctx: ClassTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.interfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceType?: (ctx: InterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVariable?: (ctx: TypeVariableContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.dims`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDims?: (ctx: DimsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeParameterModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterModifier?: (ctx: TypeParameterModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.additionalBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionalBound?: (ctx: AdditionalBoundContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentList?: (ctx: TypeArgumentListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.wildcard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcard?: (ctx: WildcardContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.wildcardBounds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcardBounds?: (ctx: WildcardBoundsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.moduleName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleName?: (ctx: ModuleNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.packageName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageName?: (ctx: PackageNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.packageOrTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.expressionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionName?: (ctx: ExpressionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodName?: (ctx: MethodNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.ambiguousName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmbiguousName?: (ctx: AmbiguousNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.ordinaryCompilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinaryCompilationUnit?: (ctx: OrdinaryCompilationUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.modularCompilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModularCompilationUnit?: (ctx: ModularCompilationUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.packageModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageModifier?: (ctx: PackageModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.singleTypeImportDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleTypeImportDeclaration?: (ctx: SingleTypeImportDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeImportOnDemandDeclaration?: (ctx: TypeImportOnDemandDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.singleStaticImportDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStaticImportDeclaration?: (ctx: SingleStaticImportDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.staticImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticImportOnDemandDeclaration?: (ctx: StaticImportOnDemandDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.topLevelClassOrInterfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelClassOrInterfaceDeclaration?: (ctx: TopLevelClassOrInterfaceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.moduleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDeclaration?: (ctx: ModuleDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.moduleDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDirective?: (ctx: ModuleDirectiveContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.requiresModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequiresModifier?: (ctx: RequiresModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.normalClassDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassModifier?: (ctx: ClassModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterList?: (ctx: TypeParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classExtends`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassExtends?: (ctx: ClassExtendsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classImplements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassImplements?: (ctx: ClassImplementsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.interfaceTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceTypeList?: (ctx: InterfaceTypeListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classPermits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassPermits?: (ctx: ClassPermitsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.fieldModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldModifier?: (ctx: FieldModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.variableDeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorList?: (ctx: VariableDeclaratorListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unannType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannType?: (ctx: UnannTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unannPrimitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannPrimitiveType?: (ctx: UnannPrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unannReferenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannReferenceType?: (ctx: UnannReferenceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannClassOrInterfaceType?: (ctx: UnannClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.uCOIT`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUCOIT?: (ctx: UCOITContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unannClassType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannClassType?: (ctx: UnannClassTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unannInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannInterfaceType?: (ctx: UnannInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unannTypeVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannTypeVariable?: (ctx: UnannTypeVariableContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unannArrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannArrayType?: (ctx: UnannArrayTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.methodModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodModifier?: (ctx: MethodModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.methodHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodHeader?: (ctx: MethodHeaderContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult?: (ctx: ResultContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.methodDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclarator?: (ctx: MethodDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.receiverParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiverParameter?: (ctx: ReceiverParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.variableArityParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableArityParameter?: (ctx: VariableArityParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.throwsT`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowsT?: (ctx: ThrowsTContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.exceptionTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionTypeList?: (ctx: ExceptionTypeListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.exceptionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionType?: (ctx: ExceptionTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.instanceInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceInitializer?: (ctx: InstanceInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.staticInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticInitializer?: (ctx: StaticInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.constructorModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorModifier?: (ctx: ConstructorModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.constructorDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclarator?: (ctx: ConstructorDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.simpleTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTypeName?: (ctx: SimpleTypeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.constructorBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorBody?: (ctx: ConstructorBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.explicitConstructorInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.enumBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBody?: (ctx: EnumBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.enumConstantList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantList?: (ctx: EnumConstantListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.enumConstantModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantModifier?: (ctx: EnumConstantModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.recordDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordDeclaration?: (ctx: RecordDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.recordHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordHeader?: (ctx: RecordHeaderContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.recordComponentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordComponentList?: (ctx: RecordComponentListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.recordComponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordComponent?: (ctx: RecordComponentContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.variableArityRecordComponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableArityRecordComponent?: (ctx: VariableArityRecordComponentContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.recordComponentModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordComponentModifier?: (ctx: RecordComponentModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.recordBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordBody?: (ctx: RecordBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.recordBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordBodyDeclaration?: (ctx: RecordBodyDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.compactConstructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactConstructorDeclaration?: (ctx: CompactConstructorDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.normalInterfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.interfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceModifier?: (ctx: InterfaceModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.interfaceExtends`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceExtends?: (ctx: InterfaceExtendsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.interfacePermits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfacePermits?: (ctx: InterfacePermitsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.constantDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclaration?: (ctx: ConstantDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.constantModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantModifier?: (ctx: ConstantModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.interfaceMethodModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.annotationInterfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationInterfaceDeclaration?: (ctx: AnnotationInterfaceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.annotationInterfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationInterfaceBody?: (ctx: AnnotationInterfaceBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.annotationInterfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationInterfaceMemberDeclaration?: (ctx: AnnotationInterfaceMemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.annotationInterfaceElementDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationInterfaceElementDeclaration?: (ctx: AnnotationInterfaceElementDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.annotationInterfaceElementModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationInterfaceElementModifier?: (ctx: AnnotationInterfaceElementModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.normalAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalAnnotation?: (ctx: NormalAnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.elementValuePairList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairList?: (ctx: ElementValuePairListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.elementValueList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueList?: (ctx: ElementValueListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.markerAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMarkerAnnotation?: (ctx: MarkerAnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.singleElementAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleElementAnnotation?: (ctx: SingleElementAnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.variableInitializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializerList?: (ctx: VariableInitializerListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.blockStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatements?: (ctx: BlockStatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.localClassOrInterfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalClassOrInterfaceDeclaration?: (ctx: LocalClassOrInterfaceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.localVariableType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableType?: (ctx: LocalVariableTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.statementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementNoShortIf?: (ctx: StatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.statementWithoutTrailingSubstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementWithoutTrailingSubstatement?: (ctx: StatementWithoutTrailingSubstatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.emptyStatement_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement_?: (ctx: EmptyStatement_Context) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.labeledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStatement?: (ctx: LabeledStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.labeledStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStatementNoShortIf?: (ctx: LabeledStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpression?: (ctx: StatementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.ifThenStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenStatement?: (ctx: IfThenStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.ifThenElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseStatement?: (ctx: IfThenElseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.ifThenElseStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseStatementNoShortIf?: (ctx: IfThenElseStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.assertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStatement?: (ctx: AssertStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.switchBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlock?: (ctx: SwitchBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.switchRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchRule?: (ctx: SwitchRuleContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.caseConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseConstant?: (ctx: CaseConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.whileStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatementNoShortIf?: (ctx: WhileStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.forStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatementNoShortIf?: (ctx: ForStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.basicForStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicForStatement?: (ctx: BasicForStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.basicForStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicForStatementNoShortIf?: (ctx: BasicForStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.statementExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpressionList?: (ctx: StatementExpressionListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.enhancedForStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForStatement?: (ctx: EnhancedForStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.enhancedForStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForStatementNoShortIf?: (ctx: EnhancedForStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.synchronizedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynchronizedStatement?: (ctx: SynchronizedStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.catches`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatches?: (ctx: CatchesContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.catchFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchFormalParameter?: (ctx: CatchFormalParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.tryWithResourcesStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryWithResourcesStatement?: (ctx: TryWithResourcesStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.resourceSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.resourceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceList?: (ctx: ResourceListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.variableAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAccess?: (ctx: VariableAccessContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.yieldStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStatement?: (ctx: YieldStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typePattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePattern?: (ctx: TypePatternContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.primaryNoNewArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray?: (ctx: PrimaryNoNewArrayContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.pNNA`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPNNA?: (ctx: PNNAContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassLiteral?: (ctx: ClassLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classInstanceCreationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassInstanceCreationExpression?: (ctx: ClassInstanceCreationExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unqualifiedClassInstanceCreationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnqualifiedClassInstanceCreationExpression?: (ctx: UnqualifiedClassInstanceCreationExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.classOrInterfaceTypeToInstantiate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceTypeToInstantiate?: (ctx: ClassOrInterfaceTypeToInstantiateContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.arrayCreationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.arrayCreationExpressionWithoutInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreationExpressionWithoutInitializer?: (ctx: ArrayCreationExpressionWithoutInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.arrayCreationExpressionWithInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreationExpressionWithInitializer?: (ctx: ArrayCreationExpressionWithInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.dimExprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimExprs?: (ctx: DimExprsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.dimExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimExpr?: (ctx: DimExprContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.arrayAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccess?: (ctx: ArrayAccessContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.fieldAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAccess?: (ctx: FieldAccessContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.methodInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodInvocation?: (ctx: MethodInvocationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.methodReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodReference?: (ctx: MethodReferenceContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.pfE`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPfE?: (ctx: PfEContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.postIncrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.postDecrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.preIncrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.preDecrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.unaryExpressionNotPlusMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.castExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.leftHandSide`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftHandSide?: (ctx: LeftHandSideContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.lambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameters?: (ctx: LambdaParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.lambdaParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameterList?: (ctx: LambdaParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.lambdaParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameter?: (ctx: LambdaParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.lambdaParameterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameterType?: (ctx: LambdaParameterTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.lambdaBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBody?: (ctx: LambdaBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.switchExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExpression?: (ctx: SwitchExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java20Parser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;
}


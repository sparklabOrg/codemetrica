import { ParserRuleContext } from "antlr4";

export function visitWith<T>(this: any, VisitorClass: new () => { visit: (ctx: ParserRuleContext) => void }): T[] {
    const visitor = new VisitorClass();
    visitor.visit(this.ctx);
    return visitor as unknown as T[];
}
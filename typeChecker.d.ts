export default class TypeChecker {
    isType(value: any, type: any): boolean;
    isString(input: string): boolean;
    isNumber(input: number): boolean;
    isFunction(input: Function): boolean;
    isArray(input: any[]): boolean;
    isNull(input: null): boolean;
    isUndefined(input: undefined): boolean;
    isError(input: any): boolean;
    isPromise(input: Promise<any>): boolean;
    isMap(input: Map<any, any>): boolean;
    isObject(input: Object): boolean;
    isAsyncFunction(input: any): boolean;
}

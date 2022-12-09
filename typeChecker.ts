export default class TypeChecker {

    isType(value: any, type: any) {
        return typeof value === type;
    }

    isString(input: string) {
        return this.isType(input, 'string');
    }

    isNumber(input: number) {
        return this.isType(input, 'number');
    }

    isFunction(input: Function) {
        return typeof input === 'function';
    }

    isArray(input: any[]) {
        return Array.isArray(input);
    }

    isNull(input: null){
        return input === null;
    }

    isUndefined(input: undefined){
        return input === undefined;
    }

    isError(input: any){
        return input instanceof Error;
    }

    isPromise(input: Promise<any>){
        return input instanceof Promise;
    }

    isMap(input: Map<any, any>){
        return input instanceof Map;
    }

    isObject(input: Object) {
        return typeof input === 'object' && !Array.isArray(input);
    }

    isAsyncFunction(input: any) {
        return input[Symbol.toStringTag] === "AsyncFunction";
    }
    
}
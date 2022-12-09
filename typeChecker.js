export default class TypeChecker {
    isType(value, type) {
        return typeof value === type;
    }
    isString(input) {
        return this.isType(input, 'string');
    }
    isNumber(input) {
        return this.isType(input, 'number');
    }
    isFunction(input) {
        return typeof input === 'function';
    }
    isArray(input) {
        return Array.isArray(input);
    }
    isNull(input) {
        return input === null;
    }
    isUndefined(input) {
        return input === undefined;
    }
    isError(input) {
        return input instanceof Error;
    }
    isPromise(input) {
        return input instanceof Promise;
    }
    isMap(input) {
        return input instanceof Map;
    }
    isObject(input) {
        return typeof input === 'object' && !Array.isArray(input);
    }
    isAsyncFunction(input) {
        return input[Symbol.toStringTag] === "AsyncFunction";
    }
}

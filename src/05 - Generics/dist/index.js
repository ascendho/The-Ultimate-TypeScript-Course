"use strict";
var _a;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 'a');
console.log(pair);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers = ArrayUtils.wrapInArray('1');
console.log(numbers);
function fetch(url) {
    if (url)
        return { data: null, error: null };
    else
        return { data: null, error: "url is invalid" };
}
let result = fetch('url');
console.log((_a = result.data) === null || _a === void 0 ? void 0 : _a.title);
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    return value;
}
console.log(echo(new Customer('A')));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() {
    }
}
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
//# sourceMappingURL=index.js.map
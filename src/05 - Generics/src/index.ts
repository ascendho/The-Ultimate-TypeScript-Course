/* Understanding the Problem */

/* Generic Classes */

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {
    }
}

let pair = new KeyValuePair('1', 'a');

console.log(pair);

/* Generic Functions */

class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value];
    }
}

let numbers = ArrayUtils.wrapInArray('1');

console.log(numbers);

/* Generic Interfaces */

interface Result<T> {
    data: T | null,
    error: string | null

}

function fetch<T>(url: string): Result<T> {
    if (url)
        return {data: null, error: null};
    else
        return {data: null, error: "url is invalid"};
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

let result = fetch<Product>('url');

console.log(result.data?.title);

/* Generic Constraints */

class Person {
    constructor(public name: string) {
    }
}

class Customer extends Person {

}

function echo<T extends Person>(value: T): T {
    return value;
}

console.log(echo(new Customer('A')));

/* Extending Generic Classes */

interface Product {
    name: string,
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
}

// Pass on the generic type parameter

class CompressibleStore<T> extends Store<T> {
    compress() {
    }
}

// Restrict the generic type parameter

class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

// Fix the generic type parameter

class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}








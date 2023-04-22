"use strict";
var _a;
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => {
    },
    resize: () => {
    }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
function render(document) {
    if (typeof document === 'string')
        console.log(document.toUpperCase());
    if (document instanceof Function)
        console.log(document.name);
}
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
    }
}
processEvents();
//# sourceMappingURL=index.js.map
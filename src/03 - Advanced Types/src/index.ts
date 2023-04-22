/* Type Aliases */

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
}

/* Union Types */

function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;

}

/* Intersection Types */

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {
    },
    resize: () => {
    }
}

/* Literal Types */

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

/* Nullable Types */

function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}

greet(undefined);

/* Optional Chaining */
type Customer = {
    birthday?: Date,
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');

/* Nullish Coalescing Operating */

let speed: number | null = null;
let ride = {
    //  Falsy (undefined, null, '', false, 0)
    //  Nullish coalescing operator
    //  if speed is not null or undefined
    speed: speed ?? 30
}

/* Type Assertions */

// let phone = document.getElementById('phone') as HTMLInputElement;
// let phone = <HTMLInputElement>document.getElementById('phone');

// console.log(phone.value);

/* The unknown Type */

function render(document: unknown) {
    // Narrowing
    if (typeof document === 'string')
        console.log(document.toUpperCase());

    if (document instanceof Function)
        console.log(document.name);

}

/* The never Type */

// use never return type to avoid unreachable code
function reject(message: string): never {
    throw new Error(message);
}

function processEvents(): never {
    while (true) {
        // Read a message from a queue
    }
}

processEvents();

// below will be unreachable
// console.log('Hello World');
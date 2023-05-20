interface Square {
    color: string;
    width: number;
}

type Animal = {
    name: string;
}
type Cat = {
    // name: number;
    age: number;
} & Animal;

type human = {
    gender: 'M' | 'F'
} & Student;

interface Student {
    name: string;
}

interface Teacher extends Student {
    age: number;
    // name: number;
}

let student: Student = { name: 'song' };
let teacher: Teacher = { name: 'min', age: 30 };

let cat: Cat = { name: 'cat', age: 3};
// let cat: Cat = { name: 5 as never}


let man: human = {gender: 'M', name: 'min'};

//#### 숙제 ####
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
let product1: Product = { 
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone']
}

interface Cart  {
    product: string;
    price: number;
}
let product2: Cart[] = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
]
interface newCart extends Cart{
    card: boolean;
}
let product3: newCart[] = [
    { product: '청소기', price: 7000, card: true },
    { product: '삼다수', price: 800, card: false },
]

interface MathObj {
    plus(a: number, b: number): number;
    minus(a: number, b: number): number;
}

let run: MathObj = {
    plus(a: number, b: number): number {
        return a + b;
    },
    minus(a: number, b: number): number {
        return a - b;
    }
}
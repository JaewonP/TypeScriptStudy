export{}
//cmd열어서
//tsc main.ts  컴파일
//tsc main --watch  변경이 발생하면 계속 컴파일
//node js 파일 생성하기 -> node main.js
let message = 'Welcome back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'Convolution';
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vosjw';
let sentence: string = `My name is ${name}
i am a beginner in typescript`;
console.log(sentence);

let n:null = null;
let u:undefined = undefined;

let isNew: boolean =null;
let myName: string =undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];


let person: [string, number, number] = ['Chris', 22, 35];

enum Color {Red = 5, Green ,Blue};
let c:Color = Color.Green;
let r:Color = Color.Red;
console.log(c);
console.log(r);

let randomValue: any = 10;
randomValue = true;
randomValue ='Vishw';

let myVariable:any = 10;

function hasName(obj: any): obj is {name: string}{
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVariable)) {
    console.log(myVariable.name);
}
console.log(myVariable.name);


let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;


function add(num1: number, num2: number=10) : number {
    if(num2)
        return num1 + num2;
    else
        return num1;
}

add(5,10);
add(5)

interface Person {
    firstName: string;
    lastName?: string;

}

function fullName2(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}



function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p ={
    firstName: 'Bruce',
    lastName: 'liny'
}

fullName2(p);

class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('vvv');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, prameters

// Primitives

let age: number ;
age= 12 ;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;



// More complex types

let hoibbies: string[];
hoibbies = ['Sports','Cooking'];


type Person =  {
    name: string; 
    age: number
}

let person: Person;

person = {
    name: 'Max',
    age: 34
};

let people: Person[];

// Type  infrence

let course: string | number = 'React - Complete Guide';
course = 1223;


console.log(course);

// Functios & types

function add(a: number,b: number){
    return a + b;
}

function print(value: any){
    console.log(value);
}
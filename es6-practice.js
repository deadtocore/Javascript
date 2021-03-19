// Object Creation or Declaration.
let employee = {
    employeeId :  101,
    employeeName : "Aman",
    employeeSalary : 35000.520
};

// Array Creation
let colors = ["Red", "Blue", "Green"];

// Iterating through Arrays.

// Using For loop.
for(let index = 0; index < colors.length; index++) {
    console.log(colors[index]);
}

// Using For In Loop.
for(let index in colors) {
    console.log(colors[index]);
}   

// Using For Of Loop.
for(let element of colors) {
    console.log(element);
}

// It will print object only not property and its values.
console.log(`Employee Details ${employee}`); 

// for printing all with a message either go for (.) operator or directly print using (,).
console.log("Employee Details : ", employee);

// Destructuring of Arrays.
let [color1, color2, color3] = colors;
console.log(color1);
console.log(color2);
console.log(color3);

// If we want only few values, for this uses is comma is very essential to skip the property we do not want.
let [color11] = colors;
console.log(color11);

let [, ,  color33] = colors;
console.log(color33);

let [, color22, ] = colors;
console.log(color22);

// We can use rest parameter here also, while printing it will print length of that variable too.
let[color111, ...remColors] = colors;
console.log(color111); 
console.log(remColors);

// Destructuring Objects. We have to curly brackets here and under that variable name should match with object properties we will get undefined as result.
/*let {employeeId, employeeName, employeeSalary} = employee;
console.log(employeeId);
console.log(employeeName);
console.log(employeeSalary);

// Printing using backtick.
console.log(`Employee Id : ${employeeId}, Employee Name : ${employeeName}, Employee Salary : ${employeeSalary}`);

// Printing using comma.
console.log("Employee Name : ", employeeName);*/

// You can use rest operator here too.
let {employeeId, employeeName, employeeSalary} = employee;
console.log("Employee Id", employeeId);

// NOTE => We can not redeclare variable again in a same scope.

// Arrow function.
let greet = name => `Good Morning ${name}`;
console.log(greet("Aman"));

let sum = (firstNumber, secondNumber) => {
    let sum;
    sum = firstNumber + secondNumber;
    console.log("Sum Of The Given Numbers : ", sum);
};

// Function call.
sum(10,20);

// Normal Function.
function greet1(name) {
    return `Welcome ${name}`;
}

console.log(greet1("Singh"));

// Another way to write normal function by giving function name using assignment operator.
// Used new ES6 feature default value to a parameter.
let mul = function(firstNumber, secondNumber = 10) {
    let mul = firstNumber * secondNumber;
    console.log(`Multiplication : ${mul}`);
}

mul(10);
mul(10,20);

// const keyword.
const anyVariable = 20;
console.log(anyVariable);

// Rest parameter.
// If we wanted to mix rest parameter with other parameters than rest parameter should written in last.
function sayHello(...names) {
    for(let name of names) {
        console.log(`Hello, ${name}`);
    }
}

sayHello("Aman", "Aniket", "Aditya", "Ayush");

// Normal printing.
console.log(colors);

// Spread operator.
console.log(...colors);

// Comparison operator.
// Loose Comparison or value comparison (Type conversion is here before comparison).
if(true == 1) {
    console.log("true and 1 are equal");
}

// Tight comparison or type and value comparison (No type conversion), for negation => !==
if(true === 1) {
    console.log("true and 1 are equal");
} else {
    console.log("true and 1 are not equal");
}
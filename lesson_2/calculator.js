
function calculator() {

    let num1;
    let num2;
    let operation;
    let numResult;

    const readline = require('readline-sync');

    console.log("Welcome to Calculator!");
    console.log("Please enter the first number");
    num1 = readline.question();
    console.log("Please enter the second number");
    num2 = readline.question();
    console.log("Please enter the operation '+' or '-' or '/' or '*'");
    operation = readline.question();

    if (num1 === "" || num2 === "" || operation === "") {
        console.log("Please enter all the fields");
        calculator();
    } else if (operation === "+") {
        numResult = Number(num1) + Number(num2);
    } else if (operation === "-") {
        numResult = Number(num1) - Number(num2);
    } else if (operation === "/") {
        numResult = Number(num1) / Number(num2);
    } else if (operation === "*") {
        numResult = Number(num1) * Number(num2);
    }

    if (numResult === undefined) {
        console.log("\nPlease enter all the fields correctly\n");
    }else {
        console.log(`The result is ${numResult}`);
    }
    again();

}

function again() {
    const readline = require('readline-sync');

    let again;

    console.log("Would you like to calculate again? 'y' or 'n'");
    again = readline.question();
    
    if (again === "y") {
        calculator();
    }else if (again === "n"){
        console.log("BYE");
    }else{
        console.log("Please enter all the fields");
        again();
    }
    }

calculator();





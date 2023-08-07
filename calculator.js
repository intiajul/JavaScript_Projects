console.log("Select an option: \n1. Add. \n2. Subtract. \n3. Multiplication. \n4. Divide.");

let n1 = prompt("Enter first number:");
let n2 = prompt("Enter second number:");
let operation = prompt("Choose an operation!");
let result = null;

n1 = parseInt(n1);
n2 = parseInt(n2);
operation = parseInt(operation);

let n1Con = isNaN(n1);
let n2Con = isNaN(n2);
let operationCon = isNaN(operation);

if (n1Con || n2Con || operationCon) {
    console.log("Invalid input");
} else {
    switch (operation) {
        case 1:
            result = n1 + n2;
            break;
        case 2:
            result = n1 - n2;
            break;
        case 3:
            result = n1 * n2;
            break;
        case 4:
            result = n1 / n2;
            break;
        default:
            break;
    }
    if (result == null) {
        console.log("No result!");

    } else {
        console.log("result: " + result);
}
}

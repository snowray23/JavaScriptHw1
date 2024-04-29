// Task 1: Declare variables to store two numeric values for performing arithmetic operations.
let num1; 
let num2;
// Task 2: Assign sample numeric values to the variables declared in Task 1
num1 = 20
num2 = 9

//Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(`The sum is : ${sum}`)
console.log(`The difference is : ${difference}`)
console.log(`The product is : ${product}`)
console.log(`The quotient is : ${quotient}`)

//Task 4: Explore assignment operators and update the values of variables.

num1 += 10
num2 += 8
console.log(`updated num1: ${num1}`)
console.log(`updated num2: ${num2}`)


// Task 5: Use comparison operators
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2", num1 > num2);
console.log("Is num1 not equal to num2?", num1 != num2);


// Task 6: Apply logical operators
let isPositive = num1 > 0 && num2 >0;
let isEven = num1 / 2 == 0 || num2 / 2 == 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
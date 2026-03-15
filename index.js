console.log("Hello World");
console.log("another line");

// variables and constants
let fullName = "Manish Khadka";
console.log(fullName); // prints value of fullName

fullName = "Khadka Manish";
console.log(fullName); // prints updated value

let emailAddress = ""; // camelCase
let EmailAddress = ""; // PascalCase
let email_address = ""; // snake_case
let EMAIL_ADDRESS = ""; // SCREAMING_SNAKE_CASE

// hoisting
var address;
console.log(address); // undefined
address = "Kathmandu";
console.log(address); // Kathmandu

// block scope
let a = 20;
{
    let a = 10;
    console.log(a); // 10
}
console.log(a); // 20

// constants
const ROLE = "Admin";
console.log(ROLE); // Admin
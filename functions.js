// function 
// function name should be unique
// should be alpha numeric and start with alphabet
// can use only _ underscore as special character in the function
// always use relivant function name

// function name shoukd be always relevant
// function might or might not recieve parameteres / argurments=> scope of oprameters is always block(functional)
// a function might have return statement
// a function can accept anything a an input (parameter ) and ....

// user defined function
console.log(addTwoNumbers(10, 25)) // hoisting
function addTwoNumbers(a, b){
    // body
    // sum number
    return a+b  // return
}  

let result = addTwoNumbers(10, 20)
console.log(result)

function abc(a,b){
    // body
    console.log(a+b)
}
let result2 = abc(10,20)
console.log(result2)// undefined




// arrow functions
// hoisting aint allowed 
//console.log(addTwoNumbs(1,2))  // error
//const addTwoNumbs= (a, b)=> {
  //  return a+b
//}
//let result3= addTwoNumbs(1,2)
//console.log(result3)


// develop a function to get the sum of n natural numbers
// i.e if n= 5=> 1+2+3+4=5=15, N=10 =>55

const sumOfN = (n)=> {
    let sum= 0
    for (let i=1; i<= n; i++){
        sum += i
    }
    return sum
}
console.log(sumOfN(10)) // 55

//
const addTwoNumbs= (a, b)=> {
    return a+b // num+undefined => NaN
}
let result3= addTwoNumbs(1) // a=1, b = 
console.log(result3) //3

//
const addTwoNums= (a, b)=> {
    return a+b
}
let result4= addTwoNums(1)// a= 1 , b=
let result5=  addTwoNums(1,2) //a=1, b= 2
console.log(result4) // 1
console.log(result5) //3

const addTwoNo= ()=> {
    return a+b
}

let a=10
let b=20

let result6= addTwoNo()

console.log(result6) // 30


// function functionName(parameter1, parameter2, ....){ // hoistng can be performed
// bodydefination
// return<any> // optional
//}
// arrow function // hoisting cant be performed
// const/var/let functionName = (parameter1, 2, ...)=>{
    // body defination 
    // return <any>  // optional
    //}
    // const/ var/ let returnValue = functionName(arg1, arg2, ....)

    // object assignment
    // const/vat/let objectName= {
    // functionName (param1,pram2, ...){general function}
    //    functionName (param1,pram2, ...)=> { // arrow function, scope  block/functiononly}
    // functionName (param1,pram2, ...) { // general function assignment}

//}
// call
// objectName.functionName(arg1, arg2, ...)
console.log("i am here")

let str= "i am here"
str = str.toUpperCase()

console.log(str) // i am here


// clouser, callback, promise



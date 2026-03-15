let i= 1 //(if changed will not run)

// do-while

do{
console.log(i)  // output 1
i++             // i=2
} while(i<=10)

    // 11

    // while
i=1;
while(i<= 10){
    console.log(i)
    i++
}

//while(false) {
    // skipped
//}

// for
 for(let i = 10; i<= 10; i++){
    console.log(i)
 }

 // find the factorial of 10 
 // 10= 1*2*3*4*5*6*7..
let n = 10
let factorial= 1;
 for(let i= 1; i<=n; i++){
    factorial *= i;
 }
 console.log(factorial)

 // find the sum for first 20 even numbers

 let o = 0
 for(let i=1; i<= 20; i++){
    o += i*2
 }
 console.log(o)

 let sum= 0
 for (let i=0; i<=20; i++){
    if (i% 2 === 0){
        sum += 1
    }
 }


 // pattern
 /**
  * 
  * *
  * * * 
  * * * *
  * * * * *
  * 
  */
 for (let i= 1; i<= 5; i++){
    let toPrint = ""
    for (let j=1; j<=i; ++j){
        toPrint += "*    "
    }
    console.log(toPrint)
 } 
 
 // data
 //iterables, array, objects
 //let products= ["", 123, null, true, [], ........]
 let products = [
    {
        name:"iPhone",
        price: 10000,
        discount: 10
    },{
        name: "macbook",
        price: 90000,
        discount: 7
    },{
        name: "Samsung",
        price: 120000,
        discount: 7
    }
]
console.log(products)
let size= products.length // number of elements in an array

for (let i= 0; i< size; i++){
    products[i]["discountAmt"]=(products[i].price*products[i].discount)/100
    products[i]["afterdiscount"]= products[i].price-products[i]["discountAmt"]

}
console.log(products)


// for in loop 
// for of loop

// coerision
let numb = "123"

let numb1 = 123

const result = +numb + +numb1  // 123123
// let str =!!"1"
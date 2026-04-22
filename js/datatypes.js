/**
 * primitive
 * string, number, boolean, null, symbol, undefined
 * derived
 * array, objectes, json, function
 */

// string, '',"",
let a="manish khadka"
let b='manish khadka'

// performance string
let c=`manish
khadka`


console.log(a)
console.log(b)
console.log(c)

let d = 123
let e = 1.23
let f = 1e23
let g = Infinity // token => TTL 
let h = NaN   // NaN => number+ undefined => NaN, Data 
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)

// boolean
let i = true;
let j = false;
// null
let k = null;

// undefined (default) =>
    let l // undefined
// after value assignment, the vaariable eill be alocated to memory
console.log(i)
console.log(j)
console.log(k)
console.log(l)
// symbol
// less used
let m = Symbol('id')
let n = Symbol('id')
console.log(m === n)

 // false

// derived data types
// array
let o = ["Value", "Value1"]
let p = new Array() // array constructor
console.log(o)
console.log(p)

//object / json
let q= {
    key: "Value",
    key: "Value2"
}

q[m] = "Value1"
q[n] = "Value2"

console.log(q)  //(key: "value2", [symbol('id')]: "value1", [symbol()] )
console.log(q[m]) // value1
console.log(q[n]) // value 2

//user info
let myProfile = {
    name: "Manish khadka",
    email:'jjjj',
    phone: 333
}
console.log(myProfile)
// functions
const r = function() {}
const s = () => {}
console.log(r)
console.log(s)

// name, price, discount, category, description, brand
let product={
    name: "shoes",
    price: 999,
    discount: 99,

     //discountAmount: 99
    // discountInPercent: 10,
    category: "shoes",
    description: "comfortable and cheap",
    brand: "xD"
}
console.log(product)

const dataJsn = JSON.stringify(data) //string
console.log(dataJsn) // string

const dataConv = JSON.parse(dataJsn) // array
console.log(dataConv)
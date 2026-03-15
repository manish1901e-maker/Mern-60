/**
 * a. arthematic or mathematical operators
 * +, -, *, /, %
 * 1. increment or decrement operators
 * ++,--
 * b. aasignment operators
 * =, +=,-=,*=,%=
 * c. string/concatination operators
 * +
 * d. comparision operators
 * <,>, <=, >=,==, !=, ===,,!==
 * e. logical operators
 * &&,||,!
 * f. conditional operators (VVI, React)
 * - single line if-else statement
 * (expression) ? .... true : .... false;
 * g. Nullish colleaching operator
 * const data = value ?? defaultValue
 * h. Template Literal
 * `$[jscode]
 * i. Destructure
 * // array or object
 * j. spread and rest
 * ... 
 */
let name = "manish"
let template = `Dear ${name}`






// let age = user.age ? user.age :0
// let age = user.age ?? 0

let a = 10
let b = 10

let c = a+b
let d = a-b
let e = a*b
let f = a/b 
let g= a%b // remainder

console.log(c) 
console.log(d)
console.log(e)
console.log(f)
console.log(g)

// increment or decrement
a=10;

a=a+1

a++

++a

// a=>13
console.log(a++)
// a = 14
console.log(++a)

// assignment operators
a=10
b=10

a=a+1
a++
++a
a+=1

a=10
b='10'
// comparision
// compares only the value
console.log(a<b)
console.log(a>b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a!=b)

// compares value with data types
console.log(a === b)
console.log(a !==b)

let userName = "manish"
let lastName = "khadka"

const result = a+b  // not sum but will connect

console.log(result)  // 1010

console.log(a-b)  //0
console.log(a*b) // 100
console.log(a/b) //1
console.log(a%b)//0

console.log(userName + lastName)

// logical operations
// true or false
// {(a==b )&& (a!==b) && true}
// allm expression should be true to &  to be true

// {!(a==b)|| (a !a!==b)}
// (!(a==b)) // !true => false, !false =>true

// conditional operator
const age = 20
const canVote = (age >= 18) ? "Yes" : "no"

console.log(canVote)

// nullis coleashing
// const value = null ?? 10;  // value => 10
// const value = null || 10  // value =>10
const value = 0 ?? 10  // value = 0
const value1 = 0 || 10 // value = 10, 0 => false value

// optional chaining (?.)
// object

let userObj = {
    name: ""  // optional
}

console.log(userObj?.name)  // value / undefined

// index = 0
const flowers = ["rose", "lily", "lotus"]

    //let flower1 = flower[0]
    // let flower2= flower[1]
    // let flower3= flower[2] is eq to ---

    //  o        1        2
    // aray destruction
    let [flower1, flower2, flower3] = flowers
    console.log(flowers)

    let userInfo = {
        name:"User name here",
        fulName:"name",
        email: "email",
        address: "ktm",
        phone: 7855578,
        bio: "this is bio"

    }
// const fullname = user info.fullname
// const add = userinfo.add'
//const bio = userinfo.bio
// remaining obj
const {name: fulName, address, bio}=  userInfo

console.log(fulName, address, bio)



const userInfoObj = userInfo
// deepcopy [ const userInfoObj = userInfo]
// const jsonstr = JSON.stringify(userInfo) // obj => json string
// const userInfoObj= Json.parse(jsonstr) // json string => obj
// const userInfoObj = JSON.phrase(JSON.stringify(userInfo));  // json string
userInfoObj.fulName = "value update"

console.log(userInfo)  // fullname: value update

// bitwise
//&, |
// 0100 &
// 0101
// 0100 // 4

// o0100 |
// 0101
//
//

console.log(4 & 5) //4

console.log (4 | 5)

// string template literal
const counter = 10
// let emailtemplate = "dear" + fulmname + ", you have "+counter+" "notifications."
let emailTemplate = `dear ${fulName},
you have ${counter} notification.`

console.log(emailTemplate) 
// dear username,
// you have 10 notifications


// control statements
// if-else
// else-if
// switch-case
//loops


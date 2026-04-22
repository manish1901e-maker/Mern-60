let fullName= "manish"
var emailAddress= "efniewafhi" as string

// strict binding

//fullname=123 // error

let a: string='';
let b: number = 123
let c: boolean = true;
let d: null=null
let e:undefined= undefined
let f: unknown
let g: [number, string, number] = [1,'2',3]  // typle

//union
let i: number| string| boolean= true

// array
let h: Array<number|string| Array<number| string| boolean>> = [1,2,3,4,'']

// type => function parameter, return statement
type jtype={
    name: string,
    email: string
}

// interface
interface Ij{
    name: string,
    email: string,
    role: Role | null   // optional property
}

//object
let j: jtype = {
    name: "",
    email: ''
}

// array object
const jList: Array<Ij>=[
    {
        name:"",
        email:"",
        role: Role.ADMIN // admin, user
    },
    {
        name: "",
        email:"",
        role: null
    },
]

function functionName(a: number, b: number): number{
    return a+b
}

const promBased = async(): Promise<string> =>{
    return""
    // throw"

}

function sum<T>(a, b){
    return a+b
}

console.log(sum<number>(10,20))  // 30

console.log(sum<string>("a","b"))  // ab

const lists={
    key: ""
}

interface Usern {
    name: string,
    email: string
}

let obj = {}as unknown as Usern 
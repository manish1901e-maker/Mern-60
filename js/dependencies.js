const foo =()=>{
    return 1;
}

const bar =(a)=>{
    if (a>0){
        return "positive"

    }else{
        return "negative"
    }
}
// async programming
let xyz = -1
let result = foo()
const barResult = bar(result)
console.log(barResult)  // positive
// generator function
// lazy function
//function genId(){
    //let i=1;
    //while(i<=3){
    //    yield i++
  //  }
//}

//const id = genId()
//console.log(id.next().value)
//console.log(id.next().value)
//console.log(id.next().value)


const fun1 = () =>{
    console.log("fun 1")
    cb ()  // fun2
}
const fun2 = () =>{
    console.log("fun 2")
}
const fun3 = () =>{
    console.log("fun 3")
    cb()  // fun2
}

fun1(fun2)
fun3(fun2)

// file handling
// .write (.. (err, succ))
//.listen(port, host, (err))
//.request(,, (err, response))
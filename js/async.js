/**setTimeout(() => {
    console.log(1)
}, 2000);
setTimeout(() => {
    console.log(2)
}, 1000);
setTimeout(() => {
    console.log(3)
}, 1500);

//const interval = setInterval(()=>{
  //  console.log(1)
//}, 1000)
/** 
const interval= setInterval(()=>{
    const Date= new Date()  // system date
    const strTime = `${date.getHours()}:${date.getMinutes()}
})  // unfinished
*/

// promise
//pending (operation)
//fulfill(sucess)- reject (err/exception) resolve and reject
//SetTimeout
/** 
const login=(username, password)=>{
    return new Promise((res,rej)=>{
    //validation
    //query
    //databuild
    //return respose;
    rej({
        error:""
    })
    

    })
}

// form username, password=> login click
   // success/resolve
   //error/exception/rejection

const loginResponse = login()  // pending return
console.log(loginResponse)
console.log(loginResponse.token)
*/
const login = async (username, password) =>{
    // promise resolve
    //return {(tokwn:"i am a promise resolve")}
    //promise reject
    
    throw{token:"i am a reject"}
}
const loginResponse = login()// pending return
//console.log(loginResponse)
//console.log(loginResponse.token)
loginResponse
  .then((resData)=>{
    console.log(resData)
  })
  .catch((exception)=>{
    console.log(exception)
  })
  .finally(()=>{
    console.log("iam always executed")
  })


  async function loginFunction(username, Password){
    //return{toke: "rtfgyuhji"}
    throw{message: "i am a rejection"}

  }
  (async ()=>{
    try{
        const result=await loginFunction("admin","admin")// await can only be used inside async function
    }catch(exception){
        console.log("handling from here", exception)
    
    }
  })()

  //write a function convertTemperature(temp, scale) that takes a number tempand a string scale ("c" or "f") 
  // if the scale is "c " convert the celcius temperature to fahrenheit using the formula (temp*9/5)+32 and return the result in promise 
  // if the scale is f convert farenheit to celcius using (temp - 32)*5/9
  //  if an invalid scale is pased throw the string invalid scale
  function convertTemperature(temp, scale) {
    return new Promise((resolve, reject) => {
        if (scale.toLowerCase() === "c") {
            // Celsius → Fahrenheit
            const fahrenheit = (temp * 9 / 5) + 32;
            resolve(fahrenheit);
        } else if (scale.toLowerCase() === "f") {
            // Fahrenheit → Celsius
            const celsius = (temp - 32) * 5 / 9;
            resolve(celsius);
        } else {
            // Invalid scale
            reject("invalid scale");
        }
    });
}
 
convertTemperature(0, "c")
    .then(result => console.log(result))  // 32
    .catch(err => console.log(err));

convertTemperature(212, "f")
    .then(result => console.log(result))  // 100
    .catch(err => console.log(err));

convertTemperature(100, "x")
    .then(result => console.log(result))
    .catch(err => console.log(err));  // "invalid scale"
// alternate
/**
 * (async()=>{
 * try {
 * const f= (await convertTemperature(0,'c'))
 * console.log(f)
 * console.log(await convertTemperature(0,'c'))
 * }catch(exception){
 * console.error(exception)
 * }
 * })()
 */
//better way ^


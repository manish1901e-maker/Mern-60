// typw script
// tmeperature conversion
// convert tmep (number, c or f)
  // c=> to celcius
  // f=> to farhenheit
  // f= (c*9/5)+32
  // c= (f-32)*5/9
  /** 
let celcius=32
let farhenheit= (celcius*9/5)+32
console.log(`the temperature is ${farhenheit} degrees farhenheit`)
farhenheit=110
celcius=(farhenheit-32)*5/9
console.log(`the temperature is ${celcius} degrees celcius`)
*/

function convertTemp(temp: number, scale: "c" | "f") {
    if(scale==='f'){
        return(temp*9/5)+32
    }else{
        return((temp-32)*5)/9
    }
   
  }
  
  // usage
  console.log(convertTemp(25, "f"))
  console.log(convertTemp(77, "c"))     
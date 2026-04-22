//const number1 = {1, 2, 3, 4}
//const number2 = {5, 6, 7, 8, 9, 10}

//const third = {...number1, ...number2}
//console.log(third) //{1,2,3,4,5,6,7,8,9,10}

// [1,2,3,4,5,6,7,8,9,10]

//const first =third [0]
//const second = third[1]
// const third = third[2]

//const [first, second, third_1, ...all]
//console.log(all) 


//const contactInfo={
  //  name= "username",
    //email= "email",
    //phone= "phone",
    //organiszation= "org"

//}

 // spread 
 //const userDetails = {
   // ...contactInfo
 //}
 // rest operators
 //const {name, email, ...rest} = userDetails;

//console.log(contactInfo)
//console.log(userDetails)

// control statements
  // expressions or decision making statements
  const age = 20

  //const canVote = (age >= 18) ? "yes" : "no"  // one liner if else statement
  if(age >= 18) {
      canVote = "yes"
  
  } else{
      canVote= "no"
  
  }
  console.log(canVote)
  
  const day = "wednesday"
  //friday => weekend
  // saturday or sunday => holiday
  // ... other => weekday
  
  if(day === 'friday'){
      console.log("weekend")
  } else if(day === 'saturday' || day === "sunday") {
      console.log("holiday")
  }else {
      console.log("weekday")
  }
  
  // switch
  switch(day) {
      //case "friday":
      //console.log("week day")
      //break;
      case "saturday":
      case "sunday":
      console.log("holiday")
      break;
      default:
          console.log(weekday)
          break;
  }
  
  const consumedElectricity= 450 // units
  // calculate bill amount if
  // for first units 50 units = 100 nrs
  // for next 50 units = nrs 5/unit
  // for next 100 units = rate is nrs 12/units 
  // next 100= 20/units 
  // 100 units = 28/units
  // and above = 35/unit
  let billAmount= 0
  if(consumedElectricity <= 50){
      billAmount= 100
  }else if(consumedElectricity <= 100){
      billAmount= 100 + (consumedElectricity - 50) *5
  
  }else if(consumedElectricity <= 200){
      billAmount = 100 + 50 * 5 + (consumedElectricity -100) *12
  }else if(consumedElectricity <= 300){
      billAmount = 100 + 50 * 5 + 100 * 12 + (consumedElectricity - 200)* 20
  }else if(consumedElectricity <= 400){
      billAmount = 100 + 50 * 5 + 100 * 12 + 100 * 20 + (consumedElectricity - 300)* 28
  }else{
      billAmount = 100 + 50 * 5 + 100 * 12 + 100 * 20 + 100 * 28 + (consumedElectricity - 400)* 35
  
  }
  console.log(billAmount)
  
  // 
  // if a software developer earns annually 50,00,000 what ill be the annual task amount paid by the developer if bracket is
  // for annual income of 6,00,000 = 1%
  // 2,00,000 = 10%
  /**3,00,000= 20%
   * 9,00,000= 30%
   * 3,00,000=36%
   * above = 39%
   */ //what eill be the annual tax to be paid
  
   const earning = 5000000
   let tax=0
   if(earning <= 600000){
      tax=1/100*600000
   }else if(earning <= 800000){
      tax=1/100*600000 + 10/100*800000
   }else if(earning <= 1100000){
      tax=1/100*600000 + 10/100*800000 + 20/100*1100000
   }else if(earning <= 2000000){
      tax=1/100*600000 + 10/100*800000 + 20/100*1100000 + 30/100*2000000
   }else{
      tax= 1/100*600000 + 10/100*800000 + 20/100*1100000 + 30/100*2000000 + (earning -2300000)* 0.39
   }
   console.log(tax)
  
   //loop
   // iteration
   // do-while while for for-in for-of
   // data=> array
   // array loop) ArrayData.map(),  ArrayData.filter(), ArrayData.forEach(), ArrayData.reduce()
   //
   // map(), forEach(), for(), ...
  
   
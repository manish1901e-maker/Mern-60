class User{
    name;
    #email;
    #password;

    constructor(_name, _email, _password){
        //1. cannot be an arrow function
        // 2. doesnot return, as well as cannot be asycn
        this.name=_name    // _ not compulsory
        this.#email=_email
        this.#password=_password

    }

    setEmail(_email){
        this.#email=_email
        // logic
    }

    getEmail(){
        // return new promise()
        return this.#email
    }
    
}

const userObj=new User("manish","ehfiuahfieh", "admin123")  // constructor
userObj.name = "manish"
userObj.setEmail("ehfiuahfieh")
console.log(userObj.getEmail())
// userObj.#email = "manishjdg;r"  // error



// create a class called student,
// assign name, email, scoreobtained via constructor
// using class based functions, get percentage and division if
// per>= 80= distinction
// per>= 60, per<80 = first division
// per>= 45, per<60 = second division
// per>=32, per< 45=   third division
// per<32 => sorry you failed

class Student {
    name;
    email;
    scoreobtained;
    #percentage;
  
    constructor(name, email, score) {
      this.name = name;
      this.email = email; 
      this.scoreobtained = score;
  
      this.#getPercentage()
    }
  
    #getPercentage() {
      this.#percentage = this.scoreobtained / 500 * 100
    }
  
    getDivision() {
      if (this.#percentage >= 80) {
        console.log("Distinction");
      } else if (this.#percentage >= 60) {
        console.log("First Division");
      } else if (this.#percentage >= 45) {
        console.log("Second Division");
      } else if (this.#percentage >= 32) {
        console.log("third Division");
      } else {
        console.log("Sorry! You are failed")
      }
    }
  }
  
  console.log(userObj.score)

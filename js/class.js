// incapulation
   // access modifier
// abstraction
//inheritance
//polymorphism


class User{
    name; 
    //private email        // class property
    #email;
    address;
    #phone;
    bio;
    #password;

    canLogin(){}
    setName(name){
        this.name=name   // functional property

    }  
    #getName=()=>{}
}


const userObj = new User();
console.log(userObj)  // properties function
userObj.name="manish"
userObj.email="manish1901e@gmail"
userObj.phone=678989
userObj.Obj="this is user details"


class Admin extends User{
    role='admin'
}
console.log(userObj)
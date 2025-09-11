//singleton
//Object.create // constructor method

//object literals

// const sym= Symbol("key1")

const User={
    name :"HADIA",
    "full-name":"Alam",// you can access this key only by method 1
    age :20,
    sym:"mykey1", // its datatype is string not symbol so if we want it as symbol then use [sym]
    address: "Gaggoo",
    email: "alam2@gmail.com"
}

// console.log(User["email"]);// method 1
// console.log(User.email);// method 2

// User.email="hadia@gmail.com",
// Object.freeze(User)
// User.email="hadia@chatgpt.com"
// console.log(User.email);

// User.greeting= function()
// {
//     console.log("Helloo World");
    
// }
// console.log(User.greeting());


User.greetingtwo= function()
{
    console.log(`Helloo World, ${this.name}`);
    
}
console.log(User.greetingtwo());
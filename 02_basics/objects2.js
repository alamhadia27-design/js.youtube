// more about objects
// singleton or constructor

const tinderuser= new Object()

tinderuser.id ="123abc"
tinderuser.name= "John"


//console.log(tinderuser);

const regularUser = {
    email:"z@gmil.com",
    full_name:{
        Userfullname:{
            firstname:"Zaira",
            lastname:"Fatima"
        }
    }
}

//console.log(regularUser.full_name.Userfullname);


const obj1 ={1: 'a', 2 :'b', 3: 'c'}
const obj2= {4: 'd', 5: 'e', 6: 'f'}

// const obj3= Object.assign({},obj1, obj2)// {} is target andother objects are source

const obj3 = {...obj1,...obj2}
//console.log(obj3);


/***** Objects inside an array ****/
const users = [
    {
        id:1,
        email:"baloch@gmil.com",
    },
    {
        id:1,
        email:"baloch@gmil.com",
    },
    {
        id:1,
        email:"baloch@gmil.com",
    }
]

users[1].email

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));

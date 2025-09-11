
function sayname(){
    console.log("H");
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("A");

}

// sayname()
// defining a function is called parameter
// function addition(num1,num2){
//     console.log(num1+num2);
    
// }

// // calling a function is arguments
// addition(3,4)
// const result =addition(3,4)
// console.log("Results is = ", result);


// function usermsg(username)
// {
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} Just Logged In`
// }

// //console.log(usermsg("HADIA"))

// console.log(loginUsermsg());


// function calculateprice(...num1){
//     return num1
// }

// console.log(calculateprice(300,400,500));

const user={
    name:"hadia",
    id:1
}

function handelObject(anyobject)
{
    console.log(`user is ${anyobject.name} and id is ${anyobject.id}`);
    
}

handelObject(user)


const Array=[200,500,700]

function returnsecval(getarr){
    return getarr[1]
}
console.log(returnsecval(Array));

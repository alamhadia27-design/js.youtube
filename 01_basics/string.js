const name = "Hadia "
const age = 20

//console.log(name + age); // not good


console.log(`My name is ${name} and I am ${age} years old`);

const gamename = new String("Shahmir")

console.log(gamename);


console.log(gamename[3]);

console.log(gamename.__prototype__);

console.log(gamename.length);

// You can use these methods too
//  toUpperCase ,toLowerCase, Concat

console.log(gamename.charAt('2'));

console.log(gamename.indexOf('i'));


const newS =gamename.substring(0,4) // 4 not included

console.log(newS);

const anotherS = gamename.slice(-8,4) //   Reverse order

console.log(anotherS);


const new1 = "   Eissa    "

console.log(new1);

console.log(new1.trim);  // No starting and ending spaces include 

// Two Types of trim 
// 1. starttrim
//  2. endtrim


// More Methods
// replace (to replace string into another)
// include (convert string into array)

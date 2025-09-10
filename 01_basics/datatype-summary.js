// Permitive  (call by value)

// 7 Types (String, Number, BigInt, Symbol, Boolean, Null, Undefined)

//Non-Permitive (Reference) (call by reference)

// 3 Types (Object, Function, Array)

// For Declaring Symbol

const id= Symbol('1214')
const anotherid= Symbol('1214')

console.log(id == anotherid);

//For Declaring BigInt

const bignum=Number(12257635558n)

console.log(bignum);

const nothing = null

console.log(typeof nothing)

/******************** Non Permitive *********************/
const rolemodel = ['Hazrat-Muhammad', 'Hazrat-Ali']

console.log(typeof rolemodel);

console.log(typeof bignum)

/*************** Stack And Heap Memory ***************/

// Stack (Permitive Datatypes)

const valname = "Hadia"
const anothername = valname

const othername = "Hadiaa"

console.log(valname);
console.log(othername);

// Heap (Non-Permitive Datatypes)

let myfun=
{
    myemail : "Hadia@12",
    pcode:"1214"
}

let myfun2 = myfun

myfun2.email = "baloch@12"

console.log(myfun.myemail);

console.log(myfun2.myemail);
const accountId=121472
let accountEmail="alam@google.com"
var accountpass="12345"
accountcity="Lahore"

//accountId=2 // not allowed

accountEmail="ha@ha.com"
accountpass="54321"
accountcity="Isl" // not good way
let accountstate;

/*
prefer not to use for
because  of issue in block and function scope 
*/

console.table([accountId, accountEmail, accountpass, accountcity, accountstate])
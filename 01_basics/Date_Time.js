// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// For declaring specific date 

//let mycreatedDate = new Date(2015,7,18)
//let mycreatedDate = new Date(2015,7,18,2,15)
let mycreatedDate = new Date("2005-07-07")
//console.log(mycreatedDate.toDateString());
//console.log(mycreatedDate.toLocaleString());

//timestamp
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Date.now()); // ms
// console.log(Math.floor(Date.now()/1000)); //in sec without decimal results

let newDate = new Date
// console.log(newDate);
// console.log(newDate.getDay()+1); // for printing day


newDate.toLocaleString('default', {
    weekday :"long",
})




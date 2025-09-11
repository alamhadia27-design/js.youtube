// More about array

const B_names = ['Ali', 'Ahmad', 'Abdullah']
const G_names = ['Aliya', 'Aliza', 'Amna']

// B_names.push(G_names)

// console.log(B_names);

// //  B_names.concat(G_names)
// //  console.log(B_names);
 

// const newarray= B_names.concat(G_names)
// console.log(newarray);

const allnames= [...B_names,...G_names]
// console.log(allnames);

const anotherarr= [1,2,3,[4,5,6,7] , 8,[4,5],[9,[5,6]]]

const real_array = anotherarr.flat(Infinity)

console.log(real_array);


// console.log(Array.isArray("HADIA"));
// console.log(Array.from("HADIA"));
// console.log(Array.from{name:"HADIA"}); // gives empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
